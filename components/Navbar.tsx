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
import { Dialog } from "@headlessui/react";
import { AiOutlineClose as XMarkIcon } from "react-icons/ai";
import { FaBars as Bars3Icon } from "react-icons/fa";

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
    href: "/internship",
    icon: ArrowPathIcon,
  },
];

const Navbar = () => {
  const [show, handleShow] = useState<Boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);

  return (
    <>
      <nav
        className={`hidden fixed top-0 w-full lg:flex flex-row justify-between gap-5 px-60 py-5 ${
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
          <FlyoutMenu
            items={whatwedo}
            title="WHAT WE DO"
            mainlink="/whatwedo"
          />
          <FlyoutMenu items={joinus} title="JOIN US" mainlink="/join-us" />
        </div>
        <div className="flex">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-800"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 text-slate-100" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-orange-700 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 text-zinc-800" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {whatwedo.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-100 hover:text-orange-300"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(
                        item.href.slice(1)
                      ); // Assuming item.href is a hash link (#example)
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" }); // You can customize scroll behavior here
                      }

                      setMobileMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default Navbar;
