import { useState, useEffect } from 'react';
import { ArrowRight, Globe2, Shield, Clock, Truck, Ship, Box } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
//import Logo from './Logo';

const Hero = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '1000+', label: 'Satisfied Clients' },
    { number: '50K+', label: 'Shipments Delivered' },
    { number: '4', label: 'Strategic Locations' }
  ];

  useEffect(() => {
    const statInterval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);

    return () => {
      clearInterval(statInterval);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const services = [
    { icon: Truck, label: 'Land Transport' },
    { icon: Ship, label: 'Sea Freight' },
    { icon: Box, label: 'Custom Clearance' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-baaz-navy/5 via-baaz-navy/40 to-baaz-navy/95 z-10" />
        <img
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Logistics Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              {/*<Logo className="h-24" />*/}
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-baaz-blue to-baaz-green bg-clip-text text-transparent  mb-4">BAAZ Clearance & Forwarding Group</h1>
            </div>
            <h1 className="text-2xl lg:text-2xl font-bold leading-tight">
              
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Global Logistics Solutions for Your Business
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-6 text-white leading-relaxed text-lg"
            >
              Quick, efficient, and reliable logistical solutions. Building credibility in all our services
              and business relationships across East Africa.
            </motion.p>

            {/* Animated Stats 
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8 bg-gradient-to-b from-baaz-navy/50 to-baaz-navy/5 backdrop-blur-sm rounded-xl p-4 border border-baaz-600/10"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStat}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <span className="text-4xl font-bold bg-gradient-to-r from-baaz-blue to-baaz-green bg-clip-text text-transparent">
                    {stats[currentStat].number}
                  </span>
                  <p className="text-sm text-gray-300 mt-1">{stats[currentStat].label}</p>
                </motion.div>
              </AnimatePresence>
            </motion.div> */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <motion.button
                onClick={() => {
                  scrollToSection('contact');
                  const messageInput = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
                  if (messageInput) {
                    setTimeout(() => messageInput.focus(), 800);
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden bg-baaz-blue hover:bg-baaz-green px-8 py-4 rounded-lg flex items-center gap-2 transition-all duration-300"
              >
                <span className="relative z-10 font-semibold">Get Quote</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-baaz-green to-baaz-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('services')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden border-2 border-baaz-blue hover:border-baaz-green px-8 py-4 rounded-lg transition-all duration-300"
              >
                <span className="relative z-10 font-semibold">Our Services</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-baaz-blue/10 to-baaz-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </motion.button>
            </motion.div>

            {/* Service Icons */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                    className="group cursor-pointer"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-baaz-blue transition-all duration-300">
                      <Icon className="h-8 w-8 text-baaz-blue group-hover:text-baaz-green transition-colors" />
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                        {service.label}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              
              {[
                { icon: Globe2, text: "Global Reach", desc: "Worldwide Coverage" },
                { icon: Shield, text: "Secure Transit", desc: "Safe & Protected" },
                { icon: Clock, text: "24/7 Support", desc: "Always Available" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.1, duration: 0.6 }}
                  className="flex flex-col gap-2 group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2">
                    <item.icon className="h-6 w-6 text-baaz-blue group-hover:text-baaz-green transition-colors" />
                    <span className="text-sm font-semibold group-hover:text-baaz-blue transition-colors">{item.text}</span>
                  </div>
                  <span className="text-xs text-grey-100 group-hover:text-green-400">{item.desc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-baaz-blue/20 blur-3xl rounded-full" />
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-baaz-blue/20 to-baaz-green/20"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Logistics Hub"
                className="relative z-10 rounded-2xl transform transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;