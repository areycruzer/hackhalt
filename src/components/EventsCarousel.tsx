import { useState, useEffect } from "react";
import { ScrollAnimate } from "@/hooks/useScrollAnimation";

const EventsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const events = [
    {
      id: 1,
      image: "src/assets/Police.jpg",
      title: "Police Department Partnership",
      description: "Training session with cybercrime unit",
    },
    {
      id: 2,
      image: "src/assets/Session 2.jpg",
      title: "School Outreach Program",
      description: "Making cybersecurity fun for young minds",
    },
    {
      id: 3,
      image: "src/assets/teachers.jpeg",
      title: "Cybersecurity Awareness for Teachers",
      description: "Empowering 80+ educators with essential cybersecurity knowledge",
    },
    {
      id: 4,
      image: "src/assets/Professional.jpg",
      title: "Corporate Training Session",
      description: "Working professionals upskilling in cyber awareness",
    },
    {
      id: 5,
      image: "src/assets/Session 4.jpg",
      title: "Cybersecurity Awareness in Village",
      description: "Bridging the digital safety gap in rural areas",
    },
    {
      id: 6,
      image: "src/assets/NGO.jpg",
      title: "Community Safety Drive",
      description: "NGO collaboration for digital literacy",
    },
  ];

  // Auto scroll every 12 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
    }, 12000);
    return () => clearInterval(interval);
  }, [events.length]);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const goToPrevious = () => setCurrentIndex(currentIndex === 0 ? events.length - 1 : currentIndex - 1);
  const goToNext = () => setCurrentIndex(currentIndex === events.length - 1 ? 0 : currentIndex + 1);

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
            <div className="relative">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <div
                  className="flex transition-transform duration-[1800ms] ease-in-out"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    width: `${events.length * 100}%`,
                  }}
                >
                  {events.map((event) => (
                    <div key={event.id} className="w-full flex-shrink-0">
                      <div className="relative group w-full h-[400px] sm:h-[500px] md:h-[550px]">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover object-center rounded-xl"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-6 sm:p-8 text-left w-full">
                            <h3 className="text-2xl font-semibold text-white mb-2">{event.title}</h3>
                            <p className="text-white/80">{event.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white border border-border text-black p-2 rounded-full shadow"
                aria-label="Previous"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M15 18L9 12L15 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white border border-border text-black p-2 rounded-full shadow"
                aria-label="Next"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 18L15 12L9 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex justify-center mt-6 gap-2">
                {events.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex
                        ? "bg-foreground"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
};

export default EventsCarousel;
