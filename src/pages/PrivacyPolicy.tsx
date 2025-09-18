import React from "react";
import { Shield, FileText, Lock, Users, Eye, Mail } from "lucide-react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <Shield className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, 
            use, and protect your information.
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                The terms "We"/"Our"/"Charity Organization"/"Charitable Trust" individually and collectively refer to the "Rainbow Shiksha Education Development Trust" and the terms "Visitor" or "User" refer to website users.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This Privacy Policy is an electronic record in the form of an electronic contract created under the Information Technology Act, 2000 and the rules made thereunder and the amended provisions pertaining to electronic documents/records in various laws as revised by the Information Technology Act, 2000. This Privacy Policy does not need any physical, electronic or digital signature.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This Privacy Policy is a legally binding document between you and Rainbow Shiksha Education Development Trust (both terms defined below). The terms of this Privacy Policy will be effective upon your acceptance of the same (directly or indirectly in electronic form, by clicking on the "I Accept" tab or by use of the Website (https://www.RainbowShiksha.in/) or by other means. It will govern the relationship between you and Rainbow Shiksha Education Development Trust for your use of the Website.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This Privacy Policy has been published by the Rainbow Shiksha Education Development Trust and shall be taken in accordance with the provisions of the Information Technology rules, under Information Technology Act, 2000; that require publishing of the Privacy Policy for collection, use, storage and transfer of sensitive personal data or information of users.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <p className="text-yellow-800 font-medium">
                  Kindly read this Privacy Policy carefully. By using this Website of Charitable Trust, you indicate that you understand, agree and consent to this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please immediately leave this Website.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                By providing with us your information, you hereby give consent to the Charity Organization for the collection, storage, processing and transfer of any or all of your Personal Information and Non-Personal Information as specified under this Privacy Policy. You further agree that such collection, use, storage and transfer of your information shall not cause any loss to you or any other person.
              </p>
            </div>

            {/* Our Commitment */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Lock className="h-6 w-6 text-green-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Our Commitment</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Rainbow Shiksha Education Development Trust is committed to protect your personal information and privacy. This Privacy Policy describes exactly how we collect and use your personal information. We may update this Privacy Policy from time to time so please check back periodically. We will notify you of important changes by placing a notice on our Website.
              </p>
            </div>

            {/* User Information */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-purple-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">User Information</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                For donating money to the Charitable Trust, users are required to provide certain information for registering themselves as members. The information as provided by the users enables us to maintain a complete record of donators which is required as per instruction of Government of India.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Besides keeping records of the donators, we may use the provided user information to improve the website user experience. Such information will not be considered as sensitive if it is freely available and accessible in the public domain or is furnished under the Right to Information Act, 2005 or any other law for the time being in force.
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Eye className="h-6 w-6 text-orange-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Cookies</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                To improve the responsiveness of the Website, we may use "cookies", or similar electronic tools to collect information to assign each visitor a unique, random number as a User Identification (User ID) to understand the user's individual interests using the identified computer. The only personal information a cookie can contain is information you provide. Our affiliates may also assign their own cookies to your browser (if you click on their hyperlinked urls), a process that we do not control.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our web servers automatically collect limited information about your computer's connection to the Internet, including your IP address, when you visit our Website. Your IP address does not identify you personally. We use this information to deliver our webpages to you upon request, to customize our website for the interests of our users, to measure traffic within our Website and know the geographic locations from where our website visitors come.
              </p>
            </div>

            {/* Links to Other Websites */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Links to the Other Websites</h2>
              <p className="text-gray-700 leading-relaxed">
                Our policy discloses the privacy practices for our own Website only. Our Website provides links to other websites also that are beyond our control. We shall in no way be responsible in a way for your use of such websites.
              </p>
            </div>

            {/* Information Sharing */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Rainbow Shiksha Education Development Trust never shares sensitive personal information to any third party without obtaining the prior consent of the user except in the following limited circumstances:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>(a)</strong> When it is requested or required by law or by any court or governmental agency or authority to disclose, for the purpose of verification of an identity of the donator, or for the prevention, detection, investigation including cyber incidents, or for prosecution and punishment of offences. These disclosures are made in good faith and belief that such disclosure is reasonably necessary for enforcing these Terms; for complying with the applicable laws and regulations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>(b)</strong> We propose to share such information within the Charity Organization for the purpose of processing personal information. We also ensure that the recipients of such information agree to process such information based on our instructions and in compliance with this Privacy Policy and any other appropriate confidentiality and security measures.
                </p>
              </div>
            </div>

            {/* Information Security */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Rainbow Shiksha Education Development Trust takes utmost security measures to protect user data from the unauthorized access, alteration, disclosure or destruction. These include constant assessment of our data collection, storage and processing practices and security measures.
              </p>
              <p className="text-gray-700 leading-relaxed">
                All information gathered on our Website is securely stored within our controlled database. The database is stored on our local servers secured behind a firewall; access to the servers is password-protected and is strictly limited. However, as effective as our security measures are, no security system is 100% unbreakable. We cannot guarantee the security of our database, nor can we guarantee that information you provide will not be intercepted while being transmitted to us over the Internet.
              </p>
            </div>

            {/* Grievance Redressal */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Grievance Redressal</h2>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                <p className="text-blue-800 leading-relaxed">
                  Any complaints, abuse or concerns with regards to content or donation process or breach of these terms shall be immediately informed to the Rainbow Shiksha Education Development Trust by sending an email at{" "}
                  <a 
                    href="mailto:RainbowShiksha@gmail.com" 
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    RainbowShiksha@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Trust Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Trust Name & Address</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-gray-600 mr-3 mt-1" />
                  <div>
                    <p className="text-gray-800 font-semibold mb-2">Rainbow Shiksha Education Development Trust</p>
                    <p className="text-gray-700 mb-1">Regt No: 48/2025</p>
                    <p className="text-gray-700 mb-1">Darpan Id: AP/2025/0805747</p>
                    <p className="text-gray-700">
                      B R Reddy Colony, Kallur Estate, Kurnool 518003 (Andhra Pradesh, India)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Last Updated */}
            <div className="text-center text-sm text-gray-500 border-t pt-6">
              <p>Last updated: {new Date().toLocaleDateString('en-IN', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
