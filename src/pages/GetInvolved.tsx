import React, { useState } from 'react';
import { Users, Heart, Briefcase, GraduationCap, Calendar, ArrowRight, CheckCircle } from 'lucide-react';

const GetInvolved: React.FC = () => {
  const [selectedOpportunity, setSelectedOpportunity] = useState<string | null>(null);

  const volunteerOpportunities = [
    {
      id: 'teaching',
      title: 'Teaching Volunteer',
      icon: GraduationCap,
      commitment: '4-6 hours/week',
      location: 'On-site at partner schools',
      description: 'Support classroom learning by assisting teachers with lessons, activities, and student mentoring.',
      requirements: ['Bachelor\'s degree preferred', 'Good communication skills', 'Passion for education'],
      benefits: ['Direct impact on children\'s learning', 'Teaching experience', 'Regular appreciation events']
    },
    {
      id: 'events',
      title: 'Event Coordinator',
      icon: Calendar,
      commitment: '2-3 hours/week',
      location: 'Various locations in Mumbai',
      description: 'Help organize fundraising events, school visits, and awareness campaigns.',
      requirements: ['Event planning experience', 'Good organizational skills', 'Team player'],
      benefits: ['Event management experience', 'Networking opportunities', 'Flexible schedule']
    },
    {
      id: 'mentor',
      title: 'Student Mentor',
      icon: Users,
      commitment: '3-4 hours/week',
      location: 'Online & On-site',
      description: 'Provide one-on-one mentoring to students, helping with homework and career guidance.',
      requirements: ['Professional experience', 'Patience and empathy', 'Regular availability'],
      benefits: ['Personal fulfillment', 'Mentoring skills', 'Long-term student relationships']
    },
    {
      id: 'fundraising',
      title: 'Fundraising Support',
      icon: Heart,
      commitment: '2-4 hours/week',
      location: 'Remote/Online',
      description: 'Help with donor outreach, social media campaigns, and fundraising strategy.',
      requirements: ['Communication skills', 'Social media knowledge', 'Creative thinking'],
      benefits: ['Marketing experience', 'Professional development', 'Remote flexibility']
    }
  ];

  const partnershipOptions = [
    {
      title: 'Corporate Social Responsibility (CSR)',
      description: 'Partner with us to fulfill your CSR commitments while making a meaningful impact on education.',
      benefits: ['Tax benefits under CSR regulations', 'Employee engagement opportunities', 'Brand association with social impact'],
      commitment: 'Annual partnership agreements',
      icon: Briefcase
    },
    {
      title: 'Educational Institution Partnership',
      description: 'Collaborate with us to create programs that benefit both your students and underserved communities.',
      benefits: ['Service learning opportunities', 'Research collaboration', 'Community engagement'],
      commitment: 'Semester or annual programs',
      icon: GraduationCap
    },
    {
      title: 'NGO Collaboration',
      description: 'Join forces with other organizations to amplify our collective impact on education.',
      benefits: ['Resource sharing', 'Program efficiency', 'Wider reach'],
      commitment: 'Project-based partnerships',
      icon: Users
    }
  ];

  const internshipPrograms = [
    {
      title: 'Program Development Intern',
      duration: '3-6 months',
      location: 'Mumbai Office',
      description: 'Support the design and implementation of educational programs.',
      skills: ['Program management', 'Research skills', 'Data analysis'],
      stipend: 'Paid internship'
    },
    {
      title: 'Digital Marketing Intern',
      duration: '3-4 months',
      location: 'Remote/Hybrid',
      description: 'Assist with social media, content creation, and online fundraising campaigns.',
      skills: ['Social media marketing', 'Content creation', 'Analytics'],
      stipend: 'Paid internship'
    },
    {
      title: 'Research & Impact Assessment Intern',
      duration: '4-6 months',
      location: 'Field & Office',
      description: 'Conduct research on program effectiveness and compile impact reports.',
      skills: ['Research methodology', 'Data collection', 'Report writing'],
      stipend: 'Paid internship'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Involved
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Join our mission to transform education in India. Whether you can volunteer your time, 
            partner with us, or contribute your skills, there's a meaningful way for you to make a difference.
          </p>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Volunteer Opportunities</h2>
            <p className="text-xl text-gray-600">Make a direct impact through hands-on involvement</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {volunteerOpportunities.map((opportunity) => {
              const Icon = opportunity.icon;
              const isSelected = selectedOpportunity === opportunity.id;
              
              return (
                <div key={opportunity.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{opportunity.title}</h3>
                    </div>

                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                      <div><strong>Time Commitment:</strong> {opportunity.commitment}</div>
                      <div><strong>Location:</strong> {opportunity.location}</div>
                    </div>

                    <p className="text-gray-700 mb-4">{opportunity.description}</p>

                    <button
                      onClick={() => setSelectedOpportunity(isSelected ? null : opportunity.id)}
                      className="text-blue-600 hover:text-blue-700 font-medium flex items-center mb-4"
                    >
                      {isSelected ? 'Hide Details' : 'View Details'}
                      <ArrowRight className={`h-4 w-4 ml-1 transform transition-transform ${isSelected ? 'rotate-90' : ''}`} />
                    </button>

                    {isSelected && (
                      <div className="border-t pt-4 space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                          <ul className="space-y-1">
                            {opportunity.requirements.map((req, index) => (
                              <li key={index} className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                          <ul className="space-y-1">
                            {opportunity.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    <button className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105 mt-4">
                      Apply to Volunteer
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Partnership Opportunities</h2>
            <p className="text-xl text-gray-600">Collaborate with us for sustainable impact</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnershipOptions.map((partnership, index) => {
              const Icon = partnership.icon;
              
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{partnership.title}</h3>
                  <p className="text-gray-600 mb-4">{partnership.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {partnership.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-sm text-gray-600 mb-4">
                    <strong>Commitment:</strong> {partnership.commitment}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Internship Programs */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Internship Programs</h2>
            <p className="text-xl text-gray-600">Gain valuable experience while contributing to meaningful work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internshipPrograms.map((internship, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{internship.title}</h3>
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div><strong>Duration:</strong> {internship.duration}</div>
                  <div><strong>Location:</strong> {internship.location}</div>
                  <div><strong>Compensation:</strong> {internship.stipend}</div>
                </div>
                <p className="text-gray-700 mb-4">{internship.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Skills You'll Develop:</h4>
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                  Apply for Internship
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-gradient-to-r from-blue-600 via-green-600 to-yellow-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Volunteer Impact</h2>
          <p className="text-xl mb-12 opacity-90">
            Our volunteers and partners have made incredible contributions to our mission
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-sm opacity-80">Active Volunteers</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-sm opacity-80">Corporate Partners</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">5000+</div>
              <div className="text-sm opacity-80">Volunteer Hours/Month</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Every hour you contribute, every skill you share, and every partnership you form 
            brings us closer to our goal of education for all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
              Start Volunteering Today
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-200">
              Explore Partnerships
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;