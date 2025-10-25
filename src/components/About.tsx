import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profilePhoto from "@/assets/profil.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            À <span className="text-primary">Propos</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
                <img
                  src={profilePhoto}
                  alt="Photo de profil - Développeur Full Stack"
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/30 shadow-glow-lg"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6 text-lg text-muted-foreground"
            >
              <p>
                Passionné par le développement web depuis plusieurs années, je crée des applications 
                modernes et performantes qui répondent aux besoins des utilisateurs.
              </p>
              
              <p>
                Mon expertise couvre l'ensemble de la stack technique, du frontend au backend, 
                en passant par les bases de données et le déploiement. Je suis constamment à 
                l'affût des nouvelles technologies pour offrir les meilleures solutions possibles.
              </p>
              
              <p>
                Que ce soit pour un site vitrine, une application web complexe ou une API robuste, 
                j'apporte rigueur, créativité et expertise technique à chaque projet.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
