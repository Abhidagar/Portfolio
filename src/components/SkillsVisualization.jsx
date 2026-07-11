/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

const skillsData = [
  { name: 'Python', level: 92, category: 'Backend', color: 'bg-yellow-500' },
  { name: 'SQL', level: 90, category: 'Data', color: 'bg-indigo-500' },
  { name: 'Kedro', level: 85, category: 'Data', color: 'bg-sky-500' },
  { name: 'Airflow', level: 88, category: 'Data', color: 'bg-cyan-500' },
  { name: 'Snowflake', level: 82, category: 'Data', color: 'bg-blue-600' },
  { name: 'Redshift', level: 78, category: 'Data', color: 'bg-purple-600' },
  { name: 'Azkaban', level: 70, category: 'Data', color: 'bg-violet-500' },
  { name: 'Flask', level: 84, category: 'Backend', color: 'bg-amber-500' },
  { name: 'REST APIs', level: 90, category: 'Backend', color: 'bg-emerald-500' },
  { name: 'Docker', level: 94, category: 'DevOps', color: 'bg-blue-600' },
  { name: 'Kubernetes', level: 90, category: 'DevOps', color: 'bg-sky-600' },
  { name: 'Terraform', level: 80, category: 'DevOps', color: 'bg-green-600' },
  { name: 'Prometheus', level: 82, category: 'Observability', color: 'bg-rose-500' },
  { name: 'Grafana', level: 80, category: 'Observability', color: 'bg-orange-500' },
  { name: 'Power BI', level: 75, category: 'BI', color: 'bg-lime-500' },
  { name: 'Tableau', level: 70, category: 'BI', color: 'bg-amber-600' },
  { name: 'Git & GitHub', level: 95, category: 'Tools', color: 'bg-red-600' },
  { name: 'Azure DevOps', level: 82, category: 'CI/CD', color: 'bg-slate-600' },
  { name: 'GitHub Actions', level: 85, category: 'CI/CD', color: 'bg-cyan-600' },
]

const proficiencyLabel = (level) => {
  if (level >= 90) return 'Expert'
  if (level >= 80) return 'Advanced'
  if (level >= 65) return 'Intermediate'
  return 'Beginner'
}

const SkillsVisualization = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [animatedSkills, setAnimatedSkills] = useState({})

  useEffect(() => {
    const timer = setTimeout(() => {
      const animated = {}
      skillsData.forEach(skill => (animated[skill.name] = skill.level))
      setAnimatedSkills(animated)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  const categories = ['All', ...Array.from(new Set(skillsData.map(s => s.category)))]

  const filtered = selectedCategory === 'All' ? skillsData : skillsData.filter(s => s.category === selectedCategory)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-8" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills & Proficiency</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Interactive view of core technical competencies grouped by category. Click a category to filter.</p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${selectedCategory === cat ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((skill, idx) => (
            <motion.div key={skill.name} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}>
              <Card className="h-full hover:shadow-xl transition-transform transform hover:scale-[1.02]">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
                      <div className="text-xs text-gray-500 mt-1">{skill.category} • {proficiencyLabel(skill.level)}</div>
                    </div>
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-300">{skill.level}%</div>
                  </div>

                  <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-3 mb-4 overflow-hidden">
                    <motion.div className={`${skill.color} h-3 rounded-full`} initial={{ width: 0 }} animate={{ width: animatedSkills[skill.name] ? `${animatedSkills[skill.name]}%` : '0%' }} transition={{ duration: 1.2, ease: 'easeOut' }} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-xs text-gray-700 dark:text-gray-300">{skill.category}</span>
                      <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-xs text-gray-700 dark:text-gray-300">{proficiencyLabel(skill.level)}</span>
                    </div>
                    <div className="text-xs text-gray-500">Experience: {/* optional place for years */} </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsVisualization

