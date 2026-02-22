import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const StayInformed = () => {
  return (
    <section className="bg-primary text-primary-foreground section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="gold-line mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Stay Informed
          </h2>
          <p className="text-primary-foreground/60 font-sans text-lg mb-10 max-w-xl mx-auto">
            Reach out to us for enquiries, consultations, or to learn more about
            how we can serve your legal needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center">
              <Mail className="w-5 h-5 text-accent" />
            </div>
            <div className="text-left">
              <p className="text-xs uppercase tracking-widest text-primary-foreground/40 font-sans">
                Email
              </p>
              <p className="text-sm font-sans text-primary-foreground/80">
                info@clausesandcrowns.com
              </p>
            </div>
          </div>

          <div className="w-px h-10 bg-primary-foreground/10 hidden sm:block" />

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center">
              <Phone className="w-5 h-5 text-accent" />
            </div>
            <div className="text-left">
              <p className="text-xs uppercase tracking-widest text-primary-foreground/40 font-sans">
                Phone
              </p>
              <p className="text-sm font-sans text-primary-foreground/80">
                +234 (0) 1 234 5678
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StayInformed;
