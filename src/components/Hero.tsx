
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const Hero = () => {
  const handleRegistration = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdZMMkhCt2XylZtx0SSYArY-oNKoqz08JX3ays0ZtuydB6DQw/viewform?usp=header', '_blank');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-jet via-feldgrau to-ash_gray text-white overflow-hidden">
      {/* Subtle overlay for text visibility without overpowering background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/30 z-10"></div>
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-8 md:py-16 flex flex-col justify-center min-h-screen z-20">
        {/* Smaller Edike Foundation Logo with softer styling */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6 z-30 animate-fade-in">
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-2 md:p-3 hover:bg-white/30 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-xl hover:scale-105">
            <div className="h-6 w-auto md:h-8 hover:scale-105 transition-all duration-300 text-white font-bold text-sm md:text-base">
              Edike Foundation
            </div>
          </div>
        </div>

        <div className="text-center max-w-5xl mx-auto relative z-30 mt-20 md:mt-0 animate-fade-in">
          {/* Softer, more blended main title */}
          <div className="mb-8 animate-[fade-in_1s_ease-out]">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 leading-tight text-white/80 drop-shadow-md [text-shadow:_1px_1px_4px_rgb(0_0_0_/_40%)] animate-[fade-in_1.2s_ease-out] transform translate-y-0">
              GOWN TO TOWN
            </h1>
            <span className="block text-lg md:text-xl lg:text-2xl font-medium text-white/70 bg-white/20 backdrop-blur-sm p-2 rounded-lg inline-block shadow-md animate-[fade-in_1.4s_ease-out] hover:bg-white/25 transition-all duration-300">
              2025
            </span>
          </div>

          {/* More subtle subtitle with softer blending */}
          <p className="text-base md:text-lg lg:text-xl mb-10 text-white/75 max-w-4xl mx-auto leading-relaxed px-4 font-medium drop-shadow-sm [text-shadow:_1px_1px_3px_rgb(0_0_0_/_40%)] bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-white/10 animate-[fade-in_1.6s_ease-out] hover:bg-black/25 transition-all duration-500">
            A Free Workplace Readiness Program for the Future of Banking & Finance
          </p>

          {/* Target Audience with subtle styling and staggered animation */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 px-4 animate-[fade-in_1.8s_ease-out]">
            <Badge className="bg-white/25 text-white/90 border-white/40 px-3 py-2 text-sm md:text-base hover:bg-white/35 transition-all duration-300 backdrop-blur-md font-medium shadow-md animate-[scale-in_0.5s_ease-out_2s_both]">
              Undergraduates
            </Badge>
            <Badge className="bg-white/25 text-white/90 border-white/40 px-3 py-2 text-sm md:text-base hover:bg-white/35 transition-all duration-300 backdrop-blur-md font-medium shadow-md animate-[scale-in_0.5s_ease-out_2.2s_both]">
              Recent Graduates
            </Badge>
            <Badge className="bg-white/25 text-white/90 border-white/40 px-3 py-2 text-sm md:text-base hover:bg-white/35 transition-all duration-300 backdrop-blur-md font-medium shadow-md animate-[scale-in_0.5s_ease-out_2.4s_both]">
              NYSC Members
            </Badge>
          </div>

          {/* Event Details with more subtle background and slide-in animation */}
          <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-6 md:p-8 mb-10 max-w-3xl mx-auto transition-all duration-500 hover:bg-white/20 border border-white/20 shadow-xl mx-4 md:mx-auto animate-[slide-in-right_0.8s_ease-out_2.6s_both] transform translate-x-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center hover:scale-105 transition-all duration-300 group animate-[fade-in_0.6s_ease-out_3s_both]">
                <div className="bg-white/30 p-2.5 rounded-full mb-3 group-hover:bg-white/40 transition-all duration-300 shadow-md">
                  <Calendar className="h-6 w-6 md:h-7 md:w-7 text-white" />
                </div>
                <p className="font-semibold text-sm md:text-base text-white/90 [text-shadow:_1px_1px_3px_rgb(0_0_0_/_50%)]">Saturday</p>
                <p className="text-xs md:text-sm text-white/80 [text-shadow:_1px_1px_3px_rgb(0_0_0_/_50%)]">August 30th, 2025</p>
              </div>
              <div className="flex flex-col items-center hover:scale-105 transition-all duration-300 group animate-[fade-in_0.6s_ease-out_3.2s_both]">
                <div className="bg-white/30 p-2.5 rounded-full mb-3 group-hover:bg-white/40 transition-all duration-300 shadow-md">
                  <Clock className="h-6 w-6 md:h-7 md:w-7 text-white" />
                </div>
                <p className="font-semibold text-sm md:text-base text-white/90 [text-shadow:_1px_1px_3px_rgb(0_0_0_/_50%)]">10:00 AM - 3:00 PM</p>
                <p className="text-xs md:text-sm text-white/80 [text-shadow:_1px_1px_3px_rgb(0_0_0_/_50%)]">One Day Event</p>
              </div>
              <div className="flex flex-col items-center hover:scale-105 transition-all duration-300 group animate-[fade-in_0.6s_ease-out_3.4s_both]">
                <div className="bg-white/30 p-2.5 rounded-full mb-3 group-hover:bg-white/40 transition-all duration-300 shadow-md">
                  <MapPin className="h-6 w-6 md:h-7 md:w-7 text-white" />
                </div>
                <p className="font-semibold text-sm md:text-base text-white/90 [text-shadow:_1px_1px_3px_rgb(0_0_0_/_50%)]">Julius Berger Auditorium</p>
                <p className="text-xs md:text-sm text-white/80 [text-shadow:_1px_1px_3px_rgb(0_0_0_/_50%)]">University of Lagos, Akoka</p>
              </div>
            </div>
          </div>

          {/* CTA with bounce animation */}
          <div className="space-y-6 px-4 animate-[fade-in_0.8s_ease-out_3.6s_both]">
            <div className="flex items-center justify-center gap-3 text-white/85 mb-6 hover:scale-105 transition-all duration-300 animate-[scale-in_0.5s_ease-out_4s_both]">
              <div className="bg-white/30 p-2 rounded-full shadow-md">
                <Users className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <span className="font-semibold text-sm md:text-base [text-shadow:_1px_1px_3px_rgb(0_0_0_/_50%)]">Limited Seats Available</span>
            </div>
            
            <Button 
              onClick={handleRegistration}
              size="lg" 
              className="bg-gradient-to-r from-ash_gray to-feldgrau text-white hover:from-feldgrau hover:to-ash_gray px-8 md:px-12 py-6 md:py-8 text-lg md:text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 border-2 border-white/50 hover:border-white/70 animate-[scale-in_0.6s_ease-out_4.2s_both] hover:animate-pulse"
            >
              🎟️ Register Now - It's Free!
            </Button>
            
            <p className="text-white/85 text-sm md:text-base mt-6 font-medium drop-shadow-md [text-shadow:_1px_1px_3px_rgb(0_0_0_/_50%)] animate-[fade-in_0.5s_ease-out_4.4s_both]">
              Participation is free, but registration is compulsory.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
