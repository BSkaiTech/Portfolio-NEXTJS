'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Users, Zap, Shield, Brain, Camera, Stethoscope } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'Viettel FaceID',
      description: 'Large-scale face recognition system deployed across 15+ provinces for national ID verification and border control',
      image: '/api/placeholder/600/400',
      category: 'Computer Vision',
      icon: Shield,
      color: 'from-blue-500 to-cyan-500',
      stats: {
        users: '50M+',
        accuracy: '99.7%',
        provinces: '15+',
        reduction: '45%'
      },
      features: [
        'Real-time face recognition processing',
        'Multi-ethnicity support optimization',
        'Border control integration',
        'High-availability deployment'
      ],
      technologies: ['TensorFlow', 'ArcFace', 'Docker', 'Kubernetes', 'AWS'],
      achievements: [
        'Processed 50M+ daily face scans',
        'Achieved 99.7% accuracy under diverse conditions',
        'Reduced false rejection rates by 45% for ethnic minorities',
        'Deployed across 15+ provinces'
      ]
    },
    {
      title: 'SmartCam Edge AI',
      description: 'Real-time traffic violation detection system for smart city IoT networks',
      image: '/api/placeholder/600/400',
      category: 'Edge AI',
      icon: Camera,
      color: 'from-green-500 to-emerald-500',
      stats: {
        devices: '200K+',
        fps: '30 FPS',
        latency: '200ms',
        reduction: '30%'
      },
      features: [
        'Real-time object detection',
        'Edge device optimization',
        'Traffic violation detection',
        'Smart city integration'
      ],
      technologies: ['YOLOv7', 'TensorRT', 'Jetson Nano', 'OpenCV', 'C++'],
      achievements: [
        'Optimized YOLOv7 models for Jetson Nano',
        'Achieved 30 FPS at 200ms latency',
        'Reduced traffic congestion by 30%',
        'Deployed on 200K+ IoT devices'
      ]
    },
    {
      title: 'Viettel MedScan',
      description: 'CNN-based lung nodule detection system for medical imaging analysis',
      image: '/api/placeholder/600/400',
      category: 'Medical AI',
      icon: Stethoscope,
      color: 'from-red-500 to-pink-500',
      stats: {
        hospitals: '8',
        sensitivity: '94%',
        scans: '120K+',
        reduction: '22%'
      },
      features: [
        'Lung nodule detection',
        'Medical image analysis',
        'Radiologist assistance',
        'Hospital integration'
      ],
      technologies: ['PyTorch', 'CNN', 'Medical Imaging', 'Docker', 'Azure'],
      achievements: [
        '94% sensitivity on 120K+ chest X-rays',
        'Cut radiologist workload by 22%',
        'Secured $2.1M in MoH contracts',
        'Deployed in 8 major hospitals'
      ]
    },
    {
      title: 'PhoBERT NLP Pipeline',
      description: 'Vietnamese language processing pipeline for healthcare and agriculture applications',
      image: '/api/placeholder/600/400',
      category: 'NLP',
      icon: Brain,
      color: 'from-purple-500 to-indigo-500',
      stats: {
        languages: 'Vietnamese',
        models: 'PhoBERT',
        applications: 'Multi-domain',
        accuracy: 'High'
      },
      features: [
        'Vietnamese text processing',
        'Multi-domain applications',
        'Healthcare integration',
        'Agriculture support'
      ],
      technologies: ['PhoBERT', 'Transformers', 'Python', 'Hugging Face', 'NLP'],
      achievements: [
        'Enhanced Vietnamese AI applications',
        'Healthcare text processing',
        'Agricultural pest detection support',
        'Multi-domain language understanding'
      ]
    },
    {
      title: 'Agricultural Pest Detection',
      description: 'YOLOv3-based pest detection system using drone-captured images for precision agriculture',
      image: '/api/placeholder/600/400',
      category: 'Computer Vision',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      stats: {
        images: '3K+',
        mAP: '82%',
        papers: '2',
        workshop: 'ICCV'
      },
      features: [
        'Drone image analysis',
        'Pest detection',
        'Precision agriculture',
        'Research publication'
      ],
      technologies: ['YOLOv3', 'OpenCV', 'Python', 'Transfer Learning', 'Research'],
      achievements: [
        '82% mAP on 3K+ drone images',
        'Co-authored 2 peer-reviewed papers',
        'Presented at ICCV Workshop',
        'Transfer learning optimization'
      ]
    },
    {
      title: 'Galaxy Camera AI',
      description: 'Image preprocessing modules for Samsung Galaxy S7/S7 Edge HDR+ pipeline',
      image: '/api/placeholder/600/400',
      category: 'Mobile AI',
      icon: Camera,
      color: 'from-indigo-500 to-blue-500',
      stats: {
        improvement: '15%',
        fps: '25 FPS',
        images: '5K+',
        accuracy: '88%'
      },
      features: [
        'HDR+ pipeline optimization',
        'Noise reduction filters',
        'Scene classification',
        'Object tracking'
      ],
      technologies: ['C++', 'OpenCV', 'Android', 'Image Processing', 'Mobile'],
      achievements: [
        '15% improvement in low-light scenes',
        '88% scene classification accuracy',
        '25 FPS stable performance',
        '5K+ Vietnamese images labeled'
      ]
    }
  ]

  return (
    <section id="projects" className="py-20 bg-dark-900/50">
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
              Featured Projects
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto"
            >
              A showcase of my most impactful AI and machine learning projects that have made a real difference in production environments.
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="w-16 h-16 text-white/60" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-400 hover:text-white transition-colors">
                        <ExternalLink size={16} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-white transition-colors">
                        <Github size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-primary-400">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-2 py-1 bg-primary-500/20 text-primary-300 text-xs rounded"
                        >
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 3 && (
                        <span className="px-2 py-1 bg-gray-600/20 text-gray-400 text-xs rounded">
                          +{project.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-gray-600/20 text-gray-400 text-xs rounded">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Key Achievements</h4>
                    <ul className="space-y-1">
                      {project.achievements.slice(0, 2).map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300 text-xs">{achievement}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-primary-500/10 to-primary-700/10 rounded-xl p-8 border border-primary-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Interested in My Work?</h3>
              <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
                I'm always excited to discuss new AI projects and opportunities. Let's connect and explore how we can work together.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
