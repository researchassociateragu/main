import { Users, Target, Lightbulb, Heart, Award, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function About() {
  const values = [
    {
      icon: <Users className="w-10 h-10" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and knowledge sharing between experienced professionals and emerging talent.",
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Execution",
      description: "We don't just plan—we deliver. Our focus is on turning ideas into working products that solve real problems.",
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Innovation",
      description: "We stay ahead of the curve, adopting modern technologies and methodologies to build future-ready solutions.",
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Growth Mindset",
      description: "We invest in continuous learning and development, both for our team and the clients we serve.",
    },
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "30+", label: "Happy Clients" },
    { number: "15+", label: "Team Members" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-[#A020F0]/10 via-background to-[#FF007F]/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9Ii4wMiIvPjwvZz48L3N2Zz4=')] opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-to-r from-[#A020F0] to-[#FF007F] bg-clip-text text-transparent">Futryx</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're not just a training company or internship hub. Futryx is an IT services and software development firm that combines learning, collaboration, and execution under one brand.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Award className="w-4 h-4" />
                Our Mission
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Bridging Innovation and Execution
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Futryx, we work on end-to-end technology projects—from strategy and design to full-stack development. Our aim is to help companies grow through reliable digital products while giving emerging tech talent real industry experience under expert supervision.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our unique model allows clients to partner with us to get their projects executed by a mix of experienced developers and trained interns. This structure keeps projects affordable for businesses while maintaining high standards through professional mentorship.
              </p>
            </div>
            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-[#A020F0]/5 to-[#FF007F]/5 border-primary/20">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">For Businesses</h3>
                      <p className="text-muted-foreground">
                        Get high-quality development services at affordable rates without compromising on standards.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-[#00CFFD]/10">
                      <Users className="w-6 h-6 text-[#00CFFD]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">For Talent</h3>
                      <p className="text-muted-foreground">
                        Gain real industry experience working on actual client projects under professional guidance.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-${index}`}>
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#A020F0] to-[#FF007F] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do at Futryx.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-8 hover-elevate transition-all duration-300"
                data-testid={`value-card-${index}`}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 p-4 rounded-xl bg-gradient-to-br from-[#A020F0]/10 to-[#FF007F]/10 text-primary">
                    {value.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Culture
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Futryx is built on a foundation of learning, collaboration, and delivery. We create an environment where professionals and interns work side by side on real projects, sharing knowledge and building solutions that matter.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're a seasoned developer looking to mentor the next generation or a student eager to gain hands-on experience, Futryx provides the perfect ecosystem for growth and impact.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
