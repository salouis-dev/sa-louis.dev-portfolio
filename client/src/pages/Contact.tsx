import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

/**
 * Design System: Minimalist Elegance with Dark Sophistication
 * - Dark charcoal background with gold accents
 * - Playfair Display serif for headings
 * - Form fields with subtle styling and smooth interactions
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission - in production, this would send to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Create mailto link as fallback
      const subject = `New Project Inquiry: ${formData.projectType || "Website Design"}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\nProject Type: ${formData.projectType || "Not specified"}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:sa.louis.dev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Open email client
      window.location.href = mailtoLink;

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: ""
      });

      toast.success("Thank you! Opening your email client to send your inquiry.");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <a href="/" className="text-2xl font-serif font-bold text-primary">Portfolio</a>
          <div className="flex items-center gap-8">
            <a href="/#services" className="text-sm font-ui hover:text-primary transition-colors">Services</a>
            <a href="/#projects" className="text-sm font-ui hover:text-primary transition-colors">Projects</a>
            <a href="/contact" className="text-sm font-ui hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6">Let's Work Together</h1>
          <p className="text-xl text-muted-foreground font-sans leading-relaxed">
            Have a restaurant or hotel project in mind? I'd love to hear about it. Fill out the form below and let's discuss how I can help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 border-t border-border">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {/* Contact Info */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-serif font-bold mb-8">Get in Touch</h3>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-secondary">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-ui font-semibold mb-1">Email</h4>
                    <a href="mailto:sa.louis.dev@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      sa.louis.dev@gmail.com
                    </a>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-secondary">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-ui font-semibold mb-1">Response Time</h4>
                    <p className="text-muted-foreground">
                      I typically respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-secondary">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-ui font-semibold mb-1">Availability</h4>
                    <p className="text-muted-foreground">
                      Available for projects worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-ui font-semibold mb-2">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-ui font-semibold mb-2">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-ui font-semibold mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number (optional)"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="block text-sm font-ui font-semibold mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-secondary border border-border rounded-md text-foreground focus:border-primary focus:ring-1 focus:ring-primary font-sans"
                  >
                    <option value="">Select a project type</option>
                    <option value="Restaurant Website">Restaurant Website</option>
                    <option value="Hotel Website">Hotel Website</option>
                    <option value="Cafe Website">Cafe Website</option>
                    <option value="Bar/Lounge Website">Bar/Lounge Website</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-ui font-semibold mb-2">
                    Message <span className="text-primary">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, vision, and goals..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-secondary border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-ui text-base py-6"
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </Button>

                <p className="text-sm text-muted-foreground font-sans text-center">
                  I'll get back to you as soon as possible. Thank you for reaching out!
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-serif font-bold mb-4">Portfolio</h4>
              <p className="text-muted-foreground font-sans">Premium web design for restaurants and hotels.</p>
            </div>
            <div>
              <h4 className="text-lg font-serif font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground font-sans">
                <li><a href="/#services" className="hover:text-primary transition-colors">Web Design</a></li>
                <li><a href="/#services" className="hover:text-primary transition-colors">Development</a></li>
                <li><a href="/#services" className="hover:text-primary transition-colors">Optimization</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-serif font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground font-sans">
                <li><a href="mailto:sa.louis.dev@gmail.com" className="hover:text-primary transition-colors">sa.louis.dev@gmail.com</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground font-sans text-sm">
            <p>&copy; 2026 Web Design Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
