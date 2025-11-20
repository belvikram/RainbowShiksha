import { Building2, Check, Copy, Heart, Shield, Star } from "lucide-react";
// DonationsWithQR.tsx
import { useEffect, useRef, useState } from "react";

import QRCode from "qrcode";
import LaxmiDurgaImage from "../assets/Donations/Laxmi Durga.jpeg";
import RamuluImage from "../assets/Donations/Ramulu.png";

/* Legacy preset amounts retained for future interactive flows
const presetAmounts = [
  { amount: 500, impact: "1 child’s school supplies for a month" },
  { amount: 1000, impact: "2 children’s school supplies for a month" },
  { amount: 2500, impact: "Basic kit for 5 children" },
  { amount: 5000, impact: "After-school support for a small group" },
  { amount: 10000, impact: "Sponsor classroom materials" },
  { amount: 25000, impact: "Fund a learning camp" },
];
*/

const testimonials = [
  {
    name: "Gowthami K",
    location: "Hyderabad",
    donation: "Member since 10 years",
    quote:
      "I have been part of rainbow family since last 10 years. They are providing education support to needy students is really a good work. Balancing professional , family , society work is not a simple job. Big shout out to the team for their hard work and dedication towards society.  Thanks to Rainbow Shiksha for making  me part of this support cycle.",
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
    image: LaxmiDurgaImage,
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
const ORG_FULL_NAME = "RAINBOW SHIKSHA EDUCATION DEVELOPMENT TRUST";
const UPI_VPA = "RAINBOWSHIKSHAEDUCATIONDEVELOPMENTTRUST@iob"; // <— your UPI ID

// Query string for deep links (without upi://pay? prefix)
const EXACT_UPI_QUERY = "ver=01&pa=RAINBOWSHIKSHAEDUCATIONDEVELOPMENTTRUST@iob&pn=RAINBOW SHIKSHA EDUCATION DEVELOPMENT TRUST&tn=%20&am=&mode=00&purpose=00&orgid=159020&sign=&mc=6012";

// Exact UPI URL string for QR code generation
const EXACT_UPI_URL = `upi://pay?${EXACT_UPI_QUERY}`;

export default function DonationsWithQR() {
  /* Legacy interactive donation state retained for future use
  const [selectedAmount, setSelectedAmount] = useState<number>(presetAmounts[0].amount);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const currentAmount = useMemo(() => {
    if (!customAmount) return selectedAmount;
    const n = Number(customAmount);
    return Number.isFinite(n) && n > 0 ? Math.floor(n) : 0;
  }, [selectedAmount, customAmount]);
  */

  const [qrUrl, setQrUrl] = useState<string>("");
  const [isGen, setIsGen] = useState(true);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied">("idle");
  const copyResetRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Internal UPI URL (used for QR generation)
  const upiUrl = EXACT_UPI_URL;

  useEffect(() => {
    let alive = true;
    async function makeQR() {
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
  }, [upiUrl]);

  useEffect(() => {
    return () => {
      if (copyResetRef.current) {
        clearTimeout(copyResetRef.current);
      }
    };
  }, []);

  /* Legacy modal trigger retained for potential future UX
  const openModal = () => {
    if (currentAmount <= 0) {
      alert("Please enter a valid amount greater than 0.");
      return;
    }
    setIsOpen(true);
  };
  */

  /* Legacy deep-link buttons retained for future use
  const isAndroid =
    typeof navigator !== "undefined" && /Android/i.test(navigator.userAgent);
  const isIOS =
    typeof navigator !== "undefined" &&
    /iPhone|iPad|iPod/i.test(navigator.userAgent);

  const buildDeepLink = (target: "gpay" | "phonepe") => {
    if (isAndroid) {
      if (target === "gpay") {
        return `intent://pay?${EXACT_UPI_QUERY}#Intent;scheme=upi;package=com.google.android.apps.nbu.paisa.user;end`;
      }

      if (target === "phonepe") {
        return `intent://pay?${EXACT_UPI_QUERY}#Intent;scheme=upi;package=com.phonepe.app;end`;
      }
    }

    if (isIOS) {
      if (target === "gpay") return `gpay://upi/pay?${EXACT_UPI_QUERY}`;
      return `phonepe://pay?${EXACT_UPI_QUERY}`;
    }

    return upiUrl;
  };

  const openApp = (target: "gpay" | "phonepe") => {
    const primary = buildDeepLink(target);
    const fallback = upiUrl;

    if (isAndroid) {
      const link = document.createElement("a");
      link.href = primary;
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        document.body.removeChild(link);
      }, 100);
    } else if (isIOS) {
      window.location.href = primary;
    } else {
      window.location.href = fallback;
    }
  };
  */

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
            contribution, no matter the size, helps {ORG_NAME} provide quality
            education to children who need it most.
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
      <section className="bg-white py-16" id="upi-donate">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Donate via UPI
              </h2>
             
            </div>

            <div className="flex flex-col items-center gap-5">
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

              {/* <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => openApp("gpay")}
                  className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#4285F4] to-[#34A853] text-white px-4 py-3 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <span
                    className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                    style={{
                      animation: "flash-left-to-right 3s ease-in-out infinite",
                    }}
                  ></span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
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
                  <span
                    className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                    style={{
                      animation: "flash-left-to-right 3s ease-in-out infinite",
                    }}
                  ></span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
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
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="white"
                      strokeWidth="1.5"
                      fill="none"
                      opacity="0.3"
                    />
                  </svg>
                  <span className="relative z-10">PhonePe</span>
                </button>
              </div> */}

              <div className="text-center text-sm text-gray-600 space-y-1">
                <p className="text-sm sm:text-base">
                  UPI ID:{" "}
                  <span className="font-semibold text-gray-900 break-all text-xs sm:text-base">
                    {UPI_VPA}
                  </span>
                </p>
                <p>
                  Beneficiary:{" "}
                  <span className="font-semibold text-gray-900">
                    {ORG_FULL_NAME}
                  </span>
                </p>
              </div>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(UPI_VPA);
                  setCopyStatus("copied");
                  if (copyResetRef.current) clearTimeout(copyResetRef.current);
                  copyResetRef.current = setTimeout(() => {
                    setCopyStatus("idle");
                  }, 10000);
                }}
                className={`w-full rounded-lg border px-4 py-3 text-sm font-semibold transition-colors ${
                  copyStatus === "copied"
                    ? "border-green-400 bg-green-50 text-green-700"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
                aria-live="polite"
              >
                {copyStatus === "copied" ? "Copied!" : "Copy UPI ID"}
              </button>

              {/* <button
                onClick={() =>
                  (window.location.href =
                    "upi://pay?ver=01&pa=RAINBOWSHIKSHAEDUCATIONDEVELOPMENTTRUST@iob&pn=RAINBOW SHIKSHA EDUCATION DEVELOPMENT TRUST&tn=%20&am=&mode=00&purpose=00&orgid=159020&sign=&mc=6012")
                }
                className="w-full rounded-lg border border-dashed border-gray-300 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                Debug: Open UPI Link
              </button> */}

              <p className="text-center text-sm text-gray-700">
                Thank you for supporting {ORG_NAME}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy interactive donation flow retained for future enhancements
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Choose Your Impact
              </h2>
              <p className="text-gray-600">
                Select an amount and see how your donation will help
              </p>
            </div>

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

              <div className="flex flex-col items-center gap-5 mt-4">
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

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => openApp("gpay")}
                    className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#4285F4] to-[#34A853] text-white px-4 py-3 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
                  >
                    <span
                      className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                      style={{
                        animation: "flash-left-to-right 3s ease-in-out infinite",
                      }}
                    ></span>
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
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
                    <span
                      className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                      style={{
                        animation: "flash-left-to-right 3s ease-in-out infinite",
                      }}
                    ></span>
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
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

                <div className="text-center text-xs text-gray-600 space-y-1">
                  <p>
                    UPI ID: <span className="font-semibold text-gray-900">{UPI_VPA}</span>
                  </p>
                  <p>
                    Beneficiary:{" "}
                    <span className="font-semibold text-gray-900">{ORG_FULL_NAME}</span>
                  </p>
                </div>

                <button
                  onClick={() =>
                    (window.location.href =
                      "upi://pay?ver=01&pa=RAINBOWSHIKSHAEDUCATIONDEVELOPMENTTRUST@iob&pn=RAINBOW SHIKSHA EDUCATION DEVELOPMENT TRUST&tn=%20&am=&mode=00&purpose=00&orgid=159020&sign=&mc=6012")
                  }
                  className="mt-4 w-full rounded-lg border border-dashed border-gray-300 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                >
                  Debug: Open UPI Link
                </button>
              </div>

              <div className="mt-6 text-center text-sm text-gray-700">
                Thank you for your donation.
              </div>
            </div>
          </div>
        )}
      </section>
      */}

      {/* Bank Account Details */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bank Transfer Details
            </h2>
            <p className="text-xl text-gray-600">
              You can also donate via direct bank transfer
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 rounded-2xl shadow-xl p-8 border border-gray-200">
            <div className="flex items-center justify-center mb-6">
              <Building2 className="h-12 w-12 text-blue-600" />
            </div>
            
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      Account Holder Name
                    </label>
                    <div className="mt-2 flex items-center justify-between">
                      <p className="text-lg font-bold text-gray-900">
                        Rainbow Shiksha Education Development Trust
                      </p>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText("Rainbow Shiksha Education Development Trust");
                          alert("Account name copied to clipboard!");
                        }}
                        className="ml-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        title="Copy to clipboard"
                      >
                        <Copy className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      Account Number
                    </label>
                    <div className="mt-2 flex items-center justify-between">
                      <p className="text-lg font-bold text-gray-900 font-mono">
                        314402000000537
                      </p>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText("314402000000537");
                          alert("Account number copied to clipboard!");
                        }}
                        className="ml-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        title="Copy to clipboard"
                      >
                        <Copy className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      IFSC Code
                    </label>
                    <div className="mt-2 flex items-center justify-between">
                      <p className="text-lg font-bold text-gray-900 font-mono">
                        IOBA0003144
                      </p>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText("IOBA0003144");
                          alert("IFSC code copied to clipboard!");
                        }}
                        className="ml-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        title="Copy to clipboard"
                      >
                        <Copy className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      Bank Name
                    </label>
                    <p className="mt-2 text-lg font-semibold text-gray-900">
                      Indian Overseas Bank
                    </p>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      Branch
                    </label>
                    <p className="mt-2 text-lg font-semibold text-gray-900">
                      Peddapadu [3144]
                    </p>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      Account Type
                    </label>
                    <p className="mt-2 text-lg font-semibold text-gray-900">
                      Current Account
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> After making a bank transfer, please share the transaction details via WhatsApp or email for our records and to receive your donation receipt.
                </p>
              </div>
            </div>
          </div>
        </div>
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
