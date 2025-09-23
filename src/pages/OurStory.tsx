import { Award, BookOpen, Calendar, Heart, Users, ChevronLeft, ChevronRight, X } from "lucide-react";

import React, { useCallback, useEffect, useState } from "react";
import ourJouneryImage1 from "/src/assets/our-journey/image1.jpg";
import ourJouneryImage10 from "/src/assets/our-journey/image10.jpg";
import ourJouneryImage11 from "/src/assets/our-journey/image11.jpg";
import ourJouneryImage12 from "/src/assets/our-journey/image12.jpg";
import ourJouneryImage13 from "/src/assets/our-journey/image13.jpg";
import ourJouneryImage2 from "/src/assets/our-journey/image2.jpg";
import ourJouneryImage3 from "/src/assets/our-journey/image3.jpg";
import ourJouneryImage4 from "/src/assets/our-journey/image4.jpg";
import ourJouneryImage5 from "/src/assets/our-journey/image5.jpg";
import ourJouneryImage6 from "/src/assets/our-journey/image6.jpg";
import ourJouneryImage7 from "/src/assets/our-journey/image7.jpg";
import ourJouneryImage8 from "/src/assets/our-journey/image8.jpg";
import ourJouneryImage9 from "/src/assets/our-journey/image9.jpg";
import MallikarjunaPhoto from "../assets/team-photos/Mallikarjuna.png";

