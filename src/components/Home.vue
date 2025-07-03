<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Video/Image -->
      <div class="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10"></div>
      <div class="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Gym Background" 
          class="w-full h-full object-cover"
        />
      </div>
      
      <!-- Hero Content -->
      <div class="relative z-20 text-center max-w-6xl mx-auto px-6">
        <h1 class="text-6xl md:text-8xl font-black mb-6 leading-tight">
          <span class="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            TRANSFORM
          </span>
          <br>
          <span class="text-white">YOUR BODY</span>
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
          Unleash your potential with personalized training, expert nutrition guidance, 
          and unwavering support on your fitness journey.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button class="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            START YOUR JOURNEY
          </button>
          <button class="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-300">
            WATCH MY STORY
          </button>
        </div>
        
        <!-- Stats -->
        <div class="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-black text-yellow-400">500+</div>
            <div class="text-sm text-gray-400 uppercase tracking-wider">Clients Transformed</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-black text-yellow-400">8+</div>
            <div class="text-sm text-gray-400 uppercase tracking-wider">Years Experience</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-black text-yellow-400">98%</div>
            <div class="text-sm text-gray-400 uppercase tracking-wider">Success Rate</div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div class="animate-bounce">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-20 bg-gray-900">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-5xl font-black mb-4">
            <span class="text-yellow-400">TRAINING</span> PROGRAMS
          </h2>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose from personalized programs designed to fit your goals, schedule, and fitness level
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- Online Coaching -->
          <div class="bg-black border border-gray-800 rounded-2xl p-8 hover:border-yellow-400 transition-all duration-300 group">
            <div class="text-yellow-400 text-sm font-bold uppercase tracking-wider mb-4">Most Popular</div>
            <h3 class="text-3xl font-black mb-4 group-hover:text-yellow-400 transition-colors">
              ONLINE COACHING
            </h3>
            <p class="text-gray-400 mb-8">
              Perfect for anyone, anywhere. Get personalized training plans, nutrition guidance, 
              and constant support through our app.
            </p>
            
            <div class="space-y-4 mb-8">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>Personalized Training Plans</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>Nutrition Coaching</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>24/7 Support & Accountability</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>Progress Tracking</span>
              </div>
            </div>

            <div class="flex items-center justify-between mb-6">
              <div>
                <span class="text-3xl font-black text-yellow-400">$199</span>
                <span class="text-gray-400">/month</span>
              </div>
            </div>

            <button class="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-4 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              START ONLINE COACHING
            </button>
          </div>

          <!-- In-Person Coaching -->
          <div class="bg-black border border-gray-800 rounded-2xl p-8 hover:border-yellow-400 transition-all duration-300 group">
            <div class="text-yellow-400 text-sm font-bold uppercase tracking-wider mb-4">Premium</div>
            <h3 class="text-3xl font-black mb-4 group-hover:text-yellow-400 transition-colors">
              IN-PERSON TRAINING
            </h3>
            <p class="text-gray-400 mb-8">
              One-on-one sessions in our state-of-the-art facility. Get immediate feedback, 
              form correction, and maximum motivation.
            </p>
            
            <div class="space-y-4 mb-8">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>Everything from Online Coaching</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>Direct Supervision</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>Immediate Form Correction</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>Premium Gym Access</span>
              </div>
            </div>

            <div class="flex items-center justify-between mb-6">
              <div>
                <span class="text-3xl font-black text-yellow-400">$499</span>
                <span class="text-gray-400">/month</span>
              </div>
            </div>

            <button class="w-full border-2 border-yellow-400 text-yellow-400 py-4 rounded-full font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300">
              BOOK IN-PERSON SESSION
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Programs Section -->
    <section class="py-20 bg-black">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-5xl font-black mb-4">
            <span class="text-white">SPECIALIZED</span> <span class="text-yellow-400">PROGRAMS</span>
          </h2>
          <p class="text-xl text-gray-400 max-w-3xl mx-auto">
            Targeted programs designed to help you achieve specific fitness goals
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-2xl mb-6">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Strength Training"
                class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
            <h3 class="text-2xl font-black mb-3 group-hover:text-yellow-400 transition-colors">
              STRENGTH TRAINING
            </h3>
            <p class="text-gray-400">
              Build lean muscle, increase strength, and transform your physique with proven methodologies.
            </p>
          </div>

          <div class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-2xl mb-6">
              <img 
                src="https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="HIIT Training"
                class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
            <h3 class="text-2xl font-black mb-3 group-hover:text-yellow-400 transition-colors">
              HIIT & CARDIO
            </h3>
            <p class="text-gray-400">
              Burn fat, improve cardiovascular health, and boost metabolism with high-intensity workouts.
            </p>
          </div>

          <div class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-2xl mb-6">
              <img 
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Weight Loss"
                class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
            <h3 class="text-2xl font-black mb-3 group-hover:text-yellow-400 transition-colors">
              WEIGHT LOSS
            </h3>
            <p class="text-gray-400">
              Sustainable fat loss through strategic training, nutrition, and lifestyle optimization.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-20 bg-gray-900">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-5xl font-black mb-8">
              <span class="text-white">MEET YOUR</span><br>
              <span class="text-yellow-400">TRAINER</span>
            </h2>
            <p class="text-xl text-gray-300 mb-8 leading-relaxed">
              I'm Alex Iacob, a certified personal trainer with over 8 years of experience 
              transforming lives through fitness. My mission is to help you unlock your potential 
              and achieve results you never thought possible.
            </p>
            
            <div class="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div class="text-3xl font-black text-yellow-400 mb-2">500+</div>
                <div class="text-sm text-gray-400 uppercase tracking-wider">Clients Transformed</div>
              </div>
              <div>
                <div class="text-3xl font-black text-yellow-400 mb-2">15+</div>
                <div class="text-sm text-gray-400 uppercase tracking-wider">Certifications</div>
              </div>
            </div>

            <div class="space-y-4 mb-8">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>NASM Certified Personal Trainer</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>Precision Nutrition Certified</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>Former Competitive Athlete</span>
              </div>
            </div>

            <button class="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              BOOK A CONSULTATION
            </button>
          </div>

          <div class="relative">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Personal Trainer"
              class="w-full rounded-2xl"
            />
            <div class="absolute -bottom-8 -right-8 bg-yellow-400 text-black p-6 rounded-2xl">
              <div class="text-2xl font-black">8+</div>
              <div class="text-sm font-bold">YEARS EXP</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-black">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-5xl font-black mb-4">
            <span class="text-white">CLIENT</span> <span class="text-yellow-400">SUCCESS</span>
          </h2>
          <p class="text-xl text-gray-400">
            Real transformations from real people
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gray-900 rounded-2xl p-8">
            <div class="flex items-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                alt="Client"
                class="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <div class="font-bold text-lg">Mike Johnson</div>
                <div class="text-gray-400 text-sm">Lost 40 lbs in 6 months</div>
              </div>
            </div>
            <p class="text-gray-300 mb-6">
              "Alex completely transformed my relationship with fitness. His approach is sustainable, 
              and the results speak for themselves. I've never felt stronger or more confident."
            </p>
            <div class="flex text-yellow-400">
              ⭐⭐⭐⭐⭐
            </div>
          </div>

          <div class="bg-gray-900 rounded-2xl p-8">
            <div class="flex items-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                alt="Client"
                class="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <div class="font-bold text-lg">Sarah Chen</div>
                <div class="text-gray-400 text-sm">Built 15 lbs muscle</div>
              </div>
            </div>
            <p class="text-gray-300 mb-6">
              "Working with Alex has been life-changing. His personalized approach and constant 
              support helped me achieve goals I never thought possible. Highly recommend!"
            </p>
            <div class="flex text-yellow-400">
              ⭐⭐⭐⭐⭐
            </div>
          </div>

          <div class="bg-gray-900 rounded-2xl p-8">
            <div class="flex items-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                alt="Client"
                class="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <div class="font-bold text-lg">David Martinez</div>
                <div class="text-gray-400 text-sm">Marathon finisher</div>
              </div>
            </div>
            <p class="text-gray-300 mb-6">
              "From couch to marathon in 12 months! Alex's training program was perfectly 
              structured and his motivation kept me going when things got tough."
            </p>
            <div class="flex text-yellow-400">
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-yellow-400 to-orange-500">
      <div class="max-w-4xl mx-auto text-center px-6">
        <h2 class="text-5xl font-black text-black mb-6">
          READY TO TRANSFORM YOUR LIFE?
        </h2>
        <p class="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
          Stop making excuses and start making progress. Your transformation begins with 
          a single decision. Let's make it happen together.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all duration-300">
            START FREE CONSULTATION
          </button>
          <button class="border-2 border-black text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-black hover:text-white transition-all duration-300">
            VIEW PROGRAMS
          </button>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20 bg-black">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 class="text-4xl font-black mb-8">
              <span class="text-white">GET</span> <span class="text-yellow-400">STARTED</span>
            </h2>
            <p class="text-xl text-gray-400 mb-8">
              Ready to begin your fitness journey? Send me a message and let's discuss 
              your goals and how I can help you achieve them.
            </p>
            
            <div class="space-y-6">
              <div class="flex items-center">
                <div class="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <div class="font-bold">Email</div>
                  <div class="text-gray-400">alex@fitnesscoach.com</div>
                </div>
              </div>
              
              <div class="flex items-center">
                <div class="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <div class="font-bold">Phone</div>
                  <div class="text-gray-400">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div class="flex items-center">
                <div class="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <div class="font-bold">Location</div>
                  <div class="text-gray-400">New York, NY</div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gray-900 rounded-2xl p-8">
            <form class="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  class="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email"
                  class="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
                />
              </div>
              <div>
                <select class="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none">
                  <option>Select Your Goal</option>
                  <option>Weight Loss</option>
                  <option>Muscle Building</option>
                  <option>Strength Training</option>
                  <option>General Fitness</option>
                  <option>Athletic Performance</option>
                </select>
              </div>
              <div>
                <textarea 
                  placeholder="Tell me about your fitness goals..."
                  rows="4"
                  class="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
                ></textarea>
              </div>
              <button class="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-4 rounded-lg font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 border-t border-gray-800 py-12">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center mb-4">
              <svg class="w-8 h-8 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span class="text-xl font-black">ALEXFIT</span>
            </div>
            <p class="text-gray-400 mb-4">
              Transform your body, transform your life. Expert personal training 
              and nutrition coaching for lasting results.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-yellow-400 transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-yellow-400 transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.017 0z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-yellow-400 transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 class="font-bold text-lg mb-4">Services</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-yellow-400 transition-colors">Personal Training</a></li>
              <li><a href="#" class="hover:text-yellow-400 transition-colors">Online Coaching</a></li>
              <li><a href="#" class="hover:text-yellow-400 transition-colors">Nutrition Plans</a></li>
              <li><a href="#" class="hover:text-yellow-400 transition-colors">Group Classes</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="font-bold text-lg mb-4">Programs</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-yellow-400 transition-colors">Weight Loss</a></li>
              <li><a href="#" class="hover:text-yellow-400 transition-colors">Muscle Building</a></li>
              <li><a href="#" class="hover:text-yellow-400 transition-colors">Strength Training</a></li>
              <li><a href="#" class="hover:text-yellow-400 transition-colors">HIIT Workouts</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="font-bold text-lg mb-4">Contact</h3>
            <ul class="space-y-2 text-gray-400">
              <li>alex@fitnesscoach.com</li>
              <li>+1 (555) 123-4567</li>
              <li>New York, NY</li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AlexFit. All rights reserved. Built with passion for fitness.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Component logic can be added here
</script>

<style scoped>
/* Add any custom styles here */
</style>