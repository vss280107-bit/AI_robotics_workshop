import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'Do children need prior coding experience?',
    a: 'No. The workshop is beginner-friendly and designed for students with no prior experience. We start from absolute basics and build up step by step.',
  },
  {
    q: 'Will class recordings be available?',
    a: 'Yes. Session recordings will be shared after every class, usually within 24 hours. Students can revisit any session as many times as they like.',
  },
  {
    q: 'What devices are required?',
    a: 'A laptop or desktop computer with a stable internet connection is recommended. A webcam and microphone are helpful for live interaction but not mandatory.',
  },
  {
    q: 'How many students are in each batch?',
    a: 'We keep batch sizes small — a maximum of 15 students — so every child gets personal attention from the instructor.',
  },
  {
    q: 'Is there a refund policy?',
    a: 'Yes. If you request a cancellation within 48 hours of enrolling and before the first class, we offer a full refund. After that, we offer a batch transfer.',
  },
]

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-colors duration-200 ${
        isOpen ? 'border-primary/40 bg-purple-50/50' : 'border-gray-200 bg-white'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full text-left flex items-center justify-between px-6 py-4 gap-4"
        aria-expanded={isOpen}
      >
        <span className="font-display font-700 text-gray-800 text-base pr-2">{faq.q}</span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-200 ${
          isOpen ? 'bg-primary text-white rotate-180' : 'bg-purple-100 text-primary'
        }`}>
          ▼
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i)

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">FAQ</p>
          <h2 className="font-display text-3xl sm:text-4xl font-800 text-gray-900">
            Got questions? We've got answers.
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <FAQItem
                faq={faq}
                isOpen={openIdx === i}
                onToggle={() => toggle(i)}
              />
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-8">
          Still have questions?{' '}
          <a href="mailto:hello@robolearn.in" className="text-primary font-semibold hover:underline">
            Email us
          </a>
        </p>
      </div>
    </section>
  )
}

export default FAQ
