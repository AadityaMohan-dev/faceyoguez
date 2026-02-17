import React from 'react';
import Navbar from '../Navbar';
import { 
  ArrowRight, 
  Play, 
  Star, 
  Sparkles, 
  Target, 
  Leaf, 
  Gem, 
  Scale, 
  Rocket, 
  Trophy,
  Users,
  Smartphone,
  Award,
  ChevronDown,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Send,
  Check,
  Quote,
  Heart,
  Zap,
  Clock,
  Shield,
  Mail
} from 'lucide-react';

function Home() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-gradient-to-b from-white via-teal-50/30 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center px-4 sm:px-8 lg:px-16 xl:px-24 pt-20">
        
        {/* Background Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-100 rounded-full blur-3xl opacity-40 -z-10"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-40 -z-10"></div>
        
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Text Section */}
          <div className="flex-1 space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-2 text-teal-700 text-sm font-medium">
              <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
              Trusted by 10,000+ Members
            </div>

            <p className="text-base sm:text-lg md:text-xl italic text-teal-600/80 font-light font-serif tracking-wide">
              What's the Next Step to Have a Lifted Face?
            </p>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-teal-800 leading-[1.1] tracking-tight">
              Add <span className="relative inline-block">
                Face Yoga
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C50 2 150 2 198 8" stroke="#14b8a6" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span> to Your Daily Routine
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-zinc-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Transform your appearance naturally with <span className="font-semibold text-teal-600">Faceyoguez</span> — 
              the science-backed program designed to sculpt, lift, and rejuvenate your face.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button className="group bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-teal-600/25 hover:shadow-xl hover:shadow-teal-600/30 transition-all duration-300 hover:-translate-y-1 text-base flex items-center justify-center gap-2">
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 justify-center lg:justify-start">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white text-xs font-bold shadow-md">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 text-amber-500">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-zinc-600 text-sm">4.9/5 from 2,000+ reviews</p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 relative">
            {/* Decorative Ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] xl:w-[540px] xl:h-[540px] rounded-full border-2 border-dashed border-teal-200 animate-spin-slow"></div>
            </div>
            
            {/* Main Image */}
            <div className="relative z-10 bg-gradient-to-br from-amber-700 to-amber-900 
                            w-56 h-56
                            sm:w-72 sm:h-72 
                            md:w-80 md:h-80 
                            lg:w-96 lg:h-96 
                            xl:w-[420px] xl:h-[420px]
                            rounded-full overflow-hidden shadow-2xl shadow-amber-900/30">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop"
                alt="Face yoga demonstration"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
            </div>

            

          
          </div>

        </div>

        
      </section>

      {/* Steps Strip */}
      <section className="w-full bg-gradient-to-r from-[#c5d4b8] via-[#cbd8bf] to-[#c5d4b8] py-8 sm:py-10 px-4 sm:px-8 lg:px-16 xl:px-24 relative overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: 'radial-gradient(#4a6a5e 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          <ul className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
            {[
              { num: '01', title: 'Join Our Program', desc: 'Sign up in minutes', icon: Users },
              { num: '02', title: 'Practice Daily', desc: '10 minutes a day', icon: Clock },
              { num: '03', title: 'See The Glow', desc: 'Transform your face', icon: Sparkles }
            ].map((step, index) => (
              <li key={index} className="flex items-center gap-4 group">
                <span className="bg-[#4a6a5e] text-[#cbd8bf] w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-6 h-6" />
                </span>
                <div>
                  <p className="font-semibold text-[#3d5a4e] text-base sm:text-lg">{step.title}</p>
                  <p className="text-[#5a7a6e] text-sm">{step.desc}</p>
                </div>
                {index < 2 && (
                  <div className="hidden lg:block ml-8">
                    <ArrowRight className="w-6 h-6 text-[#4a6a5e]/30" />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Discover Section */}
      <section className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 py-20 sm:py-28 lg:py-32 relative">
        {/* Background Decorative */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-teal-100 to-amber-100 rounded-full blur-3xl opacity-30 -z-10"></div>
        
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <span className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Why Face Yoga?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-teal-800 leading-tight mb-6">
              Discover the Secret of a
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-amber-600">
                Natural Face Lift
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
              At Faceyoguez, we embrace a holistic approach to beauty. Our methods combine ancient wisdom 
              with modern science to help you achieve lasting, natural results.
            </p>
          </div>

          {/* Benefits Layout */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 xl:gap-16">
            
            {/* Left Benefits */}
            <div className="flex-1 space-y-6 order-2 lg:order-1">
              {[
                { icon: Leaf, title: 'Historic Approach', desc: 'Time-tested techniques from ancient practices', color: 'teal' },
                { icon: Gem, title: 'Sculpted Features', desc: 'Define your jawline, cheekbones, and more', color: 'teal' },
                { icon: Scale, title: 'Face Symmetry', desc: 'Balance and harmonize your facial features', color: 'teal' }
              ].map((item, index) => (
                <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg shadow-zinc-100 hover:shadow-xl hover:shadow-teal-100 transition-all duration-300 hover:-translate-y-1 border border-zinc-100">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="w-7 h-7 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-teal-800 text-lg mb-1">{item.title}</h3>
                      <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Circle Image */}
            <div className="order-1 lg:order-2 shrink-0 relative">
              {/* Decorative Circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border border-teal-200"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-88 md:h-88 lg:w-[420px] lg:h-[420px] rounded-full border border-amber-200"></div>
              </div>
              
              <div className="relative bg-gradient-to-br from-amber-700 to-amber-900 
                              w-56 h-56 
                              sm:w-64 sm:h-64 
                              md:w-72 md:h-72 
                              lg:w-80 lg:h-80 
                              rounded-full overflow-hidden shadow-2xl shadow-amber-900/30 z-10">
                <img
                  src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop"
                  alt="Face yoga benefits"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent"></div>
              </div>
            </div>

            {/* Right Benefits */}
            <div className="flex-1 space-y-6 order-3">
              {[
                { icon: Rocket, title: 'Confidence Boost', desc: 'Feel amazing about your natural beauty', color: 'amber' },
                { icon: Sparkles, title: 'Youthful Glow', desc: 'Radiant, healthy-looking skin', color: 'amber' },
                { icon: Target, title: 'Take Control', desc: 'Master your own aging process naturally', color: 'amber' }
              ].map((item, index) => (
                <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg shadow-zinc-100 hover:shadow-xl hover:shadow-amber-100 transition-all duration-300 hover:-translate-y-1 border border-zinc-100">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="w-7 h-7 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-teal-800 text-lg mb-1">{item.title}</h3>
                      <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-gradient-to-b from-teal-50 to-white px-4 sm:px-8 lg:px-16 xl:px-24 py-20 sm:py-28 lg:py-32">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Our Program
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-teal-800 mb-6">
              Why Choose Faceyoguez?
            </h2>
            <p className="text-zinc-600 max-w-2xl mx-auto text-base sm:text-lg">
              Experience the most comprehensive face yoga program designed for real results.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {[
              { 
                icon: Users, 
                title: 'Expert Guidance', 
                desc: 'Learn from certified instructors with 10+ years of experience in face yoga and facial wellness.',
                gradient: 'from-teal-500 to-teal-600',
                bgGradient: 'from-teal-50 to-teal-100'
              },
              { 
                icon: Smartphone, 
                title: 'Flexible Schedule', 
                desc: 'Practice anytime, anywhere with our mobile app and on-demand video library.',
                gradient: 'from-amber-500 to-amber-600',
                bgGradient: 'from-amber-50 to-amber-100'
              },
              { 
                icon: Sparkles, 
                title: 'Visible Results', 
                desc: 'See noticeable improvements in just 4-6 weeks with our proven methodology.',
                gradient: 'from-rose-500 to-rose-600',
                bgGradient: 'from-rose-50 to-rose-100'
              },
              { 
                icon: Target, 
                title: 'Personalized Plans', 
                desc: 'Get customized routines based on your unique facial structure and goals.',
                gradient: 'from-violet-500 to-violet-600',
                bgGradient: 'from-violet-50 to-violet-100'
              },
              { 
                icon: Heart, 
                title: 'Community Support', 
                desc: 'Join thousands of members sharing tips, progress, and motivation.',
                gradient: 'from-blue-500 to-blue-600',
                bgGradient: 'from-blue-50 to-blue-100'
              },
              { 
                icon: Trophy, 
                title: 'Lifetime Access', 
                desc: 'One-time investment for unlimited access to all current and future content.',
                gradient: 'from-emerald-500 to-emerald-600',
                bgGradient: 'from-emerald-50 to-emerald-100'
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-zinc-100 relative overflow-hidden">
                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-teal-800 mb-3">{feature.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 py-20 sm:py-28 lg:py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-800 via-teal-700 to-teal-800"></div>
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
        
        <div className="max-w-6xl mx-auto relative">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 bg-white/10 text-teal-100 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <Quote className="w-4 h-4" />
              Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-6">
              What Our Members Say
            </h2>
            <p className="text-teal-100 max-w-2xl mx-auto text-base sm:text-lg">
              Join thousands of happy members who transformed their appearance naturally.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: 'Sarah Mitchell',
                role: 'Yoga Instructor',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
                quote: 'After 3 months, my jawline is more defined than ever. I feel 10 years younger!'
              },
              {
                name: 'Emily Chen',
                role: 'Marketing Executive',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
                quote: 'The daily routines are so easy to follow. I do them during my morning skincare!'
              },
              {
                name: 'Jessica Adams',
                role: 'Entrepreneur',
                image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
                quote: 'Best investment I\'ve made for my self-care. The results speak for themselves.'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <Quote className="w-10 h-10 text-teal-300/30 mb-4 group-hover:text-teal-300/50 transition-colors" />
                <p className="text-white/90 leading-relaxed mb-6 text-lg">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/30">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-teal-200 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '10K+', label: 'Active Members', icon: Users },
              { number: '4.9', label: 'Average Rating', icon: Star },
              { number: '50+', label: 'Video Lessons', icon: Play },
              { number: '95%', label: 'Success Rate', icon: Trophy }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-teal-600" />
                </div>
                <p className="text-3xl sm:text-4xl font-bold text-teal-800 mb-1">{stat.number}</p>
                <p className="text-zinc-600 text-sm sm:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 py-20 sm:py-28 lg:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl shadow-teal-900/30">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full"></div>
            
            <div className="relative text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-8 backdrop-blur-sm">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
                Ready to Transform<br />Your Face Naturally?
              </h2>
              <p className="text-teal-100 max-w-2xl mx-auto mb-10 text-base sm:text-lg leading-relaxed">
                Join our community today and start your journey to a more youthful, confident you. 
                No surgery, no injections — just natural results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-white text-teal-700 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-base flex items-center justify-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white/50 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-base flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  Book Free Consultation
                </button>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-teal-200 text-sm">
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  7-day free trial
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  Cancel anytime
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  Instant access
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-zinc-900 px-4 sm:px-8 lg:px-16 xl:px-24 pt-16 sm:pt-20 pb-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Footer Top */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            
            {/* Brand */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Faceyoguez</h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                Your journey to a naturally lifted, radiant face starts here.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, href: '#' },
                  { icon: Facebook, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Youtube, href: '#' }
                ].map((social, index) => (
                  <a key={index} href={social.href} className="w-10 h-10 bg-zinc-800 hover:bg-teal-600 rounded-full flex items-center justify-center transition-all duration-300 group">
                    <social.icon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                {['About Us', 'Our Programs', 'Success Stories', 'Blog', 'FAQ'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-zinc-400 hover:text-teal-400 transition-colors duration-300 text-sm flex items-center gap-2 group">
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Programs</h4>
              <ul className="space-y-3">
                {['Beginner Course', 'Advanced Training', 'Private Sessions', 'Corporate Wellness', 'Certification'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-zinc-400 hover:text-teal-400 transition-colors duration-300 text-sm flex items-center gap-2 group">
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Stay Updated</h4>
              <p className="text-zinc-400 text-sm mb-4">Subscribe for tips, tutorials, and exclusive offers.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 text-sm transition-all"
                />
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-3 rounded-lg transition-colors duration-300 hover:shadow-lg hover:shadow-teal-600/25">
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-zinc-500 text-xs mt-3 flex items-center gap-1">
                <Shield className="w-3 h-3" />
                We respect your privacy.
              </p>
            </div>

          </div>

          {/* Footer Bottom */}
          <div className="border-t border-zinc-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">
              © 2024 Faceyoguez. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">Cookies</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}

export default Home;