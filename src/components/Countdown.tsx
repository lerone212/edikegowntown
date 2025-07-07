
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-08-30T10:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-[#65a876] to-[#7db585]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 hover:scale-105 transition-transform duration-300">
            Countdown To Gown-To-Town
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          <Card className="text-center bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl md:text-4xl font-bold text-[#65a876]">
                {timeLeft.days}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 font-medium text-sm md:text-base">Days</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl md:text-4xl font-bold text-[#65a876]">
                {timeLeft.hours}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 font-medium text-sm md:text-base">Hours</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl md:text-4xl font-bold text-[#65a876]">
                {timeLeft.minutes}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 font-medium text-sm md:text-base">Minutes</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl md:text-4xl font-bold text-[#65a876]">
                {timeLeft.seconds}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 font-medium text-sm md:text-base">Seconds</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
