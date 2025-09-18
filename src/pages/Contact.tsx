import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    queryType: "general",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      queryType: "general",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "RainbowShiksha@gmail.com, RainbowYouthForSociety@gmail.com",
      subDetails: "We respond within 24 hours",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 9959277190",
      subDetails: "Mon-Fri, 9:00 AM - 6:00 PM",
      color: "from-green-500 to-green-600",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "B.R Reddy Colony, Industrial Estate, Kallur",
      subDetails: "Kurnool (Dist), Andhra Pradesh-518003",
      color: "from-yellow-500 to-yellow-600",
    },
  ];

  const queryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "volunteer", label: "Volunteer Opportunities" },
    { value: "donation", label: "Donation Support" },
    { value: "partnership", label: "Partnership & CSR" },
    { value: "media", label: "Media & Press" },
    { value: "support", label: "Technical Support" },
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We'd love to hear from you. Whether you have questions about our
            programs, want to get involved, or need support, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-lg text-gray-700 mb-1">{info.details}</p>
                  <p className="text-sm text-gray-500">{info.subDetails}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="queryType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Query Type
                  </label>
                  <select
                    id="queryType"
                    name="queryType"
                    value={formData.queryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  >
                    {queryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-vertical"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* Office Hours */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Office Hours
                  </h3>
                </div>
                <div className="space-y-2">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-700">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-800 mb-2">
                  Emergency Contact
                </h3>
                <p className="text-red-700 text-sm mb-2">
                  For urgent matters regarding child welfare or safety:
                </p>
                <div className="flex items-center text-red-800">
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="font-medium">+91 98765 43211</span>
                </div>
                <p className="text-red-600 text-xs mt-2">Available 24/7</p>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <MessageCircle className="h-6 w-6 text-green-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Quick Answers
                  </h3>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      How can I track my donation?
                    </h4>
                    <p className="text-gray-600">
                      You'll receive a confirmation email with tracking details
                      within 24 hours.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      Can I visit the schools you support?
                    </h4>
                    <p className="text-gray-600">
                      Yes! We organize monthly school visits for donors and
                      volunteers. Contact us to schedule.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      Are donations tax-deductible?
                    </h4>
                    <p className="text-gray-600">
                      Yes, all donations are eligible for 80G tax deductions
                      under Indian Income Tax Act.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Connect With Us
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Follow us on social media for daily updates, success stories,
                  and behind-the-scenes content.
                </p>
                <div className="flex space-x-4">
                  <a
                  target="_blank"
                    href="https://www.facebook.com/rainbowshiksha"
                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    f
                  </a>
                  <a
                  target="_blank"
                    href="https://www.twitter.com/rainbowshiksha"
                    className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                  >
                    t
                  </a>
                  <a
                  target="_blank"
                    href="https://www.instagram.com/rainbowshiksha"
                    className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors"
                  >
                    i
                  </a>
                  <a
                  target="_blank"
                    href="https://www.linkedin.com/company/rainbowshiksha"
                    className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center text-white hover:bg-blue-900 transition-colors"
                  >
                    in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-gray-600">Visit our main branch</p>
          </div>
          <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">
                Interactive map would be embedded here
              </p>
              <p className="text-sm text-gray-500">
                B.R Reddy Colony, Near GSNR School, Industrial Estate, Kallur
                (M), Kurnool (Dist), Andhra Pradesh 518003
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
