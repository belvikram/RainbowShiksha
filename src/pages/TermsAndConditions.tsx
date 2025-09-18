import React from "react";
import { FileText, Shield, AlertTriangle, Users, CreditCard, Info } from "lucide-react";

const TermsAndConditions: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
              <FileText className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Terms and Conditions
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Please read these terms carefully before using our website and services.
          </p>
        </div>
      </section>

      {/* Terms and Conditions Content */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Info className="h-6 w-6 text-blue-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                The terms "We"/"Charity Organization"/"Charitable Trust" individually and collectively refer to "Rainbow Shiksha Education Development Trust" and the terms "Visitor" or "User" refer to website users.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This page states the Terms and Conditions under which you (Visitor) may visit this website (http://www.RainbowShiksha.in/). Please read this page carefully. If you do not accept the Terms and Conditions stated here, we would request you to exit this website.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <p className="text-yellow-800 font-medium">
                  Rainbow Shiksha Education Development Trust reserves the right to revise, amend or modify the policy entailed in this posting at any time and in any manner as it may deem fit. Any change or revision so effected will be posted on the website. It is therefore important that you shall review Terms & Conditions regularly to ensure you are updated as to any changes because they are binding on all users of this website.
                </p>
              </div>
            </div>

            {/* Use of Content */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-purple-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Use of Content</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                All logos, images, headings, labels, names, audio clips, videos, signatures, numerals, shapes or any combinations thereof, appearing in this website, except as otherwise noted, are properties either owned or used under licence, by the Charitable Trust. The use of these properties or any other content on this website, except as provided in these terms and conditions or in the content, is strictly prohibited.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You may not sell or modify the content of this website or reproduce, display, publicly perform, distribute, or otherwise use the materials in any way for any public or commercial purpose without the permission of Charity Organization.
              </p>
            </div>

            {/* Acceptable Use */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-green-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Acceptable Use</h2>
              </div>
              
              {/* Security Rules */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">(A) Security Rules</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Visitors are prohibited from violating or attempting to violate the security of the Charity Organization's website, including, without limitation:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Accessing data not intended for such user or logging into a server or account which the user is not authorized to access</li>
                    <li>Attempting to probe, scan or test the vulnerability of a system or network or to breach security or authentication measures without proper authorization</li>
                    <li>Attempting to interfere with service to any user, host or network, including, without limitation, via means of submitting a virus or "Trojan horse" to the website, overloading, "flooding", "mail bombing" or "crashing"</li>
                    <li>Sending unsolicited electronic mail, including promotions and/or advertising of products or services</li>
                  </ul>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Violations of system or network security may result in civil or criminal liability. The Charity Organization will have the right to investigate occurrences that they suspect as involving such violations and will have the right to involve and cooperate with law enforcement authorities in prosecuting users who are involved in such violations.
                </p>
              </div>

              {/* General Rules */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">(B) General Rules</h3>
                <p className="text-gray-700 leading-relaxed">
                  Visitors may not use the website in order to transmit, distribute, store or destroy material (a) that could constitute or encourage conduct that would be considered a criminal offence or violate any applicable law or regulation, (b) in a manner that will infringe the copyright or other intellectual property rights of others or violate the privacy or publicity of personal rights of others, or (c) that is libelous, defamatory, pornographic, profane, obscene, threatening, abusive or hateful.
                </p>
              </div>

              {/* Payment Gateway */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">(C) Use of the Integrated Paytm Payment Gateway for Giving Donations to the Charitable Trust</h3>
                <p className="text-gray-700 leading-relaxed">
                  If you are making donations to the Charitable Trust through the integrated Paytm Payment Gateway, you understand that the payment gateway is provided by a third party (Paytm) and governed by the terms and conditions provided by such third party. You are liable in the event you violate any of the terms and conditions of such third party in making your donations. Charity Organization shall not be responsible for any such errors or default in making your donations.
                </p>
              </div>

              {/* Member Information */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">(D) Member Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Before making any donation, you are required to fill up all the mandatory information in the provided fields of the membership form. This information will be used for further communication in terms of tax exemption certificates, feedback reports, etc. And also note that this is required as per the order of Government of India to keep the record of all the information about the donors.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You acknowledge that all information on member profile has been entered by you or on behalf of yours is true to the best of your knowledge. Charitable Trust shall take reasonable steps to maintain the confidentiality of such information. However, Charitable Trust does not assume any liability in case of any direct or indirect loss, injury, claim, liability or damages of any kind whatsoever arising on account of divulgence of such personal information by the visitor.
                </p>
              </div>
            </div>

            {/* Indemnity */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnity</h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-6">
                <p className="text-red-800 leading-relaxed">
                  The User unilaterally agree to indemnify and hold harmless, without objection, the Charitable Trust, its members/governing council/managing committee/trustees/volunteers/affiliates from and against any claims, actions and/or demands and/or liabilities and/or losses and/or damages whatsoever arising from or resulting from their use of https://www.RainbowShiksha.in/ or their breach of the terms.
                </p>
              </div>
            </div>

            {/* Liability */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Liability</h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  User agrees that neither Charitable Trust nor its members/governing council/managing committee/trustees/volunteers/affiliates shall be liable for any direct or/and indirect or/and incidental or/and special or/and consequential or/and exemplary damages, resulting from the access to and use of this and the information contained on it.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  User further agrees that Charitable Trust shall not be liable for any damages arising from interruption, suspension or termination of this website.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  User agrees that Charitable Trust shall not be responsible or liable to user, or anyone, for the statements or conduct of any third party of the service. In sum, in no event, shall Charity Organization's total liability to the User for all damages or/and losses or/and causes of action exceed the amount paid by the User as 'Donation" towards various social causes of the Charitable Trust.
                </p>
              </div>
            </div>

            {/* Disclaimer of Consequential Damages */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer of Consequential Damages</h2>
              <div className="bg-orange-50 border-l-4 border-orange-400 p-6">
                <p className="text-orange-800 leading-relaxed">
                  In no event shall Charitable Trust or any parties, organizations or entities associated with the social welfare activities, mentioned at this website shall be liable for any damages whatsoever (including, without limitations, incidental and consequential damages, lost profits, or damage to computer hardware or loss of data information or business interruption) resulting from the use or inability to use the website and the website material.
                </p>
              </div>
            </div>

            {/* Disclaimer Section */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Disclaimer</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                The information contained in this website (http://www.RainbowShiksha.in/) is for general information purposes only. The Rainbow Shiksha Education Development Trust has taken reasonable steps in presenting accurate information on this website. However, no warranty or representation is extended to the User that the information and audio/video materials present on the website are free from errors or inaccuracies. To the extent allows by relevant laws of India, the Rainbow Shiksha Education Development Trust holds no accountability for any direct, indirect or consequential damages resulting from the access to and use of this website and the information contained on it.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Rainbow Shiksha Education Development Trust has ensured that the payment gateway integrated into this website (3rd party) gives a simple, quick and secure transaction experience to the User. However, in case of any error/issue like transaction failure, cyber fraud or any other problem, the Rainbow Shiksha Education Development Trust shall not be held responsible for any monetary or any kind of damage to the User. The User agrees that once the User has authorized a transaction, it shall be irrevocable and the User shall not revoke or stop any such transaction.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Some of the hyperlinks to other websites may require Users to leave this website of Rainbow Shiksha Trust. The linked websites are not under the control of Rainbow Shiksha Education Development Trust and therefore it shall not be held accountable for the contents of any linked website or any link contained in a linked website, or any changes or updates that happen to such websites in the future. It is the sole responsibility of the User to take precautions to ensure that whatever websites are clicked for use are free of viruses, bugs, problems or other issues.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In any unwarranted event, the Rainbow Shiksha Education Development Trust shall not be held liable to any party for any direct, indirect, consequential or specific damages including loss of data resulting from the use of any linked website. Every measure has been taken to smoothly run this website. However, the Rainbow Shiksha Education Development Trust takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond its control.
              </p>
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

export default TermsAndConditions;
