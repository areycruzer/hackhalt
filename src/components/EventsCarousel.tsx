import { ScrollAnimate } from "@/hooks/useScrollAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import policeImage from "@/assets/Police.jpg";
import session2Image from "@/assets/Session_2.jpg";
import teachersImage from "@/assets/teachers.jpeg";
import professionalImage from "@/assets/Professional.jpg";
import session4Image from "@/assets/Session_4.jpg";
import ngoImage from "@/assets/NGO.jpg";

const events = [
  {
    id: 1,
    image: policeImage,
    title: "Police Department Partnership",
    description: "Training session with cybercrime unit",
  },
  {
    id: 2,
    image: session2Image,
    title: "School Outreach Program",
    description: "Making cybersecurity fun for young minds",
  },
  {
    id: 3,
    image: teachersImage,
    title: "Cybersecurity Awareness for Teachers",
    description: "Empowering 80+ educators with essential cybersecurity knowledge",
  },
  {
    id: 4,
    image: professionalImage,
    title: "Corporate Training Session",
    description: "Working professionals upskilling in cyber awareness",
  },
  {
    id: 5,
    image: session4Image,
    title: "Cybersecurity Awareness in Village",
    description: "Bridging the digital safety gap in rural areas",
  },
  {
    id: 6,
    image: ngoImage,
    title: "Community Safety Drive",
    description: "NGO collaboration for digital literacy",
  },
];

const EventsCarousel = () => {
  return (
    <section id="events" className="py-20 border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollAnimate>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-muted-foreground">Impact</span> in Action
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Glimpses from our cybersecurity training and awareness drives across India.
            </p>
          </ScrollAnimate>

          <ScrollAnimate delay={200}>
            <Carousel
              plugins={[
                Autoplay({
                  delay: 5000,
                  stopOnInteraction: true,
                }),
              ]}
              opts={{ loop: true }}
              className="relative"
            >
              <CarouselContent>
                {events.map((event) => (
                  <CarouselItem key={event.id}>
                    <div className="relative group w-full h-[400px] sm:h-[500px] md:h-[550px] bg-black rounded-xl overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-contain object-center"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-6 sm:p-8 text-left w-full">
                          <h3 className="text-2xl font-semibold text-white mb-2">{event.title}</h3>
                          <p className="text-white/80">{event.description}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white border-border text-black" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white border-border text-black" />
            </Carousel>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
};

export default EventsCarousel;
