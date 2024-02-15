"use client";

import Image from "next/image";
import NEWIMAGE from "@/public/big-data/Big Data.png";
import { Accordion, AccordionItem } from "@nextui-org/react";
import CDETIMAGE from "@/public/big-data/BD- CDET.png";
import USDPIMAGE from "@/public/big-data/BD - USDP2.png";
import CMIMAGE from "@/public/big-data/BD - Chemical Monitoring 2.png";
import CPMIMAGE from "@/public/big-data/BD- Compressor Predictive Maintenance (cluster).png";

const accordions = [
  {
    title: "CDET",
    image: CDETIMAGE,
    content:
      "CDET, the Centralized Data and Tracking of Electrical Protection Relays System, serves as a pivotal tool for monitoring thousands of electrical relays controlling motors, pumps, compressors, and more. Its unique value lies in empowering users to derive comprehensive insights and gain a holistic view of technical operations, fostering cross-functional collaboration and informed decision-making. Users can proactively identify risk factors, implement preventive measures, and enhance safety protocols to mitigate accidents, ensure regulatory compliance, and safeguard personnel and assets. Key features include Real-Time Updates, ensuring users access the most recent data with automatic refresh capabilities. Data Integration consolidates multiple data sources, while Data Visualization presents complex information in user-friendly formats. Additionally, customizable alerts and notifications keep users informed, tailored to different roles for effective communication and response management. ",
  },
  {
    title: "USDP",
    image: USDPIMAGE,
    content:
      "USDP, the Unified Data Platform, serves as a centralized hub for accessing all application data across Upstream operations. The Upstream Surface Data Platform aims to provide continuous data serving across transactional, engineering, and real-time data streams. Additionally, it upholds industrial standards and ensures robust data governance practices. USDP offers APIs for third parties to access both structured and unstructured data, enabling external stakeholders to harness valuable insights for their operations. With its comprehensive suite of features, USDP streamlines data access and facilitates collaborative decision-making within the Upstream sector. ",
  },
  {
    title: "Chemical Monitoring",
    image: CMIMAGE,
    content:
      "PETRONAS CHEMICAL ONLINE MONITORING (PChOM) is visualization build using PETRONAS GTD internal platform (PETTA) to fully utilize to analyses and monitor production chemical performance and injection at whole region Malaysia. ",
  },
  {
    title: "Compressor Predictive Maintenance (cluster)",
    image: CPMIMAGE,
    content:
      "Predictive Maintenance aims to develop a versatile predictive model applicable across equipment and platforms. The approach focuses on analyzing existing data rather than implementing new sensors, ensuring efficiency and cost-effectiveness. Emphasizing value, even from small data sets, it aims to enhance processes continuously. Objectives include reducing downtime, maximizing production, optimizing inventory, and promoting cost-saving practices. Data acquisition is facilitated through the proprietary PI System. By leveraging predictive analytics, this methodology enhances equipment reliability, minimizes unplanned downtime, and streamlines maintenance operations, ultimately driving operational efficiency and improving asset performance. ",
  },
];

const Page = () => {
  return (
    <main className="py-32 px-10 md:px-24 lg:px-40 bg-white">
      <header className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-zinc-800 text-5xl font-bold">Big Data</h1>
        <p className="text-gray-500 text-2xl text-center">
          {/* With the advance of computing prowess, the ability to crunch large
          amounts of data has proven to be beneficial to us in many aspects,
          throughout all industries. */}
          In the realm of Big Data, crafting robust enterprise data architecture
          is key. With expertise honed through collaborations with industry
          giants like SHELL, PETRONAS (RAPID), and multinationals such as IBM,
          Lenovo, and Intel, we specialize in blueprinting and implementing data
          architecture roadmaps. Consurv excels in extracting and cleansing vast
          datasets, leveraging technologies like Hadoop and partnering with
          industry-leading Data Warehouses. Our Data Scientists and Subject
          Matter Experts (SMEs) develop cutting-edge algorithms for predictive
          maintenance, supply-chain optimization, and gas production
          enhancement. With a track record of managing Petabytes of data, we
          transform raw data into actionable insights, driving innovation and
          efficiency.
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
          src={NEWIMAGE}
          alt="Big Data"
          className="object-contain rounded-md"
        />
      </div>

      {/* <CDET />
      <USDP /> */}
      {/* <RealTimeData /> */}
      {/* <DataAnalytics /> */}

      <div className="mt-24">
        <Accordion selectionMode="multiple">
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
