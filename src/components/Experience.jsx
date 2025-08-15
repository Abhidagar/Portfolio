import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Building, Calendar, MapPin, ChevronRight } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "Nagarro Software Private Limited",
      location: "Gurugram, Haryana",
      period: "July 2025 - Present",
      type: "Full-time",
      achievements: [
        " Assist in maintaining and optimizing ETL pipelines using Python and SQL",
        " Write scripts to extract data,Transform raw data into clean, structured formats for analysis and reporting.",
        " Monitor, test, and troubleshoot ETL workflows. maintain documentation of data flow and transformation logic.",
        " Maintain documentation of data flow and transformation logic."
      ],
      technologies: ["Python", "SQL", "ETL", "Data Pipelines", "PowerBI", "Excel", "Pyshark", "Airflow"]
    },

    {
      title: "ASE Intern",
      company: "Nagarro Software Private Limited",
      location: "Gurugram, Haryana", 
      period: "Jan 2025 - July 2025",
      type: "Internship",
      achievements: [
        " Developed using Python and the Flask framework, with SQLite as the database, SQLAlchemy as the ORM, and Flask-Migrate for database migrations. Utilized Jinja2 for server-side templating.",
        " Built and automated a CI/CD pipeline for a Java Maven web app using Azure DevOps & GitHub Actions, Integrated SonarQube with quality gates for static code analysis.",
        " Created Dockerfiles, built images, and deployed containers on AWS EC2 via automated CD pipelines",
        " Provisioned a self-hosted Kubernetes cluster and deployed apps using manifests, Helm charts, and persistent storage.",
        " Implemented Prometheus-Grafana stack for cluster and application monitoring."
      ],
      technologies: ["Azure DevOps", "Github Actions", "AWS", "CI/CD pipeline", "Kubernetes", "Terraform", "Docker" , "Ansible"]
    }
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
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Professional Experience
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Building scalable infrastructure and innovative solutions across different domains
          </motion.p>
        </motion.div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={itemVariants}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-800 hidden md:block"></div>
                
                <div className="md:ml-20">
                  <Card className="hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                    <CardContent className="p-8">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                            {exp.title}
                          </h3>
                          <div className="flex items-center text-blue-600 dark:text-blue-400 mb-2">
                            <Building className="h-5 w-5 mr-2" />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 dark:text-gray-300">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <Badge 
                          variant="outline" 
                          className="self-start lg:self-center mt-2 lg:mt-0 border-blue-500 text-blue-600"
                        >
                          {exp.type}
                        </Badge>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-4">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <ChevronRight className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex}
                              variant="secondary"
                              className="hover:bg-blue-100 hover:text-blue-800 transition-colors duration-200"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

