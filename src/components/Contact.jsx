import { useState } from 'react'
/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [successMessage, setSuccessMessage] = useState("")

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

   emailjs.sendForm(
     import.meta.env.VITE_EMAILJS_SERVICE_ID,
     import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
     e.target,
     import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )

      .then(() => {
        setSuccessMessage("Message sent successfully! I'll get back to you soon.")
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      })
      .catch((error) => {
        console.error(error)
        setSuccessMessage("Something went wrong, please try again.")
      })
  }

  const contactInfo = [
    { icon: Mail, title: "Email", value: "abhidagar024@gmail.com", link: "mailto:abhidagar024@gmail.com", color: "bg-blue-500" },
    { icon: Phone, title: "Phone", value: "+91 9354382500", link: "tel:+919354382500", color: "bg-green-500" },
    { icon: MapPin, title: "Location", value: "Delhi, India", link: "#", color: "bg-purple-500" }
  ]

  const socialLinks = [
    { icon: Github, name: "GitHub", url: "https://github.com/Abhishek01062500", color: "hover:bg-gray-800" },
    { icon: Linkedin, name: "LinkedIn", url: "https://linkedin.com/in/abhishek-dagar", color: "hover:bg-blue-600" }
  ]

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
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" variants={itemVariants}>
            Get In Touch
          </motion.h2>
          <motion.p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" variants={itemVariants}>
            Ready to collaborate on your next project? Let's discuss how we can work together to build something amazing.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white" variants={itemVariants}>
              Let's Connect
            </motion.h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a key={index} href={info.link} className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105" variants={itemVariants} whileHover={{ x: 10 }}>
                  <div className={`w-12 h-12 ${info.color} rounded-lg flex items-center justify-center mr-4`}>
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">{info.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div variants={itemVariants}>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className={`p-3 bg-white dark:bg-gray-900 rounded-lg shadow-md ${social.color} text-white transition-all duration-300 transform hover:scale-110`} whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
                    <social.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg border border-green-200 dark:border-green-800" variants={itemVariants}>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="font-semibold text-green-800 dark:text-green-300">Available for new opportunities</span>
              </div>
              <p className="text-sm text-green-600 dark:text-green-400 mt-2">Currently open to DevOps and Full Stack development roles</p>
            </motion.div>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <motion.h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white" variants={itemVariants}>
                  Send a Message
                </motion.h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div variants={itemVariants}>
                    <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required className="w-full" />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required className="w-full" />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleInputChange} required className="w-full" />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} required rows={6} className="w-full resize-none" />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </motion.div>

                  {successMessage && (
                    <motion.div className="mt-4 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 rounded-lg border border-green-300 dark:border-green-700" variants={itemVariants}>
                      {successMessage}
                    </motion.div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
