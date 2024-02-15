const uniqueValue = [
  "Developed customized symbols tool panes for use in PI Vision displays, including unique or industry-specific ways of visualizing PI data.",
  "Expert in connecting the PI Vision with multiple data source.",
];

const keyFeature = [
  "Ad-hoc Analysis Trend",
  "Multiple trend",
  "Real time data",
  "Security Configuration",
];

const SystemDev = () => {
  return (
    <main className="py-32 bg-white">
      <header className="flex flex-col items-start justify-center">
        <h1 className="text-zinc-900 text-5xl font-bold">System Development</h1>
        <p className="text-gray-800 text-2xl text-left">
          We provide customized solution based on clients need using NodeJS and
          .NET Core framework.
        </p>
      </header>

      <div className="flex flex-col items-start justify-center text-lg px-10 mt-10 p-5 rounded-md">
        <h1 className="text-4xl font-bold text-zinc-800 underline mb-2">
          PI Vision Development
        </h1>
        <p className="text-zinc-800 text-left">
          Expert in development of PI Vision dashboard following user
          requirement.
          <br />
          Has served to multiple client; PETRONAS, Hess, PTTEP, Sime Darby and
          more.
        </p>

        <div className="mt-10">
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-3xl font-bold text-zinc-800 underline mb-2">
              Unique Value
            </h1>
            <ul className="list-disc list-item">
              {uniqueValue.map((item, index) => (
                <li key={index} className="text-zinc-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start justify-center mt-10">
            <h1 className="text-3xl font-bold text-zinc-800 underline">
              Key Features
            </h1>
            <ul className="list-disc list-item">
              {keyFeature.map((item, index) => (
                <li key={index} className="text-zinc-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SystemDev;
