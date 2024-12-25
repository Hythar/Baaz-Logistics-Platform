//import React from 'react';
import { Truck, Facebook, Twitter, MessageCircle } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { 
      icon: Facebook, 
      url: 'https://www.facebook.com/',
      label: 'Facebook'
    },
    { 
      icon: Twitter, 
      url: 'https://twitter.com/',
      label: 'Twitter'
    },
    //{ 
    //  icon: Linkedin, 
    //  url: 'https://www.linkedin.com/company/',
    //  label: 'LinkedIn'
   // },
    { 
      icon: MessageCircle, 
      url: 'https://wa.me/',
      label: 'WhatsApp'
    }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Truck className="h-8 w-8 text-baaz-blue" />
              <span className="text-2xl font-bold bg-gradient-to-r from-baaz-blue to-baaz-green bg-clip-text text-transparent">
                BAAZ
              </span>
            </div>
            <p className="text-slate-300">
              Your trusted partner in global logistics solutions across East Africa.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#home" className="hover:text-baaz-blue transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-baaz-blue transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-baaz-blue transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-baaz-blue transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-slate-300">
              <li>Custom Clearance</li>
              <li>Shipping Agency</li>
              <li>Transportation</li>
              <li>Freight Forwarding</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-baaz-blue transition-colors group relative"
                    aria-label={social.label}
                  >
                    <Icon className="h-6 w-6 group-hover:scale-110 transition-transform" />
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {social.label}
                    </span>
                  </a>
                );
              })}
            </div>
            
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-300">
          <p>&copy; {new Date().getFullYear()} BAAZ Logistics Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;