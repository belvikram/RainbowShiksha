import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Users, Filter, X } from 'lucide-react';

// Import past event images
import ChildrensDayImage from '../assets/past-events/childrens day.png';
import OrphanageImage from '../assets/past-events/orphanage.png';
import StationaryEventImage from '../assets/past-events/stationary event.jpeg';
import LaptopDistributionImage from '../assets/past-events/laptop distribution event.jpeg';
import ExamKitEventImage from '../assets/past-events/ExamKit Event.jpeg';
import ScribeEventImage from '../assets/past-events/Scribe Event.jpeg';
import DivyaJyothiEventImage from '../assets/past-events/Divya Jyothi Event.jpeg';
import DictionaryDistributionImage from '../assets/past-events/10th Class dictionary distribution.jpeg';

const Events: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const upcomingEvents = [
  
    {
      id: 2,
      title: 'Children\'s Day Celebration 2025',
      date: 'November 14, 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'Hyderabad & Kurnool',
      type: 'program',
      description: 'As children represent our future generation, we are honored to organize a special Children\'s Day celebration across Hyderabad and Kurnool. This meaningful event will focus on sharing invaluable guidance and inspiring young minds with the timeless importance of moral values and ethics that shape responsible, meaningful lives in our society.',
      image: 'https://images.pexels.com/photos/8923018/pexels-photo-8923018.jpeg?auto=compress&cs=tinysrgb&w=400',
      attendees:" 50-100",
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
      attendees:" 50-100",
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
    }
  ];

  const pastEvents = [
    {
      id: 1,
      title: 'Scribe Arrangement for Visually Impaired Students',
      date: 'September 21, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'Tirupati, Andhra Pradesh',
      type: 'support',
      description: 'We have received a heartfelt request to arrange qualified scribes for two visually impaired students appearing for a competitive bank examination. Our dedicated team is actively reaching out to our trusted network of contacts in Tirupati to ensure these deserving students receive the support they need to excel in their academic pursuits.',
      image: ScribeEventImage,
      attendees: 2,
      price: 'Volunteer opportunity',
      outcome: 'Arranged qualified scribes for two visually impaired students'
    },
    {
      id: 1,
      title: 'Children\'s Day Celebration 2021',
      date: 'November 14, 2021',
      location: 'Orphanage in Karnataka',
      type: 'program',
      description: 'We organized a heartwarming Children\'s Day celebration at an orphanage in Karnataka, bringing joy, laughter, and educational activities to the children. Our team spent quality time with the children, engaging them in creative activities and providing them with essential supplies and gifts.',
      image: ChildrensDayImage,
      attendees: 45,
      outcome: 'Brought smiles to 45 children and distributed educational materials'
    },
    {
      id: 2,
      title: 'Stationary Support for the Orphanage',
      date: 'February 14, 2021',
      location: 'Orphanage in Karnataka',
      type: 'program',
      description: 'As we got the request from one of the Orphanage located in Karnataka, our team members personally visited the orphanage and distributed books and required stationary to the students.',
      image: StationaryEventImage,
      attendees: 38,
      outcome: 'Distributed books and stationary to students at the orphanage'
    },
    {
      id: 3,
      title: 'Interactive Games & Activities Program 2024',
      date: 'March 15, 2024',
      location: 'Lingampally, Hyderabad',
      type: 'program',
      description: 'Our team conducted an engaging games and activities program for children at an orphanage in Lingampally, Hyderabad. Through interactive games, storytelling sessions, and creative workshops, we fostered teamwork, creativity, and joy among the children while providing them with memorable experiences.',
      image: OrphanageImage,
      attendees: 52,
      outcome: 'Organized interactive games and activities for 52 children'
    },
    {
      id: 4,
      title: '3 Computers & 2 Laptops Distribution to Sri Madhava Vidya Mandira School',
      date: '2024',
      location: 'Sri Madhava Vidya Mandira School',
      type: 'support',
      description: 'Our team distributed 3 computers and 2 laptops to Sri Madhava Vidya Mandira School to enhance the digital learning infrastructure and provide students with better access to technology for their educational needs.',
      image: LaptopDistributionImage,
      attendees: 100,
      outcome: 'Distributed 3 computers and 2 laptops to enhance digital learning infrastructure'
    },
    {
      id: 5,
      title: 'Exam Kit Distributed to Sri Madhava Vidya Mandira School',
      date: '2024',
      location: 'Sri Madhava Vidya Mandira School',
      type: 'support',
      description: 'We distributed essential exam kits to students at Sri Madhava Vidya Mandira School, providing them with necessary stationery and materials to support their academic examinations and ensure they have the tools needed for success.',
      image: ExamKitEventImage,
      attendees: 100,
      outcome: 'Distributed exam kits with essential stationery to support student examinations'
    },
    {
      id: 6,
      title: 'General Knowledge Quiz & Prize Distribution 2023',
      date: 'November 14, 2023',
      location: 'Divya Jyothi, Hyderabad',
      type: 'program',
      description: 'We conducted an engaging General Knowledge Quiz designed to enhance students\' awareness and broaden their knowledge base. Winners were recognized and awarded prizes, encouraging active participation and fostering greater social awareness among all participants.',
      image: DivyaJyothiEventImage,
      attendees: 50,
      outcome: 'Conducted GK Quiz and distributed prizes, encouraging social awareness'
    },
    {
      id: 7,
      title: '10th Class Educational Materials Distribution 2015',
      date: 'November 28, 2015',
      location: 'Government School, Kurnool',
      type: 'support',
      description: 'We distributed essential educational materials including dictionaries, exam kits, atlas maps, and exam preparation kits to 10th class students. This comprehensive initiative aimed to provide all necessary resources to support their academic learning, enhance their vocabulary skills, and prepare them effectively for their board examinations.',
      image: DictionaryDistributionImage,
      attendees: 44,
      outcome: 'Distributed dictionaries, exam kits, atlas maps, and exam preparation kits to 10th class students'
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

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

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
                {/* Event Image */}
                <div className="h-48 overflow-hidden cursor-pointer" onClick={() => setSelectedImage({ src: event.image, alt: event.title })}>
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
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

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="max-w-7xl max-h-full flex items-center justify-center">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

    </div>
  );
};

export default Events;