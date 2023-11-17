"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import IMAGE1 from "@/public/what-we-do.jpg";
import IMAGE2 from "@/public/hero/4fa6666d-8723-46bd-a901-0a851efaccc9.jpeg";
import IMAGE3 from "@/public/hero/319359bc-76c4-455c-ad1e-36fbe6074f1e.jpeg";

const images = [IMAGE1, IMAGE2, IMAGE3];
const delay = 2500;

const Slideshow = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    //@ts-ignore
    timeoutRef.current = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="m-0 overflow-hidden w-full">
      <div
        className="whitespace-nowrap transition-all duration-500 ease-in-out w-screen h-screen"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((item, index) => (
          <Image
            key={index}
            src={item}
            alt="Hero"
            width={0}
            height={0}
            sizes="100%"
            className="w-full h-full object-cover inline-block"
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
