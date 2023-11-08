import { infos } from "./info";

const Page = () => {
  return (
    <main className="py-48 px-40 bg-white">
      <header className="flex flex-row items-center justify-between gap-10 px-40 mb-24">
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-zinc-800 text-xl">Internships</h1>
          <div className="flex flex-row items-center justify-center gap-2">
            <div className="w-1 h-1 bg-blue-700 rounded-full"></div>
            <div className="w-1 h-1 bg-blue-700 rounded-full"></div>
            <div className="w-1 h-1 bg-blue-700 rounded-full"></div>
            <div className="w-10 h-1 bg-blue-700 rounded-full"></div>
          </div>
        </div>
        <div>
          <p className="text-zinc-800 text-center">
            We are accepting interns from Universities all around the World.
            From Business Information System, Information and Technology,
            Accountancy and Human Resources.
          </p>
        </div>
      </header>

      <div className="w-full flex flex-row items-center justify-center">
        {infos.map((info: any, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between gap-10 px-40 mb-24 hover:shadow-2xl hover:-translate-y-2 transition-all duration-200"
          >
            <span className="text-white-500 bg-blue-500 rounded-full p-5">
              {info.icon}
            </span>

            <div className="flex flex-col items-center justify-center gap-5 text-center">
              <h1 className="text-zinc-800 text-3xl">{info.title}</h1>
              <p className="text-zinc-800">{info.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;
