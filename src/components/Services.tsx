//import React from 'react';
import { Box, Ship, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Services = () => {
  const services = [
    {
      icon: Box,
      title: "Custom Clearance",
      description: "Expert customs clearance services ensuring smooth and compliant import/export processes.",
      features: ["Documentation handling", "Customs compliance", "Fast clearance process"]
    },
    {
      icon: Ship,
      title: "Shipping Agency",
      description: "Comprehensive shipping solutions for all your maritime transportation needs.",
      features: ["Sea freight services", "Port operations", "Vessel handling"]
    },
    {
      icon: Truck,
      title: "Transportation",
      description: "Reliable inland transportation services across East Africa.",
      features: ["Door-to-door delivery", "Cross-border transport", "Real-time tracking"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-baaz-blue to-baaz-green bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="mt-4 text-slate-300">Comprehensive logistics solutions for your needs</p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group h-full"
                >
                  <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 group-hover:border-baaz-blue transition-all duration-300 h-full">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="inline-block"
                    >
                      <Icon className="h-12 w-12 text-baaz-blue group-hover:text-baaz-green transition-colors" />
                    </motion.div>
                    <h3 className="text-xl font-semibold my-4">{service.title}</h3>
                    <p className="text-slate-300 mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-slate-300">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1 * fIndex }}
                            className="h-1.5 w-1.5 rounded-full bg-baaz-blue group-hover:bg-baaz-green transition-colors"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;