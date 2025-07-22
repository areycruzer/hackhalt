import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">

          {/* Hero Image */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop&crop=center"//video
              alt="HackHalt - Cyber Safety Awareness India"
              className="w-full max-w-2xl mx-auto rounded-2xl shadow-xl"
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-heading text-5xl md:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We Don’t Just Fight Hackers —<br />
            <span className="text-cyan-400">We Empower India Digitally.</span>
          </motion.h1>

          {/* Impact Stats */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mb-10 text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span>1000+ Citizens Empowered</span>
            <span>30+ Cyber Workshops Conducted</span>
            <span>Backed by Delhi & Gurugram Police</span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-xl mb-12 max-w-2xl mx-auto text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            HackHalt is a cyber awareness movement empowering youth and communities to stay safe online. From school programs to digital safety drives, we make cybersecurity accessible to every Indian.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button variant="minimal" size="lg" className="text-lg px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl shadow-lg">
              Join the Cyber Awareness Movement
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
