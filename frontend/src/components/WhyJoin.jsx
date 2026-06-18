import React from 'react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: '📡',
    title: 'Live Interactive Classes',
    desc: 'Every session is conducted live with real-time Q&A, polls, and instant feedback — not just video playback.',
    highlight: false,
  },
  {
    icon: '🛠️',
    title: 'Project-Based Learning',
    desc: 'Children learn by doing. Every concept is tied to a project they get to keep and show off.',
    highlight: true,
  },
  {
    icon: '👩‍🏫',
    title: 'Expert Instructors',
    desc: 'Sessions led by engineers and educators with real experience in AI, robotics, and ed-tech.',
    highlight: false,
  },
  {
    icon: '🏅',
    title: 'Certificate of Completion',
    desc: 'A shareable digital certificate from RoboLearn to add to portfolios, school profiles, and LinkedIn.',
    highlight: false,
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Small Batch Sizes',
    desc: 'Capped at 15 students per batch so every child gets individual attention from instructors.',
    highlight: true,
  },
  {
    icon: '🎥',
    title: 'Recorded Sessions',
    desc: 'Missed a class? No problem. All sessions are recorded and shared within 24 hours.',
    highlight: false,
  },
]

function WhyJoin() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Why RoboLearn?</p>
          <h2 className="font-display text-3xl sm:text-4xl font-800 text-gray-900">
            Not all workshops are{' '}
            <span className="gradient-text">created equal</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            We obsess over quality so your child gets the best possible learning experience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`card-hover rounded-2xl p-6 border ${
                f.highlight
                  ? 'bg-primary/5 border-primary/30'
                  : 'bg-gray-50 border-gray-100'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 ${
                f.highlight ? 'bg-primary/10' : 'bg-white shadow'
              }`}>
                {f.icon}
              </div>
              <h3 className="font-display font-700 text-gray-900 text-base mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              {f.highlight && (
                <span className="inline-block mt-3 text-primary text-xs font-bold uppercase tracking-wide bg-primary/10 px-2 py-0.5 rounded-full">
                  ★ Popular
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyJoin
