"use client";

import Image from "next/image";
import COMPANYLOGO from "@/public/ct-logo-1.png";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { Dialog } from "@headlessui/react";
import { AiOutlineClose as XMarkIcon } from "react-icons/ai";
import { FaBars as Bars3Icon } from "react-icons/fa";
import FlyoutMenu from "../FlyoutMenu";

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

const NavigationBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Navbar
        shouldHideOnScroll
        className="bg-white py-5 fixed inset-x-0 top-0 z-50"
      >
        <NavbarBrand>
          <Link href="/" className=" p-1.5">
            <span className="sr-only">Nadim Logo</span>
            <Image
              src={COMPANYLOGO}
              alt="i-Hax Logo"
              unoptimized
              width={0}
              height={0}
              sizes="100%"
              className="object-contain drop-shadow-lg w-[100px] h-[100px] md:w-[300px] md:h-[300px]"
            />
          </Link>
        </NavbarBrand>

        <NavbarContent className="flex lg:hidden absolute right-0">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 text-zinc-700" aria-hidden="true" />
          </button>
        </NavbarContent>

        <NavbarContent justify="end" className="hidden lg:flex">
          <NavbarItem>
            <Link
              href="/whoweare"
              className="text-zinc-700 hover:text-cyan-500 font-bold text-sm duration-200 transition-colors"
            >
              WHO WE ARE
            </Link>
          </NavbarItem>
          <NavbarItem className="relative group">
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
          </NavbarItem>
          <NavbarItem className="relative group">
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
          </NavbarItem>
        </NavbarContent>
      </Navbar>
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
              <XMarkIcon className="h-6 w-6 text-zinc-700" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/whoweare"
                  className="text-white hover:text-cyan-500 font-bold text-sm duration-200 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  WHO WE ARE
                </Link>
                <FlyoutMenu
                  items={whatwedo}
                  title="WHAT WE DO"
                  mainlink="/whatwedo"
                  onClick={() => setMobileMenuOpen(false)}
                />
                <FlyoutMenu
                  items={joinus}
                  title="JOIN US"
                  mainlink="/join-us"
                  onClick={() => setMobileMenuOpen(false)}
                />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default NavigationBar;
