import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Home,
  Monitor,
  Lightbulb,
  Music,
  Video,
  Settings,
  Smartphone,
  Wifi,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Smart Home Automation",
      description:
        "Complete home automation solutions including lighting, climate control, security, and entertainment systems.",
      features: [
        "Automated lighting control",
        "Climate and temperature management",
        "Security and surveillance integration",
        "Voice control compatibility",
      ],
    },
    {
      icon: Monitor,
      title: "AV Integration",
      description:
        "Professional audio-visual systems for residential and commercial spaces with seamless integration.",
      features: [
        "High-quality audio systems",
        "Video display solutions",
        "Multi-room AV distribution",
        "Custom control interfaces",
      ],
    },
    {
      icon: Video,
      title: "Conference Room Solutions",
      description:
        "State-of-the-art meeting room technology for productive and efficient business communications.",
      features: [
        "Video conferencing systems",
        "Interactive displays",
        "Wireless presentation",
        "Room scheduling systems",
      ],
    },
    {
      icon: Lightbulb,
      title: "Lighting Control",
      description:
        "Advanced lighting systems with intelligent control for ambiance, energy efficiency, and convenience.",
      features: [
        "Touchscreen control panels",
        "Scene programming",
        "Automated schedules",
        "Energy-efficient solutions",
      ],
    },
    {
      icon: Music,
      title: "Multi-Room Audio",
      description:
        "Distributed audio systems for whole-home or commercial space sound coverage.",
      features: [
        "Zone-based control",
        "Streaming integration",
        "High-fidelity speakers",
        "Centralized management",
      ],
    },
    {
      icon: Settings,
      title: "System Integration",
      description:
        "Seamless integration of all automation and AV systems for unified control and management.",
      features: [
        "Single interface control",
        "Cross-platform compatibility",
        "Custom programming",
        "Scalable solutions",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Control",
      description:
        "Control your entire space from anywhere using intuitive mobile applications.",
      features: [
        "iOS and Android apps",
        "Remote access",
        "Real-time monitoring",
        "Push notifications",
      ],
    },
    {
      icon: Wifi,
      title: "Network Infrastructure",
      description:
        "Robust networking solutions to support all your automation and connectivity needs.",
      features: [
        "Reliable Wi-Fi coverage",
        "Wired network infrastructure",
        "Network security",
        "High-speed connectivity",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Comprehensive automation and AV solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl shadow-elegant border border-border hover:border-primary hover:shadow-glow-blue transition-smooth hover-lift group"
              >
                <service.icon className="h-12 w-12 text-primary mb-4 group-hover:animate-float" />
                <h3 className="text-2xl font-semibold mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-card/20 border-y border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Understanding your needs and vision",
              },
              {
                step: "02",
                title: "Design",
                description: "Creating customized solutions",
              },
              {
                step: "03",
                title: "Installation",
                description: "Professional implementation",
              },
              {
                step: "04",
                title: "Support",
                description: "Ongoing maintenance and service",
              },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4 p-6 bg-card/50 rounded-xl border border-border hover:border-accent-orange transition-smooth">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center text-foreground font-bold text-xl mx-auto shadow-glow-orange">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can transform your space
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Request a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
