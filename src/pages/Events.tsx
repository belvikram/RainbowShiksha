import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight, Filter } from 'lucide-react';

const Events: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const upcomingEvents = [
    {
      id: 1,
      title: 'Scribe Arrangement for Visually Impaired Students',
      date: 'September 21, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'Tirupati, Andhra Pradesh',
      type: 'support',
      description: 'We have received a heartfelt request to arrange qualified scribes for two visually impaired students appearing for a competitive bank examination. Our dedicated team is actively reaching out to our trusted network of contacts in Tirupati to ensure these deserving students receive the support they need to excel in their academic pursuits.',
      image: 'https://images.pexels.com/photos/8923139/pexels-photo-8923139.jpeg?auto=compress&cs=tinysrgb&w=400',
      attendees: 2,
      price: 'Volunteer opportunity'
    },
    {
      id: 2,
      title: 'Children\'s Day Celebration 2025',
      date: 'November 14, 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'Hyderabad & Kurnool',
      type: 'program',
      description: 'As children represent our future generation, we are honored to organize a special Children\'s Day celebration across Hyderabad and Kurnool. This meaningful event will focus on sharing invaluable guidance and inspiring young minds with the timeless importance of moral values and ethics that shape responsible, meaningful lives in our society.',
      image: 'https://images.pexels.com/photos/8923018/pexels-photo-8923018.jpeg?auto=compress&cs=tinysrgb&w=400',
      attendees: 500,
      price: 'Free participation'
    },
    {
      id: 3,
      title: 'National Youth Day Celebration 2026',
      date: 'January 14, 2026',
      time: '9:00 AM - 6:00 PM',
      location: 'Hyderabad',
      type: 'program',
      description: 'On this momentous National Youth Day, we dedicate ourselves to walking in the inspiring footsteps of Sri Swami Vivekananda. This special celebration will focus on inspiring young minds to embrace his timeless values and ideals, empowering them to build a brighter, more compassionate future for our nation.',
      image: 'https://images.pexels.com/photos/8923166/pexels-photo-8923166.jpeg?auto=compress&cs=tinysrgb&w=400',
      attendees: 300,
      price: 'Free registration'
    },
    {
      id: 4,
      title: 'Sri Madhava School Website Development',
      date: 'Ongoing Project',
      time: 'Remote collaboration',
      location: 'Online',
      type: 'support',
      description: 'At the special request of Sri Madhava School management, our skilled IT team is diligently working on creating a professional, user-friendly website. This digital platform will provide parents, students, and visitors with convenient access to all essential school information, enhancing communication and engagement within the educational community.',
      image: 'https://images.pexels.com/photos/8923194/pexels-photo-8923194.jpeg?auto=compress&cs=tinysrgb&w=400',
      attendees: 5,
    },
    {
      id: 5,
      title: 'Laptop Donation Initiative - Sira, Karnataka',
      date: 'Ongoing Initiative',
      time: 'Continuous effort',
      location: 'Sira, Karnataka',
      type: 'support',
      description: 'Responding to a heartfelt request from school management in Sira, Karnataka, our dedicated Rainbow team member Srinivas Gupta Sir is actively working to arrange additional laptops for students. This initiative ensures enhanced access to digital learning resources, complementing the existing infrastructure to provide students with comprehensive educational support.',
      image: 'https://images.pexels.com/photos/8923139/pexels-photo-8923139.jpeg?auto=compress&cs=tinysrgb&w=400',
      attendees: 50,
      price: 'Donation opportunity'
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: 'Education Summit 2023',
      date: 'December 10, 2023',
      location: 'Pune International Center',
      type: 'awareness',
      description: 'Three-day summit bringing together educators, policymakers, and NGOs to discuss education reform.',
      image: 'https://images.pexels.com/photos/8923166/pexels-photo-8923166.jpeg?auto=compress&cs=tinysrgb&w=400',
      attendees: 500,
      outcome: 'Raised ₹2.5L for rural school infrastructure'
    },
    {
      id: 6,
      title: 'Diwali Celebration with Children',
      date: 'November 12, 2023',
      location: 'Partner Schools (15 locations)',
      type: 'program',
      description: 'Festival celebration with children, including cultural programs and distribution of gifts.',
      image: 'https://images.pexels.com/photos/8923018/pexels-photo-8923018.jpeg?auto=compress&cs=tinysrgb&w=400',
      attendees: 800,
      outcome: 'Distributed gifts to 800+ children'
    },
    {
      id: 7,
      title: 'Teacher Training Workshop',
      date: 'October 15, 2023',
      location: 'Multiple Centers',
      type: 'program',
      description: 'Professional development workshop focusing on innovative teaching methodologies.',
      image: 'https://images.pexels.com/photos/8923139/pexels-photo-8923139.jpeg?auto=compress&cs=tinysrgb&w=400',
      attendees: 120,
      outcome: 'Trained 120 teachers across 3 states'
    }
  ];

  const filterOptions = [
    { key: 'all', label: 'All Events' },
    { key: 'support', label: 'Support' },
    { key: 'program', label: 'Programs' },
    { key: 'awareness', label: 'Awareness' },
    { key: 'volunteer', label: 'Volunteer' }
  ];

  const filteredUpcomingEvents = activeFilter === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.type === activeFilter);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Events & Programs
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Join us in our mission to transform education. Participate in our events, 
            volunteer your time, or simply come to learn more about our cause.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2 mr-6">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((option) => (
                <button
                  key={option.key}
                  onClick={() => setActiveFilter(option.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === option.key
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Join us in making a difference</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredUpcomingEvents.map((event) => (
              <div key={event.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.type === 'support' ? 'bg-blue-100 text-blue-800' :
                      event.type === 'program' ? 'bg-green-100 text-green-800' :
                      event.type === 'awareness' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </span>
                    <span className="text-sm text-gray-500">{event.price}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-blue-500" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-blue-500" />
                      <span>{event.attendees} expected attendees</span>
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>

          {filteredUpcomingEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">No events found for the selected filter.</p>
              <button
                onClick={() => setActiveFilter('all')}
                className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
              >
                View all events →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Past Events</h2>
            <p className="text-xl text-gray-600">Celebrating our successful initiatives and their impact</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.type === 'support' ? 'bg-blue-100 text-blue-800' :
                      event.type === 'program' ? 'bg-green-100 text-green-800' :
                      event.type === 'awareness' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{event.description}</p>
                  
                  <div className="space-y-1 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-green-800 font-medium text-sm">{event.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gradient-to-r from-blue-600 via-green-600 to-yellow-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter to get notified about upcoming events, 
            program updates, and ways to get involved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;