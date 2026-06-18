import React from 'react'
import { motion } from 'framer-motion'

const outcomes = [
  {
    icon: '🧠',
    title: 'Understand AI Fundamentals',
    desc: 'Grasp the basics of artificial intelligence — what it is, how it works, and where it is used in everyday life.',
  },
  {
    icon: '⚙️',
    title: 'Build Robotics Projects',
    desc: 'Design and assemble beginner-friendly robots while learning how sensors, motors, and controllers work together.',
  },
  {
    icon: '💡',
    title: 'Logical Thinking & Problem Solving',
    desc: 'Sharpen critical thinking skills through structured challenges that teach how to break big problems into small steps.',
  },
  {
    icon: '💻',
    title: 'Hands-on Coding Activities',
    desc: 'Explore coding concepts through fun, interactive exercises using visual tools and beginner-friendly languages.',
  },
  {
    icon: '🔧',
    title: 'Automation Mini Projects',
    desc: 'Create real mini automation projects that demonstrate how smart systems make our world easier and smarter.',
  },
]

function LearningOutcomes() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">What Students Learn</p>
          <h2 className="font-display text-3xl sm:text-4xl font-800 text-gray-900">
            Skills that last a{' '}
            <span className="gradient-text">lifetime</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-base">
            Every session is designed to build a genuine skill — not just memorize facts.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="card-hover bg-white rounded-2xl p-6 border border-purple-100 shadow-card group"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-50 group-hover:bg-primary/10 flex items-center justify-center text-3xl mb-4 transition-colors duration-200">
                {item.icon}
              </div>
              <h3 className="font-display font-700 text-gray-900 text-lg mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-primary text-xs font-semibold">Hands-on activity included</span>
              </div>
            </motion.div>
          ))}

          {/* Bonus card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.5 }}
            className="card-hover bg-gradient-to-br from-primary to-primary-light rounded-2xl p-6 border border-purple-300 shadow-card-hover text-white"
          >
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="font-display font-800 text-white text-xl mb-2">Certificate of Completion</h3>
            <p className="text-purple-100 text-sm leading-relaxed">
              Every student who finishes the workshop earns a shareable certificate to showcase their achievement.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LearningOutcomes
