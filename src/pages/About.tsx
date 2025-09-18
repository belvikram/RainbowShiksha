import { Award, Heart, Linkedin, Mail, Target, Users } from "lucide-react";

import React from "react";

// Import team photos
import MallikarjunaPhoto from "../assets/team-photos/Mallikarjuna.png";
import SudhindraPhoto from "../assets/team-photos/Sudhindra.jpeg";
import DeepakKumarPhoto from "../assets/team-photos/Deepak Kumar.jpeg";
import NaveenKumarPhoto from "../assets/team-photos/Chitrala Naveen Kumar.jpeg";
import RamyaPhoto from "../assets/team-photos/Ramya.jpeg";
import SravanPhoto from "../assets/team-photos/Sravan Kumar.jpeg";
import MohanPhoto from "../assets/team-photos/Tirumala Muni Mohan.jpeg";
import VinayPhoto from "../assets/team-photos/Vinay Kumar.jpeg";
import VivekPhoto from "../assets/team-photos/Amujuri Vivek.jpeg";
import VeenaPhoto from "../assets/team-photos/Veena.jpeg";
import PrahladaPhoto from "../assets/team-photos/Prahlada.jpeg";
import RamkiPhoto from "../assets/team-photos/Rama Krishna.jpeg";
import SahanaPhoto from "../assets/team-photos/Sahana.jpeg";
import VikramPhoto from "../assets/team-photos/Vikram.jpeg";

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
      name: "Mallikarjuna",
      role: "Founder",
      bio: "Visionary leader with extensive experience in education and social development, driving Rainbow Shiksha's mission to transform lives through education.",
      image: MallikarjunaPhoto,
      linkedin: "#",
    },
    {
      name: "Sudhindra",
      role: "Secretary",
      bio: "Dedicated to organizational excellence and ensuring smooth operations across all Rainbow Shiksha programs and initiatives.",
      image: SudhindraPhoto,
      linkedin: "#",
    },
    {
      name: "Deepak Kumar",
      role: "Treasurer",
      bio: "Financial stewardship expert committed to transparent and responsible management of resources for maximum educational impact.",
      image: DeepakKumarPhoto,
      linkedin: "#",
    },
    {
      name: "Naveen Kumar",
      role: "General Secretary",
      bio: "Strategic coordinator ensuring effective communication and collaboration across all organizational activities and partnerships.",
      image: NaveenKumarPhoto,
      linkedin: "#",
    },
    {
      name: "Ramya",
      role: "Deputy General Secretary",
      bio: "Supporting organizational growth and development through strategic planning and program implementation.",
      image: RamyaPhoto,
      linkedin: "#",
    },
    {
      name: "Sravan",
      role: "Member Secretary",
      bio: "Focused on member engagement and community building to strengthen Rainbow Shiksha's impact and reach.",
      image: SravanPhoto,
      linkedin: "#",
    },
    {
      name: "Mohan",
      role: "Joint Secretary",
      bio: "Collaborative leader working closely with the General Secretary to ensure organizational efficiency and effectiveness.",
      image: MohanPhoto,
      linkedin: "#",
    },
    {
      name: "Vinay Kumar",
      role: "Board Member",
      bio: "Strategic advisor contributing valuable insights and guidance to Rainbow Shiksha's mission and growth.",
      image: VinayPhoto,
      linkedin: "#",
    },
    {
      name: "Vivek",
      role: "Board Member",
      bio: "Passionate advocate for educational equity, bringing fresh perspectives and innovative approaches to our work.",
      image: VivekPhoto,
      linkedin: "#",
    },
    {
      name: "Veena",
      role: "Board Member",
      bio: "Dedicated to advancing educational opportunities and ensuring every child has access to quality learning experiences.",
      image: VeenaPhoto,
      linkedin: "#",
    },
    {
      name: "Prahlada",
      role: "Board Member",
      bio: "Community-focused leader committed to building strong relationships and partnerships for sustainable impact.",
      image: PrahladaPhoto,
      linkedin: "#",
    },
    {
      name: "Rama Krishna",
      role: "Board Member",
      bio: "Education advocate with deep understanding of local communities and their unique educational needs and challenges.",
      image: RamkiPhoto,
      linkedin: "#",
    },
    {
      name: "Sahana",
      role: "Trustee",
      bio: "Trusted guardian of Rainbow Shiksha's values and mission, ensuring organizational integrity and long-term sustainability.",
      image: SahanaPhoto,
      linkedin: "#",
    },
    {
      name: "Vikram",
      role: "IT Head",
      bio: "IT Head of Rainbow Shiksha, responsible for the organization's IT infrastructure and systems.",
      image: VikramPhoto,
      linkedin: "https://www.linkedin.com/in/vikrambelde",
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
            Founded in 2013, Rainbow Shiksha is dedicated to making quality
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
                  {/* <a
                    href="mailto:team@rainbowshiksha.org"
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a> */}
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
