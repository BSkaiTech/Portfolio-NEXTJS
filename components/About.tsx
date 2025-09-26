'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Users, Target, Brain } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { icon: Users, label: 'Team Members Led', value: '15+' },
    { icon: Target, label: 'Projects Deployed', value: '50+' },
    { icon: Award, label: 'Government Contracts', value: '$2M+' },
    { icon: Brain, label: 'AI Models Deployed', value: '100+' },
  ]

  const achievements = [
    'Led Viettel FaceID deployment across 15+ provinces, processing 50M+ daily face scans',
    'Achieved 99.7% accuracy in national ID verification and border control systems',
    'Reduced false rejection rates by 45% for ethnic minorities',
    'Optimized YOLOv7 models to run at 30 FPS on Jetson Nano (200ms latency)',
    'Reduced traffic congestion by 30% through real-time violation detection',
    'Secured $2.1M in Ministry of Health contracts for MedScan deployment',
    'Cut radiologist workload by 22% with CNN-based lung nodule detection',
    'Co-authored 2 peer-reviewed papers on transfer learning for agricultural pest detection',
  ]

  return (
    <section id="about" className="py-20 bg-dark-800/50">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Stats */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                    className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <stat.icon className="w-8 h-8 text-primary-500 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Description */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="space-y-6"
            >
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm an AI Leader with 7+ years of experience scaling end-to-end AI solutions from research to production 
                  at Viettel AI, Samsung Mobile R&D, and Vietnam's AI & ML Lab. My expertise lies in deploying large-scale 
                  AI systems (10M+ users) across smart cities, healthcare, and national security.
                </p>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  I specialize in model optimization for edge devices, achieving 60% latency reduction, and have a proven 
                  track record in leading cross-functional teams, securing $2M+ government contracts, and advancing Vietnam's 
                  AI ecosystem through patented research.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  My technical expertise spans computer vision, NLP (PhoBERT), data engineering, and MLOps for production-grade 
                  AI systems. I'm passionate about building AI solutions that make a real impact on society.
                </p>
              </div>

              {/* Key Achievements */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1, duration: 0.6 }}
                className="mt-8"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Key Achievements</h3>
                <div className="space-y-3">
                  {achievements.slice(0, 4).map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
