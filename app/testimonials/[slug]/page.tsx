"use client";

import { testimonials } from "../testimonials";
import { useEffect, useState } from "react";
import Image from "next/image";

const Page = ({ params }: { params: { slug: string } }) => {
  const [data, setData] = useState({} as any);

  useEffect(() => {
    const testimonial = testimonials.find(
      (testimonial) => testimonial.slug === params.slug
    );
    setData(testimonial);
  }, [params.slug]);

  return (
    <main className="py-48 px-10 md:px-24 lg:px-40 bg-white">
      <header className="flex flex-col items-center justify-center gap-10 lg:px-40 mb-24">
        <Image
          src={data.image}
          alt={data.name}
          width={500}
          height={500}
          className=" object-contain"
        />
        <h1 className="text-zinc-800 text-5xl font-bold text-center">
          {data.name}
        </h1>
        <div>
          <h1 className="text-zinc-800 text-sm md:text-2xl">
            <span className="text-lg md:text-3xl font-bold">University: </span>
            {data.university}
          </h1>
          <h1 className="text-zinc-800 text-sm md:text-2xl">
            {" "}
            <span className="text-lg md:text-3xl font-bold">Course: </span>
            {data.course}
          </h1>
          <h1 className="text-zinc-800 text-sm md:text-2xl">
            {" "}
            <span className="text-lg md:text-3xl font-bold">Internship: </span>
            {data.intern}
          </h1>
        </div>
      </header>

      <section className="px-10">
        {data.para &&
          data.para.map((paragraph: string, index: number) => {
            return (
              <p
                key={index}
                className="text-zinc-800 text-xl font-medium mb-10"
                style={{ textIndent: "2rem" }}
              >
                {paragraph}
              </p>
            );
          })}
      </section>
    </main>
  );
};

export default Page;
