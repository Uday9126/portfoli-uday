"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "FrontEnd Developer Intern",
    company: "Mobius by Gaian Solutions",
    period: "Feb 2025 - Present",
    responsibilities: [
      "Developed the complete project flow in RunRun where users fill and submit detailed forms, which are then displayed as interactive project cards on the dashboard.",
      "Built user-friendly forms for different deployment sections and integrated workflow APIs to trigger, manage, and track backend automation tasks.",
    ],
    skills: ["Next.js", "ReactJs", "JavaScript", "TailwindCSS"],
  },
  {
    title: "MernStack Developer Intern",
    company: "HealthOFin. ",
    period: "Nov 2024 - Jan 2025",
    responsibilities: [
      "Collaborated on a digital platform (FARMIT) connecting farmers with IT-sector investors, enabling transparent and secure agricultural investments",
      "Developed and integrated secure REST APIs for user onboarding, verification, farm listings, document uploads, and investment tracking",
      "Implemented role-based access and admin controls to streamline multi-user interactions across farmers, investors, and administrators",
    ],
    skills: ["React", "Node", "Express", "MongoDB", "Responsive Design"],
  }

]

export default function Experience() {  
  return (
    <section id="experience" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Experience</h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>

              <ul className="list-disc pl-5 space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-sm">
                    {resp}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <Badge key={idx} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}