import { useEffect, useRef } from "react";
import kohli1 from "../assets/kohli1.webp";
import gsap from "gsap";

const AboutSection = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-content", {
        x: -80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 70%",
        },
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
     <h2 className="font-display text-5xl md:text-7xl font-bold text-center">BORN TO CHASE, BUILT TO CONCUER</h2>
      <section
        ref={aboutRef}
        className="reveal-section relative py-32 px-6 min-h-screen flex items-center"
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="about-content space-y-8">
              <div className="space-y-4">
                <div className="text-sm uppercase tracking-widest text-primary">
                  About
                </div>
                <h2 className="font-display text-5xl md:text-7xl font-bold">
                  LEGACY IN
                  <br />
                  <span
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    THE MAKING
                  </span>
                </h2>
              </div>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  From the dusty grounds of youth cricket to the grand stadiums
                  of international glory, every step has been driven by an
                  unwavering commitment to excellence.
                </p>
                <p>
                  More than just statistics and records, it's about inspiring
                  millions, leading with integrity, and redefining what it means
                  to be a champion both on and off the field.
                </p>
                <p className="text-foreground font-medium">
                  "Success is not the destination. It's the relentless pursuit
                  of perfection."
                </p>
              </div>

              {/* Signature */}
              <div className="pt-8 border-t border-border">
                <div className="font-display text-2xl tracking-wider">
                  The Champion
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div
              className="relative bg-cover bg-center bg-no-repeat rounded-2xl"
              style={{
                backgroundImage: `url(${kohli1})`,
              }}
            >
              <div className="aspect-square rounded-2xl border border-primary/10 p-12 flex items-center justify-center bg-black/20">
                <div className="text-center space-y-6">
                  <div className="font-display text-8xl font-bold text-white">
                    #1
                  </div>

                  <div className="text-xl uppercase tracking-widest text-white/80">
                    Ranked
                    <br />
                    Superstar
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
              <div
                className="absolute -bottom-6 -left-6 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-glow-pulse"
                style={{ animationDelay: "1.5s" }}
              />
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default AboutSection;
