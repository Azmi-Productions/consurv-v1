const Page = () => {
  return (
    <main className="py-48 px-10 md:px-24 lg:px-40 bg-white">
      <header className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-zinc-800 text-5xl">
          Frequently Asked Questions (FAQ)
        </h1>
      </header>

      <div className="w-full flex flex-col lg:flex-row flex-wrap items-center justify-start text-zinc-900">
        <div className="mt-10">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Job Scope FAQs
          </h2>
          <div className="mb-6 flex flex-col gap-5 text-xl">
            <div className="flex flex-col">
              <p className="mb-0 font-bold">
                i. What’s the job scope of an intern?
              </p>
              <p>
                An intern will be exposed to the complete business cycle of a
                project; involved in business development, tendering, site visit
                & evaluation, system design, software development, database
                management, site execution, and administration work.
              </p>
            </div>
            <div>
              <p className="font-bold">ii. What are the fields of work?</p>
              <p>
                Involved in System Integration, software development, and
                procurement (hardware & software) management.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-5xl font-bold mb-4">General FAQs</h2>
          <div className="mb-6 flex flex-col gap-5  text-xl">
            <div className="flex flex-col">
              <p className="mb-0 font-bold">
                i. What can i expect from interning here?
              </p>
              <ul className="list-disc pl-10">
                <li>
                  It will be a challenging internship where you will be pushed
                  to your limits.
                </li>
                <li>
                  The sky is the limit; the amount of knowledge and experience
                  you will gain is a function of your initiative.
                </li>
                <li>Fun and creative working culture.</li>
              </ul>
            </div>

            <div className="flex flex-col">
              <p className="font-bold">
                ii. Will I be working in a team or individually?
              </p>
              <p>
                Both. Some bigger projects involve several people in a team
                while smaller projects are handled individually. While the
                seniors provide guidance, there is no “spoon-feeding”, and
                interns are expected to be resourceful and confident enough to
                carry out their tasks.
              </p>
            </div>

            <div className="flex flex-col">
              <p className="font-bold">
                iii. Is training provided for interns?
              </p>
              <p>
                Yes. OGSP and BOSIET are a must. Further specialized training is
                conducted as and when necessary.
              </p>
            </div>

            <div className="flex flex-col">
              <p className="font-bold">
                iv. Will an intern be doing office or site work?
              </p>
              <p>Both.</p>
            </div>

            <div className="flex flex-col">
              <p className="font-bold">
                v. Will I have an opportunity to go offshore?
              </p>
              <p>Yes. Many interns have gone offshore.</p>
            </div>

            <div className="flex flex-col">
              <p className="mb-0 font-bold">
                vi. What are the benefits offered?
              </p>
              <ul className="list-disc pl-10">
                <li>Medical covers outpatient treatment.</li>
                <li>1 leave day is earned for every month of work.</li>
                <li>Travel and expense claims (as per company policies).</li>
              </ul>
            </div>

            <div className="flex flex-col">
              <p className="mb-0 font-bold">vii. What are the working hours?</p>
              <ul className="list-disc pl-10">
                <li>
                  Company practices flexible working hours. As a guideline
                  (8am-5pm, 9am-6pm or 10am-7pm)
                </li>
                <li>Working days are Mon-Fri.</li>
              </ul>
            </div>

            <div className="flex flex-col">
              <p className="font-bold">viii. Is there a monthly allowance?</p>
              <p>Yes. RM1,000/mth + performance bonuses.</p>
            </div>

            <div className="flex flex-col">
              <p className="font-bold">
                ix. What kind of intern is the company looking for?
              </p>
              <p>
                Someone with a positive attitude and good communication skills.
              </p>
            </div>
          </div>

          <h1 className="text-zinc-900">
            If you have further questions contact us via the contact form or
            email us to info@consurv.com.my. We’ll get back to you as soon as
            possible.
          </h1>
        </div>
      </div>
    </main>
  );
};

export default Page;
