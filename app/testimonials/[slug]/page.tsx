"use client";

import { testimonials } from "../testimonials";
import { useEffect, useState } from "react";
import { Avatar } from "@nextui-org/react";

const Page = ({ params }: { params: { slug: string } }) => {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const testimonial = testimonials.find(
      (testimonial) => testimonial.slug === params.slug
    );
    setData(testimonial);
  }, [params.slug]);

  return (
    <main className="py-48 px-10 md:px-24 lg:px-40 bg-white">
      <header className="flex flex-row items-center justify-start gap-10 lg:px-40 mb-24 border-b py-10 border-zinc-900">
        <Avatar src={data.image} className="w-28 h-28" />
        <div className="flex flex-col">
          <h1 className="text-zinc-800 text-4xl font-bold">{data.name}</h1>
          <div>
            <h1 className="text-zinc-800 text-sm md:text-2xl">
              <span className="text-lg md:text-xl font-bold">University: </span>
              {data.university}
            </h1>
            <h1 className="text-zinc-800 text-sm md:text-2xl">
              {" "}
              <span className="text-lg md:text-xl font-bold">Course: </span>
              {data.course}
            </h1>
            <h1 className="text-zinc-800 text-sm md:text-2xl">
              {" "}
              <span className="text-lg md:text-xl font-bold">Internship: </span>
              {data.intern}
            </h1>
          </div>
        </div>
      </header>

      <section className="px-10">
        {data.para?.map((paragraph: string, index: number) => {
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
