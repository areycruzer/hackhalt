import { ScrollAnimate } from "@/hooks/useScrollAnimation";
import teamImage from "../assets/HackHalt-Teams.png"; // ✅ Correct image import path

const teamMembers = [
  "Sonu Kumar",
  "Abhinav Kapur",
  "Krish Gupta",
  "Sanjana",
  "Kavya Bhatia",
  "Mridula Kapoor",
  "Shivam Rawat",
  "Swyam Sharma",
  "Lakshya Madaan",
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 border-t border-border bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Heading */}
        <ScrollAnimate>
          <h2 className="text-center font-heading text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="text-muted-foreground">Team</span>
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12">
            A collective of young changemakers driven by a mission to create cyber awareness and digital safety across India.
          </p>
        </ScrollAnimate>

        {/* Center Group Image */}
        <ScrollAnimate delay={200}>
          <div className="flex justify-center mb-12">
            <img
              src={teamImage}
              alt="HackHalt Team"
              className="rounded-2xl shadow-lg max-w-full w-full md:w-2/3 object-cover"
            />
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
};

export default TeamSection;
