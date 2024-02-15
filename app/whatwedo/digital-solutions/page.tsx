"use client";

import Image from "next/image";
import DSIMAGE from "@/public/digital-solutions/Digital Solutions.png";
// import { accordions } from "./accordions";
import { Accordion, AccordionItem } from "@nextui-org/react";
import ECG from "@/public/digital-solutions/DS - ECG.jpg";
import DS from "@/public/digital-solutions/DS - Digital Stations.png";
import DRILLING from "@/public/digital-solutions/DS - Drilling Simulation.jpg";
import PLS from "@/public/digital-solutions/DS - Private LTE Solutions.png";

const accordions = [
  {
    title: "Digital Stations",
    image: DS,
    content:
      "Digital Stations seamlessly integrate CCTV feeds, offering insights and dealer management recommendations. Leveraging advanced analytics, it identifies customer demographics and optimizes convenience store offerings. Key features include number plate, car model, and facial recognition for enhanced security. It also monitors stocks and facilities, providing real-time alerts. Our Digital Stations revolutionize operations, offering efficiency and profitability through targeted promotions and automated monitoring, driving convenience store sales and ensuring optimal dealer performance. ",
  },
  {
    title: "RFID",
    content:
      "Our RFID solutions redefine access control, asset tracking, and inventory management, surpassing traditional methods. Unlike manual badge swiping or visual tracking, our active RFID tags seamlessly monitor valuable items and personnel throughout facilities. Unauthorized movements trigger automatic alarms, enhancing security. Our software integrates people and assets, allowing only authorized personnel to handle specific items. For inventory, tags automatically report their presence, ensuring accurate counts without manual effort. Missed check-ins prompt immediate alarms for swift investigation. With hands-free, automated updates, our RFID solutions revolutionize inventory management, offering unparalleled efficiency and savings for businesses. ",
  },
  {
    title: "ECG",
    image: ECG,
    content:
      "Our ECG solutions offer a portable ECG machine tailored for offshore use, delivering results with a swift 15-minute turnaround time. Diagnostic data is relayed promptly to the respective originating location, ensuring seamless communication and timely intervention. Moreover, all results, along with medical recommendations from a doctor, are meticulously updated in the online dashboard. This comprehensive approach not only provides efficient diagnostic capabilities but also facilitates informed decision-making for healthcare professionals, ultimately enhancing patient care and safety in offshore environments. ",
  },
  {
    title: "Drilling Simulation",
    image: DRILLING,
    content:
      "Our company specializes in offering comprehensive solutions for the setup and ongoing upkeep of advanced Drilling Simulators. These services encompass the installation and maintenance phases, ensuring seamless integration and optimal functionality of the simulation systems. From initial setup to continuous monitoring and support, our team delivers expertise in configuring the simulators to meet specific requirements and maintaining their performance at peak levels. With a focus on reliability and efficiency, we ensure that clients benefit from uninterrupted access to cutting-edge drilling simulation technology, enhancing training programs and operational readiness in various industries. ",
  },
  {
    title: "Private LTE Solutions",
    image: PLS,
    content:
      "Our Private LTE Solutions offer a comprehensive suite designed to ensure operators receive quality data while mitigating safety risks and operational downtime. Consurv's Private LTE solutions include Sky-LTE, a Control and Command platform facilitating AGV and UAV control over private LTE Networks. Additionally, our Private IoT application platforms cater to major vertical industries, offering high-accuracy positioning. We also provide High Redundancy Network Solutions bolstered by additional cybersecurity measures, along with Software Platforms supporting Unmanned Machine and Mission Critical M2M Communication. These solutions provide significant benefits to clients, enabling operators to analyze sensor information from both offshore and onshore sites, identifying potential issues undetectable by the human eye. Moreover, our solutions offer cost-effective inspection support and enable exhaustive, round-the-clock data collection and surveillance in real-time. With Consurv's Private LTE Solutions, clients experience enhanced operational efficiency and safety across their operations. ",
  },
];

const Page = () => {
  return (
    <main className="py-32 px-10 md:px-24 lg:px-40 bg-white">
      <header className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-zinc-800 text-5xl font-bold">Digital Solutions</h1>
        <p className="text-gray-500 text-2xl text-center">
          Digital Solutions, including RFID systems, ECG monitoring, drilling
          simulation, and Digital Stations, redefine operations across
          industries. Our RFID solutions revolutionize access control and
          inventory management, while ECG monitoring enhances offshore
          healthcare with swift diagnostics and medical recommendations.
          Drilling simulation software optimizes training and efficiency in the
          energy sector. Additionally, our Digital Stations seamlessly integrate
          CCTV feeds, offering insights and dealer management recommendations.
          They identify customer demographics, optimize convenience store
          offerings, and provide real-time alerts for security and facility
          monitoring. With Consurv's comprehensive Digital Solutions suite,
          clients experience heightened efficiency, safety, and profitability
          throughout their operations.
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
          src={DSIMAGE}
          alt="Big Data"
          className="object-contain rounded-md"
        />
      </div>

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
