"use client";

import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "@nextui-org/react";

const Contact = () => {
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

          <Button
            type="submit"
            className="bg-zinc-800 text-white px-10 py-2 rounded-md shadow-md hover:shadow-xl transition-all duration-300"
          >
            Send
          </Button>
        </form>

        <div className="flex-1 flex items-center justify-center">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7722222786674!2d101.7486650749712!3d3.1546669968207164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37aa6b2ea511%3A0x2b044729d1ee6048!2sConsurv%20Technic%20Sdn%20Bhd!5e0!3m2!1sen!2smy!4v1696229646544!5m2!1sen!2smy"
            className="w-[250px] h-[250px] sm:w-[400px] sm:h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
