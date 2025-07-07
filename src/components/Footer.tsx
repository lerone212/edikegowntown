
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-jet via-feldgrau to-ash_gray text-white">
      {/* Supported By Section with green, white, and black blend background */}
      <div className="py-20 bg-gradient-to-br from-white via-[#65a876]/20 to-gray-800 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-16 text-gray-900 animate-fade-in bg-gradient-to-r from-gray-900 to-[#65a876] bg-clip-text text-transparent">
              Supported By:
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
              <div className="transform hover:scale-110 transition-all duration-500 animate-[slide-in-right_0.8s_ease-out_0.2s_both] hover:rotate-1 group">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 border border-gray-300 shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-white group-hover:-translate-y-2">
                  <div className="h-8 md:h-10 w-auto opacity-90 hover:opacity-100 transition-all duration-300 filter hover:contrast-110 text-gray-800 font-bold text-sm md:text-base">
                    Competence
                  </div>
                </div>
              </div>
              <div className="transform hover:scale-110 transition-all duration-500 animate-[slide-in-right_0.8s_ease-out_0.5s_both] hover:-rotate-1 group">
                <div className="bg-black backdrop-blur-sm rounded-2xl p-6 border border-gray-600 shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-gray-900 group-hover:-translate-y-2">
                  <div className="h-8 md:h-10 w-auto opacity-100 hover:opacity-100 transition-all duration-300 filter brightness-125 contrast-125 hover:brightness-150 text-white font-bold text-sm md:text-base">
                    askcho.ai
                  </div>
                </div>
              </div>
              <div className="transform hover:scale-110 transition-all duration-500 animate-[slide-in-right_0.8s_ease-out_0.8s_both] hover:rotate-1 group">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 border border-gray-300 shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-white group-hover:-translate-y-2">
                  <div className="h-8 md:h-10 w-auto opacity-90 hover:opacity-100 transition-all duration-300 filter hover:contrast-110 text-gray-800 font-bold text-sm md:text-base">
                    Edike Foundation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-20 bg-gradient-to-br from-white via-green-50 to-[#65a876]/10">
        <div className="container mx-auto px-4">
          {/* About Edike Foundation */}
          <div className="max-w-5xl mx-auto text-center mb-16 animate-fade-in">
            <h4 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 bg-gradient-to-r from-gray-900 to-[#65a876] bg-clip-text text-transparent animate-[fade-in_0.8s_ease-out_0.2s_both]">
              About Edike Foundation
            </h4>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500 animate-[scale-in_0.6s_ease-out_0.4s_both]">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg font-light animate-[fade-in_0.6s_ease-out_0.6s_both]">
                Edike Foundation, established in 2023, is a non-profit organisation committed to empowering 
                disadvantaged youth in Nigeria through education. We provide scholarships and comprehensive 
                support services to students who have lost a parent due to medical-related conditions or 
                terminal illnesses, enabling them to complete their education and achieve their full potential.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8 text-lg font-light animate-[fade-in_0.6s_ease-out_0.8s_both]">
                Our mission is rooted in the belief that education is the cornerstone of individual and 
                societal progress. By investing in these young minds, we not only transform lives but also 
                contribute to a more equitable and prosperous Nigeria.
              </p>
              <p className="text-[#65a876] font-semibold text-lg animate-[fade-in_0.6s_ease-out_1s_both]">
                Learn more at: <a href="https://www.edikefoundation.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#4a8c5a] transition-colors duration-300 hover:no-underline">www.edikefoundation.com</a>
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center border-t border-gray-200 pt-12 animate-fade-in">
            <div className="bg-gradient-to-r from-white to-[#65a876]/10 rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200 animate-[scale-in_0.8s_ease-out_1.2s_both] hover:scale-105 transition-all duration-500">
              <h3 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-[#65a876] bg-clip-text text-transparent leading-tight animate-[fade-in_0.6s_ease-out_1.4s_both]">
                From classroom to boardroom — your journey starts here.
              </h3>
              <p className="text-[#65a876] text-xl md:text-2xl font-semibold animate-[fade-in_0.6s_ease-out_1.6s_both]">
                Register for Gown to Town 2025 Now
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-12 pt-8 border-t border-gray-200 animate-[fade-in_0.5s_ease-out_1.8s_both]">
            <p className="text-gray-600 text-sm">
              © 2025 Edike Foundation. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
