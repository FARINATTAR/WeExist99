import React, { useState } from "react";
import { 
  Instagram, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  ArrowRight, 
  Send 
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="bg-black footer text-gray-300 w-full mt-auto relative bottom-0">
      {/* Main Content */}
      <div className="w-full py-16">
        {/* Content Container */}
        <div className="max-w-[1920px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {["About Us", "How We Help", "Volunteer", "Donate", "Contact Us"].map((link) => (
                  <li key={link}>
                    <a 
                      href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="hover:text-white transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
              <div className="space-y-3">
                <a 
                  href="mailto:contact@example.com" 
                  className="flex items-center hover:text-white transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  contact@example.com
                </a>
                <a 
                  href="tel:+1234567890" 
                  className="flex items-center hover:text-white transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  (123) 456-7890
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-4 lg:col-span-2">
              <h3 className="text-xl font-bold text-white mb-6">Stay Connected</h3>
              <p className="mb-4">Be part of the change—Stay connected with us!</p>
              <form onSubmit={handleSubmit} className="relative max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-gray-900 rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:text-white transition-colors duration-300"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>

              {/* Social Media */}
              <div className="flex gap-4 mt-6">
                {[
                  { Icon: Instagram, link: "https://instagram.com" },
                  { Icon: Twitter, link: "https://twitter.com" },
                  { Icon: Linkedin, link: "https://linkedin.com" }
                ].map(({ Icon, link }, index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-gray-800 -mb-[25px]">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-400">
                © 2024 Your Organization. All rights reserved.
              </div>
              <div className="flex gap-6 text-sm">
                <a href="/privacy" className="hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="/terms" className="hover:text-white transition-colors duration-300">
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
