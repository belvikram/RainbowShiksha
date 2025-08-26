import React, { useState } from 'react';
import { Heart, Shield, Users, BookOpen, Calculator, Check, Star } from 'lucide-react';

const Donations: React.FC = () => {
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [selectedAmount, setSelectedAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState<string>('');

  const presetAmounts = [
    { amount: 500, impact: '1 month of school supplies for 1 child' },
    { amount: 1000, impact: '2 months of nutritious meals for 1 child' },
    { amount: 2500, impact: 'School fees for 1 child for 3 months' },
    { amount: 5000, impact: 'Complete school kit for 5 children' },
    { amount: 10000, impact: 'Teacher training program for 1 month' },
    { amount: 25000, impact: 'Digital learning setup for 1 classroom' }
  ];

  const sponsorshipOptions = [
    {
      name: 'Ravi Kumar',
      age: 10,
      grade: '5th Grade',
      school: 'Government Primary School, Pune',
      story: 'Dreams of becoming a doctor. Loves science and helps younger students with their studies.',
      image: 'https://images.pexels.com/photos/8923194/pexels-photo-8923194.jpeg?auto=compress&cs=tinysrgb&w=300',
      monthlySupport: 2000
    },
    {
      name: 'Priya Sharma',
      age: 12,
      grade: '7th Grade',
      school: 'Rural School, Maharashtra',
      story: 'Passionate about mathematics and wants to become an engineer. Top of her class despite challenges.',
      image: 'https://images.pexels.com/photos/8923139/pexels-photo-8923139.jpeg?auto=compress&cs=tinysrgb&w=300',
      monthlySupport: 2500
    },
    {
      name: 'Arjun Patel',
      age: 14,
      grade: '9th Grade',
      school: 'High School, Gujarat',
      story: 'Interested in computers and technology. Helps maintain the school\'s computer lab.',
      image: 'https://images.pexels.com/photos/8923015/pexels-photo-8923015.jpeg?auto=compress&cs=tinysrgb&w=300',
      monthlySupport: 3000
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Mumbai',
      donation: 'Monthly donor since 2022',
      quote: 'Seeing the impact reports and photos of the children I\'m helping has been incredibly rewarding. Rainbow Shiksha makes it easy to make a real difference.',
      rating: 5
    },
    {
      name: 'Rajesh Gupta',
      location: 'Delhi',
      donation: 'Sponsored 2 children',
      quote: 'The transparency and regular updates about the children I sponsor make me feel connected to their journey. It\'s amazing to see them grow and succeed.',
      rating: 5
    },
    {
      name: 'Microsoft India',
      location: 'Bangalore',
      donation: 'Corporate Partner',
      quote: 'Our partnership with Rainbow Shiksha aligns with our mission to empower every person on the planet. Their work in digital education is commendable.',
      rating: 5
    }
  ];

  const currentAmount = customAmount ? parseInt(customAmount) : selectedAmount;

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Make a Difference Today
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Your donation directly impacts a child's education and future. Every contribution, 
            no matter the size, helps us provide quality education to children who need it most.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2 text-green-600" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center">
              <Heart className="h-5 w-5 mr-2 text-red-600" />
              <span>80% Goes Directly to Programs</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 mr-2 text-blue-600" />
              <span>Tax Deductible</span>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Impact</h2>
              <p className="text-gray-600">Select an amount and see how your donation will help</p>
            </div>

            {/* Donation Type Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 p-1 rounded-full">
                <button
                  onClick={() => setDonationType('one-time')}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    donationType === 'one-time' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  One-time
                </button>
                <button
                  onClick={() => setDonationType('monthly')}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    donationType === 'monthly' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Monthly
                </button>
              </div>
            </div>

            {/* Amount Selection */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {presetAmounts.map((preset) => (
                <button
                  key={preset.amount}
                  onClick={() => {
                    setSelectedAmount(preset.amount);
                    setCustomAmount('');
                  }}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    selectedAmount === preset.amount && !customAmount
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-2xl font-bold text-gray-900 mb-2">₹{preset.amount.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">{preset.impact}</div>
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Or enter a custom amount:
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(0);
                  }}
                  placeholder="Enter amount"
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
            </div>

            {/* Impact Calculator */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 mb-8">
              <div className="flex items-center mb-4">
                <Calculator className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Your Impact</h3>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">₹{currentAmount.toLocaleString()}</div>
              <div className="text-gray-700">
                {donationType === 'monthly' ? 'per month' : 'one-time donation'}
              </div>
              <div className="mt-4 text-sm text-gray-600">
                This will help {Math.floor(currentAmount / 500)} children with school supplies for one month.
              </div>
            </div>

            {/* Donation Button */}
            <button className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
              Donate {donationType === 'monthly' ? `₹${currentAmount.toLocaleString()}/month` : `₹${currentAmount.toLocaleString()}`}
            </button>

            <div className="text-center mt-4 text-sm text-gray-500">
              Secure payment powered by Razorpay • 256-bit SSL encryption
            </div>
          </div>
        </div>
      </section>

      {/* Child Sponsorship */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sponsor a Child</h2>
            <p className="text-xl text-gray-600">Create a personal connection and transform a life</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsorshipOptions.map((child, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={child.image}
                  alt={child.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{child.name}</h3>
                  <div className="text-blue-600 font-medium mb-2">{child.age} years • {child.grade}</div>
                  <div className="text-sm text-gray-600 mb-3">{child.school}</div>
                  <p className="text-gray-700 text-sm mb-4">{child.story}</p>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-600">Monthly Support:</span>
                      <span className="text-lg font-semibold text-blue-600">₹{child.monthlySupport.toLocaleString()}</span>
                    </div>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                      Sponsor {child.name}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Donors Say</h2>
            <p className="text-xl text-gray-600">Trusted by hundreds of donors across India and beyond</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                  <div className="text-sm text-blue-600">{testimonial.donation}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Transparency */}
      <section className="bg-gradient-to-r from-blue-600 via-green-600 to-yellow-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Your Trust, Our Transparency</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">80%</div>
              <div className="text-sm opacity-80">Goes directly to programs</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">15%</div>
              <div className="text-sm opacity-80">Administrative costs</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">5%</div>
              <div className="text-sm opacity-80">Fundraising expenses</div>
            </div>
          </div>
          <p className="text-lg mt-8 opacity-90">
            We provide quarterly impact reports and financial transparency to all our donors.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Donations;