import React from 'react';
import { MessageCircle, Eye, Settings, Truck, ShieldCheck } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <MessageCircle className="w-8 h-8 text-yellow-600" />,
      title: 'Consultation and Project Selection',
      description: 'We meet with you to understand your vision, discuss materials, design options, and provide professional guidance.'
    },
    {
      icon: <Eye className="w-8 h-8 text-yellow-600" />,
      title: '3D Visualization',
      description: 'Our team creates detailed 3D models of your monument, allowing you to see the final result before production begins.'
    },
    {
      icon: <Settings className="w-8 h-8 text-yellow-600" />,
      title: 'Production',
      description: 'Skilled craftsmen carefully create your monument using premium materials and traditional techniques combined with modern precision.'
    },
    {
      icon: <Truck className="w-8 h-8 text-yellow-600" />,
      title: 'Delivery and Installation',
      description: 'We handle all aspects of delivery and professional installation, ensuring your monument is placed with care and precision.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-yellow-600" />,
      title: 'Warranty Service',
      description: 'Our comprehensive warranty ensures your monument will stand the test of time, with ongoing support and maintenance available.'
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Work Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to final installation, we guide you through every step 
            of creating a meaningful and lasting memorial.
          </p>
        </div>

        <div className="relative">
          {/* Process line for desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-200"></div>
          
          {steps.map((step, index) => (
            <div key={index} className={`relative flex items-center mb-12 lg:mb-16 ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            }`}>
              {/* Step number circle */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center z-10">
                <span className="text-white font-bold text-lg">{index + 1}</span>
              </div>
              
              {/* Content */}
              <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4 lg:hidden">
                    <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <div className="bg-yellow-50 rounded-full w-12 h-12 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className="hidden lg:block bg-yellow-50 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 lg:text-center">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed lg:text-center">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;