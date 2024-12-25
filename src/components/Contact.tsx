import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import Map from './Map';
import AnimatedSection from './AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const locations = [
    {
      city: '',
      phone: '',
      office: '',
    },
    {
      city: '',
      phone: '',
    },
    {
      city: '',
      phone: '',
    },
    {
      city: '',
    },
  ];

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-baaz-navy">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-baaz-blue to-baaz-green bg-clip-text text-transparent">
              Contact Us
            </span>
          </h2>
          <p className="mt-4 text-slate-300">Get in touch with our offices across East Africa</p>
        </AnimatedSection>

        {/* Contact Form - Centered */}
        <AnimatedSection className="max-w-2xl mx-auto mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 shadow-xl">
            <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 focus:border-baaz-blue focus:ring-1 focus:ring-baaz-blue outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 focus:border-baaz-blue focus:ring-1 focus:ring-baaz-blue outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 focus:border-baaz-blue focus:ring-1 focus:ring-baaz-blue outline-none transition-colors"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-baaz-blue hover:bg-baaz-green py-4 rounded-lg transition-colors flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </div>
        </AnimatedSection>

        {/* Office Locations */}
        <AnimatedSection className="max-w-4xl mx-auto mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 shadow-xl">
            <h3 className="text-xl font-semibold mb-6">Our Locations</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group"
                >
                  <MapPin className="h-6 w-6 text-baaz-blue group-hover:text-baaz-green transition-colors mt-1" />
                  <div>
                    <h4 className="font-medium group-hover:text-baaz-blue transition-colors">
                      {location.city}
                    </h4>
                    {location.phone && (
                      <p className="text-slate-300 text-sm mt-1">
                        Phone: {location.phone}
                      </p>
                    )}
                    {location.office && (
                      <p className="text-slate-300 text-sm">
                        Office: {location.office}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/*Main Office*/}
        <AnimatedSection className="max-w-4xl mx-auto mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 shadow-xl">
            <h3 className="text-xl font-semibold mb-6">Main Office</h3>
            {/*<h3 className="text-xl font-semibold mb-6">Main Office</h3>*/}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <MapPin className="h-6 w-6 text-blue-500" />
                    <span>City</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-blue-500" />
                    <span>0123456789</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-blue-500" />
                    <span>Office: 00000</span>
                  </div>
                </div>
          </div>
        </AnimatedSection>


        {/* Map */}
        <AnimatedSection className="max-w-5xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 shadow-xl">
            <h3 className="text-xl font-semibold mb-6">Find Us</h3>
            <Map />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;