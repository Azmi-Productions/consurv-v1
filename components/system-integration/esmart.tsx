const uniqueValue = [
  "Creation of interactive dashboards with drag-and-drop functionality which user can maintain easily.",
  "Power Query for data transformation and shaping before loading it into the model.",
  "Allow user to connect to a wide range of data sources, including Excel, databases (SQL Server, Oracle), cloud-based sources (Azure, AWS), and many others",
];

const keyFeature = [
  "ESMART data extraction module - develop windows services module to scan the Database for the alerts/notifications scalable to other location implement",
  "ESMART data store module - integrate SQL table with PI AF database",
  "ESMART UI/UX - develop PI Vision for monitoring purpose",
];

const ESMART = () => {
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
            ESMART
          </h1>
          <p className="text-white text-xl text-center drop-shadow-sm">
            Power BI dashboard tools that help user to automate manual process
            on creating monthly report to uppet management.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ESMART;
