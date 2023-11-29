import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const navigation = {
  main: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Accessibility", href: "#" },
    { name: "Partners", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/ConsurvTechnic",
      icon: (props: any) => <FaFacebook {...props} />,
    },
    {
      name: "Instagram",
      href: "https://twitter.com/dynaconsurv",
      icon: (props: any) => <FaInstagram {...props} />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/DynaConsurv",
      icon: (props: any) => <FaTwitter {...props} />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/consurv-technic-sdn-bhd",
      icon: (props: any) => <FaLinkedin {...props} />,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-zinc-800">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-200 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-zinc-300">
          &copy; 2023 CONSURV TECHNIC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
