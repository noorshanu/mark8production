/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  FaTelegram,
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa6";

const Cta = () => {
  return (
    <section className="relative bg-[#fdd820] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-4">
              Ready to take your brand to the next level?
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
              We are here to help you with your brand&apos;s growth.
            </p>
            <button className="bg-yellow-500 text-black px-4 py-2 rounded-md">
              Get Started
            </button>
            <div className="flex items-center gap-4">
              <a href="#">
                <FaTelegram className="text-black text-2xl" />
              </a>
              <a href="#">
                <FaInstagram className="text-black text-2xl" />
              </a>

              <a href="#">
                <FaYoutube className="text-black text-2xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-black text-2xl" />
              </a>
            </div>
          </div>
          <div>
            <img src="/cta.png" alt="cta" className=" mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
