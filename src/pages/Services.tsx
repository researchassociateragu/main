import { Code, Smartphone, Server, Cloud, Palette, MessageSquare, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      description: "Modern, responsive websites and web applications that drive business growth.",
      features: [
        "Business websites and landing pages",
        "Custom dashboards and admin panels",
        "SaaS platforms and web applications",
        "E-commerce solutions",
        "Progressive Web Apps (PWAs)",
        "API integration and development",
      ],
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: [
        "Flutter mobile applications",
        "React Native development",
        "Native iOS and Android apps",
        "Cross-platform solutions",
        "App Store and Play Store deployment",
        "Mobile app maintenance and updates",
      ],
    },
    {
      icon: <Server className="w-12 h-12" />,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs.",
      features: [
        "Backend systems and APIs",
        "Database design and optimization",
        "Business process automation",
        "Integration with third-party services",
        "Custom CRM and ERP systems",
        "Legacy system modernization",
      ],
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud & DevOps",
      description: "Cloud infrastructure setup, deployment, and continuous integration.",
      features: [
        "AWS, Azure, and GCP setup",
        "Cloud migration and optimization",
        "CI/CD pipeline implementation",
        "Container orchestration (Docker, Kubernetes)",
        "Infrastructure as Code (Terraform)",
        "Monitoring and performance optimization",
      ],
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX Design",
      description: "User-centered designs that enhance experience and drive engagement.",
      features: [
        "User research and persona development",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Responsive and mobile-first design",
        "Usability testing and iteration",
        "Design system creation",
      ],
    },
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: "Tech Consulting",
      description: "Strategic guidance to help you make the right technology decisions.",
      features: [
        "Technology stack selection",
        "Architecture planning and review",
        "Technical roadmap development",
        "Code review and quality assessment",
        "Team training and mentorship",
        "Startup MVP planning",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-[#A020F0]/10 via-background to-[#FF007F]/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9Ii4wMiIvPjwvZz48L3N2Zz4=')] opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-to-r from-[#A020F0] to-[#FF007F] bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            End-to-end technology solutions from strategy and design to full-stack development and deployment.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover-elevate transition-all duration-300"
                data-testid={`service-card-${index}`}
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 p-4 rounded-xl bg-gradient-to-br from-[#A020F0]/10 to-[#FF007F]/10 text-[#00CFFD]">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-foreground mb-3">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start gap-3"
                      data-testid={`feature-${index}-${featureIndex}`}
                    >
                      <CheckCircle className="w-5 h-5 text-[#00CFFD] flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact">
                  <Button
                    variant="default"
                    size="lg"
                    className="w-full group"
                    data-testid={`button-request-quote-${index}`}
                  >
                    Request Quote
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A proven approach that ensures quality results and client satisfaction.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We understand your needs, goals, and target audience." },
              { step: "02", title: "Planning", description: "We create a detailed roadmap and technical strategy." },
              { step: "03", title: "Development", description: "Our team builds your solution with regular updates." },
              { step: "04", title: "Delivery", description: "We deploy, test, and provide ongoing support." },
            ].map((phase, index) => (
              <div key={index} className="text-center space-y-4" data-testid={`process-step-${index}`}>
                <div className="text-6xl font-bold bg-gradient-to-r from-[#A020F0] to-[#FF007F] bg-clip-text text-transparent">
                  {phase.step}
                </div>
                <h3 className="text-2xl font-semibold text-foreground">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Let's discuss your project and create a tailored solution for your business.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#A020F0] to-[#FF007F] hover:opacity-90 text-white border-none text-base px-8 py-6"
              data-testid="button-cta-contact"
            >
              Request a Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
