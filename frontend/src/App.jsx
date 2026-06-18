import React from 'react'
import Hero from './components/Hero'
import WorkshopDetails from './components/WorkshopDetails'
import LearningOutcomes from './components/LearningOutcomes'
import WhyJoin from './components/WhyJoin'
import FAQ from './components/FAQ'
import RegistrationForm from './components/RegistrationForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Sticky Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-purple-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🤖</span>
            <span className="font-display font-800 text-primary text-lg hidden sm:block">
              RoboLearn
            </span>
          </div>
          <a
            href="#register"
            className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors duration-200 shadow-md"
          >
            Enroll Now
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Hero />
        <WorkshopDetails />
        <LearningOutcomes />
        <WhyJoin />
        <FAQ />
        <RegistrationForm />
      </main>

      <Footer />
    </div>
  )
}

export default App
