const uniqueValue = [
  "Creation of interactive dashboards with drag-and-drop functionality which user can maintain easily.",
  "Power Query for data transformation and shaping before loading it into the model.",
  "Direct Integration from Data Sources, for example:",
];

const subUV = [
  "PI_APS for DCS Points Configuration Data, Control Loop list",
  "IPSS/MOC for Bypass Data",
];

const keyFeature = [
  "Asset Integrity Sustenance - Develop automated report across safety modules",
  "Value Creation - Provide value creation based on current implementation",
  "Morning Meeting Review- Automate report for Operation's daily morning meeting. It uses as guidance by operators for day to day offshore activities",
];

const PrimeAssetEngin = () => {
  return (
    <section className="w-full flex flex-row">
      <div className="flex-1 flex items-center justify-center p-5">
        <div className="flex flex-col gap-2 items-center justify-center bg-blue-600 w-full h-full p-10 rounded-3xl">
          <h1 className="text-white font-bold text-5xl mb-10 drop-shadow-sm">
            PRIME Asset Engineering
          </h1>
          <p className="text-white text-xl text-center drop-shadow-sm">
            Power BI dashboard tools that help user to oversee Safety
            Equipment&apos;s Alarms, Excursion, and Trips
          </p>
          <p className="text-white text-xl text-center drop-shadow-sm">
            Authority will have a helicopter view to monitor PACs performance
            and steer the deferment management
          </p>
        </div>
      </div>
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
          <ul className="text-black text-lg list-item list-disc space-y-2 ml-20">
            {subUV.map((value, index) => (
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
    </section>
  );
};

export default PrimeAssetEngin;
