import { ScrollAnimate } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <ScrollAnimate>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-12 text-center">
              About <span className="text-muted-foreground">HackHalt</span>
            </h2>
          </ScrollAnimate>
          
          {/* About Image */}
          <ScrollAnimate delay={200}>
            <div className="mb-12">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop&crop=center" 
                alt="Programming and cybersecurity workspace" 
                className="w-full max-w-3xl mx-auto rounded-lg shadow-soft"
              />
            </div>
          </ScrollAnimate>
          
          {/* Story */}
          <ScrollAnimate delay={300}>
            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
              <p>
                <span className="text-foreground font-medium">Once in a Delhi school...</span> we walked into a classroom where half the students had already fallen for fake WhatsApp lottery messages. That's when it hit us—this isn't just about teaching tech. It's about building confidence.
              </p>
              
              <p>
                We've held <span className="text-foreground font-medium">30+ sessions across Delhi & Gurugram</span>—schools, colleges, corporates, NGOs. Each time, we see the same thing: people who were once scared of "hackers" start asking smart questions and sharing what they've learned with friends.
              </p>
              
              <p className="text-foreground text-xl font-medium text-center">
                So here's what we do—prevent cyber threats by building confidence, not fear.
              </p>
            </div>
          </ScrollAnimate>
          
          {/* Stats */}
          <ScrollAnimate delay={400}>
            <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
              <div className="border border-border p-8 rounded-lg">
                <div className="text-3xl font-bold mb-2">1K+</div>
                <div className="text-muted-foreground">Lives Empowered</div>
              </div>
              <div className="border border-border p-8 rounded-lg">
                <div className="text-3xl font-bold mb-2">30+</div>
                <div className="text-muted-foreground">Sessions Delivered</div>
              </div>
              <div className="border border-border p-8 rounded-lg">
                <div className="text-3xl font-bold mb-2">Police</div>
                <div className="text-muted-foreground">Backed</div>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;