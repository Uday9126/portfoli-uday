"use client"

import { motion } from "framer-motion"

const education = [
  {
    institution: "Teegala Krishna Reddy Engineering College, Bilaspur",
    degree: "B.Tech, Computer Science",
    period: "2020 - 2024",
    gpa: "CGPA: 7.7/10",
    icon: "🎓",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Education</h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4 items-start"
            >
              {/* Icon Circle */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xl">
                {edu.icon}
              </div>

              {/* Education Details */}
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">{edu.institution}</h3>
                <p className="text-gray-600">{edu.degree}</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-500">
                  <span>{edu.period}</span>
                  {edu.gpa && (
                    <>
                      <span className="hidden sm:inline">•</span>
                      <span>{edu.gpa}</span>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
