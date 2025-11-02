const ClientLogos = () => {
  const clients = [
    "Infosys", "TCS", "Wipro", "Tech Mahindra", "HCL",
    "Cognizant", "L&T", "Reliance", "Tata Motors", "Mahindra",
    "Bharti Airtel", "ICICI Bank", "HDFC Bank", "Asian Paints",
  ];

  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Trusted by Leading Indian MNCs
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Proudly serving 50+ enterprise clients across India
        </p>
      </div>
      <div className="relative">
        <div className="flex animate-scroll">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 px-8 py-4 bg-white rounded-lg shadow-md hover:shadow-glow transition-smooth"
            >
              <p className="text-lg font-semibold text-foreground whitespace-nowrap">
                {client}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
