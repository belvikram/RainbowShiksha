import React from 'react';
import { Calendar, Users, BookOpen, Award } from 'lucide-react';

const OurStory: React.FC = () => {
  const timeline = [
    {
      year: '2018',
      title: 'The Beginning',
      description: 'Founded by Dr. Anjali Sharma after witnessing educational inequality in rural Maharashtra.',
      icon: Users,
      image: 'https://images.pexels.com/photos/8923015/pexels-photo-8923015.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      year: '2019',
      title: 'First School Partnership',
      description: 'Partnered with 5 schools in Mumbai outskirts, supporting 150 children with books and supplies.',
      icon: BookOpen,
      image: 'https://images.pexels.com/photos/8923139/pexels-photo-8923139.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      year: '2020',
      title: 'Digital Learning Initiative',
      description: 'Launched online learning programs during COVID-19, reaching 300+ children remotely.',
      icon: Calendar,
      image: 'https://images.pexels.com/photos/8923194/pexels-photo-8923194.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      year: '2021',
      title: 'Expansion & Recognition',
      description: 'Expanded to 3 states, won Best NGO Award, and launched scholarship programs.',
      icon: Award,
      image: 'https://images.pexels.com/photos/8923166/pexels-photo-8923166.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      year: '2022',
      title: 'Infrastructure Development',
      description: 'Built 10 libraries and computer labs, established teacher training programs.',
      icon: BookOpen,
      image: 'https://images.pexels.com/photos/8923018/pexels-photo-8923018.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      year: '2024',
      title: 'Reaching New Heights',
      description: 'Now supporting 500+ children across 50+ schools with comprehensive educational programs.',
      icon: Users,
      image: 'https://images.pexels.com/photos/8923015/pexels-photo-8923015.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const challenges = [
    {
      title: 'Limited Access to Schools',
      description: 'Many children in rural areas have to travel long distances to reach the nearest school.',
      stat: '40% of children',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Lack of Learning Resources',
      description: 'Schools often lack basic supplies like books, notebooks, and teaching materials.',
      stat: '60% of schools',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      title: 'Economic Barriers',
      description: 'Families struggle to afford school fees, uniforms, and educational expenses.',
      stat: '35% of families',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Teacher Shortage',
      description: 'Qualified teachers are scarce in remote areas, affecting education quality.',
      stat: '1:45 ratio',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            From a small initiative to a movement that's transforming lives across India. 
            This is the journey of Rainbow Shiksha and the communities we serve.
          </p>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why We Exist</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Despite significant progress, India still faces substantial challenges in providing quality education to all children. 
              Understanding these challenges is crucial to our mission.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${challenge.color} rounded-full flex items-center justify-center mb-4`}>
                  <span className="text-white font-bold text-lg">{challenge.stat}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{challenge.title}</h3>
                <p className="text-gray-600">{challenge.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 via-green-600 to-yellow-600 text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Our Response</h3>
            <p className="text-lg opacity-90">
              Rainbow Shiksha was born from the belief that every child deserves access to quality education, 
              regardless of their circumstances. We work to bridge these gaps through comprehensive programs 
              that address infrastructure, resources, teacher training, and family support.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600">From humble beginnings to transforming thousands of lives</p>
          </div>

          <div className="space-y-12">
            {timeline.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  <div className="lg:w-1/2">
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="rounded-xl shadow-lg w-full h-64 object-cover"
                    />
                  </div>
                  
                  <div className="lg:w-1/2">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <span className="text-3xl font-bold text-blue-600">{milestone.year}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{milestone.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Quote */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-light text-gray-700 italic mb-8 leading-relaxed">
            "Education is the most powerful weapon which you can use to change the world. At Rainbow Shiksha, 
            we've witnessed firsthand how access to quality education transforms not just individual lives, 
            but entire communities."
          </blockquote>
          <div className="flex items-center justify-center">
            <img
              src="https://images.pexels.com/photos/3760275/pexels-photo-3760275.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="Dr. Anjali Sharma"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="text-left">
              <div className="font-semibold text-gray-900">Dr. Anjali Sharma</div>
              <div className="text-sm text-gray-600">Founder & CEO</div>
            </div>
          </div>
        </div>
      </section>

      {/* Looking Forward */}
      <section className="bg-gradient-to-r from-blue-600 via-green-600 to-yellow-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Looking Forward</h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Our journey is far from over. With your support, we aim to reach 10,000 children by 2030 
            and establish Rainbow Shiksha as a model for educational transformation across India.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="text-sm opacity-80">Children by 2030</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">15 States</div>
              <div className="text-sm opacity-80">Nationwide Presence</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-80">Partner Schools</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;