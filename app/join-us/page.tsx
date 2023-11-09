import Image from "next/image";
import { feats } from "./feats";
import CTA from "@/public/Call_to_Actions1.jpg";
import Link from "next/link";

const Page = () => {
  return (
    <main className="py-32 px-10 md:px-24 lg:px-40 bg-white">
      <header className="flex items-center justify-center">
        <h1 className="text-zinc-800 text-5xl">Join Us</h1>
      </header>

      <div className="flex flex-col items-center justify-center my-24 gap-5">
        <h1 className="text-zinc-800 text-2xl">
          We are just a bunch of fun people working in a fun company!
        </h1>
        <div className="flex flex-row items-center justify-center gap-2">
          <div className="w-1 h-1 bg-blue-700 rounded-full"></div>
          <div className="w-1 h-1 bg-blue-700 rounded-full"></div>
          <div className="w-1 h-1 bg-blue-700 rounded-full"></div>
          <div className="w-10 h-1 bg-blue-700 rounded-full"></div>
        </div>
        <h1 className="text-zinc-800">Why Consurv Technic?</h1>
      </div>

      <div className="flex flex-row items-center justify-center flex-wrap my-24">
        {feats.map((feat, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-start gap-2 w-1/3 my-2"
          >
            <div>{feat.logo}</div>

            <div className="flex flex-col">
              <h1 className={`${feat.color} font-bold`}>{feat.title}</h1>
              <p className="text-zinc-800 text-xs md:text-sm">{feat.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative my-24 hidden md:flex items-center justify-center drop-shadow-xl">
        <Image
          src={CTA}
          alt="Call to Action"
          unoptimized
          width={1920}
          height={1080}
          className="object-contain rounded-md"
        />
        <div className="absolute flex flex-row items-center justify-between w-full p-24">
          <div className="flex flex-col gap-10">
            <h1 className="text-white text-3xl font-bold">Any inquiries?</h1>
            <p className="text-white ">
              Please drop your e-mail to our Corporate Affairs Executive, Nur
              Farahin Jamalulail
            </p>
          </div>
          <Link
            href="mailto:farahin@consurv.com.my"
            className="py-1 px-3 md:py-5 md:px-7 hover:bg-gray-300 transition-colors duration-200 font-bold bg-white rounded-full text-zinc-800"
          >
            E-MAIL US
          </Link>
        </div>
      </div>

      <div className="my-24 flex flex-col items-center justify-center text-center text-xl text-zinc-800">
        <p>C12A-4, 4th Floor,</p>
        <p>Jalan Ampang Utama 1/1,</p>
        <p>68000 Ampang,</p>
        <p>Selangor, Malaysia.</p>
      </div>

      <iframe
        src="https://maps.google.com/maps?q=consurv%20technic&t=m&z=16&output=embed&iwloc=near"
        className="h-[300px] w-full"
      />
    </main>
  );
};

export default Page;
