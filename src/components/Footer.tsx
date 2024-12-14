import React from 'react';
import { Mail, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="mb-4">
            <Logo />
          </div>
          <p className="text-text-light">
            Revolutionizing business communication and automation with AI.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-text-light hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-text-light hover:text-white transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-text-light hover:text-white transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-text-light hover:text-white transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-text-light hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <div className="space-y-2">
            <a
              href="mailto:contact@agiagents.com"
              className="flex items-center gap-2 text-text-light hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              contact@agiagents.com
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-text-light hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              (123) 456-7890
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            {[Twitter, Linkedin, Github].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-primary-accent hover:text-white transition-colors"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-800 text-center text-text-light">
        <p>&copy; {new Date().getFullYear()} AGI Agents. All rights reserved.</p>
      </div>
    </footer>
  );
}