
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Sparkles } from 'lucide-react';

const RegistrationForm = () => {
  const handleRegistrationClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdZMMkhCt2XylZtx0SSYArY-oNKoqz08JX3ays0ZtuydB6DQw/viewform?usp=header', '_blank');
  };

  return (
    <section id="registration" className="py-16 bg-gradient-to-br from-white to-[#65a876]/10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#65a876]/10 rounded-full animate-ping duration-3000"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-[#65a876]/5 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-[#65a876]/10 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in transition-all duration-800 hover:scale-105 transform hover:text-[#65a876]">
            Gown to Town 2025 – Registration
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 mb-6 animate-fade-in delay-200 transition-all duration-700 hover:text-gray-800 hover:scale-105 transform">
              Ready to take the first step toward your professional journey? Register now for our free workplace readiness event.
            </p>
            <div className="bg-gradient-to-r from-[#65a876]/10 to-green-100 rounded-2xl p-6 text-left animate-fade-in delay-300 hover:shadow-xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 border border-[#65a876]/20 hover:border-[#65a876]/40">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-[#65a876] animate-pulse" />
                <span className="font-semibold text-[#65a876]">Event Details</span>
              </div>
              <p className="text-[#65a876] font-semibold mb-2 hover:scale-105 transition-all duration-300 transform cursor-default">📅 Date: August 30th, 2025</p>
              <p className="text-[#65a876] font-semibold mb-2 hover:scale-105 transition-all duration-300 transform cursor-default">📍 Venue: University of Lagos, Akoka</p>
              <p className="text-[#65a876] font-semibold hover:scale-105 transition-all duration-300 transform cursor-default">🎟️ Participation is free, but registration is compulsory.</p>
            </div>
          </div>
        </div>

        <Card className="max-w-2xl mx-auto shadow-2xl border-[#65a876]/20 hover:border-[#65a876]/40 transition-all duration-700 transform hover:scale-105 hover:-translate-y-4 animate-fade-in delay-500">
          <CardHeader className="text-center bg-gradient-to-r from-[#65a876]/5 to-green-50 rounded-t-lg">
            <CardTitle className="text-2xl text-[#65a876] transition-all duration-500 hover:scale-110 transform">Register Now</CardTitle>
            <CardDescription className="transition-all duration-300 hover:text-gray-700 hover:scale-105 transform">
              Click the button below to fill out our registration form and secure your spot.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-6 p-8">
            <div className="bg-gradient-to-br from-[#65a876]/10 to-green-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-[#65a876]/20 hover:border-[#65a876]/40">
              <h3 className="text-lg font-semibold text-[#65a876] mb-2 transition-all duration-300 hover:scale-110 transform">What You'll Need:</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="hover:text-[#65a876] hover:scale-105 transition-all duration-300 transform cursor-default">• Your full name and contact information</li>
                <li className="hover:text-[#65a876] hover:scale-105 transition-all duration-300 transform cursor-default">• Current academic status and institution</li>
                <li className="hover:text-[#65a876] hover:scale-105 transition-all duration-300 transform cursor-default">• Course of study and level/graduation year</li>
                <li className="hover:text-[#65a876] hover:scale-105 transition-all duration-300 transform cursor-default">• Brief reason for your interest (optional)</li>
              </ul>
            </div>
            
            <Button 
              onClick={handleRegistrationClick}
              size="lg" 
              className="bg-[#65a876] hover:bg-[#5a9669] text-white px-10 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-125 hover:-translate-y-3 flex items-center gap-3 mx-auto animate-pulse hover:animate-bounce border-2 border-transparent hover:border-white group"
            >
              <ExternalLink className="h-6 w-6 transition-all duration-300 group-hover:rotate-12 group-hover:scale-125" />
              Fill Registration Form
              <Sparkles className="h-5 w-5 animate-ping" />
            </Button>
            
            <p className="text-sm text-gray-500 transition-all duration-300 hover:text-[#65a876] hover:scale-105 transform">
              The form will open in a new tab. Make sure to complete all required fields.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RegistrationForm;
