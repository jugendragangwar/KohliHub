import { useEffect, useRef } from "react";
import gsap from "gsap";

const stats = [
  { label: "Centuries", value: "84" },
  { label: "International Matches", value: "550+" },
  { label: "Strike Rate", value: "145" },
  { label: "Awards", value: "30+" },
];

const StatsSection = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-item", {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 75%",
        },
      });
    }, statsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={statsRef}
      className="reveal-section relative py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item relative group"
            >
              <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:scale-105">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-500" />
                
                <div className="relative z-10">
                  <div
                    className="text-5xl md:text-6xl font-display font-bold mb-3"
                    style={{
                      background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
