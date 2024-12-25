//import React from 'react';
import { Award, Heart, Crown, Lightbulb, Star, Users2 } from 'lucide-react';

const Values = () => {
  const values = [
    { icon: Award, title: 'Professionalism', description: 'Maintaining highest standards in all operations' },
    { icon: Heart, title: 'Passion', description: 'Dedicated to exceeding customer expectations' },
    { icon: Crown, title: 'Leadership', description: 'Setting industry standards through innovation' },
    { icon: Lightbulb, title: 'Entrepreneurship', description: 'Fostering growth and new opportunities' },
    { icon: Star, title: 'Excellence', description: 'Committed to superior service quality' },
    { icon: Users2, title: 'Teamwork', description: 'Collaborating for optimal results' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Our Values
            </span>
          </h2>
          <p className="mt-4 text-slate-300">The principles that guide our operations</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="group">
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 group-hover:border-blue-500 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                      <Icon className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{value.title}</h3>
                      <p className="text-slate-300 text-sm">{value.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;