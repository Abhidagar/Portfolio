/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/abhidagar",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/abhishek-dagar",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:abhidagar024@gmail.com",
      label: "Email"
    }
  ]

  return (
    <footer className="bg-gray-900 text-white py-16 sm:py-20 relative">
      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute -top-12 sm:-top-14 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 sm:p-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-30 border-4 border-gray-900"
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        style={{ 
          filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))' 
        }}
      >
        <ArrowUp className="h-6 w-6 sm:h-7 sm:w-7" />
      </motion.button>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
          {/* Brand */}
          <motion.div
            className="text-center md:text-left order-2 md:order-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Abhishek Dagar
            </h3>
            <p className="text-gray-400">
              DevOps Engineer & Full Stack Developer
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-4 sm:space-x-6 order-1 md:order-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {socialLinks.map(({ icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                {React.createElement(icon, { className: "h-4 w-4 sm:h-5 sm:w-5" })}
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="text-center md:text-right order-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-400 mb-1 text-sm sm:text-base">
              abhidagar024@gmail.com
            </p>
            <p className="text-gray-400 text-sm sm:text-base">
              +91 9354382500
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray-800 my-6 sm:my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center text-gray-400 text-xs sm:text-sm space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-center">
            <span>© 2025 Abhishek Dagar. All rights reserved.</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

