import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Palette, Server, Smartphone, Zap } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend",
    description: "React, TypeScript, Next.js, Tailwind CSS",
  },
  {
    icon: Server,
    title: "Backend",
    description: "Node.js, Express, API REST, GraphQL",
  },
  {
    icon: Database,
    title: "Base de données",
    description: "PostgreSQL, MongoDB, Redis, Supabase",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Mobile-first, Progressive Web Apps",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, Design Systems, Animations",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimisation, SEO, Web Vitals",
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

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all hover:shadow-glow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{skill.title}</h3>
                    <p className="text-muted-foreground text-sm">{skill.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
