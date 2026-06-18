import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-3xl">🤖</span>
              <span className="font-display font-800 text-white text-xl">RoboLearn</span>
            </div>
            <p className="text-sm leading-relaxed">
              Helping kids aged 8–14 build future-ready skills in AI and Robotics through live, project-based workshops.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-700 mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['Workshop Details', 'Learning Outcomes', 'Why Join', 'FAQ', 'Register'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-700 mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>📧 hello@robolearn.in</li>
              <li>📱 +91 98765 43210</li>
              <li>🌐 www.robolearn.in</li>
              <li className="pt-2">
                <span className="inline-block bg-primary/20 text-purple-300 px-3 py-1 rounded-full text-xs font-semibold">
                  Next batch: 15 July 2026
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© 2026 RoboLearn. All rights reserved.</p>
          <p>Made with ❤️ for curious young minds</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
