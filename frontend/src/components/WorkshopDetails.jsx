import React from 'react'
import { motion } from 'framer-motion'

const details = [
  { icon: '👦', label: 'Age Group', value: '8 – 14 Years', color: 'from-violet-500 to-purple-600' },
  { icon: '📅', label: 'Duration', value: '4 Weeks', color: 'from-blue-500 to-indigo-600' },
  { icon: '🌐', label: 'Mode', value: 'Online', color: 'from-emerald-500 to-teal-600' },
  { icon: '💰', label: 'Fee', value: '₹2,999', color: 'from-amber-500 to-orange-500' },
  { icon: '🗓️', label: 'Start Date', value: '15 July 2026', color: 'from-pink-500 to-rose-500' },
]

function WorkshopDetails() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Workshop At a Glance</p>
          <h2 className="font-display text-3xl sm:text-4xl font-800 text-gray-900">
            Everything you need to know
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {details.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-hover bg-white rounded-2xl p-5 text-center border border-purple-50 shadow-card cursor-default"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl mx-auto mb-3 shadow`}>
                {item.icon}
              </div>
              <p className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-1">{item.label}</p>
              <p className="text-gray-900 font-display font-800 text-base leading-snug">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkshopDetails
