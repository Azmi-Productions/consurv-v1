import React from "react";
import Image from "next/image";

const InfiniteHorizontalCarousel = ({ items }: { items: any[] }) => {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {items.map((client, index) => (
          <div
            className="flex-shrink-0 w-16 h-16 md:w-36 md:h-36 relative mx-5 hover:opacity-50 transition-opacity duration-300"
            key={index}
          >
            <Image
              src={client}
              alt="image"
              unoptimized
              sizes="100%"
              fill
              className="object-contain w-auto"
            />
          </div>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {items.map((client, index) => (
          <div
            className="flex-shrink-0 w-16 h-16 md:w-36 md:h-36 relative mx-5 hover:opacity-50 transition-opacity duration-300"
            key={index}
          >
            <Image
              src={client}
              alt="image"
              unoptimized
              sizes="100%"
              fill
              className="object-contain w-auto"
            />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteHorizontalCarousel;
