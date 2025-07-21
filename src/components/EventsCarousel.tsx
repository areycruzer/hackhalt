import { useState, useEffect } from "react";
import { ScrollAnimate } from "@/hooks/useScrollAnimation";

const EventsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const events = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop&crop=center",
      title: "Cybersecurity Workshop at Delhi University",
      description: "150+ students learned about digital safety"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop&crop=center",
      title: "Corporate Training Session",
      description: "Tech professionals upskilling in cyber awareness"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop&crop=center",
      title: "School Outreach Program",
      description: "Making cybersecurity fun for young minds"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=center",
      title: "Community Safety Drive",
      description: "NGO collaboration for digital literacy"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&crop=center",
      title: "Police Department Partnership",
      description: "Training session with cybercrime unit"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === events.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, [events.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? events.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === events.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section id="events" className="py-20 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <ScrollAnimate>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-center">
              Our <span className="text-muted-foreground">Impact</span> in Action
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-16">
              Real moments from our cybersecurity workshops and community outreach programs.
            </p>
          </ScrollAnimate>
          
          {/* Carousel Container */}
          <ScrollAnimate delay={200}>
            <div className="relative">
              <div className="overflow-hidden rounded-lg">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {events.map((event) => (
                    <div key={event.id} className="w-full flex-shrink-0 relative">
                      <div className="relative group">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-96 object-cover"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-8 text-white">
                            <h3 className="font-heading text-2xl font-bold mb-2 text-foreground">
                              {event.title}
                            </h3>
                            <p className="text-muted-foreground">
                              {event.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background border border-border p-3 rounded-full transition-colors duration-200"
                aria-label="Previous image"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-foreground">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background border border-border p-3 rounded-full transition-colors duration-200"
                aria-label="Next image"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-foreground">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {events.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentIndex
                        ? "bg-foreground"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
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