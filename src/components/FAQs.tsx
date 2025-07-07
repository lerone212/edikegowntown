
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-gray-200 bg-gray-50 rounded-lg mb-4 px-6 hover:bg-gray-100 transition-all duration-300">
              <AccordionTrigger className="text-left text-gray-900 hover:text-gray-700 py-6">
                Who can attend?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Undergraduates in any Nigerian university</li>
                  <li>NYSC corps members</li>
                  <li>Recent graduates (0–2 years post-NYSC)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-gray-200 bg-gray-50 rounded-lg mb-4 px-6 hover:bg-gray-100 transition-all duration-300">
              <AccordionTrigger className="text-left text-gray-900 hover:text-gray-700 py-6">
                Is there a dress code?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-6">
                Yes, smart casual or corporate preferred — be camera ready!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-gray-200 bg-gray-50 rounded-lg mb-4 px-6 hover:bg-gray-100 transition-all duration-300">
              <AccordionTrigger className="text-left text-gray-900 hover:text-gray-700 py-6">
                How much does it cost to attend?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-6">
                Attendance is completely free, but registration is required.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-gray-200 bg-gray-50 rounded-lg mb-4 px-6 hover:bg-gray-100 transition-all duration-300">
              <AccordionTrigger className="text-left text-gray-900 hover:text-gray-700 py-6">
                Will food and refreshments be provided?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-6">
                Yes, breakfast is available for early arrivals, while lunch will be available to all participants.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-gray-200 bg-gray-50 rounded-lg mb-4 px-6 hover:bg-gray-100 transition-all duration-300">
              <AccordionTrigger className="text-left text-gray-900 hover:text-gray-700 py-6">
                Will there be opportunities to network one-on-one with the speakers?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-6">
                Yes. Designated networking sessions and lounges will allow for informal interactions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-gray-200 bg-gray-50 rounded-lg mb-4 px-6 hover:bg-gray-100 transition-all duration-300">
              <AccordionTrigger className="text-left text-gray-900 hover:text-gray-700 py-6">
                How will I get updates after registration?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-6">
                Once registered, you will receive updates via email and WhatsApp as the event approaches.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
