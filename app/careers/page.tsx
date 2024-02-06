import { jobs } from "./jobs";

const Page = () => {
  return (
    <main className="py-32 px-10 md:px-24 lg:px-40 bg-white">
      <header className="flex flex-col items-center justify-center gap-10 px-0 lg:px-40 mb-24">
        <h1 className="text-zinc-800 text-5xl font-bold">Career</h1>
      </header>

      <div className="flex flex-col gap-10">
        {jobs.map((job, index) => (
          <div key={index}>
            <h1 className="text-zinc-800 text-5xl font-bold">{job.title}</h1>
            {job.brief && <p className="text-zinc-800 text-xl">{job.brief}</p>}
            {job.description && (
              <>
                <h2 className="text-zinc-800 text-xl font-bold">
                  Job Description
                </h2>
                <ul>
                  {job.description.map((desc, index) => (
                    <li key={index} className="text-zinc-800">
                      {desc}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {job.requirements && (
              <>
                <h2 className="text-zinc-800 text-xl font-bold">
                  Requirements
                </h2>
                <ul>
                  {job.requirements.map((req, index) => (
                    <li key={index} className="text-zinc-800">
                      {req}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {job.skills && (
              <>
                <h2 className="text-zinc-800 text-xl font-bold">Skills</h2>
                <ul>
                  {job.skills.map((skill, index) => (
                    <li key={index} className="text-zinc-800">
                      {skill}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {job.responsibilities && (
              <>
                <h2 className="text-zinc-800 text-xl font-bold">
                  Responsibilities
                </h2>
                <ul>
                  {job.responsibilities.map((res, index) => (
                    <li key={index} className="text-zinc-800">
                      {res}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {job.qualifications && (
              <>
                <h2 className="text-zinc-800 text-xl font-bold">
                  Qualification
                </h2>
                <ul>
                  {job.qualifications.map((qual, index) => (
                    <li key={index} className="text-zinc-800">
                      {qual}
                    </li>
                  ))}
                </ul>
              </>
            )}
            <div className="mt-5">
              <a
                href="mailto:farahin@consurv.com.my"
                className="bg-zinc-800 text-white px-10 py-2 rounded-md shadow-md hover:shadow-xl transition-all duration-300"
              >
                Apply Now!
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;
