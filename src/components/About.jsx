import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, Award, Users, Trophy } from 'lucide-react'

const About = () => {
  const achievements = [
    {
      icon: Users,
      title: "Student Council President",
      description: "GGSIPU (2024-2025)",
      color: "bg-blue-500"
    },
    {
      icon: Trophy,
      title: "Sports President", 
      description: "Sports Council, GGSIPU (2023-2024)",
      color: "bg-green-500"
    },
    {
      icon: Award,
      title: "Silver Medal",
      description: "National All India Universities Games - Tug of War",
      color: "bg-yellow-500"
    },
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "CGPA: 8.660, District Topper in Secondary",
      color: "bg-purple-500"
    }
  ]

  const skills = [
    { category: "DevOps & Cloud", items: ["Kubernetes", "Docker", "AWS", "CI/CD", "Helm", "Prometheus", "Grafana"] },
    { category: "Programming", items: ["Python", "JavaScript", "C/C++", "SQL", "HTML/CSS"] },
    { category: "Frameworks", items: ["React", "Next.js", "Bootstrap"] },
    { category: "Tools & Systems", items: ["Linux","Airflow", "Git", "JFrog", "SonarQube", "Azure DevOps"] }
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
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="about" className="py-16 sm:py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            A passionate Associate Software Engineer and with a strong foundation in 
            Python, Data Engineering, cloud technologies, automation, and leadership.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Personal Story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white"
              variants={itemVariants}
            >
              My Journey
            </motion.h3>
            <motion.div 
              className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base"
              variants={itemVariants}
            >
              <p>
                Currently working as a Associate Software Engineer at Nagarro Software, I specialize in 
                Data Engineering , Flask, SQL and building robust CI/CD pipelines, managing Kubernetes clusters, and implementing 
                cloud-native solutions on AWS.
              </p>
              <p>
                My academic journey at USICT, GGSIPU, has been marked by excellence with a 
                CGPA of 8.660. Beyond academics, I've demonstrated leadership as Student Council 
                President and Sports President, while also achieving national recognition in sports.
              </p>
              <p>
                I'm passionate about automation, development, scalable infrastructure, and creating innovative 
                solutions that bridge the gap between development and operations. My experience 
                spans from Data Engineering, automation to some in  machine learning projects .
              </p>
            </motion.div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-gray-800 border-gray-700">
                  <CardContent className="p-4 sm:p-6">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${achievement.color} rounded-lg flex items-center justify-center mb-3 sm:mb-4`}>
                      <achievement.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">
                      {achievement.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-300">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          className="mt-16 sm:mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-white"
            variants={itemVariants}
          >
            Technical Skills
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 bg-gray-800 border-gray-700">
                  <CardContent className="p-4 sm:p-6">
                    <h4 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-white">
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="secondary"
                          className="text-xs bg-gray-700 text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

