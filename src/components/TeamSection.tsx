import { ScrollAnimate } from "@/hooks/useScrollAnimation";

const TeamSection = () => {
  const managers = [
    "Priya Sharma", "Arjun Patel", "Sneha Gupta", "Rohit Kumar",
    "Ananya Singh", "Vikash Yadav", "Meera Joshi", "Karan Malhotra"
  ];

  return (
    <section id="team" className="py-20 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <ScrollAnimate>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-center">
              Meet the <span className="text-muted-foreground">Squad</span>
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-16">
              We're not your typical "cybersecurity experts." We're students, young professionals, 
              and community builders who happen to know a thing or two about staying safe online.
            </p>
          </ScrollAnimate>
          
          {/* Community Leader */}
          <ScrollAnimate delay={200}>
            <div className="border border-border p-8 rounded-lg mb-12 text-center">
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=200&fit=crop&crop=face" 
                  alt="Community Leader" 
                  className="w-24 h-24 rounded-full mx-auto object-cover"
                />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-2">Community Leader</h3>
              <p className="text-muted-foreground">
                Tech enthusiast, mentor, community-builder. The one who started this whole thing 
                after seeing too many friends fall for online scams.
              </p>
            </div>
          </ScrollAnimate>
          
          {/* Managers */}
          <ScrollAnimate delay={300}>
            <div>
              <h3 className="font-heading text-xl font-bold mb-8 text-center">Our Team</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {managers.map((manager, index) => (
                  <div key={index} className="border border-border p-4 rounded-lg text-center">
                    <div className="mb-2">
                      <img 
                        src={`https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face&sat=-100&blur=1`} 
                        alt={manager} 
                        className="w-12 h-12 rounded-full mx-auto object-cover opacity-60"
                      />
                    </div>
                    <h4 className="font-heading font-medium text-sm">{manager}</h4>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;