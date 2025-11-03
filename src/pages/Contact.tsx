import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import mapQrCode from "@/assets/map-qr-code.png";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: [
        { label: "Managing Director", value: "+91 81518 79391", name: "Chandra Shekar Gowda BM" },
        {
          label: "Creative Director",
          value: "+91 94813 25000",
          name: "Ravikeerthana Chandrashekhar",
        },
      ],
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        { label: "General Inquiries", value: "icratechnologies25@gmail.com" },
      ],
    },
    {
      icon: MapPin,
      title: "Address",
      details: [
        {
          label: "Office Location",
          value: "#F-509, BEL Layout, 1st Stage, Bharatnagar, Herohalli, Bangalore - 560091",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Let's discuss how we can transform your space with smart automation
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl shadow-elegant border border-border hover:border-primary hover:shadow-glow-blue transition-smooth hover-lift text-center"
              >
                <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-6 text-foreground">{item.title}</h3>
                <div className="space-y-4">
                  {item.details.map((detail, idx) => (
                    <div key={idx} className="space-y-1">
                      {detail.name && (
                        <p className="font-semibold text-foreground">{detail.name}</p>
                      )}
                      <p className="text-sm text-muted-foreground">{detail.label}</p>
                      <p className="text-foreground">{detail.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-card/20 border-y border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Visit Our Office
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-xl shadow-elegant overflow-hidden p-8 hover:border-primary transition-smooth">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="text-center md:text-left space-y-4 flex-1">
                  <MapPin className="h-16 w-16 text-primary mx-auto md:mx-0" />
                  <div>
                    <p className="text-2xl font-semibold mb-3 text-foreground">ICRA Technologies</p>
                    <p className="text-lg text-muted-foreground">
                      #F-509, BEL Layout, 1st Stage
                    </p>
                    <p className="text-lg text-muted-foreground">
                      Bharatnagar, Herohalli
                    </p>
                    <p className="text-lg text-muted-foreground">Bangalore - 560091</p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="bg-white p-4 rounded-xl shadow-lg">
                    <img 
                      src={mapQrCode} 
                      alt="Scan for Google Maps location" 
                      className="w-48 h-48 object-contain"
                    />
                    <p className="text-center text-sm text-gray-600 mt-2">Scan to navigate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social & Website */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">
              Connect With Us
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button size="lg">
                  <Instagram className="mr-2 h-5 w-5" />
                  Follow us on Instagram
                </Button>
              </a>
            </div>
            <div className="pt-8">
              <p className="text-muted-foreground mb-2">Visit our website</p>
              <a
                href="http://www.icratechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-primary hover:text-primary-glow transition-smooth font-semibold"
              >
                www.icratechnologies.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-secondary border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Reach out today and let's bring your automation vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918151879391">
              <Button size="lg" variant="secondary">
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </Button>
            </a>
            <a href="mailto:icratechnologies25@gmail.com">
              <Button size="lg" variant="outline">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
