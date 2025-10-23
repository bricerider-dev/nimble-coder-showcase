import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Progress } from "@/components/ui/progress";

const skills = [
  {
    title: "React / Next.js",
    level: 90,
    category: "Frontend",
  },
  {
    title: "TypeScript",
    level: 85,
    category: "Frontend",
  },
  {
    title: "Tailwind CSS",
    level: 95,
    category: "Frontend",
  },
  {
    title: "Node.js / Express",
    level: 80,
    category: "Backend",
  },
  {
    title: "PostgreSQL / MongoDB",
    level: 75,
    category: "Backend",
  },
  {
    title: "API REST / GraphQL",
    level: 85,
    category: "Backend",
  },
  {
    title: "Git / GitHub",
    level: 90,
    category: "Outils",
  },
  {
    title: "Docker / CI/CD",
    level: 70,
    category: "DevOps",
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Mes <span className="text-primary">Compétences</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies et outils que j'utilise pour créer des solutions digitales performantes
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-3"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.category}</p>
                </div>
                <span className="text-primary font-bold text-lg">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-3" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
