import Image from "next/image";
import CDETIMAGE from "@/public/big-data/BD- CDET.png";

const CDET = () => {
  return (
    <main className="py-32 bg-white">
      <header className="flex flex-col items-center justify-center">
        <h1 className="text-zinc-900 text-5xl font-bold text-center">CDET</h1>
      </header>
      <div className="space-y-10">
        <p className="text-gray-500 text-2xl text-center">
          CDET, the Centralized Data and Tracking of Electrical Protection
          Relays System, serves as a pivotal tool for monitoring thousands of
          electrical relays controlling motors, pumps, compressors, and more.
          Its unique value lies in empowering users to derive comprehensive
          insights and gain a holistic view of technical operations, fostering
          cross-functional collaboration and informed decision-making. Users can
          proactively identify risk factors, implement preventive measures, and
          enhance safety protocols to mitigate accidents, ensure regulatory
          compliance, and safeguard personnel and assets.
        </p>
        <p className="text-gray-500 text-2xl text-center">
          Key features include Real-Time Updates, ensuring users access the most
          recent data with automatic refresh capabilities. Data Integration
          consolidates multiple data sources, while Data Visualization presents
          complex information in user-friendly formats. Additionally,
          customizable alerts and notifications keep users informed, tailored to
          different roles for effective communication and response management.
        </p>

        <Image
          src={CDETIMAGE}
          alt="CDET"
          className="object-contain rounded-md"
        />
      </div>
    </main>
  );
};

export default CDET;
