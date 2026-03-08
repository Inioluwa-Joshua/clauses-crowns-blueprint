import PageHero from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | Clauses & Crowns",
  description:
    "Get in touch with Clauses & Crowns. We are here to help you with your legal needs.",
};

const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6 text-accent" />,
    title: "Our Offices",
    details: ["Abuja, Nigeria", "Lagos, Nigeria"],
  },
  {
    icon: <Phone className="w-6 h-6 text-accent" />,
    title: "Phone Number",
    details: ["+234 913 122 6039"],
  },
  {
    icon: <Mail className="w-6 h-6 text-accent" />,
    title: "Email Address",
    details: ["contact@clausesandcrowns.com"],
  },
  {
    icon: <Clock className="w-6 h-6 text-accent" />,
    title: "Working Hours",
    details: ["Monday - Friday", "9:00 AM - 5:00 PM"],
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Contact Us"
        subtitle="We're here to provide the legal support and guidance you need."
        backgroundImage="/contact-hero.png"
      />

      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="font-serif text-3xl font-bold text-primary mb-4 tracking-tight">
                  Get in Touch
                </h2>
                <div className="gold-line mb-6" />
                <p className="text-muted-foreground font-sans leading-relaxed">
                  Have a question or need legal assistance? Fill out the form,
                  and our team will get back to you within 24 hours.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 rounded-lg bg-card border border-border/50 hover:border-accent/30 transition-colors duration-300"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-primary mb-1">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p
                          key={idx}
                          className="text-sm text-muted-foreground font-sans"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section or Additional Info */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-primary mb-6">
            Partnering for Excellence
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground font-sans leading-relaxed">
            Whether you are a startup needing advisory or an established firm
            looking for strategic legal partnerships, Clauses & Crowns is
            committed to your success. Reach out today to start a conversation.
          </p>
        </div>
      </section>
    </main>
  );
}
