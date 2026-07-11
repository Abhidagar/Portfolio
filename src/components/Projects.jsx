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
      title: "Enterprise Data Quality Framework (Johnson & Johnson)",
      description: "Scalable data validation framework for processing highly unstructured enterprise datasets.",
      longDescription: "Designed and implemented a comprehensive Data Quality Framework for Johnson & Johnson using Kedro ETL pipelines to ingest data from SharePoint and Amazon Redshift into Amazon S3.",
      image: "/api/placeholder/600/400",
      technologies: ["Kedro", "Python", "SQL", "Amazon S3", "Redshift", "SharePoint"],
      category: "Data Engineering",
      period: "Mar 2026 - Jun 2026",
      company: "Nagarro",
      features: [
        "Developed end-to-end Kedro ETL pipelines for data ingestion and processing",
        "Automated schema, null, duplicate, datatype, and cross-dataset validation with configurable rules",
        "Built modular pipeline orchestration with centralized logging and exception handling",
        "Improved data consistency and reduced manual validation effort",
        "Enhanced pipeline reliability and maintainability"
      ],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "End-to-End Kubernetes Deployment & Monitoring",
      description: "Production-ready CI/CD pipeline with full Kubernetes orchestration and observability.",
      longDescription: "Architected and deployed a complete production infrastructure with automated CI/CD pipelines, Kubernetes cluster management, and comprehensive monitoring using Prometheus and Grafana.",
      image: "/api/placeholder/600/400",
      technologies: ["Kubernetes", "Helm", "Prometheus", "Grafana", "Docker", "CI/CD", "Terraform"],
      category: "DevOps",
      period: "Feb 2025 - May 2025",
      company: "Nagarro",
      features: [
        "Designed and deployed full CI/CD pipeline with automated build, test, and deployment",
        "Architected Kubernetes resources including Deployments, Services, PV/PVC, ConfigMaps, and Secrets",
        "Set up centralized monitoring using Prometheus and Grafana for real-time observability",
        "Automated provisioning of monitoring stack using Helm for reproducible deployments",
        "Reduced release effort and manual intervention by 50%"
      ],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "JustEat",
      description: "Food ordering platform with separate customer and restaurant owner workflows.",
      longDescription: "A Flask-based food ordering website that supports order placement, cuisine and restaurant filtering, and personalized recommendations for users.",
      image: "/api/placeholder/600/400",
      technologies: ["Flask", "SQLite", "HTML", "CSS", "JavaScript", "Jinja Templating"],
      category: "Full Stack",
      period: "July 2025",
      company: "Nagarro",
      features: [
        "Role-based access for customers and restaurant owners",
        "Cart, order placement, and order management",
        "Smart recommendations such as most-ordered items and today's special",
        "Restaurant and cuisine management from the owner's side",
        "Customer ratings and feedback on orders",
        "Filtering by item name and price range",
        "Database migrations for schema management"
      ],
      demoLink: "#",
      githubLink: "https://github.com/Abhidagar/JustEat/tree/main/JustEat/JustEat"
    },
    {
      title: "Movie Recommender System",
      description: "Machine learning-based movie recommendation engine using cosine similarity.",
      longDescription: "An intelligent movie recommendation system that processes a dataset of 5000 movies, extracts features, and uses vector similarity for personalized suggestions.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Cosine Similarity", "Data Processing"],
      category: "Machine Learning",
      period: "Aug 2023 - Sept 2023",
      company: "Personal Project",
      features: [
        "Dataset processing of 5000+ movies with feature extraction",
        "Tag generation and vector transformation for similarity analysis",
        "Cosine distance calculations for accuracy and personalization",
        "Real-time recommendation engine with efficient computation",
        "User experience optimization for exploration",
        "Scikit-learn implementation for ML pipeline"
      ],
      demoLink: "#",
      githubLink: "#"
    }
  ]

  const categories = ['All', 'Data Engineering', 'DevOps', 'Full Stack', 'Machine Learning']

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

