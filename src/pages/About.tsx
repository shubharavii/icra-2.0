import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To deliver innovative automation solutions that enhance comfort, efficiency, and sustainability in modern spaces.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be India's most trusted partner for smart automation and AV integration, setting industry standards for excellence.",
    },
    {
      icon: Award,
      title: "Our Values",
      description:
        "Quality, innovation, integrity, and customer satisfaction drive everything we do at ICRA Technologies.",
    },
    {
      icon: Users,
      title: "Our Team",
      description:
        "Experienced professionals dedicated to transforming spaces with cutting-edge automation technology.",
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            About ICRA Technologies
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Right Ideas to Bright Ideas
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
            <p>
              ICRA Technologies is a leading provider of smart home automation and
              audio-visual integration solutions in India. With over a decade of experience,
              we have successfully completed 200+ projects for 50+ enterprise clients.
            </p>
            <p>
              Our expertise spans across residential and commercial automation, conference
              room solutions, lighting control systems, and comprehensive AV integration.
              We pride ourselves on delivering innovative solutions that enhance comfort,
              efficiency, and productivity.
            </p>
            <p>
              What sets us apart is our commitment to quality, innovation, and customer
              satisfaction. Our 90% client satisfaction rate speaks to our dedication to
              excellence in every project we undertake.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card/20 border-y border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">
            What Drives Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl shadow-elegant border border-border hover:border-primary hover:shadow-glow-blue transition-smooth hover-lift"
              >
                <value.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-8 rounded-xl shadow-elegant border border-border hover:border-primary hover:shadow-glow-blue transition-smooth text-center">
              <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-foreground">
                Chandra Shekar Gowda BM
              </h3>
              <p className="text-primary font-medium mb-4">Managing Director</p>
              <p className="text-muted-foreground">
                Leading ICRA Technologies with vision and innovation
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-elegant border border-border hover:border-accent-orange hover:shadow-glow-orange transition-smooth text-center">
              <div className="w-24 h-24 bg-gradient-secondary rounded-full mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-foreground">
                Ravikeerthana Chandrashekhar
              </h3>
              <p className="text-accent-orange font-medium mb-4">Creative Director</p>
              <p className="text-muted-foreground">
                Driving creative excellence in every project
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-secondary border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Join Our Journey
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the ICRA difference in automation excellence
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
