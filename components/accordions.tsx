"use client";

import { Accordion as AccordionBase, AccordionItem } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";

type TAccordion = {
  title: string;
  image?: string | StaticImageData;
  content: string;
};

const Accordion = ({ accordions }: { accordions: TAccordion[] }) => {
  return (
    <div className="mt-24">
      <AccordionBase selectionMode="multiple">
        {accordions.map((accordion, index) => (
          <AccordionItem
            key={index}
            aria-label="Accordions"
            title={accordion.title}
            className="bg-white px-5 w-full border-b-2 border-solid border-blue-700 drop-shadow-2xl mb-1"
          >
            <div
              className={`flex flex-col items-center justify-center w-full gap-5 ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {accordion.image && (
                <div className="h-[300px] w-full sm:w-[50%]">
                  <Image
                    src={accordion.image}
                    alt={accordion.title}
                    className="object-contain rounded-md"
                  />
                </div>
              )}
              <p className="text-zinc-800 flex-1">{accordion.content}</p>
            </div>
          </AccordionItem>
        ))}
      </AccordionBase>
    </div>
  );
};

export default Accordion;
