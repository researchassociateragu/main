import { Link } from "wouter";
import { Mail, Phone, Linkedin, Twitter, Github, Instagram } from "lucide-react";
import logoUrl from "@assets/Futryx Logo_1762179648239.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <img src={logoUrl} alt="Futryx" className="h-8 mb-4" />
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Building smart, practical technology solutions for modern businesses while nurturing the next generation of tech talent.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#00CFFD] transition-colors"
                data-testid="link-linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#00CFFD] transition-colors"
                data-testid="link-twitter"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#00CFFD] transition-colors"
                data-testid="link-github"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#00CFFD] transition-colors"
                data-testid="link-instagram"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/services"
                  className="text-white/70 hover:text-[#00CFFD] text-sm transition-colors"
                  data-testid="link-footer-web-dev"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link 
                  href="/services"
                  className="text-white/70 hover:text-[#00CFFD] text-sm transition-colors"
                  data-testid="link-footer-app-dev"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link 
                  href="/services"
                  className="text-white/70 hover:text-[#00CFFD] text-sm transition-colors"
                  data-testid="link-footer-software-dev"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link 
                  href="/services"
                  className="text-white/70 hover:text-[#00CFFD] text-sm transition-colors"
                  data-testid="link-footer-cloud-devops"
                >
                  Cloud & DevOps
                </Link>
              </li>
              <li>
                <Link 
                  href="/services"
                  className="text-white/70 hover:text-[#00CFFD] text-sm transition-colors"
                  data-testid="link-footer-uiux"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link 
                  href="/services"
                  className="text-white/70 hover:text-[#00CFFD] text-sm transition-colors"
                  data-testid="link-footer-consulting"
                >
                  Tech Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/about"
                  className="text-white/70 hover:text-[#00CFFD] text-sm transition-colors"
                  data-testid="link-footer-about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/join"
                  className="text-white/70 hover:text-[#00CFFD] text-sm transition-colors"
                  data-testid="link-footer-careers"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact"
                  className="text-white/70 hover:text-[#00CFFD] text-sm transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Mail size={18} className="text-[#00CFFD]" />
                <a href="mailto:hello@futryx.com" className="hover:text-[#00CFFD] transition-colors" data-testid="link-email">
                  hello@futryx.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Phone size={18} className="text-[#00CFFD]" />
                <a href="tel:+1234567890" className="hover:text-[#00CFFD] transition-colors" data-testid="link-phone">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {currentYear} Futryx. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/60 hover:text-[#00CFFD] text-sm transition-colors" data-testid="link-privacy">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-[#00CFFD] text-sm transition-colors" data-testid="link-terms">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
