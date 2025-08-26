import React, { useState } from 'react';
import { Users, BookOpen, GraduationCap, TrendingUp, Award, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const Impact: React.FC = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const impactStats = [
    {
      icon: Users,
      number: '500+',
      label: 'Children Supported',
      description: 'Direct educational support provided to children across India',
      trend: '+25% from last year'
    },
    {
      icon: BookOpen,
      number: '50+',
      label: 'Schools Partnered',
      description: 'Active partnerships with schools in underserved communities',
      trend: '+15 new schools this year'
    },
    {
      icon: GraduationCap,
      number: '85%',
      label: 'Graduation Rate',
      description: 'Children in our programs complete their primary education',
      trend: 'Above national average'
    },
    {
      icon: Award,
      number: '95%',
      label: 'Parent Satisfaction',
      description: 'Parents report improvement in their children\'s education',
      trend: 'Consistent across all programs'
    }
  ];

  const successStories = [
    {
      name: 'Priya Sharma',
      age: 16,
      location: 'Rural Maharashtra',
      before: 'Struggled with basic reading and math due to lack of resources',
      after: 'Now excelling in science and mathematics, dreams of becoming a doctor',
      image: 'https://images.pexels.com/photos/8923139/pexels-photo-8923139.jpeg?auto=compress&cs=tinysrgb&w=400',
      achievement: 'Scored 92% in 10th grade exams',
      quote: 'Rainbow Shiksha gave me the books and support I needed to succeed. Now I want to help other children like me.'
    },
    {
      name: 'Arjun Kumar',
      age: 14,
      location: 'Urban Slum, Mumbai',
      before: 'Dropped out of school to help family with income',
      after: 'Returned to school with scholarship support, excelling in technology',
      image: 'https://images.pexels.com/photos/8923194/pexels-photo-8923194.jpeg?auto=compress&cs=tinysrgb&w=400',
      achievement: 'Won district-level coding competition',
      quote: 'The scholarship program helped my family understand that education is more valuable than immediate income.'
    },
    {
      name: 'Meera Patel',
      age: 13,
      location: 'Rural Gujarat',
      before: 'Had never touched a computer, limited English skills',
      after: 'Fluent in digital tools, helps teach other children in community',
      image: 'https://images.pexels.com/photos/8923015/pexels-photo-8923015.jpeg?auto=compress&cs=tinysrgb&w=400',
      achievement: 'Created educational videos for younger students',
      quote: 'Learning computers opened up a whole new world for me. I can now imagine a future I never dreamed of before.'
    },
    {
      name: 'Ravi Singh',
      age: 12,
      location: 'Rural Rajasthan',
      before: 'Irregular school attendance due to work obligations',
      after: 'Regular attendance, improved grades, family supportive of education',
      image: 'https://images.pexels.com/photos/8923018/pexels-photo-8923018.jpeg?auto=compress&cs=tinysrgb&w=400',
      achievement: 'Perfect attendance for 18 months',
      quote: 'When the teachers started visiting our home and talking to my parents, everything changed. Now my whole family supports my education.'
    }
  ];

  const programImpact = [
    {
      program: 'School Supply Program',
      reach: '300+ children',
      impact: 'Improved learning outcomes by 40%',
      description: 'Providing essential educational materials to students in need'
    },
    {
      program: 'Digital Learning Initiative',
      reach: '150+ children',
      impact: 'Enhanced digital literacy by 75%',
      description: 'Introduction to computers and internet for rural students'
    },
    {
      program: 'Scholarship Program',
      reach: '100+ children',
      impact: '95% retention rate in schools',
      description: 'Financial support for children at risk of dropping out'
    },
    {
      program: 'Teacher Training',
      reach: '120+ teachers',
      impact: 'Improved teaching quality scores by 60%',
      description: 'Professional development for educators in partner schools'
    }
  ];

  const testimonials = [
    {
      type: 'Parent',
      name: 'Sunita Devi',
      relation: 'Mother of Priya',
      quote: 'My daughter was struggling in school, but with Rainbow Shiksha\'s support, she has become the top student in her class. I never imagined she could dream of becoming a doctor.',
      location: 'Maharashtra'
    },
    {
      type: 'Teacher',
      name: 'Mr. Ramesh Gupta',
      relation: 'Principal, Government School',
      quote: 'The transformation in our students has been remarkable. The resources and training provided have elevated the entire quality of education at our school.',
      location: 'Punjab'
    },
    {
      type: 'Community Leader',
      name: 'Sarpanch Kamala Joshi',
      relation: 'Village Head',
      quote: 'Rainbow Shiksha hasn\'t just helped individual children - they\'ve changed our entire community\'s perspective on education. Parents now prioritize their children\'s schooling.',
      location: 'Gujarat'
    }
  ];

  const nextStory = () => {
    setCurrentStoryIndex((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setCurrentStoryIndex((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Impact
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            See how your support has transformed lives and communities across India. 
            Every donation, every hour volunteered, every partnership formed creates ripples of change.
          </p>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Measurable Impact</h2>
            <p className="text-xl text-gray-600">Data-driven results that showcase our effectiveness</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                    <Icon className="h-10 w-10 text-blue-600" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
                  <p className="text-sm text-gray-600 mb-2">{stat.description}</p>
                  <div className="inline-flex items-center text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {stat.trend}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories Carousel */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stories of Transformation</h2>
            <p className="text-xl text-gray-600">Real children, real progress, real hope</p>
          </div>

          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
                    Success Story {currentStoryIndex + 1} of {successStories.length}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{successStories[currentStoryIndex].name}</h3>
                  <p className="text-blue-600 font-medium">{successStories[currentStoryIndex].age} years old • {successStories[currentStoryIndex].location}</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Before:</h4>
                    <p className="text-gray-700">{successStories[currentStoryIndex].before}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">After:</h4>
                    <p className="text-gray-700">{successStories[currentStoryIndex].after}</p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Key Achievement:</h4>
                    <p className="text-green-700">{successStories[currentStoryIndex].achievement}</p>
                  </div>

                  <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
                    "{successStories[currentStoryIndex].quote}"
                  </blockquote>
                </div>
              </div>

              <div className="relative">
                <img
                  src={successStories[currentStoryIndex].image}
                  alt={successStories[currentStoryIndex].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button
                onClick={prevStory}
                className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-200"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </button>
              <button
                onClick={nextStory}
                className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-200"
              >
                <ChevronRight className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {successStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStoryIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentStoryIndex ? 'bg-blue-600' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Impact */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Program-wise Impact</h2>
            <p className="text-xl text-gray-600">How each program contributes to our mission</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programImpact.map((program, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.program}</h3>
                <p className="text-gray-700 mb-4">{program.description}</p>
                
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-600">Program Reach:</span>
                  <span className="font-semibold text-blue-600">{program.reach}</span>
                </div>
                
                <div className="bg-white p-3 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Impact Achieved:</div>
                  <div className="font-semibold text-green-700">{program.impact}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Community Voices</h2>
            <p className="text-xl text-gray-600">Hear from those whose lives have been touched by our work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center mr-3">
                    <Heart className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.relation}</div>
                  </div>
                </div>
                
                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex justify-between items-center">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    {testimonial.type}
                  </span>
                  <span className="text-sm text-gray-500">{testimonial.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Financial Transparency</h2>
          <p className="text-xl text-gray-600 mb-12">
            We believe in complete transparency about how your donations are used to create maximum impact.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">80%</div>
              <div className="text-sm font-medium text-gray-700">Program Expenses</div>
              <div className="text-xs text-gray-500 mt-1">Direct impact on education</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">15%</div>
              <div className="text-sm font-medium text-gray-700">Administrative</div>
              <div className="text-xs text-gray-500 mt-1">Operations & management</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6">
              <div className="text-4xl font-bold text-yellow-600 mb-2">5%</div>
              <div className="text-sm font-medium text-gray-700">Fundraising</div>
              <div className="text-xs text-gray-500 mt-1">Awareness & donor engagement</div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-gray-700 mb-4">
              Our financial reports are audited annually and available for public review. 
              We maintain the highest standards of accountability and transparency in all our operations.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              View Financial Reports
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 via-green-600 to-yellow-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Be Part of Our Impact Story</h2>
          <p className="text-xl mb-8 opacity-90">
            Every child deserves the opportunity to learn, grow, and achieve their dreams. 
            Your support can write the next chapter in a child's success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
              Donate Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200">
              Share Our Story
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;