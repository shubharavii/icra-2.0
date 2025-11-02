import { useState } from "react";
import { Play } from "lucide-react";
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
    { src: video1, thumbnail: project1 },
    { src: video2, thumbnail: project2 },
    { src: video3, thumbnail: project3 },
    { src: video4, thumbnail: project4 },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Our Projects
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-fade-in">
            Explore our portfolio of successful automation and AV integration projects
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-5xl font-bold text-gradient">200+</p>
              <p className="text-xl text-muted-foreground">Projects Completed</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-bold text-gradient">50+</p>
              <p className="text-xl text-muted-foreground">Happy Clients</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-bold text-gradient">90%</p>
              <p className="text-xl text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Images */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Project Gallery
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Showcasing our completed installations
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-glow transition-smooth hover-lift"
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Project Videos
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Watch our projects in action
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-glow transition-smooth hover-lift cursor-pointer"
                onClick={() => setSelectedVideo(video.src)}
              >
                <img
                  src={video.thumbnail}
                  alt={`Project video ${index + 1}`}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-white rounded-full p-6 group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-12 w-12 text-primary fill-primary" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together
          </p>
          <a href="/contact">
            <button className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 hover:shadow-glow transition-smooth border-2 border-white">
              Contact Us Today
            </button>
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
