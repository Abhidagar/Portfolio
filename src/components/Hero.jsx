import { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react'

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = [
    "Associate Software Engineer",
    "Full Stack Developer", ,
    "Problem Solver"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [roles.length])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 px-4 sm:px-6">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 text-center z-10 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div
          className="mb-6 sm:mb-8"
          variants={itemVariants}
          animate={floatingAnimation}
        >
          <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img 
                src="/profile-photo.jpg" 
                alt="Abhishek Dagar"
                className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-300"
                style={{
                  objectPosition: 'center center',
                  objectFit: 'cover'
                }}
                loading="eager"
              />
            </div>
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.h1
          className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight"
          variants={itemVariants}
        >
          Abhishek Dagar
        </motion.h1>

        {/* Animated Role */}
        <motion.div
          className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 sm:mb-8 h-8 sm:h-12"
          variants={itemVariants}
        >
          <motion.span
            key={currentRole}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            {roles[currentRole]}
          </motion.span>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4"
          variants={itemVariants}
        >
          Passionate about building Data analysis, Engineering, scalable infrastructure, automating deployments, 
          and creating innovative solutions. Currently working at Nagarro, specializing 
          in CI/CD pipelines, Kubernetes, and cloud technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12 px-4"
          variants={itemVariants}
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open('https://drive.google.com/uc?export=download&id=1eAdnZTi4LwkydZvGO1UxNvfm7OEWGPoO', '_blank')}
          >
            <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Download Resume
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={scrollToContact}
            className="border-2 border-blue-400 text-blue-400 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Get In Touch
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12"
          variants={itemVariants}
        >
          {[
            { icon: Github, href: "https://github.com/Abhishek01062500", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/abhishek-dagar-40baa8227/", label: "LinkedIn" },
            { icon: Mail, href: "https://mail.google.com/mail/?view=cm&to=abhidagar024@gmail.com", label: "Email" }

          ].map(({ icon: IconComponent, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              {IconComponent && <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-gray-300" />}
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

