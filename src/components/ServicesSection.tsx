import { ScrollAnimate } from "@/hooks/useScrollAnimation";

const ServicesSection = () => {
  const services = [
    {
      title: "Cyber Awareness Workshops",
      description: "Hands-on, no-jargon sessions for students & young pros."
    },
    {
      title: "Cyber Crime Prevention Talks", 
      description: "Real stories, real advice—learn what hackers won't tell you."
    },
    {
      title: "School, College & Corporate Sessions",
      description: "Tailored for every age group or office."
    },
    {
      title: "Digital Hygiene Training & Campaigns",
      description: "From phishing drills to safe-scroll habits."
    }
  ];

  return (
    <section id="services" className="py-20 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <ScrollAnimate>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-center">
              What We <span className="text-muted-foreground">Actually Do</span>
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-16">
              No fancy marketing speak here. Just real solutions for real cyber problems.
            </p>
          </ScrollAnimate>
          
          {/* Services List */}
          <div className="space-y-8">
            {services.map((service, index) => (
              <ScrollAnimate key={index} delay={index * 100}>
                <div className="border border-border p-8 rounded-lg">
                  <div className="mb-4">
                    <img 
                      src={`https://images.unsplash.com/photo-${index % 2 === 0 ? '1488590528505-98d2b5aba04b' : '1486312338219-ce68d2c6f44d'}?w=400&h=200&fit=crop&crop=center`} 
                      alt={service.title} 
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
          
          {/* Why Different */}
          <ScrollAnimate delay={500}>
            <div className="mt-16 border border-border p-8 rounded-lg">
              <h3 className="font-heading text-2xl font-bold mb-6 text-center">Why We're Different</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-heading font-semibold mb-2">Youth-Led Approach</h4>
                  <p className="text-muted-foreground text-sm">
                    Peer-to-peer learning hits different. We get your digital habits because we share them.
                  </p>
                </div>
                <div>
                  <h4 className="font-heading font-semibold mb-2">Police Backing</h4>
                  <p className="text-muted-foreground text-sm">
                    Our content is vetted by cybercrime experts, so you're getting the real deal.
                  </p>
                </div>
                <div>
                  <h4 className="font-heading font-semibold mb-2">Practical Focus</h4>
                  <p className="text-muted-foreground text-sm">
                    Less theory, more "here's what to do when you get that suspicious SMS."
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;