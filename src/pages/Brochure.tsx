import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { ChevronLeft, ChevronRight, Volume2, VolumeX, BookOpen, Home, Maximize2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoShapes from "@/assets/logo-new.png";
import officeBg from "@/assets/office-bg.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import video1 from "@/assets/video-1.mp4";
import video2 from "@/assets/video-2.mp4";

const Brochure = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<"next" | "prev">("next");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playPageFlipSound = useCallback(() => {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }
      const ctx = audioCtxRef.current;
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();
      const noise = ctx.createBufferSource();
      const bufferSize = ctx.sampleRate * 0.15;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 3) * 0.3;
      }
      noise.buffer = buffer;
      const filter = ctx.createBiquadFilter();
      filter.type = "highpass";
      filter.frequency.value = 2000;
      noise.connect(filter);
      filter.connect(gain);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
      gain.connect(ctx.destination);
      noise.start(ctx.currentTime);
      noise.stop(ctx.currentTime + 0.15);
    } catch (e) {
      // Audio not supported
    }
  }, [soundEnabled]);

  const pages = useMemo(() => [
    // Page 0: Cover
    {
      id: "cover",
      content: (
        <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
          style={{ backgroundImage: `url(${officeBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0 bg-background/70" />
          <div className="absolute inset-0 bg-gradient-hero opacity-60" />
          <div className="relative z-10 text-center px-6 space-y-6">
            <img src={logoShapes} alt="ICRA Technologies" className="h-32 md:h-48 mx-auto object-contain animate-float" />
            <h1 className="text-3xl md:text-5xl font-bold text-foreground" style={{ textShadow: '0 0 20px rgba(14, 165, 233, 0.8)' }}>
              ICRA TECHNOLOGIES
            </h1>
            <p className="text-lg md:text-xl italic text-foreground/80">"Right Ideas to Bright Ideas"</p>
            <div className="w-24 h-0.5 mx-auto bg-gradient-primary" />
            <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto">
              Leading provider of smart automation and AV integration solutions
            </p>
            <p className="text-xs text-muted-foreground/60 mt-8">Swipe or click arrows to explore →</p>
          </div>
        </div>
      ),
    },
    // Page 1: About
    {
      id: "about",
      content: (
        <div className="w-full h-full flex flex-col bg-background p-6 md:p-10 overflow-y-auto">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest text-primary mb-2">About Us</p>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Our Story</h2>
            <div className="w-16 h-0.5 bg-gradient-primary mb-6" />
          </div>
          <div className="space-y-4 text-muted-foreground text-sm md:text-base flex-1">
            <p>ICRA Technologies is a leading provider of smart home automation and audio-visual integration solutions in India. With over a decade of experience, we have successfully completed 150+ projects for 50+ enterprise clients.</p>
            <p>Our expertise spans across residential and commercial automation, conference room solutions, lighting control systems, and comprehensive AV integration.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-6">
            {[
              { value: "150+", label: "Projects" },
              { value: "50+", label: "Clients" },
              { value: "90%", label: "Satisfaction" },
              { value: "10+", label: "Years" },
            ].map((s, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-3 text-center">
                <p className="text-xl md:text-2xl font-bold text-gradient">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    // Page 2: Services
    {
      id: "services",
      content: (
        <div className="w-full h-full flex flex-col bg-background p-6 md:p-10 overflow-y-auto">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest text-primary mb-2">What We Do</p>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <div className="w-16 h-0.5 bg-gradient-primary mb-4" />
          </div>
          <div className="grid grid-cols-2 gap-3 flex-1">
            {[
              { icon: "🏠", title: "Smart Home", desc: "Complete home automation" },
              { icon: "🎬", title: "AV Integration", desc: "Professional AV systems" },
              { icon: "📊", title: "Conference", desc: "Meeting room tech" },
              { icon: "💡", title: "Lighting", desc: "Intelligent controls" },
              { icon: "🎵", title: "Multi-Room Audio", desc: "Distributed sound" },
              { icon: "⚙️", title: "System Integration", desc: "Unified control" },
              { icon: "📱", title: "Mobile Control", desc: "Control from anywhere" },
              { icon: "📡", title: "Networking", desc: "Robust infrastructure" },
            ].map((s, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-3 hover:border-primary transition-smooth">
                <span className="text-2xl">{s.icon}</span>
                <h3 className="font-semibold text-foreground text-sm mt-1">{s.title}</h3>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    // Page 3: Projects Gallery
    {
      id: "gallery",
      content: (
        <div className="w-full h-full flex flex-col bg-background p-6 md:p-10 overflow-y-auto">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest text-primary mb-2">Our Work</p>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Project Gallery</h2>
            <div className="w-16 h-0.5 bg-gradient-primary mb-4" />
          </div>
          <div className="grid grid-cols-2 gap-3 flex-1">
            {[project1, project2, project3, project4].map((src, i) => (
              <div key={i} className="relative rounded-lg overflow-hidden border border-border group">
                <img src={src} alt={`Project ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      ),
    },
    // Page 4: Videos
    {
      id: "videos",
      content: (
        <div className="w-full h-full flex flex-col bg-background p-6 md:p-10 overflow-y-auto">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest text-accent-orange mb-2">In Action</p>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Project Videos</h2>
            <div className="w-16 h-0.5 bg-gradient-secondary mb-4" />
          </div>
          <div className="grid grid-cols-1 gap-4 flex-1">
            <div className="rounded-lg overflow-hidden border border-border">
              <video src={video1} controls muted playsInline className="w-full h-auto" />
            </div>
            <div className="rounded-lg overflow-hidden border border-border">
              <video src={video2} controls muted playsInline className="w-full h-auto" />
            </div>
          </div>
        </div>
      ),
    },
    // Page 5: Leadership
    {
      id: "leadership",
      content: (
        <div className="w-full h-full flex flex-col bg-background p-6 md:p-10 overflow-y-auto">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest text-primary mb-2">Leadership</p>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Our Team</h2>
            <div className="w-16 h-0.5 bg-gradient-primary mb-6" />
          </div>
          <div className="space-y-6 flex-1">
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary transition-smooth">
              <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-foreground">Chandra Shekar Gowda BM</h3>
              <p className="text-primary font-medium text-sm">Director</p>
              <p className="text-muted-foreground text-sm mt-2">Leading ICRA Technologies with vision and innovation</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-accent-orange transition-smooth">
              <div className="w-20 h-20 bg-gradient-secondary rounded-full mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-foreground">Ravikeerthana Chandrashekhar</h3>
              <p className="text-accent-orange font-medium text-sm">Director</p>
              <p className="text-muted-foreground text-sm mt-2">Driving creative excellence in every project</p>
            </div>
          </div>
          <div className="mt-6 bg-card/50 border border-border rounded-xl p-4">
            <h4 className="font-semibold text-foreground mb-2 text-sm">Our Values</h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
              <p>✦ Quality & Innovation</p>
              <p>✦ Integrity</p>
              <p>✦ Customer Satisfaction</p>
              <p>✦ Excellence</p>
            </div>
          </div>
        </div>
      ),
    },
    // Page 6: Contact / Back Cover
    {
      id: "contact",
      content: (
        <div className="w-full h-full flex flex-col items-center justify-center bg-background p-6 md:p-10 overflow-y-auto">
          <div className="text-center space-y-6 max-w-sm">
            <img src={logoShapes} alt="ICRA Technologies" className="h-24 mx-auto object-contain" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Get in Touch</h2>
            <div className="w-16 h-0.5 mx-auto bg-gradient-primary" />
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>📞 +91 81518 79391</p>
              <p>📞 +91 94813 25000</p>
              <p>✉️ icratechnologies25@gmail.com</p>
              <p>📍 #F-509, BEL Layout, 1st Stage, Bharatnagar, Herohalli, Bangalore - 560091</p>
            </div>
            <Link to="/contact">
              <Button size="lg" className="mt-4">Contact Us</Button>
            </Link>
            <p className="text-xs text-muted-foreground/50 mt-8">www.icratechnologies.com</p>
          </div>
        </div>
      ),
    },
  ], []);

  const totalPages = pages.length;

  const goToPage = useCallback((direction: "next" | "prev") => {
    if (isFlipping) return;
    const nextPage = direction === "next" ? currentPage + 1 : currentPage - 1;
    if (nextPage < 0 || nextPage >= totalPages) return;

    setFlipDirection(direction);
    setIsFlipping(true);
    playPageFlipSound();

    setTimeout(() => {
      setCurrentPage(nextPage);
      setIsFlipping(false);
    }, 500);
  }, [isFlipping, currentPage, totalPages, playPageFlipSound]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goToPage("next");
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPage("prev");
      } else if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToPage, isFullscreen]);

  // Touch/swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      goToPage(diff > 0 ? "next" : "prev");
    }
    setTouchStart(null);
  };

  const getFlipClass = () => {
    if (!isFlipping) return "";
    return flipDirection === "next"
      ? "animate-[flipOut_0.5s_ease-in-out]"
      : "animate-[flipIn_0.5s_ease-in-out]";
  };

  return (
    <div className={`min-h-screen pt-20 bg-background flex flex-col ${isFullscreen ? "fixed inset-0 z-50 pt-0" : ""}`}>
      {/* Top bar */}
      <div className={`flex items-center justify-between px-4 py-3 border-b border-border bg-card/50 backdrop-blur-sm ${isFullscreen ? "" : ""}`}>
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          <span className="text-sm font-semibold text-foreground hidden sm:inline">ICRA Brochure</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span>{currentPage + 1} / {totalPages}</span>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setSoundEnabled(!soundEnabled)}>
            {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsFullscreen(!isFullscreen)}>
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Book container */}
      <div
        ref={containerRef}
        className="flex-1 flex items-center justify-center p-4 md:p-8 relative select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Navigation arrows */}
        {currentPage > 0 && (
          <button
            onClick={() => goToPage("prev")}
            className="absolute left-2 md:left-6 z-20 p-2 md:p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:border-primary hover:shadow-glow-blue transition-smooth"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
          </button>
        )}
        {currentPage < totalPages - 1 && (
          <button
            onClick={() => goToPage("next")}
            className="absolute right-2 md:right-6 z-20 p-2 md:p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:border-primary hover:shadow-glow-blue transition-smooth"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
          </button>
        )}

        {/* The book page */}
        <div
          className="w-full max-w-lg mx-auto relative"
          style={{ perspective: "1500px" }}
        >
          <div
            className={`w-full bg-card border border-border rounded-xl shadow-elegant overflow-hidden ${getFlipClass()}`}
            style={{
              aspectRatio: "3/4",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
          >
            {pages[currentPage].content}
          </div>

          {/* Page edge shadow effect */}
          <div className="absolute right-0 top-2 bottom-2 w-1 bg-gradient-to-l from-border/50 to-transparent rounded-r-xl" />
        </div>
      </div>

      {/* Page dots */}
      <div className="flex items-center justify-center gap-2 pb-4">
        {pages.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (i !== currentPage && !isFlipping) {
                setFlipDirection(i > currentPage ? "next" : "prev");
                setIsFlipping(true);
                playPageFlipSound();
                setTimeout(() => {
                  setCurrentPage(i);
                  setIsFlipping(false);
                }, 500);
              }
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentPage ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
            }`}
          />
        ))}
      </div>

      <style>{`
        @keyframes flipOut {
          0% { transform: rotateY(0deg); opacity: 1; }
          50% { transform: rotateY(-90deg); opacity: 0.5; }
          100% { transform: rotateY(-90deg); opacity: 0; }
        }
        @keyframes flipIn {
          0% { transform: rotateY(90deg); opacity: 0; }
          50% { transform: rotateY(90deg); opacity: 0.5; }
          100% { transform: rotateY(0deg); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Brochure;
