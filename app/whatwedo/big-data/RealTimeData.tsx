const uniqueValue = [
  "User can derive comprehensive insights and gain a holistic view of their technical operations, enabling cross-functional collaboration and comprehensive decision-making.",
  "User can identify risk factors, implement preventive measures, and enhance safety protocols to minimize accidents, ensure compliance with regulations, and protect the well-being of personnel and assets.",
];

const keyFeature = [
  {
    title: "Real-time Update",
    desc: "Automatic refresh capabilities to ensure user viewing the most recent data",
  },
  {
    title: "Data Integration",
    desc: "Combine multiple data source",
  },
  {
    title: "Data Visualization",
    desc: "Present with complex data but visually understandable format",
  },
  {
    title: "Alert and Notification",
    desc: "Customizable notification for different roles",
  },
];

const RealTimeData = () => {
  return (
    <main className="py-32 bg-white">
      <header className="flex flex-col items-center justify-center">
        <h1 className="text-zinc-900 text-5xl font-bold text-center">
          Real Time Data
        </h1>
        <p className="text-gray-800 text-2xl text-center">
          We provide real time data solution to clients, leveraging the top of
          the market solution, OSIsoft Pi System
        </p>
      </header>

      <div className="flex items-start justify-center text-lg mt-10">
        <p className="text-zinc-800 text-left">
          Centralized Data and Tracking of Electrical Protection Relays System.
          <br />
          The system will be used to monitor thousands of electrical relays
          installed which is being used to control motors, pump, compressors and
          more.
        </p>
      </div>

      {/* <div className="mt-24">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-3xl font-bold text-zinc-800 underline mb-2">
            Unique Value
          </h1>
          {uniqueValue.map((item, index) => (
            <p key={index} className="text-zinc-700 text-left">{`- ${item}`}</p>
          ))}
        </div>

        <div className="flex flex-col items-start justify-center mt-10">
          <h1 className="text-3xl font-bold text-zinc-800 underline">
            Key Features
          </h1>
          <div className="grid grid-cols-2 grid-rows-2 w-full gap-10 mt-2">
            {keyFeature.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start justify-center"
              >
                <h1 className="text-2xl font-bold text-zinc-800">
                  {item.title}
                </h1>
                <p className="text-zinc-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </main>
  );
};

export default RealTimeData;
