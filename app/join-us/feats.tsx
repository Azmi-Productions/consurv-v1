import { BiSolidPlaneAlt } from "react-icons/bi";
import { AiOutlineClockCircle, AiOutlineCoffee } from "react-icons/ai";
import { HiDesktopComputer } from "react-icons/hi";
import { BsFillMicFill, BsBarChartFill } from "react-icons/bs";

export const feats = [
  {
    title: "Flexi Hours",
    desc: "Flexible hours means you have different start and end times for your workday than he standard 8 a.m. to 5 p.m.",
    logo: (
      <AiOutlineClockCircle className="text-blue-500 hover:text-white hover:bg-blue-500 w-16 h-16 border-2 border-solid border-blue-500 p-2 rounded-full" />
    ),
    color: "text-blue-500",
  },
  {
    title: "Company Trips",
    desc: "All expenses paid and all you have to do is just be there, have fun and enjoy all the moments withh us.",
    logo: (
      <BiSolidPlaneAlt className="text-purple-500 hover:text-white hover:bg-purple-500 w-16 h-16 border-2 border-solid border-purple-500 p-2 rounded-full" />
    ),
    color: "text-purple-500",
  },
  {
    title: "Learning & Development",
    desc: "Here in Consurv, we are never tired of learning new things and develop new skills.",
    logo: (
      <HiDesktopComputer className="text-green-700 hover:text-white hover:bg-green-700 w-16 h-16 border-2 border-solid border-green-700 p-2 rounded-full" />
    ),
    color: "text-green-700",
  },
  {
    title: "Fun & Engaging Workplace",
    desc: "Karaoke? Games? Soirts? We work hard and play hard!",
    logo: (
      <BsFillMicFill className="text-green-500 hover:text-white hover:bg-green-500 w-16 h-16 border-2 border-solid border-green-500 p-2 rounded-full" />
    ),
    color: "text-green-500",
  },
  {
    title: "Profit-Sharing",
    desc: "Incentivized compensation program that awards you a percentage of the company's profits every time you completed the project.",
    logo: (
      <BsBarChartFill className="text-blue-700 hover:text-white hover:bg-blue-700 w-16 h-16 border-2 border-solid border-blue-700 p-2 rounded-full" />
    ),
    color: "text-blue-700",
  },
  {
    title: "Office Perks",
    desc: "Free snacks, coffee & Netlix.",
    logo: (
      <AiOutlineCoffee className="text-orange-500 hover:text-white hover:bg-orange-500 w-16 h-16 border-2 border-solid border-orange-500 p-2 rounded-full" />
    ),
    color: "text-orange-500",
  },
];
