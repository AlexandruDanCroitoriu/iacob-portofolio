#!/usr/bin/env node
const fs = require('fs').promises
const path = require('path')
const sharp = require('sharp')

;(async () => {
  try {
    const projectRoot = process.cwd()
    const imagesDir = path.join(projectRoot, 'src', 'assets', 'images')
    const backupDir = path.join(imagesDir, 'originals')

    // Create backup directory if it doesn't exist
    await fs.mkdir(backupDir, { recursive: true })

    // Read image files
    const files = await fs.readdir(imagesDir)
    const jpegFiles = files.filter(f => /image\d+\.jpe?g$/i.test(f))

    if (jpegFiles.length === 0) {
      console.log('No JPEG images found in', imagesDir)
      return
    }

    console.log(`Found ${jpegFiles.length} images. Moving originals to:
  ${backupDir}`)

    // Move originals to backup
    for (const file of jpegFiles) {
      const srcPath = path.join(imagesDir, file)
      const destPath = path.join(backupDir, file)
      await fs.rename(srcPath, destPath)
    }

    console.log('All originals moved. Starting optimization...')

    // Process each image from backup and write optimized version back to imagesDir
    for (const file of jpegFiles) {
      const inputPath = path.join(backupDir, file)
      const outputPath = path.join(imagesDir, file)

      try {
        // Use sharp to resize largest side to 1200px (no upscaling) and save as progressive JPEG
        await sharp(inputPath)
          .resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true })
          .jpeg({ quality: 85, progressive: true, mozjpeg: true })
          .toFile(outputPath)

        const [inStats, outStats] = await Promise.all([fs.stat(inputPath), fs.stat(outputPath)])
        const saved = inStats.size - outStats.size
        const savedPct = ((saved / inStats.size) * 100).toFixed(1)
        console.log(`${file}: ${Math.round(inStats.size/1024)}KB -> ${Math.round(outStats.size/1024)}KB (${savedPct}% smaller)`)
      } catch (err) {
        console.error('Failed to process', file, err)
      }
    }

    console.log('\nOptimization complete. Originals are in:', backupDir)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
})()
