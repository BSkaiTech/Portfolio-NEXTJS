'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Building, Award } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      company: 'Viettel AI',
      position: 'Head of AI Solutions',
      duration: 'May 2020 – Aug 2025',
      location: 'Hanoi, Vietnam',
      description: 'Led a 15-member AI team to deploy large-scale AI solutions across Vietnam',
      achievements: [
        'Led Viettel FaceID deployment across 15+ provinces, processing 50M+ daily face scans for national ID verification and border control, achieving 99.7% accuracy under diverse conditions',
        'Reduced false rejection rates by 45% for ethnic minorities through advanced model optimization',
        'Engineered SmartCam Edge AI for 200K+ IoT devices in Hanoi/Da Nang smart city networks',
        'Optimized YOLOv7 models to run at 30 FPS on Jetson Nano (200ms latency), enabling real-time traffic violation detection that reduced congestion by 30%',
        'Drove adoption of Viettel MedScan in 8 major hospitals, developing CNN-based lung nodule detection with 94% sensitivity on Vietnam\'s largest chest X-ray dataset (120K+ scans)',
        'Cut radiologist workload by 22% and secured $2.1M in MoH contracts',
        'Architected PhoBERT-based NLP pipelines for Vietnamese language processing, enhancing local AI applications in healthcare and agriculture'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'YOLOv7', 'CNN', 'PhoBERT', 'Docker', 'Kubernetes', 'AWS', 'Azure']
    },
    {
      company: 'AI and ML Lab',
      position: 'Research Assistant',
      duration: 'Aug 2018 – Feb 2020',
      location: 'Hanoi, Vietnam',
      description: 'Conducted cutting-edge research in Vietnamese NLP and computer vision',
      achievements: [
        'Optimized data preprocessing pipelines for low-resource Vietnamese speech recognition, reducing phoneme error rates by 12% on the VIVOS dataset',
        'Developed novel audio augmentation techniques integrated into lab\'s open-source NLP toolkit',
        'Co-authored 2 peer-reviewed papers on transfer learning for agricultural pest detection',
        'Trained YOLOv3 models on 3K+ drone-captured images to achieve 82% mAP (presented at ICCV Workshop)',
        'Mentored 3 researchers in deploying ML experiments on cloud GPU clusters (AWS/Azure)',
        'Standardized workflows for reproducible research, reducing experiment setup time by 40%'
      ],
      technologies: ['Python', 'YOLOv3', 'OpenCV', 'AWS', 'Azure', 'Docker', 'PyTorch', 'TensorFlow']
    },
    {
      company: 'Samsung Vietnam Mobile R&D Center',
      position: 'Software Engineer',
      duration: 'Jan 2016 – May 2016',
      location: 'Hanoi, Vietnam',
      description: 'Developed image processing modules for Galaxy smartphone cameras',
      achievements: [
        'Implemented image preprocessing modules for the Galaxy S7/S7 Edge HDR+ pipeline',
        'Optimized noise reduction filters that contributed to a 15% improvement in low-light scenes (validated on Snapdragon 820)',
        'Assisted in data collection and validation for scene classification algorithms on Galaxy J series',
        'Labeled 5K+ Vietnamese-specific images to improve model accuracy from 85% to 88%',
        'Integrated OpenCV object tracking libraries into Samsung\'s camera app prototype',
        'Achieved stable 25 FPS performance while documenting latency trade-offs'
      ],
      technologies: ['C++', 'OpenCV', 'Android', 'Image Processing', 'Computer Vision', 'Machine Learning']
    }
  ]

  return (
    <section id="experience" className="py-20 bg-dark-900/50">
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
              Work Experience
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full shadow-lg"
            />
          </div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
                className="w-full"
              >
                {/* Content Card */}
                <div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 relative overflow-hidden group">
                    {/* Blue accent line on hover */}
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary-500 to-primary-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                        <div className="flex items-center space-x-2 text-primary-400 mb-2">
                          <Building size={16} />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end space-y-1">
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Calendar size={16} />
                          <span className="text-sm">{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-400">
                          <MapPin size={16} />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <Award className="w-5 h-5 mr-2 text-primary-500" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                            <p className="text-gray-300 text-sm">{achievement}</p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary-500/20 text-primary-300 text-sm rounded-full border border-primary-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
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