const OurStory: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const timeline = [
    {
      year: "2013",
      title: "Inception of Rainbow Shiksha",
      description:
        "Rainbow Shiksha was started with the inspiration of Saanthwana Group.",
      icon: Users,
      image: ourJouneryImage1,
    },
    {
      year: "2014",
      title: "Vivekananda Book Distribution",
      description:
        "Distributed Vivekananda books on the occasion of Vivekananda’s 150th Anniversary.",
      icon: BookOpen,
      image: ourJouneryImage2,
    },
    {
      year: "2015",
      title: "Supporting Students’ Education",
      description:
        "Paid one year school fee for Kiran (8th Class, GSNR Kurnool) & Shirisha (10th Class, Hyderabad).",
      icon: Award,
      image: ourJouneryImage3,
    },
    {
      year: "2016",
      title: "Helping Blind Students",
      description:
        "Paid college exam fee and competitive exam fee for blind students.",
      icon: Calendar,
      image: ourJouneryImage4,
    },
    {
      year: "2017",
      title: "Stationery Distribution",
      description:
        "Distributed stationery in Hyderabad, Kurnool, and Bangalore to encourage students before their annual exams.",
      icon: BookOpen,
      image: ourJouneryImage5,
    },
    {
      year: "2018",
      title: "Festive Celebrations",
      description:
        "Celebrated Diwali and Holi festivals in different orphanages in Hyderabad.",
      icon: Users,
      image: ourJouneryImage6,
    },
    {
      year: "2019",
      title: "Motivating Govt School Students",
      description:
        "Conducted General Knowledge exams and distributed gifts in government schools.",
      icon: Award,
      image: ourJouneryImage7,
    },
    {
      year: "2020",
      title: "Children’s Day Celebration",
      description:
        "Celebrated Children’s Day in an orphanage located in Siddaganga (Tumkur).",
      icon: Calendar,
      image: ourJouneryImage8,
    },
    {
      year: "2021",
      title: "Louis Braille Day Support",
      description:
        "Arranged food for blind students on the occasion of Louis Braille’s birthday anniversary.",
      icon: Heart,
      image: ourJouneryImage9,
    },
    {
      year: "2022",
      title: "Games & Education Awareness",
      description:
        "Conducted games and explained the importance of education to children at Mother Theresa Orphanage, Hyderabad.",
      icon: Users,
      image: ourJouneryImage10,
    },
    {
      year: "2023",
      title: "Technology for Schools",
      description:
        "Donated 3 new computers and 2 laptops to an aided school in Karnataka.",
      icon: Award,
      image: ourJouneryImage11,
    },
    {
      year: "2024",
      title: "Support for Blind Students",
      description:
        "Personally visited colleges to pay fees for blind students and helped retrieve their certificates from management.",
      icon: Heart,
      image: ourJouneryImage12,
    },
    {
      year: "2025",
      title: "Official Registration",
      description:
        "Rainbow Shiksha was officially registered to scale and create a bigger impact.",
      icon: Users,
      image: ourJouneryImage13,
    },
  ];

  // Lightbox functions
  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextImage = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i + 1) % timeline.length)),
    [timeline.length]
  );
  const prevImage = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? i : (i - 1 + timeline.length) % timeline.length
      ),
    [timeline.length]
  );

  // Keyboard navigation in lightbox
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  const challenges = [
    {
      title: "Limited Access to Schools",
      description:
        "Many children in rural areas have to travel long distances to reach the nearest school.",
      stat: "40% of children",
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Lack of Learning Resources",
      description:
        "Schools often lack basic supplies like books, notebooks, and teaching materials.",
      stat: "60% of schools",
      color: "from-orange-500 to-yellow-500",
    },
    {
      title: "Economic Barriers",
      description:
        "Families struggle to afford school fees, uniforms, and educational expenses.",
      stat: "35% of families",
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Teacher Shortage",
      description:
        "Qualified teachers are scarce in remote areas, affecting education quality.",
      stat: "1:45 ratio",
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            From a small initiative to a movement that's transforming lives
            across India. This is the journey of Rainbow Shiksha and the
            communities we serve.
          </p>
          <a
            href="https://docs.google.com/presentation/d/1zbiV-5yRj6IZXcVHctDwX1hPTWUeaRNG/edit?slide=id.p2#slide=id.p2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 via-green-600 to-yellow-600 hover:from-blue-700 hover:via-green-700 hover:to-yellow-700 text-white font-bold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 transform"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            View Our Story Presentation
          </a>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why We Exist
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Despite significant progress, India still faces substantial
              challenges in providing quality education to all children.
              Understanding these challenges is crucial to our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${challenge.color} rounded-full flex items-center justify-center mb-4`}
                >
                  <span className="text-white font-bold text-lg">
                    {challenge.stat}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {challenge.title}
                </h3>
                <p className="text-gray-600">{challenge.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 via-green-600 to-yellow-600 text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Our Response</h3>
            <p className="text-lg opacity-90">
              Rainbow Shiksha was born from the belief that every child deserves
              access to quality education, regardless of their circumstances. We
              work to bridge these gaps through comprehensive programs that
              address infrastructure, resources, teacher training, and family
              support.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              From humble beginnings to transforming thousands of lives
            </p>
          </div>

          <div className="space-y-12">
            {timeline.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="lg:w-1/2">
                    <button
                      type="button"
                      onClick={() => openLightbox(index)}
                      className="group block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl overflow-hidden"
                      aria-label={`Open ${milestone.title} image`}
                    >
                      <img
                        src={milestone.image}
                        alt={milestone.title}
                        className="rounded-xl shadow-lg w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </button>
                  </div>

                  <div className="lg:w-1/2">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <span className="text-3xl font-bold text-blue-600">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Quote */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-light text-gray-700 italic mb-8 leading-relaxed">
            "Education is the most powerful weapon which you can use to change
            the world. At Rainbow Shiksha, we've witnessed firsthand how access
            to quality education transforms not just individual lives, but
            entire communities."
          </blockquote>
          <div className="flex items-center justify-center">
            <img
              src={MallikarjunaPhoto}
              alt="Mallikarjuna"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="text-left">
              <div className="font-semibold text-gray-900">Mallikarjuna M</div>
              <div className="text-sm text-gray-600">Founder</div>
            </div>
          </div>
        </div>
      </section>

      {/* Looking Forward */}
      <section className="bg-gradient-to-r from-blue-600 via-green-600 to-yellow-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Looking Forward
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Our journey is far from over. With your support, we aim to reach
            10,000 children by 2030 and establish Rainbow Shiksha as a model for
            educational transformation across India.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-80">Children by 2030</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">15 States</div>
              <div className="text-sm opacity-80">Nationwide Presence</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-80">Partner Schools</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close backdrop"
            onClick={closeLightbox}
            className="absolute inset-0 bg-black/80"
          />

          {/* Dialog */}
          <div className="relative max-w-5xl w-full mx-4">
            {/* Close */}
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close"
              className="absolute top-2 right-2 inline-flex items-center justify-center rounded-full bg-black/60 p-2 text-white shadow focus:outline-none focus-visible:ring-2"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Prev / Next */}
            {timeline.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prevImage}
                  aria-label="Previous"
                  className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-black/60 p-2 text-white shadow focus:outline-none focus-visible:ring-2"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Next"
                  className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-black/60 p-2 text-white shadow focus:outline-none focus-visible:ring-2"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}

            <img
              src={timeline[lightboxIndex].image}
              alt={timeline[lightboxIndex].title}
              className="w-full max-h-[85vh] object-contain rounded-xl"
            />

            <div className="mt-3 text-white text-center">
              <div className="text-sm font-medium">{timeline[lightboxIndex].title}</div>
              <div className="text-xs opacity-90">
                {timeline[lightboxIndex].year} • Click outside or press Escape to close
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurStory;
