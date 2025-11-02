import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const Reviews = () => {
  const reviews = [
    {
      name: "Rajesh Kumar",
      company: "Tech Solutions Pvt Ltd",
      rating: 5,
      text: "ICRA Technologies delivered exceptional smart home automation for our office. The quality and professionalism exceeded our expectations.",
    },
    {
      name: "Priya Sharma",
      company: "Modern Homes",
      rating: 5,
      text: "Outstanding work on our conference room AV setup. The team was professional, punctual, and delivered beyond our requirements.",
    },
    {
      name: "Amit Patel",
      company: "Corporate Spaces",
      rating: 5,
      text: "Excellent automation solutions! The touchscreen controls and lighting systems are intuitive and reliable. Highly recommended.",
    },
    {
      name: "Sunita Reddy",
      company: "Premium Properties",
      rating: 5,
      text: "ICRA transformed our entire office with cutting-edge automation. Their attention to detail and customer service is remarkable.",
    },
    {
      name: "Vikram Singh",
      company: "Enterprise Solutions",
      rating: 5,
      text: "Best-in-class automation and AV integration. The team's expertise and support throughout the project was exceptional.",
    },
    {
      name: "Meera Krishnan",
      company: "Smart Buildings Inc",
      rating: 5,
      text: "Flawless execution of our building automation project. ICRA's innovative solutions have significantly improved our operations.",
    },
    {
      name: "Arun Mehta",
      company: "Future Tech Enterprises",
      rating: 5,
      text: "Professional, reliable, and innovative. ICRA Technologies is our go-to partner for all automation and AV needs.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const visibleReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
    reviews[(currentIndex + 2) % reviews.length],
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          What Our Clients Say
        </h2>
        <p className="text-center text-primary mb-12">
          90% client satisfaction rate
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleReviews.map((review, index) => (
            <div
              key={`${review.name}-${index}`}
              className="bg-card border border-border rounded-xl p-6 shadow-elegant hover:shadow-glow-blue hover:border-primary transition-smooth animate-fade-in"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent-orange text-accent-orange" />
                ))}
              </div>
              <p className="text-foreground mb-4">{review.text}</p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
