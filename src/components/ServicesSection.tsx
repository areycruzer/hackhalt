"use client";

import { ShieldCheck, Presentation, School, Brain, Lightbulb, Users } from "lucide-react";
import { motion } from "framer-motion";
const services = [
  {
    title: "Interactive Cyber Awareness Sessions",
    description: "Empowering students and young professionals with practical knowledge through engaging, jargon-free workshops.",
    icon: <Presentation className="h-8 w-8 text-primary" />,
  },
  {
    title: "Real-World Cyber Crime Prevention Talks",
    description: "Learn from true incidents and understand how to safeguard yourself from the most common digital threats.",
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
  },
  {
    title: "Tailored Programs for Institutions",
    description: "Each session is customized for schools, colleges, or corporate teams—based on age group, industry, and current trends.",
    icon: <School className="h-8 w-8 text-primary" />,
  },
  {
    title: "Digital Hygiene Bootcamps & Campaigns",
    description: "Promoting safe digital habits—from phishing awareness to responsible social media use.",
    icon: <Brain className="h-8 w-8 text-primary" />,
  }
];

// Why We're Different: Plackcards with colors
const features = [
  {
    title: "Youth-Led, Future-Focused",
    description: "HackHalt is driven by passionate youth who understand today’s digital behaviors and threats. We relate, educate, and activate.",
    icon: <Users className="h-7 w-7 text-white" />,
    direction: "left",
    color: "from-purple-600 to-indigo-600",
  },
  {
    title: "Law-Enforced & Trusted",
    description: "With strong backing from Gurugram Police and Delhi Police (East Division), our sessions deliver authentic, impactful and legally-aligned cybersecurity insights.",
    icon: <ShieldCheck className="h-7 w-7 text-white" />,
    direction: "left",
    color: "from-emerald-600 to-green-500",
  },
  {
    title: "Interactive. Real. Hands-On.",
    description: "From real scam drills to red flags in live apps, our approach is not theory, it's preparation through simulation.",
    icon: <Lightbulb className="h-7 w-7 text-white" />,
    direction: "left",
    color: "from-pink-600 to-rose-500",
  },
];

const slideIn = (direction: string) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -100 : 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
});

const ServicesSection = () => {
  return (
    <section className="bg-background" id = "services">
      {/* What We Do Section */}
      <div className="container mx-auto px-6 py-24">
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-center">
          What We <span className="text-muted-foreground">Actually Do</span>
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
          We don't do lectures. We do impact. Every activity is action-first and designed to equip you with real-world digital survival skills.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              key={index}
              className="bg-card rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-border flex items-start gap-4"
            >
              <div>{service.icon}</div>
              <div>
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why We're Different Section */}
      <div className="bg-black py-28 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-white text-5xl font-bold tracking-tight">
              Why We’re <span className="text-muted-foreground">Different</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              We’re not just another cyber awareness campaign, we’re a movement.
            </p>
          </div>

          <div className="space-y-20">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={slideIn(item.direction)}
                className={`flex flex-col md:flex-row ${
                  item.direction === "right" ? "md:flex-row-reverse" : ""
                } items-center gap-10`}
              >
                <div
                  className={`flex-shrink-0 bg-gradient-to-br ${item.color} text-white p-6 rounded-2xl shadow-lg w-[300px] text-center hover:scale-105 transition-transform duration-300`}
                >
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>

                <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
