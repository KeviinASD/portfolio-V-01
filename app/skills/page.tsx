import OndasAnimation from "@/src/components/OndasAnimation";


function SkillsPage () {

  return (
    <>
    <section className="panel-first panel w-[100vw] relative box-content">
      <OndasAnimation className="absolute left-0 -z-10 w-screen top-[40%]"/>
            <h1 className="absolute top-[calc(3.3333vh)] left-[calc(3.3333vh+80px)] text-[5vh] font-extrabold">Technical skills</h1>
            <div className="hidden w-full pl-20 md:flex justify-center">
              <h1 className="text-4xl text-center mt-[20vh] mb-[4vh] lg:mb-[20vh]">
                Collaborate with brands and agencies <br/>
                to create impactful results.
              </h1>
            </div>
            <div className="pt-[20vh] md:pt-0 w-full pl-20 flex">
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

function SkillsPrueba() {
  return (<>
    <section className="panel-first pl-20">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        {/* CONTENIDO */}
          <div className="md:w-5/6 w-full">
            <h1 className="mt-20 mb-10 text-5xl font-extrabold">Skills</h1>
          </div>
      </div>
    </section>
  </>)
}


export default SkillsPrueba;