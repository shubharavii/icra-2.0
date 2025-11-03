import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Zap, Shield, Award } from "lucide-react";
import logoMain from "@/assets/logo-main.jpg";
import officeBg from "@/assets/office-bg.jpg";
import ClientLogos from "@/components/ClientLogos";
import Reviews from "@/components/Reviews";

const Home = () => {
  const stats = [
    { icon: CheckCircle, label: "Projects Completed", value: "200+" },
    { icon: Award, label: "Happy Clients", value: "50+" },
    { icon: Shield, label: "Client Satisfaction", value: "90%" },
    { icon: Zap, label: "Years Experience", value: "10+" },
  ];

  const features = [
    {
      title: "Smart Home Automation",
      description: "Transform your space with intelligent automation solutions",
      icon: "🏠",
    },
    {
      title: "AV Integration",
      description: "Professional audio-visual systems for modern spaces",
      icon: "🎬",
    },
    {
      title: "Lighting Control",
      description: "Advanced lighting systems with seamless control",
      icon: "💡",
    },
    {
      title: "Conference Solutions",
      description: "State-of-the-art meeting room technology",
      icon: "📊",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${officeBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        
        <div className="relative z-10 container mx-auto px-4 py-32 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <img
              src={logoMain}
              alt="ICRA Technologies"
              className="mx-auto h-32 md:h-40 object-contain animate-float drop-shadow-2xl"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground drop-shadow-lg">
              Right Ideas to Bright Ideas
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto whitespace-nowrap">
              Leading provider of smart automation and AV integration solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/projects">
                <Button size="lg" variant="default">
                  View Our Projects
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center space-y-3 p-6 rounded-xl bg-card border border-border hover:border-primary hover:shadow-glow-blue transition-smooth hover-lift"
              >
                <stat.icon className="h-12 w-12 mx-auto text-primary" />
                <p className="text-4xl font-bold text-gradient">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive automation and AV solutions for modern spaces
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl shadow-elegant border border-border hover:border-primary hover:shadow-glow-blue transition-smooth hover-lift group"
              >
                <div className="text-5xl mb-4 group-hover:animate-float">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg">
                Learn More About Our Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />

      {/* Reviews */}
      <Reviews />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-secondary border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your automation vision to life
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
