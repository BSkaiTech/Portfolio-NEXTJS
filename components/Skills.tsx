'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Cpu, Database, Cloud, Code, Shield } from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      icon: Brain,
      title: 'AI/ML Frameworks',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'TensorFlow', level: 95 },
        { name: 'PyTorch', level: 90 },
        { name: 'Scikit-learn', level: 85 },
        { name: 'OpenCV', level: 95 },
        { name: 'MediaPipe', level: 80 },
        { name: 'YOLO (v3/v5/v7/v8)', level: 90 },
        { name: 'U-Net', level: 85 },
        { name: 'DeepLab', level: 80 },
        { name: 'ArcFace', level: 85 },
        { name: 'PaddleOCR', level: 75 },
        { name: 'Albumentations', level: 80 },
        { name: 'PhoBERT', level: 90 }
      ]
    },
    {
      icon: Cloud,
      title: 'Deployment & MLOps',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Docker', level: 95 },
        { name: 'Kubernetes', level: 90 },
        { name: 'MLflow', level: 85 },
        { name: 'NVIDIA Triton', level: 80 },
        { name: 'AWS SageMaker', level: 85 },
        { name: 'Azure ML', level: 80 },
        { name: 'TensorRT', level: 75 },
        { name: 'ONNX', level: 80 },
        { name: 'Weights & Biases', level: 85 }
      ]
    },
    {
      icon: Database,
      title: 'Data & Infrastructure',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'C++', level: 85 },
        { name: 'Bash', level: 80 },
        { name: 'Pandas', level: 90 },
        { name: 'NumPy', level: 90 },
        { name: 'SQL', level: 85 },
        { name: 'AWS (EC2/S3)', level: 90 },
        { name: 'Google Cloud', level: 80 },
        { name: 'Azure', level: 85 },
        { name: 'Hadoop/Spark', level: 75 }
      ]
    },
    {
      icon: Cpu,
      title: 'Computer Vision',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Object Detection', level: 95 },
        { name: 'Image Classification', level: 90 },
        { name: 'Face Recognition', level: 95 },
        { name: 'Medical Imaging', level: 85 },
        { name: 'Edge AI', level: 90 },
        { name: 'Real-time Processing', level: 95 },
        { name: 'Model Optimization', level: 90 }
      ]
    },
    {
      icon: Code,
      title: 'Natural Language Processing',
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'Vietnamese NLP', level: 95 },
        { name: 'PhoBERT', level: 90 },
        { name: 'Text Classification', level: 85 },
        { name: 'Named Entity Recognition', level: 80 },
        { name: 'Speech Recognition', level: 85 },
        { name: 'Language Models', level: 90 }
      ]
    },
    {
      icon: Shield,
      title: 'Certifications',
      color: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'PMP®', level: 100 },
        { name: 'CKA (Kubernetes)', level: 100 },
        { name: 'CKAD (Kubernetes)', level: 100 },
        { name: 'SAFe® 5 Product Owner', level: 100 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-dark-800/50">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Skills & Expertise
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full"
            />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + categoryIndex * 0.1, duration: 0.6 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + categoryIndex * 0.1 + skillIndex * 0.05, duration: 0.4 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-primary-400 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ delay: 1 + categoryIndex * 0.1 + skillIndex * 0.05, duration: 1, ease: "easeOut" }}
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary-500/10 to-primary-700/10 rounded-xl p-8 border border-primary-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">7+ Years of AI Excellence</h3>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                With extensive experience in production-grade AI systems, I've successfully deployed solutions 
                serving 10M+ users across smart cities, healthcare, and national security domains. My expertise 
                spans the entire AI lifecycle from research to production deployment.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
