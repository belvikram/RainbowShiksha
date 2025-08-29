import {
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  Heart,
  Play,
  Users,
} from "lucide-react";

import { Link } from "react-router-dom";
import React from "react";
import storyImage from "/src/assets/uploads/2022/09/photos-2022-095.jpg";

const Home: React.FC = () => {
  const stats = [
    { number: "500+", label: "Children Supported", icon: Users },
    { number: "50+", label: "Schools Partnered", icon: BookOpen },
    { number: "₹12L+", label: "Funds Raised", icon: Heart },
    { number: "25+", label: "Awards & Recognition", icon: Award },
  ];

  const impactStories = [
    {
      name: "Arjun Prasad",
      age: 18,
      story:
        "From struggling with basic reading to becoming top of her class, Arjun's journey shows the power of education.",
      image: storyImage,
      impact: "Now reads 50+ books per year",
    },
    {
      name: "Arjun Prasad",
      age: 14,
      story:
        "With access to science equipment, Arjun discovered his passion for physics and dreams of becoming an engineer.",
      image: storyImage,
      impact: "Scored 95% in science",
    },
    {
      name: "Arjun Prasad",
      age: 13,
      story:
        "Thanks to digital literacy programs, Meera now helps her family manage their small business online.",
      image: storyImage,
      impact: "Increased family income by 30%",
    },
  ];

  const upcomingEvents = [
    {
      title: "Annual Fundraising Gala",
      date: "March 15, 2024",
      location: "Mumbai Convention Center",
      description:
        "Join us for an evening of celebration and fundraising for education.",
    },
    {
      title: "School Supply Drive",
      date: "April 2, 2024",
      location: "Various Locations",
      description:
        "Help us collect books, stationery, and educational materials.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Empowering Children Through
                <span className="bg-gradient-to-r from-blue-600 via-green-600 to-yellow-600 bg-clip-text text-transparent">
                  {" "}
                  Education
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Every child deserves access to quality education. Join Rainbow
                Shiksha in creating a brighter future for India's children, one
                classroom at a time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/donate"
                  className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 text-center"
                >
                  Donate Now
                </Link>
                <Link
                  to="/story"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-200 text-center flex items-center justify-center"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Our Story
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={storyImage}
                alt="Happy children in classroom"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-600">Lives Changed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600">
              Transforming lives through education across India
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Impact Stories */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stories of Transformation
            </h2>
            <p className="text-xl text-gray-600">
              Meet the children whose lives have been changed through education
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactStories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {story.name}, {story.age}
                  </h3>
                  <p className="text-gray-600 mb-4">{story.story}</p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-blue-800 font-medium text-sm">
                      {story.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/impact"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Read More Stories
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600">
              Join us in our mission to transform education
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <div className="text-gray-600 space-y-1 mb-4">
                      <div className="text-sm">{event.date}</div>
                      <div className="text-sm">{event.location}</div>
                    </div>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/events"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              View All Events
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 via-green-600 to-yellow-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Every Child Deserves a Bright Future
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Your contribution can transform a child's life forever. Join our
            mission to make education accessible to every child in India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              Make a Donation
            </Link>
            <Link
              to="/get-involved"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
