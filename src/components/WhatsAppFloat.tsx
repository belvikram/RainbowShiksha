import React, { useState } from 'react';
import { X, Users, MessageCircle } from 'lucide-react';
import WhatsAppLogo from '../assets/social-media-logos/whatsAppLogo.png';

const WhatsAppFloat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleJoinGroup = () => {
    // WhatsApp group invite link
    const whatsappGroupLink = "https://chat.whatsapp.com/F8hKH95ua0ZAq4hKhHvZtM";
    window.open(whatsappGroupLink, '_blank');
  };

  const handleWhatsAppChat = () => {
    // Direct message to your WhatsApp number
    const whatsappNumber = "919700400237";
    const message = encodeURIComponent("Hi! I'm interested in joining Rainbow Shiksha's mission. Can you tell me more about how I can get involved?");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-transparent p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label="Open WhatsApp chat"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <img 
              src={WhatsAppLogo} 
              alt="WhatsApp" 
              className="h-12 w-12"
            />
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 max-w-[calc(100vw-3rem)]">
          {/* Header */}
          <div className="bg-green-500 text-white p-4 rounded-t-2xl flex items-center space-x-3">
            <div className="bg-white bg-opacity-20 p-2 rounded-full">
              <img 
                src={WhatsAppLogo} 
                alt="WhatsApp" 
                className="h-5 w-5"
              />
            </div>
            <div>
              <h3 className="font-semibold">Rainbow Shiksha</h3>
              <p className="text-xs opacity-90">Usually replies within minutes</p>
            </div>
          </div>

          {/* Chat Content */}
          <div className="p-4">
            <div className="mb-4">
              <div className="bg-gray-100 rounded-lg p-3 text-sm text-gray-700">
                <p className="mb-2">👋 Hi there!</p>
                <p className="mb-2">
                  Welcome to Rainbow Shiksha! We're passionate about transforming education and creating brighter futures for children.
                </p>
                <p>
                  Join our community to stay updated on our impact, volunteer opportunities, and upcoming events!
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleJoinGroup}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200 font-medium"
              >
                <Users className="h-5 w-5" />
                <span>Join Our WhatsApp Group</span>
              </button>
              
              <button
                onClick={handleWhatsAppChat}
                className="w-full border-2 border-green-500 text-green-600 hover:bg-green-50 py-3 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200 font-medium"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </div>

            {/* Quick Info */}
            <div className="mt-4 pt-3 border-t border-gray-100">
              <p className="text-xs text-gray-500 text-center">
                💡 Join our community of changemakers making education accessible to every child
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-20"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default WhatsAppFloat;
