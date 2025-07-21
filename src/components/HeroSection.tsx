import { Button } from "@/components/ui/button";
import { ScrollAnimate } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Hero Image */}
          <ScrollAnimate delay={100}>
            <div className="mb-12">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop&crop=center" 
                alt="Cybersecurity concept" 
                className="w-full max-w-2xl mx-auto rounded-lg shadow-soft"
              />
            </div>
          </ScrollAnimate>
          
          {/* Main Headline */}
          <ScrollAnimate delay={200}>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8 text-foreground leading-tight">
              We don't just fight hackers—
              <br />
              <span className="text-muted-foreground">we build a cyber-safe community.</span>
            </h1>
          </ScrollAnimate>
          
          {/* Stats */}
          <ScrollAnimate delay={300}>
            <div className="flex flex-wrap justify-center gap-8 mb-12 text-muted-foreground">
              <span>1,000+ lives empowered</span>
              <span>30+ sessions delivered</span>
              <span>Backed by Delhi & Gurugram Police</span>
            </div>
          </ScrollAnimate>
          
          {/* Description */}
          <ScrollAnimate delay={400}>
            <p className="text-xl mb-12 text-muted-foreground max-w-2xl mx-auto">
              Every day, young people get trapped in cyber scams that could've been prevented 
              with just a bit of awareness—and we're here to make sure that doesn't happen to you.
            </p>
          </ScrollAnimate>
          
          {/* CTA */}
          <ScrollAnimate delay={500}>
            <Button variant="minimal" size="lg" className="text-lg px-8 py-4">
              Join Our Next Session
            </Button>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;