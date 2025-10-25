import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message envoyé !",
      description: "Je vous répondrai dans les plus brefs délais.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Contactez-<span className="text-primary">moi</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une idée de projet ? N'hésitez pas à me contacter
          </p>
        </motion.div>

        <div ref={ref} className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Informations</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:kenfackbrice27@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      kenfackbrice27@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <a
                      href="tel:+237671937341"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +237 6 71 93 73 41
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Localisation</p>
                    <p className="text-muted-foreground">Douala, Cameroun</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-muted-foreground">
                Je suis disponible pour des projets freelance et des opportunités de collaboration.
                N'hésitez pas à me contacter pour discuter de votre projet !
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Votre nom"
                  required
                  className="bg-card border-border focus:border-primary"
                  aria-label="Nom"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Votre email"
                  required
                  className="bg-card border-border focus:border-primary"
                  aria-label="Email"
                />
              </div>

              <div>
                <Input
                  type="text"
                  placeholder="Sujet"
                  required
                  className="bg-card border-border focus:border-primary"
                  aria-label="Sujet"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Votre message"
                  required
                  rows={6}
                  className="bg-card border-border focus:border-primary resize-none"
                  aria-label="Message"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 shadow-glow"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
