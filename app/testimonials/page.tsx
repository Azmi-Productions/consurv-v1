"use client";

import Image from "next/image";
import { testimonials } from "./testimonials";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { RevealWrapper } from "next-reveal";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

// Function to shuffle array using Fisher-Yates algorithm
const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Page = () => {
  const router = useRouter();
  const [shuffledTestimonials, setShuffledTestimonials] = useState<any[]>([]);

  // Shuffle the testimonials array
  // const shuffledTestimonials = shuffleArray([...testimonials]);

  useEffect(() => {
    return setShuffledTestimonials(shuffleArray([...testimonials]));
  }, []);

  return (
    <main className="py-48 px-10 md:px-24 lg:px-40 bg-white">
      <header className="flex items-center justify-center gap-10 lg:px-40 mb-24">
        <h1 className="text-zinc-800 text-5xl font-bold">Testimonials</h1>
      </header>

      {shuffledTestimonials.length !== testimonials.length ? (
        <div className="flex items-center justify-center">
          <h1 className="text-zinc-800 text-5xl font-bold">Loading...</h1>
        </div>
      ) : (
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 300: 2, 500: 3, 700: 4, 900: 5 }}
          className="px-10"
        >
          <Masonry gutter="10px">
            {shuffledTestimonials.map((testimonial, index) => {
              return (
                <RevealWrapper
                  key={index}
                  delay={index * 100}
                  origin="right"
                  duration={300}
                  className="flex relative flex-col items-center justify-center h-full w-full invisible cursor-pointer group"
                >
                  <div
                    onClick={() =>
                      router.push(`/testimonials/${testimonial.slug}`)
                    }
                    className="absolute w-full h-full bg-zinc-900/80 hidden group-hover:flex items-center justify-center"
                  >
                    <h1 className="text-blue-500 font-bold text-xl text-center duration-100">
                      {testimonial.name.split(" ")[0]}
                    </h1>
                  </div>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={0}
                    height={0}
                    sizes="100%"
                    className="w-full h-full object-cover"
                  />
                </RevealWrapper>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      )}
    </main>
  );
};

export default Page;
