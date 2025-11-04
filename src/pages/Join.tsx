import { useState } from "react";
import { Users, Code, Rocket, Heart, Upload } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { insertCareerApplicationSchema, type InsertCareerApplication } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export default function Join() {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const { toast } = useToast();

  const form = useForm<InsertCareerApplication>({
    resolver: zodResolver(insertCareerApplicationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      role: undefined,
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InsertCareerApplication & { resume?: File }) => {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("role", data.role);
      formData.append("message", data.message);
      if (data.resume) {
        formData.append("resume", data.resume);
      }

      const response = await fetch("/api/career-applications", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest in joining Futryx. We'll be in touch soon!",
      });
      form.reset();
      setResumeFile(null);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertCareerApplication) => {
    submitMutation.mutate({ ...data, resume: resumeFile || undefined });
  };

  const benefits = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Real Projects",
      description: "Work on actual client projects, not just practice exercises.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Mentorship",
      description: "Learn from experienced professionals who guide you every step.",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Career Growth",
      description: "Build a portfolio and gain skills that advance your career.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Collaborative Culture",
      description: "Join a supportive team that values learning and innovation.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-[#A020F0]/10 via-background to-[#FF007F]/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9Ii4wMiIvPjwvZz48L3N2Zz4=')] opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Join <span className="bg-gradient-to-r from-[#A020F0] to-[#FF007F] bg-clip-text text-transparent">Futryx</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're a student looking for hands-on experience or an experienced professional seeking meaningful work, Futryx welcomes you.
          </p>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Join Futryx
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer a unique environment where learning meets real-world execution.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 text-center hover-elevate transition-all duration-300"
                data-testid={`benefit-card-${index}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#A020F0]/10 to-[#FF007F]/10 text-[#00CFFD] mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Apply Now
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll get back to you soon.
            </p>
          </div>

          <Card className="p-8 md:p-12">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold">Full Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          {...field}
                          data-testid="input-name"
                          className="rounded-lg border-2 px-4 py-3 focus:border-[#00CFFD]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold">Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          {...field}
                          data-testid="input-email"
                          className="rounded-lg border-2 px-4 py-3 focus:border-[#00CFFD]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold">Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+1 (234) 567-890"
                          {...field}
                          data-testid="input-phone"
                          className="rounded-lg border-2 px-4 py-3 focus:border-[#00CFFD]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold">Role</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger
                            data-testid="select-role"
                            className="rounded-lg border-2 px-4 py-3 focus:border-[#00CFFD]"
                          >
                            <SelectValue placeholder="Select a role" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Intern" data-testid="option-intern">Intern</SelectItem>
                          <SelectItem value="Developer" data-testid="option-developer">Developer</SelectItem>
                          <SelectItem value="Designer" data-testid="option-designer">Designer</SelectItem>
                          <SelectItem value="Other" data-testid="option-other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">
                    Resume (Optional)
                  </label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:bg-muted/50 transition-colors">
                    <input
                      type="file"
                      id="resume-upload"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                      className="hidden"
                      data-testid="input-resume"
                    />
                    <label
                      htmlFor="resume-upload"
                      className="cursor-pointer flex flex-col items-center gap-2"
                    >
                      <Upload className="w-10 h-10 text-muted-foreground" />
                      {resumeFile ? (
                        <p className="text-sm font-medium text-foreground">
                          {resumeFile.name}
                        </p>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          Click to upload your resume (PDF, DOC, DOCX)
                        </p>
                      )}
                    </label>
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold">
                        Why do you want to join Futryx?
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your interest in joining our team..."
                          {...field}
                          data-testid="input-message"
                          className="rounded-lg border-2 px-4 py-3 min-h-[150px] resize-none focus:border-[#00CFFD]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#A020F0] to-[#FF007F] hover:opacity-90 text-white border-none py-6 rounded-lg font-semibold"
                  disabled={submitMutation.isPending}
                  data-testid="button-submit-application"
                >
                  {submitMutation.isPending ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </Form>
          </Card>
        </div>
      </section>
    </div>
  );
}
