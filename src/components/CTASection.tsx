import { Button } from "@/components/ui/button";
import { ScrollAnimate } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <ScrollAnimate>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Ready to Join the Movement?
            </h2>
            <p className="text-xl mb-12 text-muted-foreground">
              Ready to join our next session? Want us to speak at your school or office?
            </p>
            
            <a href="https://linktr.ee/hackhalt" target="_blank" rel="noopener noreferrer">
              <Button variant="minimal" size="lg" className="mb-16">
                Get In Touch
              </Button>
            </a>
          </ScrollAnimate>
          
          {/* Contact Options */}
          <ScrollAnimate delay={200}>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-border p-6 rounded-lg">
                <h3 className="font-heading text-xl font-bold mb-3">For Students</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Want to attend our next workshop? Drop us a message and we'll add you to our notification list.
                </p>
              </div>
              
              <div className="border border-border p-6 rounded-lg">
                <h3 className="font-heading text-xl font-bold mb-3">For Institutions</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Schools, colleges, corporates—we'll tailor our sessions to fit your audience and schedule.
                </p>
              </div>
              
              <div className="border border-border p-6 rounded-lg">
                <h3 className="font-heading text-xl font-bold mb-3">For Volunteers</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Want to help spread cyber-safety awareness? We're always looking for passionate volunteers.
                </p>
              </div>
            </div>
          </ScrollAnimate>
          
          {/* Footer */}
          <ScrollAnimate delay={300}>
            <div className="mt-16 pt-8 border-t border-border">
              <p className="text-muted-foreground">
                Based in Delhi & Gurugram • Backed by Local Police • Made with ❤️ by Swyam/Kavya, for HackHalt
              </p>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
};

export default CTASection;