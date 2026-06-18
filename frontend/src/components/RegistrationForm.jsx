import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'

const API_URL = import.meta.env.VITE_API_URL;

function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      const res = await axios.post(`${API_URL}/api/enquiry`, data)
      if (res.data.success) {
        toast.success(res.data.message || 'Enquiry submitted successfully!')
        setSubmitted(true)
        reset()
      }
    } catch (err) {
      const msg = err.response?.data?.message || 'Something went wrong. Please try again.'
      toast.error(msg)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="register" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Limited Seats</p>
          <h2 className="font-display text-3xl sm:text-4xl font-800 text-gray-900">
            Secure your spot today
          </h2>
          <p className="text-gray-500 mt-3">
            Fill in your details and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl shadow-card-hover border border-purple-100 p-8"
        >
          {submitted ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="font-display font-800 text-2xl text-gray-900 mb-2">You're on the list!</h3>
              <p className="text-gray-500 mb-6">We'll reach out within 24 hours to confirm your enrollment.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-primary text-sm font-semibold hover:underline"
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="e.g. Arjun Sharma"
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.name
                      ? 'border-red-400 focus:ring-red-200'
                      : 'border-gray-200 focus:border-primary focus:ring-primary/20'
                  }`}
                  {...register('name', {
                    required: 'Full name is required',
                    minLength: { value: 2, message: 'Name must be at least 2 characters' },
                  })}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                    <span>⚠️</span> {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="e.g. parent@email.com"
                  className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                    errors.email
                      ? 'border-red-400 focus:ring-red-200'
                      : 'border-gray-200 focus:border-primary focus:ring-primary/20'
                  }`}
                  {...register('email', {
                    required: 'Email address is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Please enter a valid email address',
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                    <span>⚠️</span> {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Phone Number <span className="text-red-400">*</span>
                </label>
                <div className="flex">
                  <span className="flex items-center px-3 rounded-l-xl border border-r-0 border-gray-200 bg-gray-50 text-gray-500 text-sm">
                    🇮🇳 +91
                  </span>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    className={`flex-1 px-4 py-3 rounded-r-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                      errors.phone
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-gray-200 focus:border-primary focus:ring-primary/20'
                    }`}
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^\d{10}$/,
                        message: 'Enter a valid 10-digit mobile number',
                      },
                    })}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                    <span>⚠️</span> {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-display font-700 text-base py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit Enquiry →'
                )}
              </button>

              <p className="text-center text-gray-400 text-xs">
                🔒 Your information is safe with us. No spam, ever.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default RegistrationForm
