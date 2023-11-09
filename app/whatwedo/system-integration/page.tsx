import Image from "next/image";
import LEFTIMAGE from "@/public/system-integrations/S1-768x348.png";
import RIGHTIMAGE from "@/public/system-integrations/S3-768x433.png";
import { accordions } from "./accordions";

const Page = () => {
  return (
    <main className="py-32 px-10 md:px-24 lg:px-40 bg-white">
      <header className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-zinc-800 text-5xl">System Integration</h1>
        <p className="text-gray-500 text-2xl text-center">
          Integration of multiple systems is the key to operating facilities and
          companies efficiently and effectively.
        </p>
      </header>

      <div className="flex flex-row items-center justify-center mt-24">
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

      <div className="flex items-center justify-center mt-24 text-lg px-10">
        <p className="text-gray-500 text-3xl">
          Consurv has installed, commissioned and integrated multiple systems
          for Oil & Gas and utility clients. We are also certified SI for
          OSIsoft. The team has experience in System Architecture, developing
          blueprints and implementing them. Other than that, Consurv has
          supplied IT hardware (serves, HPC, etc.) and software for more than 10
          years.
        </p>
      </div>

      <div className="mt-24">
        {accordions.map((accordion, index) => (
          <details
            key={index}
            className="bg-white p-5 w-full border-b-2 border-solid border-blue-700 drop-shadow-2xl mb-1 cursor-pointer"
          >
            <summary className="text-md font-bold text-zinc-800">
              {accordion.title}
            </summary>
            <p className="text-zinc-800">{accordion.content}</p>
          </details>
        ))}
      </div>
    </main>
  );
};

export default Page;
