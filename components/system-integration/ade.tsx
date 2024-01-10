const uniqueValue = [
  "Automate data generation up to hourly hence help user to plan faster for next day loading.",
  "The system integration comply with standard cybersecurity assessment",
];

const keyFeature = [
  "Report generation by PI Business Analytic Tools",
  "Customized Web API for customized report",
  "Customized programming to data massage raw report to required format",
  "Data integration from ATG/OMEGA Totalizer source to PI Server to SAP and DOVE platform (AWS data store).",
];

const ATLASDataInteg = () => {
  return (
    <section className="w-full flex flex-row">
      <div className="flex-1 flex flex-col gap-10 items-center justify-center p-5">
        <div className="bg-white shadow-[0px_0px_50px_10px_rgba(37,99,235,0.2)] rounded-3xl p-10 space-y-2">
          <h1 className="text-yellow-500 font-bold text-3xl drop-shadow-sm">
            Unique Value
          </h1>
          <hr />
          <ul className="text-black text-lg list-item list-disc space-y-2 ml-10">
            {uniqueValue.map((value, index) => (
              <li key={index} className="leading-none">
                {value}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white shadow-[0px_0px_50px_10px_rgba(37,99,235,0.2)] rounded-3xl p-10 space-y-2">
          <h1 className="text-yellow-500 font-bold text-3xl drop-shadow-sm">
            Key Feature
          </h1>
          <hr />
          <ul className="text-black text-lg list-item list-disc space-y-2 ml-10">
            {keyFeature.map((value, index) => (
              <li key={index} className="leading-none">
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-5">
        <div className="flex flex-col gap-2 items-center justify-center bg-blue-600 w-full h-full p-10 rounded-3xl">
          <h1 className="text-white font-bold text-5xl mb-10 drop-shadow-sm">
            ATLAS Data Integration
          </h1>
          <p className="text-white text-xl text-center drop-shadow-sm">
            ATLAS solution was initiated by client to increase data transparency
            and end-to-end visibility across the supply chain to ensure reliable
            supply, reduction in Cost-to-Serve and increased value capture from
            end customers.
          </p>
          <p className="text-white text-xl text-center drop-shadow-sm">
            Currently all PDB fuel terminals are extracting and exporting the
            excel report manually, the main objective of the project is to
            automate the manual process by providfing an automated data transfer
            from terminal tank master system of 15 Fuel Terminals to SAP
            Applications and Dove platform.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ATLASDataInteg;
