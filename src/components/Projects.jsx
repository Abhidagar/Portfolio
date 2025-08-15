import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Filter, X } from 'lucide-react'

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All')

  const projects = [

     {
      title: "JustEat",
      description: "Led development of a food ordering website which manages two roles of restaurant owner and customer both manges their task",
      longDescription: "Food Ordering Website which handles placing order , filtering cuisines and restaurant and smart recommendation for user and many more functionalities ",
      image: "/api/placeholder/600/400",
      technologies: ["Flask", "SQLite", "HTML", "CSS", "Javascript", "Jinja Templating"],
      category: "Full Stack",
      period: "1 July 2025 - 10 July 20225",
      company: "Nagarro ",
      features: [
        "User Management system with role-based access",
        "Cart and placing the order and managing the order placed",
        "Smart recommendation for the Users like mostly ordered item , Today's Special",
        "Managing the Restaurant and its cuisines from the Owner's side",
        "Rating and Feedback by the customer on the Order",
        "Applying filter on items through their names and prize ranges",
        "Use of migrations for management of database",
      ],
      demoLink: "#",
      githubLink: "https://github.com/Abhidagar/JustEat/tree/main/JustEat/JustEat"
    },

    {
      title: "End-to-End Kubernetes Deployment & Monitoring",
      description: "Comprehensive Kubernetes-based deployment pipeline with automated monitoring and configuration management using Helm charts.",
      longDescription: "Built a complete DevOps solution featuring self-hosted Kubernetes cluster provisioning, automated CI/CD pipelines, and comprehensive monitoring stack. The project demonstrates enterprise-level infrastructure management and deployment automation.",
      image: "/api/placeholder/600/400",
      technologies: ["Kubernetes", "Helm", "Prometheus", "Grafana", "Docker", "CI/CD", "VirtualBox", "CentOS"],
      category: "DevOps",
      period: "Feb 2025 - May 2025",
      company: "Nagarro",
      features: [
        " Provisioned a self-hosted Kubernetes cluster using VirtualBox and CentOs-based VMs.Designed and deployed Kubernetes manifests using Deployments, Services, Persistent Volumes, and PVCs.",
        " Implemented a full CI/CD pipeline to automate build, test, Docker image creation, and Helm-based deployment on Kubenetes/",
        "Set up a Prometheus-Grafana monitoring stack to monitor Kubernetes cluster metrics and application.",
        "Developed a Monitoring Pipeline to automate the deployment and configuration of Prometheus and Grafana using Helm.",
      ],
      demoLink: "#",
      githubLink: "#"
    },
    
    {
      title: "Movie Recommender System",
      description: "Machine learning-powered movie recommendation engine using cosine similarity and vector analysis for personalized suggestions.",
      longDescription: "Engineered an intelligent movie recommendation system that processes a dataset of 5000 movies, extracting essential features and converting them into vectors for accurate similarity calculations.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "Machine Learning", "Scikit-learn", "Pandas", "NumPy", "Cosine Similarity", "Data Processing"],
      category: "Machine Learning",
      period: "Aug 2023 - Sept 2023",
      company: "Personal Project",
      features: [
        "Dataset processing of 5000+ movies",
        "Feature extraction and tag generation",
        "Vector transformation for similarity analysis",
        "Cosine distance calculations for accuracy",
        "Personalized movie suggestions algorithm",
        "User experience optimization",
        "Scikit-learn implementation",
        "Real-time recommendation engine"
      ],
      demoLink: "#",
      githubLink: "#"
    }
  ]

  const categories = ['All', 'DevOps', 'Full Stack', 'Machine Learning']

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter)

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
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
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
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Showcasing innovative solutions across Python, SQL, Data Analysis and Engineering, DevOps, Full Stack Development, and Machine Learning
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedFilter === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter className="inline-block w-4 h-4 mr-2" />
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid lg:grid-cols-1 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              layout
              className="group"
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Project Image */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                      <div className="aspect-video flex items-center justify-center">
                        <div className="text-6xl font-bold text-blue-500/20">
                          {project.title.split(' ').map(word => word[0]).join('').slice(0, 3)}
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Project Details */}
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="outline" className="border-blue-500 text-blue-600">
                          {project.category}
                        </Badge>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {project.period}
                        </span>
                      </div>

                      <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">
                        {project.title}
                      </h3>

                      <p className="text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {project.longDescription}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                          Key Features:
                        </h4>
                        <ul className="grid grid-cols-1 gap-2">
                          {project.features.slice(0, 4).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex}
                              variant="secondary"
                              className="text-sm hover:bg-blue-100 hover:text-blue-800 transition-colors duration-200"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
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

export default Projects

