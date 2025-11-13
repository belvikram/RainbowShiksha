import { Calculator, Check, Heart, Shield, Star, X } from "lucide-react";
// DonationsWithQR.tsx
import React, { useEffect, useMemo, useState } from "react";

import QRCode from "qrcode";
import RamuluImage from "../assets/Donations/Ramulu.png";

const presetAmounts = [
  { amount: 500, impact: "1 child’s school supplies for a month" },
  { amount: 1000, impact: "2 children’s school supplies for a month" },
  { amount: 2500, impact: "Basic kit for 5 children" },
  { amount: 5000, impact: "After-school support for a small group" },
  { amount: 10000, impact: "Sponsor classroom materials" },
  { amount: 25000, impact: "Fund a learning camp" },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Mumbai",
    donation: "Monthly donor since 2022",
    quote:
      "Seeing the impact reports and photos of the children I'm helping has been incredibly rewarding. Rainbow Shiksha makes it easy to make a real difference.",
    rating: 5,
  },
  {
    name: "Rajesh Gupta",
    location: "Delhi",
    donation: "Sponsored 2 children",
    quote:
      "The transparency and regular updates about the children I sponsor make me feel connected to their journey. It's amazing to see them grow and succeed.",
    rating: 5,
  },
  {
    name: "Microsoft India",
    location: "Bangalore",
    donation: "Corporate Partner",
    quote:
      "Our partnership with Rainbow Shiksha aligns with our mission to empower every person on the planet. Their work in digital education is commendable.",
    rating: 5,
  },
];

const sponsorshipOptions = [
 
  {
    name: "P. Laxmi Durga",
    age: 20,
    grade: "BTech",
    school: "Machilipatnam, Andhra Pradesh",
    story:
      "Pursuing BTech with determination and dreams of making a difference in the tech world. Committed to using education to create opportunities for others.",
    image:
      "https://images.pexels.com/photos/8923194/pexels-photo-8923194.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    name: "P. Ramulu",
    age: 22,
    grade: "B.Ed",
    school: "Yemmiganuru, Kurnool",
    story:
      "Studying B.Ed to become an educator and inspire the next generation. Passionate about teaching and making quality education accessible to all children.",
    image: RamuluImage,
  },
];

const ORG_NAME = "Rainbow Shiksha";
const UPI_VPA = "rainbowshiksha@ybl"; // <— your UPI ID

