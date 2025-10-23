import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            À <span className="text-primary">Propos</span>
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
