import { motion } from "framer-motion";
import { ScrollAnimate } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <ScrollAnimate>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-12 text-center">
              Our <span className="text-muted-foreground">Story</span>
            </h2>
          </ScrollAnimate>

          {/* Timeline Layout */}
          <div className="space-y-16">

            {/* Block 1: The Beginning */}
            <ScrollAnimate delay={100}>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img
                  src="src/assets/Amity_School_Session.jpg"
                  alt="Cyber awareness session in school"
                  className="w-full md:w-1/2 rounded-xl shadow-xl"
                />
                <div className="md:w-1/2 text-lg text-muted-foreground">
                  <p>
                    HackHalt was born under the guidance of the Gurugram Police Cyber Cell with a clear purpose, to make cyber awareness simple, accessible, and impactful.
                  </p>
                  <p className="mt-4 font-medium text-foreground">
                    What started as a small initiative has now reached diverse communities, creating real change across classrooms, offices, villages, and construction sites.
                  </p>
                </div>
              </div>
            </ScrollAnimate>

            {/* Block 2: The Journey */}
            <ScrollAnimate delay={200}>
              <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                <img
                  src="src/assets/ASN_School_Session.jpg"
                  alt="HackHalt team on-ground"
                  className="w-full md:w-1/2 rounded-xl shadow-xl"
                />
                <div className="md:w-1/2 text-lg text-muted-foreground">
                  <p>
                    We’ve conducted <strong className="text-foreground">30+ outreach sessions</strong> reaching over <strong className="text-foreground">1000+ individuals</strong> across Delhi NCR, from school kids to corporate teams, from laborers to women-led groups.
                  </p>
                  <p className="mt-4">
                    Our goal? <span className="text-foreground font-medium">To build a cyber-resilient India by making people aware of real threats and safe practices.</span>
                  </p>
                </div>
              </div>
            </ScrollAnimate>

            {/* Block 3: The Impact */}
            <ScrollAnimate delay={300}>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img
                  src="src/assets/Community.jpg"
                  alt="Empowering communities"
                  className="w-full md:w-1/2 rounded-xl shadow-xl"
                />
                <div className="md:w-1/2 text-lg text-muted-foreground">
                  <p>
                    Our sessions have helped students become cyber ambassadors, empowered construction workers to avoid scams, and enabled parents to protect their families online.
                  </p>
                  <p className="mt-4 text-foreground font-semibold text-xl">
                    At HackHalt, we don’t just spread awareness - we build confidence and community trust.
                  </p>
                </div>
              </div>
            </ScrollAnimate>
          </div>

          {/* Stats Section */}
          <ScrollAnimate delay={400}>
            <div className="grid md:grid-cols-3 gap-8 mt-20 text-center">
                                <motion.div
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "#7bfcfcff", 
                        borderColor: "#ffffffff",     
                        color: "#050505ff",            
                      }}
                      transition={{ duration: 0.3 }}
                      style={{
                        border: "1px solid #ccc",
                        padding: "2rem",
                        borderRadius: "1rem",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                        backgroundColor: "#ffffff",
                        color: "#333",
                      }}
                    >
                      <div style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
                        1000+
                      </div>
                      <div style={{ fontSize: "1rem" }}>People Reached</div>
                    </motion.div>

                    <motion.div
                      whileHover={{
                       scale: 1.05,
                        backgroundColor: "#7bfcfcff", 
                        borderColor: "#ffffffff",     
                        color: "#050505ff",           
                      }}
                      transition={{ duration: 0.3 }}
                      style={{
                        border: "1px solid #ccc",
                        padding: "2rem",
                        borderRadius: "1rem",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                        backgroundColor: "#ffffff",
                        color: "#333",
                      }}
                    >
                      <div style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
                        30+
                      </div>
                      <div style={{ fontSize: "1rem" }}>Cyber Awareness Sessions</div>
                    </motion.div>
          <motion.div
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "#7bfcfcff", 
                        borderColor: "#ffffffff",     
                        color: "#050505ff",        
                      }}
                      transition={{ duration: 0.3 }}
                      style={{
                        border: "1px solid #ccc",
                        padding: "2rem",
                        borderRadius: "1rem",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                        backgroundColor: "#ffffff",
                        color: "#333",
                      }}
                    >
                      <div style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
                        10+
                      </div>
                      <div style={{ fontSize: "1rem" }}>Communities</div>
                    </motion.div>
          </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
