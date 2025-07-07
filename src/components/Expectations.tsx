
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Network, Coffee, Camera } from 'lucide-react';

const Expectations = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#65a876] mb-4 animate-fade-in">
            What To Expect
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto animate-fade-in delay-200">
            Gain exclusive access to industry-leading speakers and hands-on career development. 
            You'll hear directly from top executives in human resources, fintech, corporate banking, 
            operations, and more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-xl transition-all duration-300 border-[#65a876]/20 bg-white transform hover:-translate-y-1 group">
            <CardHeader>
              <BookOpen className="h-8 w-8 text-[#65a876] mb-2 group-hover:scale-110 transition-transform duration-300" />
              <CardTitle className="text-[#65a876]">Career Strategy Workshops</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Practical tools for resume building, interview prep, and industry alignment
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-[#65a876]/20 bg-white transform hover:-translate-y-1 group">
            <CardHeader>
              <Network className="h-8 w-8 text-[#65a876] mb-2 group-hover:scale-110 transition-transform duration-300" />
              <CardTitle className="text-[#65a876]">Networking with Banking Leaders</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Real conversations with professionals shaping the sector
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-[#65a876]/20 bg-white transform hover:-translate-y-1 group">
            <CardHeader>
              <Coffee className="h-8 w-8 text-[#65a876] mb-2 group-hover:scale-110 transition-transform duration-300" />
              <CardTitle className="text-[#65a876]">Freebies & Takeaways</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Participation certificates, branded merchandise, and refreshments
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 border-[#65a876]/20 bg-white transform hover:-translate-y-1 group">
            <CardHeader>
              <Camera className="h-8 w-8 text-[#65a876] mb-2 group-hover:scale-110 transition-transform duration-300" />
              <CardTitle className="text-[#65a876]">Engaging Social Moments</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Photo zones, games, and content-worthy experiences
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center bg-[#65a876]/10 backdrop-blur-sm rounded-2xl p-8 border border-[#65a876]/20 hover:bg-[#65a876]/15 transition-all duration-300">
          <h3 className="text-2xl font-bold text-[#65a876] mb-4">
            🎓 Be part of a new generation shaping the future of finance
          </h3>
          <p className="text-gray-600 text-lg">
            📲 Fill the registration form now and take the first step toward your professional journey
          </p>
        </div>
      </div>
    </section>
  );
};

export default Expectations;
