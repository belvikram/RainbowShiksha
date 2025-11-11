import React from 'react';
import { Heart, Users, Building2, HandHeart, Award, Globe } from 'lucide-react';

const ExtendedSupport: React.FC = () => {
  const charities = [
    {
      name: 'Educational Support Foundation',
      type: 'Charity Organization',
      description: 'A dedicated organization working towards providing educational resources and scholarships to underprivileged students across India.',
      focus: 'Education & Scholarships',
      location: 'India',
      website: 'https://example.com',
    },
    {
      name: 'Children\'s Welfare Trust',
      type: 'Non-Profit Organization',
      description: 'Committed to improving the lives of children through education, healthcare, and community support programs.',
      focus: 'Child Welfare & Education',
      location: 'India',
      website: 'https://example.com',
    },
    {
      name: 'Rural Education Initiative',
      type: 'Charity Organization',
      description: 'Focusing on bringing quality education to rural areas and supporting schools with infrastructure and resources.',
      focus: 'Rural Education Development',
      location: 'India',
      website: 'https://example.com',
    },
  ];

  const donors = [
    {
      name: 'Tech Solutions Pvt. Ltd.',
      type: 'Corporate Donor',
      description: 'Generously supporting our technology initiatives and computer donation programs for schools.',
      contribution: 'Technology Equipment & Infrastructure',
      location: 'Hyderabad, India',
    },
    {
      name: 'Community Foundation',
      type: 'Foundation',
      description: 'Providing ongoing support for our educational programs and student scholarship initiatives.',
      contribution: 'Scholarships & Program Funding',
      location: 'Karnataka, India',
    },
    {
      name: 'Individual Donors Network',
      type: 'Individual Contributors',
      description: 'A network of compassionate individuals who regularly contribute to support our mission and programs.',
      contribution: 'Regular Donations & Volunteer Support',
      location: 'Multiple Locations',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 rounded-full flex items-center justify-center">
              <HandHeart className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Extended Support
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We are grateful for the support of our partner charities, donors, and organizations 
            who share our vision of empowering children through education. Together, we create 
            a stronger impact in transforming lives.
          </p>
        </div>
      </section>

      {/* Partner Charities Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Building2 className="h-10 w-10 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partner Charities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organizations working alongside us to create a better future for children through education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {charities.map((charity, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Heart className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{charity.name}</h3>
                    <p className="text-sm text-gray-500">{charity.type}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{charity.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Award className="h-4 w-4 mr-2 text-blue-500" />
                    <span className="font-medium">Focus:</span>
                    <span className="ml-2">{charity.focus}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Globe className="h-4 w-4 mr-2 text-blue-500" />
                    <span>{charity.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donors Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Users className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Donors & Supporters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We extend our heartfelt gratitude to all our donors and supporters who make our mission possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {donors.map((donor, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <HandHeart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{donor.name}</h3>
                    <p className="text-sm text-gray-500">{donor.type}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{donor.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Award className="h-4 w-4 mr-2 text-green-500" />
                    <span className="font-medium">Contribution:</span>
                    <span className="ml-2">{donor.contribution}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Globe className="h-4 w-4 mr-2 text-green-500" />
                    <span>{donor.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Our Network of Supporters
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Whether you're an organization, charity, or individual donor, your support helps us 
            reach more children and create lasting change in their lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/get-involved"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Partner With Us
            </a>
            <a
              href="/donate"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Make a Donation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExtendedSupport;

