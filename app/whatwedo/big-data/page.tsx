import Image from "next/image";
import NEWIMAGE from "@/public/big-data/Big Data.png";
import Accordion from "@/components/accordions";
import CDETIMAGE from "@/public/big-data/BD- CDET.png";
import USDPIMAGE from "@/public/big-data/BD - USDP2 (2).jpg";
import CMIMAGE from "@/public/big-data/BD - Chemical Monitoring 2.png";
import CPMIMAGE from "@/public/big-data/BD- Compressor Predictive Maintenance (cluster).png";
import Header from "@/components/header";

const accordions = [
  {
    title: "CDET",
    image: CDETIMAGE,
    content:
      "CDET, the Centralized Data and Tracking of Electrical Protection Relays System, serves as a pivotal tool for monitoring thousands of electrical relays controlling motors, pumps, compressors, and more. Its unique value lies in empowering users to derive comprehensive insights and gain a holistic view of technical operations, fostering cross-functional collaboration and informed decision-making. Users can proactively identify risk factors, implement preventive measures, and enhance safety protocols to mitigate accidents, ensure regulatory compliance, and safeguard personnel and assets. Key features include Real-Time Updates, ensuring users access the most recent data with automatic refresh capabilities. Data Integration consolidates multiple data sources, while Data Visualization presents complex information in user-friendly formats. Additionally, customizable alerts and notifications keep users informed, tailored to different roles for effective communication and response management. ",
  },
  {
    title: "USDP",
    image: USDPIMAGE,
    content:
      "USDP, the Unified Data Platform, serves as a centralized hub for accessing all application data across Upstream operations. The Upstream Surface Data Platform aims to provide continuous data serving across transactional, engineering, and real-time data streams. Additionally, it upholds industrial standards and ensures robust data governance practices. USDP offers APIs for third parties to access both structured and unstructured data, enabling external stakeholders to harness valuable insights for their operations. With its comprehensive suite of features, USDP streamlines data access and facilitates collaborative decision-making within the Upstream sector. ",
  },
  {
    title: "Chemical Monitoring",
    image: CMIMAGE,
    content:
      "PETRONAS CHEMICAL ONLINE MONITORING (PChOM) is visualization build using PETRONAS GTD internal platform (PETTA) to fully utilize to analyses and monitor production chemical performance and injection at whole region Malaysia. ",
  },
  {
    title: "Compressor Predictive Maintenance (cluster)",
    image: CPMIMAGE,
    content:
      "Predictive Maintenance aims to develop a versatile predictive model applicable across equipment and platforms. The approach focuses on analyzing existing data rather than implementing new sensors, ensuring efficiency and cost-effectiveness. Emphasizing value, even from small data sets, it aims to enhance processes continuously. Objectives include reducing downtime, maximizing production, optimizing inventory, and promoting cost-saving practices. Data acquisition is facilitated through the proprietary PI System. By leveraging predictive analytics, this methodology enhances equipment reliability, minimizes unplanned downtime, and streamlines maintenance operations, ultimately driving operational efficiency and improving asset performance. ",
  },
];

const Page = () => {
  return (
    <main className="py-32 px-10 md:px-24 lg:px-40 bg-white">
      <Header
        title="Big Data"
        desc="In the realm of Big Data, crafting robust enterprise data architecture is key. With expertise honed through collaborations with industry giants like SHELL, PETRONAS (RAPID), and multinationals such as IBM, Lenovo, and Intel, we specialize in blueprinting and implementing data architecture roadmaps. Consurv excels in extracting and cleansing vast datasets, leveraging technologies like Hadoop and partnering with industry-leading Data Warehouses. Our Data Scientists and Subject Matter Experts (SMEs) develop cutting-edge algorithms for predictive maintenance, supply-chain optimization, and gas production enhancement. With a track record of managing Petabytes of data, we transform raw data into actionable insights, driving innovation and efficiency."
      />

      <div className="flex flex-row items-center justify-center mt-10 w-full">
        <Image
          src={NEWIMAGE}
          alt="Big Data"
          className="object-cover rounded-md"
        />
      </div>

      <Accordion accordions={accordions} />
    </main>
  );
};

export default Page;
