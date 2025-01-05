import OndasAnimation from "@/src/components/OndasAnimation";


export default function SkillsPage () {

  return (
    <>
    <section className="panel w-[100vw] relative box-content">
      <OndasAnimation className="absolute left-0 -z-10 w-screen top-[40%]"/>
            <h1 className="absolute top-0 left-20 text-[8vh] font-semibold">Technical skills</h1>
            <div className="w-full pl-20 flex justify-center">
              <h1 className="text-4xl text-center font-extralight mt-[20vh] mb-[4vh] lg:mb-[20vh]">
                Collaborate with brands and agencies <br/>
                to create impactful results.
              </h1>
            </div>
            <div className="w-full pl-20 flex">
              {/* CAGUITA */}
              <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-4 px-10">
                <div className="space-y-4">
                  <h1 className="font-semibold">Frontend Development</h1>
                  <p>I create modern, responsive, and user-friendly interfaces using the latest technologies.</p>
                  {/* TECNOLOGIAS EN CVG */}
                  <img src="https://skillicons.dev/icons?i=angular,react,next,tailwind" />
                </div>
                <div className="space-y-4">
                  <h1 className="font-semibold">Backend Development</h1>
                  <p>I develop robust server-side applications and APIs to support seamless data operations.</p>
                  <img src="https://skillicons.dev/icons?i=express,nest,spring,django,laravel" />
                  <img src="https://skillicons.dev/icons?i=mysql,mongodb,firebase" />
                </div>
                <div className="space-y-4">
                  <h1 className="font-semibold">DevOps and Tools</h1>
                  <p>I manage deployments, version control, and collaboration tools to streamline development.</p>
                  <img src="https://skillicons.dev/icons?i=git,docker" />
                </div>
                <div className="space-y-4">
                  <h1 className="font-semibold">Other Skills</h1>
                  <p>I continuously learn and adapt to improve my problem-solving and technical expertise.</p>
                  <img src="https://skillicons.dev/icons?i=figma,linux" />
                </div>
              </div>
            </div>
          </section>
    </>
  )
}
