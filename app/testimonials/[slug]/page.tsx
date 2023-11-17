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
        <h1 className="text-zinc-800 text-5xl font-bold">{data.name}</h1>
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
