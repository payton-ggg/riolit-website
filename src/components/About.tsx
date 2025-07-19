import React from 'react';
import { Award, Shield, Users, Clock, Star, Heart, Hammer, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const advantages = [
    {
      icon: <Award className="w-10 h-10 text-yellow-600" />,
      title: 'Premium Quality',
      description: 'Only the finest granite and marble materials, sourced from trusted quarries worldwide',
      stats: '15+ Years Experience'
    },
    {
      icon: <Shield className="w-10 h-10 text-yellow-600" />,
      title: 'Lasting Durability',
      description: 'Weather-resistant monuments built to withstand time and preserve memories forever',
      stats: 'Lifetime Warranty'
    },
    {
      icon: <Users className="w-10 h-10 text-yellow-600" />,
      title: 'Personal Touch',
      description: 'Individual consultation and custom design to honor your loved ones uniquely',
      stats: '500+ Families Served'
    },
    {
      icon: <Clock className="w-10 h-10 text-yellow-600" />,
      title: 'Reliable Service',
      description: 'Timely delivery and professional installation with comprehensive aftercare support',
      stats: '24/7 Support'
    }
  ];

  const achievements = [
    { icon: <Star className="w-6 h-6" />, text: 'Award-winning craftsmanship' },
    { icon: <Heart className="w-6 h-6" />, text: 'Trusted by families across the region' },
    { icon: <Hammer className="w-6 h-6" />, text: 'Master artisans with decades of experience' },
    { icon: <CheckCircle className="w-6 h-6" />, text: 'Quality certified materials and processes' }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-yellow-50 to-transparent rounded-full -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-gray-50 to-transparent rounded-full translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
              About Our Workshop
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8 leading-tight">
            Crafting <span className="text-yellow-600">Eternal</span> Memories
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            For over 15 years, we have been creating monuments from granite, marble, and other natural materials. 
            Our dedication to preserving memory through exceptional craftsmanship has made us a trusted name in the industry, 
            serving families with dignity, respect, and uncompromising quality.
          </p>
        </div>

        {/* Advantages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-yellow-200"
            >
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:from-yellow-100 group-hover:to-yellow-200 transition-all duration-300">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{advantage.title}</h3>
              <p className="text-gray-600 text-center mb-4 leading-relaxed">{advantage.description}</p>
              <div className="text-center">
                <span className="inline-block bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {advantage.stats}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Main content section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text content */}
            <div>
              <h3 className="text-4xl font-bold text-gray-800 mb-8">Our Sacred Commitment</h3>
              
              <div className="space-y-6 mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Every monument we create is more than stone and craftsmanship—it's a testament to a life lived, 
                  love shared, and memories that deserve to endure for generations. We understand the profound 
                  responsibility that comes with honoring your loved ones.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our master artisans combine time-honored techniques with modern precision, working exclusively 
                  with premium materials to ensure that each monument stands as a lasting tribute, weathering 
                  the elements while preserving precious memories with dignity and grace.
                </p>
              </div>

              {/* Achievements list */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-700">
                    <div className="bg-yellow-100 rounded-full p-2 flex-shrink-0">
                      {achievement.icon}
                    </div>
                    <span className="font-medium">{achievement.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image section */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/6646892/pexels-photo-6646892.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Master craftsman working on monument"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-lg font-semibold">Master Craftsman at Work</p>
                  <p className="text-sm opacity-90">Precision and care in every detail</p>
                </div>
              </div>
              
              {/* Floating stats card */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">1000+</div>
                  <div className="text-sm text-gray-600 font-medium">Monuments Created</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Families Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;