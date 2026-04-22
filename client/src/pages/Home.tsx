import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Code2, Palette, Smartphone } from "lucide-react";
import { useState } from "react";

/**
 * Design System: Minimalist Elegance with Dark Sophistication
 * - Dark charcoal background (#1a1a1a) with gold accents (#d4af37)
 * - Playfair Display serif for headings, Lato sans-serif for body
 * - Asymmetric layouts with generous whitespace
 * - Smooth scroll animations and hover effects
 */

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Le Dôme Paris 15",
      subtitle: "Authentic Parisian Bistro",
      description: "A sophisticated restaurant website showcasing French cuisine with elegant design and seamless reservation system.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663393692309/78uA4Q27amvEsJSDw4eQHr/hero-restaurant-design-CcoArKriNMEMwgy8Y98J5S.webp",
      links: [
        { label: "View Project", url: "https://1p5yy59.atoms.world" },
        { label: "Alternative View", url: "https://salouis-dev.github.io/website/" },
        { label: "Live Demo", url: "https://remaining-lavender-iykcstbetg.edgeone.app/" }
      ],
      features: ["Menu Showcase", "Reservation System", "Gallery", "Location Map"]
    },
    {
      id: 2,
      title: "Hotel Luxury Experience",
      subtitle: "Premium Hospitality Design",
      description: "A modern hotel website featuring room showcases, booking system, and immersive visual storytelling.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663393692309/78uA4Q27amvEsJSDw4eQHr/hero-hotel-luxury-VwGkR8p5BwZcNpV3AL5ST.webp",
      links: [
        { label: "View Project", url: "#" }
      ],
      features: ["Room Gallery", "Booking Engine", "Amenities", "Reviews"]
    },
    {
      id: 3,
      title: "Restaurant Branding",
      subtitle: "Complete Digital Presence",
      description: "Full-service restaurant website with menu management, online ordering, and customer engagement tools.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663393692309/78uA4Q27amvEsJSDw4eQHr/portfolio-showcase-bg-jq4kzxVbYH7nATG2gxRUrx.webp",
      links: [
        { label: "View Project", url: "#" }
      ],
      features: ["Menu System", "Online Ordering", "Analytics", "Social Integration"]
    }
  ];

  const services = [
    {
      icon: Palette,
      title: "Web Design",
      description: "Stunning, custom-designed websites that capture your brand's essence and engage your audience."
    },
    {
      icon: Code2,
      title: "Development",
      description: "Fast, responsive, and scalable web solutions built with modern technologies and best practices."
    },
    {
      icon: Smartphone,
      title: "Mobile Optimization",
      description: "Fully responsive designs that look perfect on all devices, from desktop to mobile."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-serif font-bold text-primary">Portfolio</div>
          <div className="flex items-center gap-8">
            <a href="#services" className="text-sm font-ui hover:text-primary transition-colors">Services</a>
            <a href="#projects" className="text-sm font-ui hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="text-sm font-ui hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663393692309/78uA4Q27amvEsJSDw4eQHr/portfolio-showcase-bg-jq4kzxVbYH7nATG2gxRUrx.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              Premium Web Design for <span className="text-primary">Restaurants & Hotels</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 font-sans leading-relaxed">
              I create beautiful, high-converting websites that showcase your culinary excellence and hospitality. Each project is crafted with attention to detail and designed to attract your ideal guests.
            </p>
            <div className="flex gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-ui text-base px-8 py-6">
                View My Work <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-ui text-base px-8 py-6">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 border-t border-border">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-5xl font-serif font-bold mb-4">What I Offer</h2>
            <div className="w-20 h-1 bg-primary"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="group">
                  <div className="mb-6 inline-block p-4 bg-secondary rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground font-sans leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 border-t border-border">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-5xl font-serif font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary"></div>
          </div>

          <div className="space-y-24">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'md:grid-flow-dense' : ''}`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image */}
                <div className={`relative overflow-hidden rounded-lg group ${idx % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className={idx % 2 === 1 ? 'md:col-start-1' : ''}>
                  <p className="text-primary font-ui font-semibold text-sm uppercase tracking-wider mb-2">
                    Featured Project
                  </p>
                  <h3 className="text-4xl font-serif font-bold mb-2">{project.title}</h3>
                  <p className="text-lg text-muted-foreground font-ui mb-4">{project.subtitle}</p>
                  <p className="text-foreground font-sans leading-relaxed mb-6">{project.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.features.map((feature, i) => (
                      <span key={i} className="px-3 py-1 bg-secondary text-sm font-ui rounded-full text-muted-foreground">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4">
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-ui font-semibold transition-colors group/link"
                      >
                        {link.label}
                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 border-t border-border bg-secondary">
        <div className="container text-center">
          <h2 className="text-5xl font-serif font-bold mb-6">Ready to Elevate Your Online Presence?</h2>
          <p className="text-xl text-muted-foreground font-sans mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's create a stunning website that showcases your restaurant or hotel and converts visitors into loyal guests.
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-ui text-base px-8 py-6">
            Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
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
                <li><a href="#" className="hover:text-primary transition-colors">Web Design</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Development</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Optimization</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-serif font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-muted-foreground font-sans">
                <li><a href="#" className="hover:text-primary transition-colors">Email</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
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
