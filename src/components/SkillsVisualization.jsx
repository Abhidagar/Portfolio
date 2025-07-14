/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

const skillsData = [
  { name: "Kubernetes", level: 90, category: "DevOps", color: "bg-blue-500" },
  { name: "Docker", level: 95, category: "DevOps", color: "bg-blue-600" },
  { name: "AWS", level: 85, category: "Cloud", color: "bg-orange-500" },
  { name: "CI/CD", level: 90, category: "DevOps", color: "bg-green-500" },
  { name: "React", level: 85, category: "Frontend", color: "bg-cyan-500" },
  { name: "Python", level: 80, category: "Py", color: "bg-yellow-500" },
  { name: "JavaScript", level: 85, category: "JS", color: "bg-yellow-600" },
  { name: "Helm", level: 85, category: "DevOps", color: "bg-purple-500" },
  { name: "Prometheus", level: 80, category: "Monitoring", color: "bg-red-500" },
  { name: "Grafana", level: 80, category: "GF", color: "bg-orange-600" },
  { name: "Linux", level: 90, category: "Systems", color: "bg-blue-700" },
  { name: "Git", level: 95, category: "Tools", color: "bg-red-600" }
]

const SkillsVisualization = () => {
  const [animatedSkills, setAnimatedSkills] = useState({})

  useEffect(() => {
    const timer = setTimeout(() => {
      const animated = {}
      skillsData.forEach(skill => {
        animated[skill.name] = skill.level
      })
      setAnimatedSkills(animated)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills Proficiency
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Technical expertise across DevOps, Cloud, and Full Stack Development
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((skill, index) => (
            <motion.div key={skill.name} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {skill.name}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-4">
                    <motion.div
                      className={`h-3 rounded-full ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={{ 
                        width: animatedSkills[skill.name] ? `${animatedSkills[skill.name]}%` : '0%' 
                      }}
                      transition={{ 
                        duration: 1.5, 
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                    />
                  </div>

                  {/* Circular Progress */}
                  <div className="flex items-center justify-center">
                    <div className="relative w-16 h-16">
                      <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-gray-200 dark:text-gray-700"
                          stroke="currentColor"
                          strokeWidth="3"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <motion.path
                          className={skill.color.replace('bg-', 'text-')}
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          initial={{ strokeDasharray: "0 100" }}
                          animate={{ 
                            strokeDasharray: animatedSkills[skill.name] 
                              ? `${animatedSkills[skill.name]} 100` 
                              : "0 100" 
                          }}
                          transition={{ 
                            duration: 1.5, 
                            delay: index * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">
                          {skill.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsVisualization

