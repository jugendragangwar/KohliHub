import { useEffect, useRef } from "react";
import gsap from "gsap";
import portraitIntense from "@/assets/portrait-intense.webp";
import trainingGym from "@/assets/training-gym.png";
import luxuryCasual from "@/assets/luxury-casual.webp";
import actionCricket from "@/assets/action-cricket.webp";
import victoryCelebration from "@/assets/victory-celebration.webp";

const galleryImages = [
  {
    src: portraitIntense,
    title: "Intensity",
    category: "Portrait",
  },
  {
    src: trainingGym,
    title: "Dedication",
    category: "Training",
  },
  {
    src: luxuryCasual,
    title: "Style",
    category: "Lifestyle",
  },
  {
    src: actionCricket,
    title: "Action",
    category: "Performance",
  },
  {
    src: victoryCelebration,
    title: "Victory",
    category: "Triumph",
  },
];

const GallerySection = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gallery-item", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 70%",
        },
      });
    }, galleryRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={galleryRef}
      className="reveal-section relative py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-4">
            THE JOURNEY
          </h2>
          <p className="text-lg text-muted-foreground uppercase tracking-wide">
            Moments that define greatness
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item group relative aspect-[4/5] overflow-hidden rounded-2xl"
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-xs uppercase tracking-widest text-primary mb-2">
                  {image.category}
                </div>
                <h3 className="font-display text-4xl font-bold mb-4">
                  {image.title}
                </h3>
                
                {/* View indicator */}
                <div className="flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="uppercase tracking-wider">View</span>
                  <div className="w-8 h-[2px] bg-primary" />
                </div>
              </div>

              {/* Border glow effect */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-2xl transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
