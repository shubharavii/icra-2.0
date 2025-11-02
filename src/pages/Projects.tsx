import { useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import VideoModal from "@/components/VideoModal";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import video1 from "@/assets/video-1.mp4";
import video2 from "@/assets/video-2.mp4";
import video3 from "@/assets/video-3.mp4";
import video4 from "@/assets/video-4.mp4";

const Projects = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const images = [
    { src: project1, alt: "Smart touchscreen control panel installation" },
    { src: project2, alt: "Modern conference room AV setup" },
    { src: project3, alt: "Professional meeting room installation" },
    { src: project4, alt: "Corporate boardroom technology integration" },
  ];

  const videos = [
    { src: video1 },
    { src: video2 },
    { src: video3 },
    { src: video4 },
  ];

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Our Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Explore our portfolio of successful automation and AV integration projects
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card/30 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary transition-smooth">
              <p className="text-5xl font-bold text-gradient">200+</p>
              <p className="text-xl text-muted-foreground">Projects Completed</p>
            </div>
            <div className="space-y-2 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary transition-smooth">
              <p className="text-5xl font-bold text-gradient">50+</p>
              <p className="text-xl text-muted-foreground">Happy Clients</p>
            </div>
            <div className="space-y-2 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary transition-smooth">
              <p className="text-5xl font-bold text-gradient">90%</p>
              <p className="text-xl text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Images */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Project Gallery
          </h2>
          <p className="text-center text-primary mb-12">
            Showcasing our completed installations
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-elegant hover:shadow-glow-blue transition-smooth hover-lift border border-border hover:border-primary"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Videos */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Project Videos
          </h2>
          <p className="text-center text-accent-orange mb-12">
            Watch our projects in action
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-elegant hover:shadow-glow-orange transition-smooth hover-lift cursor-pointer border border-border hover:border-accent-orange"
                onClick={() => setSelectedVideo(video.src)}
              >
                <video
                  src={video.src}
                  className="w-full h-80 object-cover"
                  muted
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-primary rounded-full p-6 group-hover:scale-110 group-hover:shadow-glow-blue transition-all duration-300">
                    <Play className="h-12 w-12 text-white fill-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-secondary border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create something amazing together
          </p>
          <a href="/contact">
            <Button size="lg" variant="secondary">
              Contact Us Today
            </Button>
          </a>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        videoSrc={selectedVideo || ""}
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
};

export default Projects;
