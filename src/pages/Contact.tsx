import { Mail, Phone, MapPin, Send } from "lucide-react";
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
import { useToast } from "@/hooks/use-toast";
import { insertContactInquirySchema, type InsertContactInquiry } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon!",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactInquiry) => {
    submitMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "hello@futryx.com",
      link: "mailto:hello@futryx.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 (234) 567-890",
      link: "tel:+1234567890",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Your City, Country",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-[#A020F0]/10 via-background to-[#FF007F]/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9Ii4wMiIvPjwvZz48L3N2Zz4=')] opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Get in <span className="bg-gradient-to-r from-[#A020F0] to-[#FF007F] bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Let's build something real. Share your project ideas and we'll help bring them to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Have a question or want to work together? We'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <Card
                    key={index}
                    className="p-6 hover-elevate transition-all duration-300"
                    data-testid={`contact-info-${index}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-[#A020F0]/10 to-[#FF007F]/10 text-[#00CFFD]">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">
                          {item.title}
                        </h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-muted-foreground hover:text-[#00CFFD] transition-colors"
                            data-testid={`link-${item.title.toLowerCase()}`}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="pt-6">
                <h3 className="font-semibold text-foreground mb-4">Business Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Send Us a Message
                </h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold">Your Name</FormLabel>
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
                          <FormLabel className="text-sm font-semibold">Your Email</FormLabel>
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
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold">Your Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your project..."
                              {...field}
                              data-testid="input-message"
                              className="rounded-lg border-2 px-4 py-3 min-h-[200px] resize-none focus:border-[#00CFFD]"
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
                      data-testid="button-submit-contact"
                    >
                      {submitMutation.isPending ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
