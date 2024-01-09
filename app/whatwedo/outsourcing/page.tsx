const services = [
  "Network Engineers",
  "Pi Engineers",
  "Developer",
  "Project Managers",
  "Consultants",
  "Data Analysts",
];

const other = [
  {
    title: "End-to-End",
    desc: "Covering all stages from initiation to completion. It implies a comprehensive approach that encompasses all relevant components, stages, or activities without excluding any critical elements. For example, an end-to-end solution for a software project that involve every phase from initial planning and design to development, testing, deployment, and ongoing maintenance.",
  },
  {
    title: "Subcontract Specific Scope",
    desc: "Involves the outsourcing of a particular portion or aspect of a project to a third-party subcontractor. When a project has various components or specialized tasks, a company might subcontract a specific scope of work to another entity with expertise in that area.",
  },
  {
    title: "Attacment of Resources(Manpower Supply) - At Site or Remote",
    desc: "Deployment of resources, particularly human resources or manpower, either physically at the project site or remotely from a different location. Depending on the nature of the project, certain tasks may require on-site presence, while others can be carried out remotely. ",
  },
];

const Page = () => {
  return (
    <main className="py-32 px-10 md:px-24 lg:px-40 bg-white">
      <header className="flex flex-col items-center justify-center">
        <h1 className="text-zinc-900 text-5xl font-bold">Outsourcing</h1>
        <ul className="list-disc list-item">
          {services.map((service, index) => (
            <li key={index} className="text-zinc-700">
              {service}
            </li>
          ))}
        </ul>
      </header>

      <div className="flex flex-col items-start justify-center text-lg px-10 mt-10 p-5 rounded-md">
        <h1 className="text-4xl font-bold text-zinc-800 underline mb-2">
          Other services
        </h1>
        <div className="grid grid-cols-2 grid-rows-2 w-full gap-10 mt-2">
          {other.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-center"
            >
              <h1 className="text-2xl font-bold text-zinc-800">{item.title}</h1>
              <p className="text-zinc-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
