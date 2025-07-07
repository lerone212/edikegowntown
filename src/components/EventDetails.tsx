
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Award, Gift } from 'lucide-react';

const EventDetails = () => {
  return (
    <section className="py-16 bg-white transition-all duration-1000">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#65a876] mb-4 animate-fade-in transition-all duration-800 hover:scale-105 transform">
            Bridge the Gap Between Classroom and Boardroom
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in delay-200 transition-all duration-700 hover:text-gray-800">
            Get practical insights into the workplace, direct access to senior professionals, 
            and tools to help you confidently transition from academic knowledge to real-world expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center hover:shadow-2xl transition-all duration-700 border-[#65a876]/20 hover:border-[#65a876]/60 transform hover:-translate-y-4 hover:rotate-1 group animate-fade-in delay-300">
            <CardHeader>
              <BookOpen className="h-12 w-12 text-[#65a876] mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
              <CardTitle className="text-lg text-[#65a876] transition-all duration-300 group-hover:scale-105">Career Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 transition-all duration-300 group-hover:text-gray-800">
                Practical tools for resume building, interview prep, and industry alignment
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-2xl transition-all duration-700 border-[#65a876]/20 hover:border-[#65a876]/60 transform hover:-translate-y-4 hover:-rotate-1 group animate-fade-in delay-400">
            <CardHeader>
              <Users className="h-12 w-12 text-[#65a876] mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
              <CardTitle className="text-lg text-[#65a876] transition-all duration-300 group-hover:scale-105">Industry Leaders</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 transition-all duration-300 group-hover:text-gray-800">
                Real conversations with professionals shaping the banking and finance sector
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-2xl transition-all duration-700 border-[#65a876]/20 hover:border-[#65a876]/60 transform hover:-translate-y-4 hover:rotate-1 group animate-fade-in delay-500">
            <CardHeader>
              <Award className="h-12 w-12 text-[#65a876] mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
              <CardTitle className="text-lg text-[#65a876] transition-all duration-300 group-hover:scale-105">Certification</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 transition-all duration-300 group-hover:text-gray-800">
                Participation certificates and branded merchandise as takeaways
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-2xl transition-all duration-700 border-[#65a876]/20 hover:border-[#65a876]/60 transform hover:-translate-y-4 hover:-rotate-1 group animate-fade-in delay-600">
            <CardHeader>
              <Gift className="h-12 w-12 text-[#65a876] mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
              <CardTitle className="text-lg text-[#65a876] transition-all duration-300 group-hover:scale-105">Freebies & More</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 transition-all duration-300 group-hover:text-gray-800">
                Refreshments, photo zones, games, and content-worthy experiences
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
