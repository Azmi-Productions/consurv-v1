"use client";

import Image from "next/image";
import IMAGE1 from "@/public/hero/319359bc-76c4-455c-ad1e-36fbe6074f1e.jpeg";
import IMAGE2 from "@/public/hero/4fa6666d-8723-46bd-a901-0a851efaccc9.jpeg";
import IMAGE3 from "@/public/hero/fb927a47-fa3d-4fc4-b048-ae6fba595282.jpeg";
import Slideshow from "@/components/Slideshow";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

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

export default function Home() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lsrfoxb",
        "template_kic56lm",
        //@ts-ignore
        formRef.current,
        "fjYI50W1rws4c3Rft"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.scrollTo(0, 0);
          toast.success("Email sent!");
          formRef.current?.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Email not sent!");
        }
      );
  };
  return (
    <main className="relative flex max-w-screen min-h-screen overflow-x-hidden flex-col items-center justify-center">
      <Toaster position="top-center" reverseOrder={false} />
      <section className="relative flex flex-col items-center justify-center w-full bg-white">
        <Slideshow />
      </section>

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
        <div className="w-full flex flex-col sm:flex-row flex-wrap justify-center gap-x-10 px-10 sm:px-0 h-fit">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-start w-full sm:w-1/2 xl:w-[20%] my-4 bg-zinc-100 rounded-md shadow-md cursor-pointer hover:shadow-xl transition-all duration-300"
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

      <section className="bg-gray-300 w-full flex flex-col items-center justify-center py-24">
        <header className="flex flex-col items-center justify-center px-10">
          <h1 className="text-zinc-800 text-2xl sm:text-5xl font-bold">
            Contact
          </h1>
          <p className="text-zinc-700 text-center text-sm sm:text-xl">
            We are here to help you 7 days a week and respond within 24 hours.
            <br />
            Plus, you can find most answers to your questions{" "}
            <span
              className="text-blue-500 underline cursor-pointer"
              onClick={() => router.push("/faq")}
            >
              right on FAQ page.
            </span>
          </p>
        </header>

        <div className="flex flex-col items-center justify-center gap-y-10 lg:flex-row w-full py-24">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex-1 flex flex-col gap-10 items-center justify-center w-fit"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="from_name" className="text-zinc-800">
                Name
              </label>
              <input
                type="text"
                name="from_name"
                className="w-full sm:w-[500px] text-zinc-800 focus:outline-none ring-gray-400 ring-1 rounded-md p-2"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="from_email" className="text-zinc-800">
                Email
              </label>
              <input
                type="email"
                name="from_email"
                className="w-full sm:w-[500px] text-zinc-800 focus:outline-none ring-gray-400 ring-1 rounded-md p-2"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-zinc-800">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full sm:w-[500px] text-zinc-800 focus:outline-none ring-gray-400 ring-1 rounded-md p-2"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-zinc-800 text-white px-10 py-2 rounded-md shadow-md hover:shadow-xl transition-all duration-300"
            >
              Send
            </button>
          </form>

          <div className="flex-1 flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7722222786674!2d101.7486650749712!3d3.1546669968207164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37aa6b2ea511%3A0x2b044729d1ee6048!2sConsurv%20Technic%20Sdn%20Bhd!5e0!3m2!1sen!2smy!4v1696229646544!5m2!1sen!2smy"
              className="w-[250px] h-[250px] sm:w-[400px] sm:h-[400px]"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
