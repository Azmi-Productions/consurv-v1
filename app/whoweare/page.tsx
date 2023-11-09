import Image from "next/image";
import Link from "next/link";
import { teams } from "./teams";
import { clients } from "./clients";
import { partners } from "./partners";

const Page = () => {
  return (
    <main className="py-32 px-10 md:px-24 lg:px-40 bg-white">
      <header className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-zinc-800 text-5xl">About Us</h1>
        <p className="text-zinc-500 font-bold text-xs md:text-lg">
          Consurv Technic (M) Sdn Bhd was incorporated in 2003. Over the years,
          Consurv has grown to be an established company, providing services and
          supplies to a multitude of industries with a special focus in Oil &
          Gas.
          <br />
          Consurv specializes in Radio Frequency iDentification (RFiD)
          solutions, providing clients with state of the art technology in
          meeting their needs in asset and people tracking.
          <br />
          Consurv is a Systems Integrator (SI), providing the required platform
          for a diverse set of systems to integrate and perform optimally. The
          company is also an approved distributor for a range of IT products,
          both in hardware and software.
          <br />
          Consurv is further specialised in Web-based solution covers but not
          limited to Content Management System, Web Portal Solutions,
          E-Commerce, Online Tools with customized solutions. We are not only
          focused on programming but the solution we create were considered by
          management’s view as well​​.
        </p>
      </header>

      <h2 className="text-zinc-800 text-5xl text-center my-24">
        Connect with Our Team
      </h2>

      <section className="flex flex-col gap-10">
        {teams.map((team, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-center"
          >
            <div className="flex flex-col items-center justify-center w-[400px]">
              <Image
                src={team.image}
                alt={team.name}
                unoptimized
                className="rounded-full w-32 lg:w-40 h-32 lg:h-40 object-cover"
              />
              <p className="text-zinc-800 text-2xl font-bold">{team.name}</p>
              <p className="text-zinc-500 text-xl font-bold text-center">
                {team.position}
              </p>
            </div>
            <div className="flex flex-col gap-5 w-1/2">
              <p className="text-zinc-800 text-start text-xs md:text-sm">
                {team.desc}
              </p>
              <Link
                href={team.link as unknown as URL}
                className="text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        ))}
      </section>

      <h2 className="text-zinc-800 text-5xl text-center my-24">Our Clients</h2>

      <section className="flex flex-row flex-wrap items-center justify-center gap-28">
        {clients.map((client, index) => (
          <Image
            key={index}
            src={client.image}
            alt={client.name}
            unoptimized
            className="object-contain w-60 h-60"
          />
        ))}
      </section>

      <h2 className="text-zinc-800 text-5xl text-center my-24">Our Partners</h2>

      <section className="flex flex-row  gap-10 flex-wrap">
        {partners.map((partner, index) => (
          <Image
            key={index}
            src={partner.image}
            alt={partner.name}
            unoptimized
            className="object-contain w-60 h-60"
          />
        ))}
      </section>
    </main>
  );
};

export default Page;
