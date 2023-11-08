"use client";

import { useEffect, useState } from "react";
import FlyoutMenu from "./FlyoutMenu";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import COMPANYLOGO from "@/public/ct-logo-1.png";
import Image from "next/image";

const whatwedo = [
  {
    name: "Big Data",
    href: "/whatwedo/big-data",
    icon: ChartPieIcon,
  },
  {
    name: "Digital Solutions",
    href: "/whatwedo/digital-solutions",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "System Integration",
    href: "/whatwedo/system-integration",
    icon: SquaresPlusIcon,
  },
];

const joinus = [
  {
    name: "Careers",
    href: "/careers",
    icon: FingerPrintIcon,
  },
  {
    name: "Internships",
    href: "/internships",
    icon: ArrowPathIcon,
  },
];

const Navbar = () => {
  const [show, handleShow] = useState<Boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full flex flex-row justify-between gap-5 px-60 py-5 ${
        show ? "bg-white" : "bg-transparent"
      }`}
    >
      <Image
        src={COMPANYLOGO}
        alt="Company Logo"
        unoptimized
        width={300}
        height={300}
        className="object-contain"
      />
      <div className="flex flex-row items-center justify-center gap-5">
        <Link
          href="/whoweare"
          className="text-zinc-700 hover:text-cyan-500 font-bold text-sm duration-200 transition-colors"
        >
          WHO WE ARE
        </Link>
        <FlyoutMenu items={whatwedo} title="WHAT WE DO" mainlink="/whatwedo" />
        <FlyoutMenu items={joinus} title="JOIN US" mainlink="/join-us" />
      </div>
    </nav>
  );
};

export default Navbar;
