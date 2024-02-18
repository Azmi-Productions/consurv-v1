import Image from "next/image";
import SIIMAGE from "@/public/Procurement.png";

const Page = () => {
  return (
    <main className="py-32 px-10 md:px-24 lg:px-40 bg-white">
      <header className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-zinc-800 text-5xl font-bold">Procurement</h1>
        <p className="text-gray-500 text-2xl text-center">
          &quot;End-to-End&quot; signifies a holistic approach from project
          initiation to completion, encompassing all crucial stages and
          elements. For instance, in software development, it involves planning,
          design, development, testing, deployment, and maintenance.
          "Subcontract Specific Scope" involves outsourcing a particular project
          aspect to a specialized third-party subcontractor. "Attachment of
          Resources (Manpower Supply) - At Site or Remote" refers to deploying
          manpower either physically at the project site or remotely, depending
          on task requirements. This ensures tasks are efficiently executed,
          leveraging expertise where needed. Overall, these practices optimize
          project management, ensuring comprehensive coverage and effective
          resource utilization.
        </p>
      </header>

      <div className="flex flex-row w-full items-center justify-center mt-10">
        <Image
          src={SIIMAGE}
          alt="Big Data"
          className="w-full object-contain rounded-md"
        />
      </div>
    </main>
  );
};

export default Page;
