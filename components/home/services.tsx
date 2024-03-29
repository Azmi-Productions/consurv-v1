"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import IMAGE1 from "@/public/services/b87f6aa6-7b2b-45b0-ae77-f7eeaca729b3.jpeg";
import IMAGE2 from "@/public/services/WhatsApp Image 2024-02-06 at 2.41.53 PM.jpeg";
import IMAGE3 from "@/public/services/system-integration.jpeg";

const services = [
  {
    image: IMAGE1,
    link: "/whatwedo/big-data",
    name: "Big Data",
    desc: "Consurv Technic extracts and mines petabytes worth of data from plant facilities across multiple industries. We transform these data to help our clients like Shell, PETRONAS and Sime Darby in operations, maintenance and production.",
  },
  {
    image: IMAGE2,
    link: "/whatwedo/digital-solutions",
    name: "Digital Solutions",
    desc: "Many times, our clients share their problem statements with us. Whether it is as simple as creating (front end) dashboards or as complex as optimizing the operations and production of a refinery, we solve it.",
  },
  {
    image: IMAGE3,
    link: "/whatwedo/system-integration",
    name: "System Integration",
    desc: "Integration of multiple systems is key to operating facilities and companies efficiently. It also ensures that maximum effectiveness is achieved. We have installed, commissioned and integrated multiple systems for Oil & Gas and utility clients.",
  },
];

const Services = () => {
  const router = useRouter();
  return (
    <section className="w-full h-fit bg-white flex flex-col items-center justify-center py-24">
      <header className="flex flex-col items-center justify-center drop-shadow-md px-10">
        <h1 className="text-zinc-800 text-2xl sm:text-5xl font-bold">
          Our Services
        </h1>
        <p className="text-zinc-500 text-center text-sm sm:text-xl">
          Have ideas but don&apos;t know how to make it happen? We help
          transform your ideas into solutions.
        </p>
      </header>
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-x-10 px-10 ">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-start w-full my-4 bg-zinc-100 rounded-md shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
            onClick={() => router.push(service.link)}
          >
            <div className="flex-1 overflow-hidden w-full">
              <Image
                src={service.image}
                alt={service.name}
                className="object-cover rounded-md w-full h-full"
              />
            </div>

            <div className="flex flex-col items-center justify-start flex-1 p-6">
              <h1 className="text-zinc-800 text-2xl font-bold">
                {service.name}
              </h1>
              <p className="text-zinc-700 text-sm">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
