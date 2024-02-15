"use client";

import Image from "next/image";
// import { accordions } from "./accordions";
import { Accordion, AccordionItem } from "@nextui-org/react";
import SIIMAGE from "@/public/system-integrations/System Integrations.png";
import ADI from "@/public/system-integrations/SI - Atlas Data Integration.png";
import PRIME from "@/public/system-integrations/SI - PRIME.png";
import DMPORTAL from "@/public/system-integrations/SI -DM Portal.png";

const accordions = [
  {
    title: "Atlas Data Integration",
    image: ADI,
    content:
      "Atlas Data Integration revolutionizes supply chain operations by automating data generation up to hourly intervals, facilitating faster planning for next-day loading. Its system integration ensures compliance with standard cybersecurity assessments, bolstering data security. Key features include report generation by PI Business Analytics Tools, Customized Web API for tailored reporting, and customized programming for data transformation. This enables seamless massaging of raw reports into the required format, enhancing data accuracy and usability. Moreover, data integration from ATG/OMEGA Totalizer sources to the PI Server and further to SAP and DOVE platform (AWS Data Store) ensures end-to-end visibility and data integrity. By streamlining operations, optimizing reporting processes, and strengthening data security, Atlas Data Integration drives operational excellence and maximizes value across the supply chain. ",
  },
  {
    title: "PRIME",
    image: PRIME,
    content:
      "PRIME Asset Engineering offers distinctive value through the creation of interactive dashboards featuring drag-and-drop functionality, ensuring user-friendly maintenance. It incorporates Power Query for seamless data transformation and shaping before loading into the model, enhancing data accuracy and usability. Direct integration from various data sources, such as PI-APS for DCS Point Configuration Data and Control Loop list, as well as IPSS/MOC for Bypass Data, streamlines the data acquisition process, ensuring real-time and accurate insights. With PRIME Asset Engineering, users experience enhanced efficiency and agility in data management and analysis, driving informed decision-making and operational excellence. ",
  },
  {
    title: "DM PORTAL",
    image: DMPORTAL,
    content:
      "DM Portal serves as a centralized data platform for PAC Contractors, streamlining Deferment Data submission to authorities. It enables authorities to monitor PAC performance and manage deferment effectively. Its unique value lies in identifying and addressing root causes of deferment issues, aiding resolution and providing insightful business-level data to authorities. Key features include Centralized Data Submission, allowing multiple operators from various companies to submit on a single platform. Leveraging Azure AD for authentication, it ensures secure access for external users. Furthermore, it offers Data Serving through APIs, enabling third-party data consumption. DM Portal enhances deferment management, fostering collaboration, and providing actionable insights for improved operational efficiency across the supply chain. ",
  },
];

const Page = () => {
  return (
    <main className="py-32 px-10 md:px-24 lg:px-40 bg-white">
      <header className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-zinc-800 text-5xl font-bold">System Integration</h1>
        <p className="text-gray-500 text-2xl text-center">
          The System Integrations portfolio encompasses three innovative
          projects. Atlas Data Integration revolutionizes supply chains by
          automating data generation and ensuring cybersecurity compliance,
          facilitating seamless reporting and data transformation for enhanced
          accuracy and usability across platforms like SAP. PRIME Asset
          Engineering enhances maintenance with interactive dashboards and
          seamless data integration, empowering real-time insights and informed
          decision-making. Meanwhile, DM Portal centralizes deferment data
          submission for PAC Contractors, providing actionable insights and
          fostering collaboration through secure authentication and third-party
          data consumption. Together, these projects optimize operations, drive
          efficiency, and strengthen data management across the supply chain.
        </p>
      </header>

      <div className="flex flex-row items-center justify-center mt-10">
        {/* <Image
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
        /> */}
        <Image
          src={SIIMAGE}
          alt="Big Data"
          className="object-contain rounded-md"
        />
      </div>

      {/* <DMPortal />
      <ESMART />
      <PrimeAssetEngin />
      <ATLASDataInteg /> */}

      <div className="mt-24">
        <Accordion selectionMode="multiple">
          {accordions.map((accordion, index) => (
            <AccordionItem
              key={index}
              aria-label="Accordions"
              title={accordion.title}
              className="bg-white px-5 w-full border-b-2 border-solid border-blue-700 drop-shadow-2xl mb-1"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-5">
                {accordion.image && (
                  <div className="h-[300px] w-full sm:w-[50%]">
                    <Image
                      src={accordion.image as unknown as string}
                      alt={accordion.title}
                      className="object-contain rounded-md"
                    />
                  </div>
                )}
                <p className="text-zinc-800 flex-1">{accordion.content}</p>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </main>
  );
};

export default Page;
