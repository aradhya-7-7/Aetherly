import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4 animate-bounce">
        Let's Get in Touch! 💌
      </h1>
      <p className="text-lg sm:text-xl text-gray-700 mb-10 max-w-xl">
        Got questions, feedback, or just wanna say hi? Hit us up through any of
        these!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
        <a
          href="mailto:aradhya610@gmail.com"
          className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
        >
          <FaEnvelope className="text-pink-500 text-2xl" />
          <span className="font-semibold text-gray-800">
            aradhya610@gmail.com
          </span>
        </a>

        {/* 
        <a
          href="tel:+1234567890"
          className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
        >
          <FaPhoneAlt className="text-blue-500 text-2xl" />
          <span className="font-semibold text-gray-800">+1 (234) 567-890</span>
        </a> */}

        <a
          href="https://www.instagram.com/aradhya.7"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
        >
          <FaInstagram className="text-pink-600 text-2xl" />
          <span className="font-semibold text-gray-800">@aradhya.7</span>
        </a>

        <a
          href="https://github.com/aradhya-7-7"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
        >
          <FaGithub className="text-black text-2xl" />
          <span className="font-semibold text-gray-800">@aradhya-7-7</span>
        </a>
      </div>

      <div className="mt-10 flex items-center justify-center gap-3 text-gray-700">
        <FaMapMarkerAlt className="text-red-500 text-xl" />
        <span className="text-md font-medium">
          123 Funky Street, Vibetown, Planet Earth 🌍
        </span>
      </div>
    </div>
  );
};

export default ContactUs;
