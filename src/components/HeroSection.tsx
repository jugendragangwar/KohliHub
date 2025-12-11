import { useEffect, useRef } from "react";
import gsap from "gsap";
import Logo from "../assets/Logo.png";
import heroMain from "@/assets/hero-main.png";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      }).from(
        subtitleRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      <div className="absolute top-6 left-6 z-20">
        <img src={Logo} alt="Logo" className="w-32 md:w-40 object-contain" />
      </div>
      {/* Background Image with Parallax */}
      <div className="parallax-image absolute inset-0 md:top-14 w-full h-[150%] -top-[10%]">
        <img
          src={heroMain}
          alt="Cricket Superstar Hero"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.15)_0%,transparent_70%)] animate-glow-pulse" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <h1
          ref={titleRef}
          className="font-display text-7xl md:text-9xl font-bold tracking-tight mb-6"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--primary)) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "0 0 80px hsl(var(--primary) / 0.3)",
          }}
        >
          BORN TO WIN
        </h1>
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-muted-foreground font-body tracking-wide uppercase"
        >
          Champion • Leader • Icon
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up">
        <span className="text-sm text-muted-foreground tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-[2px] h-16 bg-gradient-to-b from-primary to-transparent animate-glow-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
