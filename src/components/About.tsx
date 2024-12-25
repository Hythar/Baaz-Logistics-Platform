//import React from 'react';
import { Building2, Users, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              About BAAZ
            </span>
          </h2>
          <p className="mt-4 text-slate-300">End-to-end logistics solutions for global trade</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors">
            <Building2 className="h-12 w-12 text-blue-500 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Our Company</h3>
            <p className="text-slate-300">
              BAAZ is an integrated logistics company based in Berbera, Somaliland, offering air freight,
              sea freight, and clearing & forwarding services across East Africa.
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors">
            <Target className="h-12 w-12 text-blue-500 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Mission & Vision</h3>
            <p className="text-slate-300">
              We aim to be the recommended clearance and forwarding company in East Africa,
              providing quick, efficient, and reliable services to all clients involved in global trading.
            </p>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors">
            <Users className="h-12 w-12 text-blue-500 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Our Values</h3>
            <p className="text-slate-300">
              Built on professionalism, passion, leadership, entrepreneurship, excellence, and teamwork,
              we deliver impeccable and dedicated customer service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;