const uniqueValue = [
  "Capable to identify and address the root causes of deferment issues, facilitating authority to assist with resolution to opeartors.",
  "Provide better insights to authority by enabling data on Business Level",
];

const keyFeature = [
  {
    title: "Centralize Data Submission",
    desc: "Multiple operators from multiple company submit in a single platform",
  },
  {
    title: "Azure AD",
    desc: "Leverage on Azure AD for authentication, external user account are linked using B2B ID, avoiding the needs of user to manage multiple accounts",
  },
  {
    title: "Data Serving",
    desc: "Provide APIs for third party to consume data from DM Portal",
  },
];

const DMPortal = () => {
  return (
    <section className="w-full flex flex-row">
      <div className="flex-1 flex items-center justify-center p-5">
        <div className="flex flex-col gap-2 items-center justify-center bg-blue-600 w-full h-full p-10 rounded-3xl">
          <h1 className="text-white font-bold text-5xl mb-10 drop-shadow-sm">
            DM Portal
          </h1>
          <p className="text-white text-xl text-center drop-shadow-sm">
            A centralize data platform for PAC Contractors to submit Deferment
            Data to authorities.
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
        </div>

        <div className="bg-white shadow-[0px_0px_50px_10px_rgba(37,99,235,0.2)] rounded-3xl p-10 space-y-2">
          <h1 className="text-yellow-500 font-bold text-3xl drop-shadow-sm">
            Key Feature
          </h1>
          <hr />
          <ul className="text-black text-lg list-item list-disc space-y-2 ml-10">
            {keyFeature.map((value, index) => (
              <li key={index} className="leading-none">
                <span className="font-bold">{value.title} - </span> {value.desc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DMPortal;
