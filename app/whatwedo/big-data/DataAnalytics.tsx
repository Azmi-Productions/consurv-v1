const uniqueValue = [
  {
    title: "Data Explorer",
    desc: "Data in tabular format for transactional data and the advantage to export data to excel for reporting or analysis purposes.",
  },
  {
    title: "Engineering Data Serving",
    desc: "Advantage or linking related documents and tags to an equipment in one single page by using AVEVA Asset Information Management (AIM-A).",
  },
  {
    title: "Real Time Operational Data",
    desc: "Give users the advantage of visualizing the real time performance tof an equipment without the need to download, convert, and reload the data by using AVEVA PI System.",
  },
  {
    title: "Data Pipeline API",
    desc: "Automated data flow and data sharing.",
  },
  {
    title: "Data Governance and Sustenance",
    keys: [
      "Data Governance Adherence",
      "Indutrial Data Adoption",
      "Unified Database",
      "Document Capturing",
    ],
  },
];

const keyFeature = [
  {
    title: "Unified Database",
    desc: "Data from multiple application readily made in one single platform.",
  },
  {
    title: "Data Explorer",
    desc: "Provide data in tabular structure to serve non technical user and Data Analyst.",
  },
  {
    title: "Data Serving",
    desc: "Provide APIs for third party to consume data from Unified Data Platform.",
  },
];

const DataAnalytics = () => {
  return (
    <main className="py-32 px-10 md:px-24 lg:px-40 bg-white">
      <header className="flex flex-col items-center justify-center">
        <h1 className="text-zinc-900 text-5xl font-bold">Data Analytics</h1>
        <p className="text-gray-800 text-2xl text-center">
          We provide Data Wrangling, Data Extraction, Data Transformation and
          Analytics service.
        </p>
      </header>

      <div className="flex flex-col items-start justify-center text-lg px-10 mt-10">
        <h1 className="text-4xl font-bold text-zinc-800 underline mb-2">
          Unified Data Platform
        </h1>
        <p className="text-zinc-800 text-left">
          A Unified Data Portal to access all applications data across Upstream
          <br />
          Unified Data Platform aims to provide continuous data serving across
          transactional, engineering and real time data. It also provide the
          industrial standard adoption, data governance.
          <br />
          It provides APIs for third party to access structured an unstructured
          data.
        </p>

        <div className="mt-10">
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-3xl font-bold text-zinc-800 underline mb-2">
              Unique Value
            </h1>
            <h2 className="text-2xl text-zinc-800">
              Unified Data Platform is to address stakeholde&apos; requirements
              and embed in data best practices.
            </h2>

            <p>Data serving:</p>
            <div className="grid grid-cols-2 grid-rows-2 w-full gap-10 mt-2">
              {uniqueValue.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start justify-center"
                >
                  <h1 className="text-2xl font-bold text-zinc-800">
                    {item.title}
                  </h1>
                  <p className="text-zinc-700">{item.desc}</p>
                  {item.keys && (
                    <ul className="list-disc list-inside">
                      {item.keys.map((key, index) => (
                        <li key={index} className="text-zinc-700">
                          {key}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
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
        </div>
      </div>

      <hr className="my-10" />

      <div className="flex flex-col items-start justify-center text-lg px-10 mt-10">
        <h1 className="text-4xl font-bold text-zinc-800 underline mb-2">
          Digital Stations
        </h1>
        <p className="text-zinc-800 text-left">
          Collect and transform CCTV video feeds to valuable insight
          <br />
          Provide alert and recommendation on dealers to handle their stations
        </p>

        <div className="mt-10">
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-3xl font-bold text-zinc-800 underline mb-2">
              Unique Value
            </h1>

            <ul className="list-disc list-inside">
              <li className="text-zinc-700">
                Extract insights from CCTV videos feed
              </li>
              <li className="text-zinc-700">
                Increase sales derived from Station&apos; convenience store by
                identifying customer&apos;s demographic, provide better offering
                on the right time.
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start justify-center mt-10">
            <h1 className="text-3xl font-bold text-zinc-800 underline">
              Key Features
            </h1>
            <ul className="list-disc list-inside">
              <li className="text-zinc-700">
                Number Plate Recognition and alerts
              </li>
              <li className="text-zinc-700">
                Car Model Recognition and alerts
              </li>
              <li className="text-zinc-700">Facial Recognition and alerts</li>
              <li className="text-zinc-700">Stocks and alerts</li>
              <li className="text-zinc-700">
                Facilities monitoring and alerts
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DataAnalytics;
