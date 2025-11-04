import { Link } from "wouter";
import { ArrowRight, Code, Smartphone, Cloud, Palette, MessageSquare, TrendingUp, Users, Target, Zap, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-[#00CFFD]" />,
      title: "Web Development",
      description: "Business websites, dashboards, and SaaS platforms built with modern technologies.",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-[#00CFFD]" />,
      title: "App Development",
      description: "Native Android and iOS mobile apps using Flutter and React Native.",
    },
    {
      icon: <Cloud className="w-12 h-12 text-[#00CFFD]" />,
      title: "Cloud & DevOps",
      description: "AWS, Azure, and GCP setup, optimization, and deployment automation.",
    },
    {
      icon: <Palette className="w-12 h-12 text-[#00CFFD]" />,
      title: "UI/UX Design",
      description: "User-centered designs that improve experience and usability.",
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-[#00CFFD]" />,
      title: "Tech Consulting",
      description: "Helping startups plan architecture and build effective tech roadmaps.",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-[#00CFFD]" />,
      title: "Software Development",
      description: "Backend systems, APIs, and automation tools for business efficiency.",
    },
  ];

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert-Led Teams",
      description: "Professionals mentor emerging talent to deliver quality results.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results-Driven",
      description: "We focus on practical solutions that drive real business growth.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Agile & Efficient",
      description: "Fast turnaround without compromising on quality standards.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F172A]">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#A020F0]/20 via-[#0F172A] to-[#FF007F]/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Building Ideas.
              <br />
              <span className="bg-gradient-to-r from-[#A020F0] to-[#FF007F] bg-clip-text text-transparent">
                Empowering Talent.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              We're an IT and innovation startup building smart, practical technology solutions for modern businesses. Our unique model combines experienced professionals with emerging talent to deliver exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#A020F0] to-[#FF007F] hover:opacity-90 text-white border-none text-base px-8 py-6"
                  data-testid="button-hero-hire-us"
                >
                  Hire Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/join">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 text-base px-8 py-6"
                  data-testid="button-hero-join-futryx"
                >
                  Join Futryx
                </Button>
              </Link>
            </div>
          </div>
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/60" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Futryx is more than just an IT services company. We're a collaborative ecosystem where experienced developers and emerging talent work together on real client projects.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our approach bridges innovation and execution, delivering high-quality solutions while nurturing the next generation of tech professionals.
              </p>
              <Link href="/about">
                <Button variant="default" size="lg" data-testid="button-learn-more">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-[#A020F0]/10 to-[#FF007F]/10 rounded-2xl flex items-center justify-center border border-border">
                <div className="text-center space-y-4 p-8">
                  <div className="text-6xl font-bold bg-gradient-to-r from-[#A020F0] to-[#FF007F] bg-clip-text text-transparent">
                    FUTRYX
                  </div>
                  <p className="text-muted-foreground">Innovation • Collaboration • Execution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              End-to-end technology solutions from strategy and design to full-stack development and deployment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover-elevate transition-all duration-300"
                data-testid={`card-service-${index}`}
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link href="/services">
                  <Button
                    variant="outline"
                    size="sm"
                    className="group"
                    data-testid={`button-request-quote-${index}`}
                  >
                    Request Quote
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="default" size="lg" data-testid="button-view-all-services">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Futryx
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We combine affordability with quality through our unique professional-mentorship model.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center space-y-4"
                data-testid={`feature-${index}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#A020F0]/10 to-[#FF007F]/10 text-[#A020F0]">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#A020F0] to-[#FF007F] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's discuss your project and create a solution that drives real results.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-[#A020F0] hover:bg-white/90 text-base px-8 py-6"
              data-testid="button-cta-contact"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
