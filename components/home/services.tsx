"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import IMAGE1 from "@/public/services/marketing-big-data-examples-applications.avif";
import IMAGE2 from "@/public/hero/4fa6666d-8723-46bd-a901-0a851efaccc9.jpeg";
import IMAGE3 from "@/public/hero/fb927a47-fa3d-4fc4-b048-ae6fba595282.jpeg";

const services = [
  {
    image: IMAGE1,
    link: "/whatwedo/big-data",
    name: "Big Data",
    desc: "Consurv Technic has been involved in petabytes worth of data extraction and mining from plant facilities over the last few years. Our experiences include projects with Shell and PETRONAS (RAPID).",
  },
  {
    image: IMAGE2,
    link: "/whatwedo/digital-solutions",
    name: "Digital Solutions",
    desc: "Many times, our clients share their problem statements with us. Whether it is as simple as creating (front end) reporting dashboards or as complex as optimizing the operations and production of a refinery. You name it, we solve it.",
  },
  {
    image: IMAGE3,
    link: "/whatwedo/system-integration",
    name: "System Integration",
    desc: "Integration of multiple systems is key to operating facilities and companies efficiently. It also ensures that maximum effectiveness is achieved. We have installed, commissioned and also integrated multiple systems for Oil & Gas and utility clients. Consurv is also certified SI for OSIsoft.",
  },
];

const Services = () => {
  const router = useRouter();
  return (
    <section className="w-full h-fit bg-white flex flex-col items-center justify-center py-24">
      <header className="flex flex-col items-center justify-center drop-shadow-md px-10">
        <h1 className="text-zinc-800 text-2xl sm:text-5xl font-bold">
          OUR SERVICES
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
            className="flex flex-col items-center justify-start w-full my-4 bg-zinc-100 rounded-md shadow-md cursor-pointer hover:shadow-xl transition-all duration-300"
            onClick={() => router.push(service.link)}
          >
            <div className="flex-1">
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
