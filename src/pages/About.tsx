import { Award, Heart, Linkedin, Mail, Target, Users } from "lucide-react";

import React from "react";

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: "Transparency",
      description:
        "We believe in complete transparency in our operations, funding, and impact reporting.",
    },
    {
      icon: Users,
      title: "Equality",
      description:
        "Every child, regardless of background, deserves equal access to quality education.",
    },
    {
      icon: Target,
      title: "Empowerment",
      description:
        "Education is the most powerful tool to break the cycle of poverty and create opportunities.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from program delivery to impact measurement.",
    },
  ];

  const team = [
    {
      name: "MalliKarjuna",
      role: "Founder & CEO",
      bio: "Former educator with 20+ years of experience in rural education development.",
      image:
        "https://images.pexels.com/photos/3760275/pexels-photo-3760275.jpeg?auto=compress&cs=tinysrgb&w=300",
      linkedin: "#",
    },
    {
      name: "Rajesh Kumar",
      role: "Program Director",
      bio: "Expert in community development with deep understanding of educational challenges in India.",
      image:
        "https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=300",
      linkedin: "#",
    },
    {
      name: "Priya Patel",
      role: "Operations Manager",
      bio: "MBA graduate passionate about non-profit management and sustainable social impact.",
      image:
        "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300",
      linkedin: "#",
    },
  ];

  const partners = [
    { name: "UNICEF India", logo: "🏢" },
    { name: "Microsoft India", logo: "💻" },
    { name: "Tata Trust", logo: "🏭" },
    { name: "Akshaya Patra", logo: "🍽️" },
    { name: "Teach for India", logo: "📚" },
    { name: "CRY Foundation", logo: "👶" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Rainbow Shiksha
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Founded in 2018, Rainbow Shiksha is dedicated to making quality
            education accessible to every child in India. We believe that
            education is not just a right, but the foundation for breaking
            generational cycles of poverty and building a more equitable
            society.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To provide comprehensive educational support to underprivileged
                children across India, ensuring they have access to quality
                learning resources, skilled teachers, and safe learning
                environments.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We work directly with local communities, schools, and families
                to create sustainable educational programs that address the root
                causes of educational inequality.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                A world where every child in India has access to quality
                education, regardless of their socioeconomic background, gender,
                or geographical location.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision educated communities that are empowered to break the
                cycle of poverty and contribute meaningfully to India's growth
                and development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide our work and impact
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Meet the passionate leaders driving our mission
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a
                    href={member.linkedin}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:team@rainbowshiksha.org"
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Recognition */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-gray-600">
              Working together to create lasting impact
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-3xl mb-3">{partner.logo}</div>
                <p className="text-sm font-medium text-gray-700">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recognition & Awards
            </h2>
            <p className="text-xl text-gray-600">
              Acknowledgments for our commitment to educational excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Best NGO Award 2023
              </h3>
              <p className="text-sm text-gray-600">
                Education Excellence Foundation
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Social Impact Award
              </h3>
              <p className="text-sm text-gray-600">Maharashtra Government</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Innovation in Education
              </h3>
              <p className="text-sm text-gray-600">UNESCO India</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Youth Empowerment
              </h3>
              <p className="text-sm text-gray-600">UNICEF Recognition</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
