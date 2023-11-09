"use client";

import Image from "next/image";
import COMPANYLOGO from "@/public/ct-logo-1.png";
import { useState, useEffect } from "react";
import Link from "next/link";
import { RevealWrapper } from "next-reveal";
import { Dialog } from "@headlessui/react";
import { AiOutlineClose as XMarkIcon } from "react-icons/ai";
import { FaBars as Bars3Icon } from "react-icons/fa";
import FlyoutMenu from "../FlyoutMenu";

const navigation = [
  { name: "About", href: "#about" },
  {
    name: "Values",
    href: "#values",
  },
  {
    name: "Creed",
    href: "#creed",
  },
  {
    name: "Song",
    href: "#song",
  },
  {
    name: "Gallery",
    href: "#gallery",
  },
  {
    name: "Activities",
    href: "#activities",
  },
  {
    name: "Academic",
    href: "#academic",
  },
];

const whatwedo = [
  {
    name: "Big Data",
    href: "/whatwedo/big-data",
  },
  {
    name: "Digital Solutions",
    href: "/whatwedo/digital-solutions",
  },
  {
    name: "System Integration",
    href: "/whatwedo/system-integration",
  },
];

const joinus = [
  {
    name: "Careers",
    href: "/careers",
  },
  {
    name: "Internships",
    href: "/internship",
  },
];

const Navbar = () => {
  const [blur, handleBlur] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleBlur(true);
      } else handleBlur(false);
    });
  }, []);

  return (
    <RevealWrapper
      className={`fixed inset-x-0 top-0 z-50 invisible ${blur && "bg-white"}`}
      easing="ease-in-out"
      delay={100}
      duration={300}
      origin="top"
    >
      <nav
        className="flex items-center justify-between lg:px-60 h-14 px-8 py-16"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-2 p-1.5">
            <span className="sr-only">Nadim Logo</span>
            <Image
              src={COMPANYLOGO}
              alt="i-Hax Logo"
              unoptimized
              width={400}
              height={400}
              className="object-contain drop-shadow-lg"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 text-zinc-800" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex items-center justify-center gap-10">
          <Link
            href="/whoweare"
            className="text-zinc-700 hover:text-cyan-500 font-bold text-sm duration-200 transition-colors"
          >
            WHO WE ARE
          </Link>
          <div className="relative group">
            <Link
              href="/whatwedo"
              className="text-zinc-700 hover:text-cyan-500 font-bold text-sm duration-200 transition-colors"
            >
              WHAT WE DO
            </Link>
            <div className="absolute hidden group-hover:flex flex-col gap-5 p-10 bg-white rounded-md shadow-md">
              {whatwedo.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-zinc-700 hover:text-cyan-500 font-bold text-sm duration-200 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="relative group">
            <Link
              href="/join-us"
              className="text-zinc-700 hover:text-cyan-500 font-bold text-sm duration-200 transition-colors"
            >
              JOIN US
            </Link>
            <div className="absolute hidden group-hover:flex flex-col gap-5 p-10 bg-white rounded-md shadow-md">
              {joinus.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-zinc-700 hover:text-cyan-500 font-bold text-sm duration-200 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* <FlyoutMenu
            items={whatwedo}
            title="WHAT WE DO"
            mainlink="/whatwedo"
          />
          <FlyoutMenu items={joinus} title="JOIN US" mainlink="/join-us" /> */}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-blue-700 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                className="h-6 w-6 text-slate-100"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/whoweare"
                  className="text-white hover:text-cyan-500 font-bold text-sm duration-200 transition-colors"
                >
                  WHO WE ARE
                </Link>
                <FlyoutMenu
                  items={whatwedo}
                  title="WHAT WE DO"
                  mainlink="/whatwedo"
                />
                <FlyoutMenu
                  items={joinus}
                  title="JOIN US"
                  mainlink="/join-us"
                />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </RevealWrapper>
  );
};

export default Navbar;
