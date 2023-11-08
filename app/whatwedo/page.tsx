import { info } from "./info";
import { Fragment } from "react";

const Page = () => {
  return (
    <main className="py-32 px-40 bg-white">
      {info.map((item) => (
        <Fragment key={item.title}>
          <div className="flex flex-col gap-y-3">
            <h1 className="text-4xl font-bold text-gray-600">{item.title}</h1>
            <p className="text-gray-500">{item.desc1}</p>
            <p className="text-gray-500">{item.desc2}</p>
          </div>
          <div className="bg-zinc-800 h-1 w-full my-10"></div>
        </Fragment>
      ))}
    </main>
  );
};

export default Page;