export default function DonationsWithQR() {
  const [selectedAmount, setSelectedAmount] = useState<number>(
    presetAmounts[0].amount
  );
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [qrUrl, setQrUrl] = useState<string>("");
  const [isGen, setIsGen] = useState(false);

  const currentAmount = useMemo(() => {
    if (!customAmount) return selectedAmount;
    const n = Number(customAmount);
    return Number.isFinite(n) && n > 0 ? Math.floor(n) : 0;
  }, [selectedAmount, customAmount]);

  const isAndroid =
    typeof navigator !== "undefined" && /Android/i.test(navigator.userAgent);
  const isIOS =
    typeof navigator !== "undefined" &&
    /iPhone|iPad|iPod/i.test(navigator.userAgent);

  const upiParams = useMemo(() => {
    const params = new URLSearchParams({
      pa: UPI_VPA,
      pn: ORG_NAME,
      cu: "INR",
      tn: `Donation to ${ORG_NAME}`,
    });
    if (currentAmount > 0) params.set("am", String(currentAmount));
    return params.toString();
  }, [currentAmount]);

  // Generic UPI link (used for QR + fallback)
  const genericUPILink = useMemo(() => `upi://pay?${upiParams}`, [upiParams]);

  const buildDeepLink = (target: "gpay" | "phonepe") => {
    // Android: use intent URL format for better app launching
    if (isAndroid) {
      if (target === "gpay") {
        // Intent URL format: intent://pay?params#Intent;scheme=upi;package=package_name;end
        return `intent://pay?${upiParams}#Intent;scheme=upi;package=com.google.android.apps.nbu.paisa.user;end`;
      }

      if (target === "phonepe") {
        return `intent://pay?${upiParams}#Intent;scheme=upi;package=com.phonepe.app;end`;
      }
    }

    // iOS: use app schemes when available
    if (isIOS) {
      if (target === "gpay") return `gpay://upi/pay?${upiParams}`;
      return `phonepe://pay?${upiParams}`;
    }

    // Desktop or unknown: fall back to generic UPI (most desktop browsers can't open it;
    // users can scan QR instead)
    return genericUPILink;
  };

  // Internal UPI URL (not displayed)
  const upiUrl = useMemo(() => {
    const params = new URLSearchParams({
      pa: UPI_VPA,
      pn: ORG_NAME,
      cu: "INR",
      tn: `Donation to ${ORG_NAME}`,
    });
    if (currentAmount > 0) params.set("am", String(currentAmount));
    return `upi://pay?${params.toString()}`;
  }, [currentAmount]);

  useEffect(() => {
    let alive = true;
    async function makeQR() {
      if (!isOpen) return;
      setIsGen(true);
      try {
        const dataUrl = await QRCode.toDataURL(upiUrl, {
          width: 320,
          margin: 1,
          errorCorrectionLevel: "M",
        });
        if (alive) setQrUrl(dataUrl);
      } catch (e) {
        console.error("QR generation failed:", e);
        if (alive) setQrUrl("");
      } finally {
        if (alive) setIsGen(false);
      }
    }
    makeQR();
    return () => {
      alive = false;
    };
  }, [upiUrl, isOpen]);

  const openModal = () => {
    if (currentAmount <= 0) {
      alert("Please enter a valid amount greater than 0.");
      return;
    }
    setIsOpen(true);
  };

  const openApp = (target: "gpay" | "phonepe") => {
    const primary = buildDeepLink(target);
    const fallback = genericUPILink;

    if (isAndroid) {
      // For Android, create an anchor element and click it for better compatibility
      // This method works more reliably than window.location.href for deep links
      const link = document.createElement("a");
      link.href = primary;
      link.style.display = "none";
      document.body.appendChild(link);
      
      // Trigger click to open the app
      link.click();
      
      // Clean up
      setTimeout(() => {
        document.body.removeChild(link);
      }, 100);
    } else if (isIOS) {
      // For iOS, use direct app schemes
      window.location.href = primary;
    } else {
      // Desktop fallback
      window.location.href = fallback;
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Make a Difference Today
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Your donation directly impacts a child's education and future. Every
            contribution, no matter the size, helps us provide quality education
            to children who need it most.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2 text-green-600" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center">
              <Heart className="h-5 w-5 mr-2 text-red-600" />
              <span>100% Goes Directly to Programs</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 mr-2 text-blue-600" />
              <span>Tax Deductible</span>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Choose Your Impact
              </h2>
              <p className="text-gray-600">
                Select an amount and see how your donation will help
              </p>
            </div>

            {/* Amount Selection */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {presetAmounts.map((preset) => (
                <button
                  key={preset.amount}
                  onClick={() => {
                    setSelectedAmount(preset.amount);
                    setCustomAmount("");
                  }}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    selectedAmount === preset.amount && !customAmount
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    ₹{preset.amount.toLocaleString()}
                  </div>
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
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  ₹
                </span>
                <input
                  type="number"
                  min={1}
                  value={customAmount}
                  onChange={(e) => {
                    const val = e.target.value.replace(/[^\d]/g, "");
                    setCustomAmount(val);
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
                <h3 className="text-lg font-semibold text-gray-900">
                  Your Impact
                </h3>
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                ₹{currentAmount.toLocaleString()}
              </div>
              <div className="mt-1 text-gray-700">one-time donation</div>
              {customAmount ? (
                <div className="mt-4 text-sm text-gray-600">
                  Even a small donation makes a big impact. Thank you for
                  contributing!
                </div>
              ) : (
                <div className="mt-4 text-sm text-gray-600">
                  This will help {Math.floor(currentAmount / 500)} children with
                  school supplies for one month.
                </div>
              )}
            </div>

            {/* Donation Button */}
            <button
              onClick={openModal}
              className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              Donate ₹{currentAmount.toLocaleString()}
            </button>

            <div className="text-center mt-4 text-sm text-gray-500">
              Secure payment via UPI • 256-bit SSL encryption
            </div>
          </div>
        </div>

        {/* Modal */}
        {isOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
            role="dialog"
            aria-modal="true"
          >
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-3 top-3 p-2 rounded-lg hover:bg-gray-100"
                aria-label="Close"
              >
                <X className="h-5 w-5 text-gray-600" />
              </button>

              <div className="text-center mb-2">
                <h3 className="text-xl font-bold text-gray-900">
                  Scan to Donate
                </h3>
                <p className="text-gray-600 mt-1">
                  Donation of{" "}
                  <span className="font-semibold">
                    ₹{currentAmount.toLocaleString()}
                  </span>{" "}
                  to {ORG_NAME}
                </p>
              </div>

              {/* Responsive QR + Buttons */}
              <div className="flex flex-col items-center gap-5 mt-4">
                {/* QR wrapper: scales nicely on mobile */}
                <div className="border-2 border-gray-200 rounded-2xl p-3 bg-white">
                  <div className="w-[220px] sm:w-[280px] md:w-[320px] aspect-square">
                    {isGen ? (
                      <div className="w-full h-full grid place-items-center">
                        <div className="animate-pulse text-gray-500">
                          Generating QR…
                        </div>
                      </div>
                    ) : qrUrl ? (
                      <img
                        src={qrUrl}
                        alt="UPI QR code"
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full grid place-items-center text-sm text-red-600">
                        Failed to generate QR. Please try again.
                      </div>
                    )}
                  </div>
                </div>

                {/* App Buttons */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => openApp("gpay")}
                    className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#4285F4] to-[#34A853] text-white px-4 py-3 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
                  >
                    {/* Left-to-right flash effect */}
                    <span 
                      className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                      style={{
                        animation: "flash-left-to-right 3s ease-in-out infinite",
                      }}
                    ></span>
                    
                    {/* Hover overlay effect */}
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                    
                    {/* Google Pay Logo */}
                    <svg
                      className="w-6 h-6 relative z-10"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    <span className="relative z-10">GPay</span>
                  </button>
                  <button
                    onClick={() => openApp("phonepe")}
                    className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#5F259F] to-[#7B3FA3] text-white px-4 py-3 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
                  >
                    {/* Left-to-right flash effect */}
                    <span 
                      className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                      style={{
                        animation: "flash-left-to-right 3s ease-in-out infinite",
                      }}
                    ></span>
                    
                    {/* Hover overlay effect */}
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                    
                    {/* PhonePe Logo */}
                    <svg
                      className="w-6 h-6 relative z-10"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z"
                        fill="white"
                      />
                      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" fill="none" opacity="0.3" />
                    </svg>
                    <span className="relative z-10">PhonePe</span>
                  </button>
                </div>
              </div>

              <div className="mt-6 text-center text-sm text-gray-700">
                Thank you for your donation.
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Child Sponsorship */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sponsor a Child
            </h2>
            <p className="text-xl text-gray-600">
              Create a personal connection and transform a life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsorshipOptions.map((child, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="w-full h-72 bg-gray-100 flex items-center justify-center">
                  <img
                    src={child.image}
                    alt={child.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {child.name}
                  </h3>
                  <div className="text-blue-600 font-medium mb-2">
                    {child.age} years • {child.grade}
                  </div>
                  <div className="text-sm text-gray-600 mb-3">
                    {child.school}
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{child.story}</p>

                  <div className="border-t pt-4">
                    <button 
                      onClick={() => {
                        const whatsappNumber = "919700400237";
                        const message = encodeURIComponent(
                          `🌟 *Child Sponsorship Inquiry* 🌟\n\n` +
                          `Hello Rainbow Shiksha Team,\n\n` +
                          `I am interested in sponsoring a child through your organization. Here are the details:\n\n` +
                          `👤 *Child Details:*\n` +
                          `• Name: ${child.name}\n` +
                          `• Age: ${child.age} years\n` +
                          `• Grade: ${child.grade}\n` +
                          `• School: ${child.school}\n\n` +
                          `📝 *Child's Story:*\n${child.story}\n\n` +
                          `I would like to:\n` +
                          `• Start monthly sponsorship for ${child.name}\n` +
                          `• Learn more about the sponsorship process\n` +
                          `• Understand how I can track the child's progress\n` +
                          `• Know about tax benefits (80G certificate)\n\n` +
                          `Please provide me with:\n` +
                          `• Payment options and process\n` +
                          `• Regular updates about the child\n` +
                          `• Contact details for any queries\n\n` +
                          `Thank you for the amazing work you're doing! 🙏\n\n` +
                          `Best regards,\n` +
                          `[Your Name]`
                        );
                        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
                      }}
                      className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                    >
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Donors Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by hundreds of donors across India and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.location}
                  </div>
                  <div className="text-sm text-blue-600">
                    {testimonial.donation}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Transparency */}
      <section className="bg-gradient-to-r from-blue-600 via-green-600 to-yellow-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Your Trust, Our Transparency
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl font-bold mb-2">80%</div>
              <div className="text-sm opacity-80">
                Goes directly to programs
              </div>
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
            We provide quarterly impact reports and financial transparency to
            all our donors.
          </p>
        </div>
      </section>
    </div>
  );
}
