import Image from "next/image";
import LEFTIMAGE from "@/public/big-data/B1-768x307.jpg";
import RIGHTIMAGE from "@/public/big-data/B2-768x307.jpg";

const accordions = [
  {
    title: "Drilling",
    content:
      "Consurv Technic has been involved in petabytes worth of data extraction and mining from plant facilities over the last few years. Our team of data analysts and Subject Matter Experts (SMEs) has the capability of cleaning data, sieving through and preparing raw data for further analysis.",
  },
  {
    title: "PM & PdM",
    content:
      "Creating and managing data warehouses and data lakes on pro or on the cloud are our core competencies. From here on, our data scientists and SMEs work hand-in-hand to develop algorithms and deep learning models to help clients make sound decisions in both green and brown facilities development and operations.",
  },
  {
    title: "Fraud Detection",
    content:
      "Consurv has also embarked on Edge Computing, a powerful tool to process Big Data at the site.",
  },
  {
    title: "Market Basket Analysis",
    content: "lorem ipsum dolor amet",
  },
];

const Page = () => {
  return (
    <main className="py-32 px-10 md:px-24 lg:px-40 bg-white">
      <header className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-zinc-800 text-5xl">Big Data</h1>
        <p className="text-gray-500 text-2xl text-center">
          With the advance of computing prowess, the ability to crunch large
          amounts of data has proven to be beneficial to us in many aspects,
          especially in the O&G industry
        </p>
      </header>

      <div className="flex flex-row items-center justify-center mt-24">
        <Image
          src={RIGHTIMAGE}
          alt="Right Image"
          unoptimized
          className="object-contain rounded-md w-[150px] h-[150px] md:w-[500px] md:h-[500px]"
        />
        <Image
          src={LEFTIMAGE}
          alt="Left Image"
          unoptimized
          className="object-contain rounded-md w-[150px] h-[150px] md:w-[500px] md:h-[500px]"
        />
      </div>

      <div className="flex items-center justify-center mt-24 text-lg px-10">
        <p className="text-zinc-800">
          Consurv Technic has been involved in petabytes worth of data
          extraction and mining from plant facilities over the last few years.
          Our team of data analysts and Subject Matter Experts (SMEs) has the
          capability of cleaning data, sieving through and preparing raw data
          for further analysis.
          <br />
          Creating and managing data warehouses and data lakes on pro or on the
          cloud are our core competencies. From here on, our data scientists and
          SMEs work hand-in-hand to develop algorithms and deep learning models
          to help clients make sound decisions in both green and brown
          facilities development and operations. Consurv has also embarked on
          Edge Computing, a powerful tool to process Big Data at the site.
        </p>
      </div>

      <div className="mt-24">
        {accordions.map((accordion, index) => (
          <details
            key={index}
            className="bg-white p-5 w-full border-b-2 border-solid border-blue-700 drop-shadow-2xl mb-1 cursor-pointer"
          >
            <summary className="text-md font-bold text-zinc-800">
              {accordion.title}
            </summary>
            <p className="text-zinc-800">{accordion.content}</p>
          </details>
        ))}
      </div>
    </main>
  );
};

export default Page;
