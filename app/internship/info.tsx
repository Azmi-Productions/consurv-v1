import {
  AiOutlineInfoCircle,
  AiOutlineMail,
  AiOutlineStar,
} from "react-icons/ai";

export const infos = [
  {
    icon: <AiOutlineInfoCircle className="w-24 h-24" />,
    title: "FAQ",
    desc: "Find out more about internship at Consurv Technic by reading FAQ.",
    link: "/faq",
  },
  {
    icon: <AiOutlineMail className="w-24 h-24" />,
    title: "Email Us",
    desc: "Contact us if you have any inquiries regarding internship.",
    link: "mailto:farahin@consurv.com.my",
  },
  {
    icon: <AiOutlineStar className="w-24 h-24" />,
    title: "Testimonials",
    desc: "Our ex-interns share their internship experience and advice! Take a look at their testimonials.",
    link: "/testimonials",
  },
];
