import { Button } from "@/components/ui/button";
import { ScrollAnimate } from "@/hooks/useScrollAnimation";
import { GraduationCap, Building, Users } from "lucide-react"; // Icons

const CTASection = () => {
  return (
    <section id="contact" className="py-20 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main CTA */}
          <ScrollAnimate>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Join the Cyber Awareness Movement
            </h2>
            <p className="text-xl mb-10 text-muted-foreground">
              Whether you're a student, educator, or a changemaker — we’d love to collaborate with you.
            </p>
            <a href="https://linktr.ee/hackhalt" target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="lg" className="px-10 text-lg">
                Get In Touch
              </Button>
            </a>
          </ScrollAnimate>

          {/* Contact Options */}
          <ScrollAnimate delay={200}>
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              {/* For Students */}
              <div className="border border-border bg-muted/30 p-6 rounded-xl text-left hover:shadow-lg transition-all">
                <div className="flex items-center mb-4 text-primary">
                  <GraduationCap className="w-6 h-6 mr-2" />
                  <h3 className="font-heading text-lg font-semibold">For Students</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Want to be notified about our next workshop or awareness event? Reach out to get involved!
                </p>
              </div>

              {/* For Institutions */}
              <div className="border border-border bg-muted/30 p-6 rounded-xl text-left hover:shadow-lg transition-all">
                <div className="flex items-center mb-4 text-primary">
                  <Building className="w-6 h-6 mr-2" />
                  <h3 className="font-heading text-lg font-semibold">For Institutions</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Invite us to your school, college, or company. We tailor sessions to fit your audience & needs.
                </p>
              </div>

              {/* For Volunteers */}
              <div className="border border-border bg-muted/30 p-6 rounded-xl text-left hover:shadow-lg transition-all">
                <div className="flex items-center mb-4 text-primary">
                  <Users className="w-6 h-6 mr-2" />
                  <h3 className="font-heading text-lg font-semibold">For Volunteers</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Passionate about cyber safety? Join our mission and become a part of our volunteer network.
                </p>
              </div>
            </div>
          </ScrollAnimate>

          {/* Footer */}
          <ScrollAnimate delay={300}>
            <div className="mt-16 pt-8 border-t border-border">
              <p className="text-muted-foreground text-sm">
                Based in Delhi & Gurugram • Backed by Local Police • Built with ❤️ by Swyam & Kavya for HackHalt
              </p>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
