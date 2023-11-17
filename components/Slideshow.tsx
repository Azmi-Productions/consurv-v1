"use client";

import { useEffect, useState, useRef } from "react";
import IMAGE1 from "@/public/what-we-do.jpg";
import IMAGE2 from "@/public/hero/4fa6666d-8723-46bd-a901-0a851efaccc9.jpeg";
import IMAGE3 from "@/public/hero/319359bc-76c4-455c-ad1e-36fbe6074f1e.jpeg";

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
    timeoutRef.current = setTimeout(
      () => setIndex((prevIndex) => prevIndex + 1),
      5000
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  const images = [IMAGE1, IMAGE2, IMAGE3];

  return (
    <div className="relative w-full h-screen">
      <div className="absolute w-full h-full">
        <div className="w-full h-full bg-center bg-cover bg-no-repeat animate-fade-in">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[index % images.length].src}
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="absolute w-full h-full bg-black/50"></div>
    </div>
  );
};

export default Slideshow;
