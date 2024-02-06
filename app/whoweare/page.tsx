import Image from "next/image";
import Link from "next/link";
import { teams } from "./teams";
import { clients } from "./clients";
import { partners } from "./partners";
import InfiniteHorizontalCarousel from "@/components/infinite-horizontal-carousel";

const Page = () => {
  const splitClients = (arr: any[]) => {
    const length = Math.ceil(arr.length / 3);
    const firstLayer = arr.slice(0, length);
    const secondLayer = arr.slice(length, length * 2);
    const thirdLayer = arr.slice(length * 2);
    return [firstLayer, secondLayer, thirdLayer];
  };

  const [firstLayer, secondLayer, thirdLayer] = splitClients(clients);

  return (
    <main className="py-32 px-10 md:px-24 lg:px-40 bg-white">
      <header className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-zinc-800 text-5xl font-bold">About Us</h1>
        <p className="text-zinc-500 font-bold text-xs md:text-lg">
          Consurv Technic (M) Sdn Bhd was incorporated in 2003. Over the years,
          Consurv has grown to be an established company, providing services and
          supplies to a multitude of industries with a special focus in Oil &
          Gas.
          <br />
          The 4 pillars of our business are Big Data, Digital Solutions, System
          Integration and Procurement. Our successful track record has gained
          the trust of clients such as PETRONAS, ExxonMobil, Shell, TNB and many
          more.
        </p>
      </header>

      <h2 className="text-zinc-800 font-bold text-5xl text-center my-24">
        Connect with Our Team
      </h2>

      <section className="grid grid-cols-2 sm:grid-cols-4 gap-10">
        {teams.map((team, index) => (
          <Link
            key={index}
            href={team.link as unknown as URL}
            className="flex flex-col md:flex-row items-center justify-center hover:opacity-90"
          >
            <div className="flex flex-col items-center justify-center w-[400px] grayscale">
              <Image
                src={team.image}
                alt={team.name}
                unoptimized
                className="rounded-full w-32 lg:w-40 h-32 lg:h-40 object-cover"
              />
              <p className="text-zinc-800 text-2xl font-bold text-center">
                {team.name}
              </p>
              <p className="text-zinc-500 text-xl font-bold text-center">
                {team.position}
              </p>
            </div>
            {/* <div className="flex flex-col gap-5 w-1/2">
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
            </div> */}
          </Link>
        ))}
      </section>

      <h2 className="text-zinc-800 font-bold text-5xl text-center my-24">
        Our Clients
      </h2>

      <section className="space-y-5">
        {/* LAYER 1 */}
        <InfiniteHorizontalCarousel items={firstLayer} />

        {/* LAYER 2 */}
        <InfiniteHorizontalCarousel items={secondLayer} />

        {/* LAYER 3 */}
        <InfiniteHorizontalCarousel items={thirdLayer} />
      </section>

      <h2 className="text-zinc-800 font-bold text-5xl text-center my-24">
        Our Partners
      </h2>

      <section>
        <InfiniteHorizontalCarousel items={partners} />
      </section>
    </main>
  );
};

export default Page;
