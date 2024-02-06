"use client";

import Image from "next/image";
import LEFTIMAGE from "@/public/big-data/B1-768x307.jpg";
import RIGHTIMAGE from "@/public/big-data/B2-768x307.jpg";
import { Accordion, AccordionItem } from "@nextui-org/react";
import DataAnalytics from "./DataAnalytics";
import RealTimeData from "./RealTimeData";

const accordions = [
  {
    title: "Drilling",
    content:
      "Drilling analytics usually refers to the usage of available drilling data to further improve the drilling performance. Drilling performance differs in different situations; some might prefer higher penetration rates, lower mean time between failure, or maximum return per foot drilled.",
  },
  {
    title: "PM & PdM",
    content:
      "The advent of Artificial Intelligence (AI) and the IR 4.0 has driven the maintenance process into a new dimension with Predictive Maintenance (PdM) and Prescriptive Maintenance (PM) being the two main methods, PdM involves attaching sensors and monitoring gadgets to inspect when these machines actually require maintenance. PM brings it further by automating the maintenance process as well.",
  },
  {
    title: "Fraud Detection",
    content:
      "Fraud detection involves many analyses and processes which allow businesses and companies to identify fraudulent activities mainly involving finance.",
  },
  {
    title: "Market Basket Analysis",
    content:
      "Market Basket analysis is crucial in increasing revenues for retailers and sellers. This analysis provides insight into the customer’s buying patterns and behaviour by identifying potential useful and important connections. Mostly it is used to extract knowledge about unexpected trends.",
  },
];

const Page = () => {
  return (
    <main className="py-32 px-10 md:px-24 lg:px-40 bg-white">
      <header className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-zinc-800 text-5xl font-bold">Big Data</h1>
        <p className="text-gray-500 text-2xl text-center">
          With the advance of computing prowess, the ability to crunch large
          amounts of data has proven to be beneficial to us in many aspects,
          throughout all industries.
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

      <RealTimeData />
      <DataAnalytics />

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
