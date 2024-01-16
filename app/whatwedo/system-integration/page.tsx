"use client";

import Image from "next/image";
import LEFTIMAGE from "@/public/system-integrations/S1-768x348.png";
import RIGHTIMAGE from "@/public/system-integrations/S3-768x433.png";
import { accordions } from "./accordions";
import { Accordion, AccordionItem } from "@nextui-org/react";
import DMPortal from "@/components/system-integration/dm-portal";
import ESMART from "@/components/system-integration/esmart";
import PrimeAssetEngin from "@/components/system-integration/pae";
import ATLASDataInteg from "@/components/system-integration/ade";

const Page = () => {
  return (
    <main className="py-32 px-10 md:px-24 lg:px-40 bg-white">
      <header className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-zinc-800 text-5xl font-bold">System Integration</h1>
        <p className="text-gray-500 text-2xl text-center">
          Integration of multiple systems is the key to operating facilities and
          companies efficiently and effectively.
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
          Consurv has installed, commissioned and integrated multiple systems
          for Oil & Gas and utility clients. We are also certified SI for
          OSIsoft. The team has experience in System Architecture, developing
          blueprints and implementing them. Other than that, Consurv has
          supplied IT hardware (serves, HPC, etc.) and software for more than 10
          years.
        </p>
      </div>

      <DMPortal />
      <ESMART />
      <PrimeAssetEngin />
      <ATLASDataInteg />

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
