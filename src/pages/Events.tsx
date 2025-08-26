import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight, Filter } from 'lucide-react';

const Events: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const upcomingEvents = [
    {
      id: 1,
      title: 'Annual Fundraising Gala 2024',
      date: 'March 15, 2024',
      time: '6:00 PM - 11:00 PM',
      location: 'Grand Ballroom, Mumbai Convention Center',
      type: 'fundraiser',
      description: 'Join us for an elegant evening of dinner, entertainment, and fundraising to support our educational programs.',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400',
      attendees: 250,
      price: '₹5,000 per person'
    },
    {
      id: 2,
      title: 'School Supply Drive - Spring Collection',
      date: 'April 2, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'Multiple Collection Centers',
      type: 'awareness',
      description: 'Help us collect books, notebooks, school bags, and educational materials for children in need.',
      image: 'https://images.pexels.com/photos/8923139/pexels-photo-8923139.jpeg?auto=compress&cs=tinysrgb&w=400',
      attendees: 150,
      price: 'Free participation'
    },
    {
      id: 3,
      title: 'Digital Literacy Workshop',
      date: 'April 20, 2024',
      time: '2:00 PM - 6:00 PM',
      location: 'Rainbow Shiksha Learning Center',
      type: 'program',
      description: 'Training session for teachers on integrating digital tools in classroom education.',
      image: 'https://images.pexels.com/photos/8923194/pexels-photo-8923194.jpeg?auto=compress&cs=tinysrgb&w=400',
      attendees: 50,
      price: 'Free for educators'
    },
    {
      id: 4,
      title: 'Volunteer Orientation Program',
      date: 'May 5, 2024',
      time: '10:00 AM - 2:00 PM',
      location: 'Rainbow Shiksha Headquarters',
      type: 'volunteer',
      description: 'Comprehensive orientation for new volunteers interested in supporting our educational programs.',
      image: 'https://images.pexels.com/photos/8923015/pexels-photo-8923015.jpeg?auto=compress&cs=tinysrgb&w=400',
      attendees: 75,
      price: 'Free registration'
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
    { key: 'fundraiser', label: 'Fundraising' },
    { key: 'awareness', label: 'Awareness' },
    { key: 'program', label: 'Programs' },
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
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.type === 'fundraiser' ? 'bg-blue-100 text-blue-800' :
                      event.type === 'awareness' ? 'bg-green-100 text-green-800' :
                      event.type === 'program' ? 'bg-yellow-100 text-yellow-800' :
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
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                    Register / RSVP
                  </button>
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
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.type === 'fundraiser' ? 'bg-blue-100 text-blue-800' :
                      event.type === 'awareness' ? 'bg-green-100 text-green-800' :
                      event.type === 'program' ? 'bg-yellow-100 text-yellow-800' :
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