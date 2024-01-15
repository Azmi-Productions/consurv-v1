"use client";

import Image from "next/image";
import LEFTIMAGE from "@/public/digital-solutions/D1-768x307.jpg";
import RIGHTIMAGE from "@/public/digital-solutions/D3-768x307.jpg";
import { accordions } from "./accordions";
import { Accordion, AccordionItem } from "@nextui-org/react";
import SystemDev from "./SystemDev";

const Page = () => {
  return (
    <main className="py-32 px-10 md:px-24 lg:px-40 bg-white">
      <header className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-zinc-800 text-5xl">Digital Solutions</h1>
        <p className="text-gray-500 text-2xl text-center">
          The B2B technology companies would have to heavily shift their
          gameplay in the upcoming years to accommodate the ever changing and
          competitive business environment. Fret not, as we can help you with
          that!
        </p>
      </header>

      <div className="flex flex-row items-center justify-center">
        <Image
          src={RIGHTIMAGE}
          alt="Right Image"
          unoptimized
          className="object-contain rounded-md w-[150px] h-[150px] md:w-[500px] md:h-[500px]"
        />
        <Image
          src={LEFTIMAGE}
          alt="Left Image"
          unoptimized
          className="object-contain rounded-md w-[150px] h-[150px] md:w-[500px] md:h-[500px]"
        />
      </div>

      <div className="flex items-center justify-center text-lg px-10">
        <p className="text-zinc-800">
          Our clients often approach us with their problem statements; being it
          as simple as creating a (front end) reporting dashboard to as complex
          as optimizing the operations and production of a refinery; Consurv is
          able to build and implement customized digital solutions for its
          clients.
          <br />
          One of our differentiators is that we are not just an IT company, but
          an engineering IT company, having the domain knowledge of the
          industries we serve. Our team is from a diverse background comprising
          of Chemical, Petroleum, Mechanical and Electrical engineers, along
          with programmers and data scientist.
        </p>
      </div>

      <SystemDev />

      <div className="mt-24">
        <Accordion selectionMode="multiple">
          {accordions.map((accordion, index) => (
            <AccordionItem
              key={index}
              aria-label="Accordions"
              title={accordion.title}
              className="bg-white px-5 w-full border-b-2 border-solid border-blue-700 drop-shadow-2xl mb-1"
            >
              <p className="text-zinc-800"> {accordion.content}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </main>
  );
};

export default Page;
