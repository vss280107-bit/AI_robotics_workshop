import React from 'react'
import { motion } from 'framer-motion'

// Floating decorative shapes for background atmosphere
const FloatingShape = ({ className, delay = 0 }) => (
  <motion.div
    className={className}
    animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
    transition={{ duration: 4, repeat: Infinity, delay, ease: 'easeInOut' }}
  />
)

function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden min-h-[92vh] flex items-center">
      {/* Background decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl" />
        {/* Floating icons */}
        <FloatingShape
          className="absolute top-24 right-16 text-5xl opacity-60 hidden lg:block"
          delay={0}
        />
        <FloatingShape
          className="absolute bottom-32 left-16 text-4xl opacity-40 hidden lg:block"
          delay={1.5}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Badges row */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow">
              🗓️ Starts 15 July 2026
            </span>
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm border border-white/30">
              🌐 Online
            </span>
            <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm border border-white/30">
              👦 Age 8–14
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-900 text-white leading-tight mb-4">
            AI & Robotics{' '}
            <span className="text-accent">Summer</span>{' '}
            Workshop
          </h1>

          <p className="text-purple-100 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg">
            Build robots, explore artificial intelligence, and create exciting projects
            while learning future-ready skills your child will love.
          </p>

          {/* Fee + CTA */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#register"
              className="bg-accent hover:bg-yellow-400 text-white font-display font-800 text-lg px-8 py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              Enroll Now →
            </a>
            <div className="bg-white/15 backdrop-blur border border-white/30 rounded-2xl px-5 py-3">
              <p className="text-white/70 text-xs font-medium uppercase tracking-wide">Workshop Fee</p>
              <p className="text-white text-2xl font-display font-900">₹2,999</p>
            </div>
          </div>

          {/* Social proof */}
          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-2">
              {['🧒', '👦', '👧', '🧑'].map((emoji, i) => (
                <div key={i} className="w-9 h-9 rounded-full bg-purple-300/40 border-2 border-purple-600 flex items-center justify-center text-sm">
                  {emoji}
                </div>
              ))}
            </div>
            <p className="text-purple-200 text-sm font-medium">
              <span className="text-white font-bold">200+ students</span> already enrolled
            </p>
          </div>
        </motion.div>

        {/* Right: Illustration Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="hidden lg:flex flex-col items-center"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-center shadow-2xl w-full max-w-sm">
            <div className="text-8xl mb-4 animate-float">🤖</div>
            <p className="text-white font-display font-700 text-xl mb-6">What you'll build</p>
            <div className="space-y-3">
              {[
                { icon: '🧠', text: 'AI-powered mini projects' },
                { icon: '⚙️', text: 'Beginner robotics builds' },
                { icon: '💻', text: 'Coding activities & games' },
                { icon: '🏆', text: 'Certificate of completion' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-2.5 text-left"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-white/90 text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="#F9FAFB" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
