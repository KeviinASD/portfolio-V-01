import SliderSkills from "@/src/components/SliderSkills";

function SkillsPage() {

  const textSkills = `
    Soy un apasionado desarrollador fullstack con experiencia en la creación de soluciones tecnológicas robustas, escalables y orientadas al usuario. 
  `;
  
  return (<>
    <section className="panel-first pl-20">
      <div className="container flex flex-col items-center px-5 py-[60px] md:px-10 md:py-[80px] md:w-10/12 mx-auto">
        {/* TEXTO */}
        <div className="flex flex-col items-center gap-4 w-full md:w-[500px]">
          <h1 className="text-5xl font-extrabold text-center">Technical skills</h1>
          <p className="text-lg text-center">{textSkills}</p>
        </div>
        {/* CONTENIDO */}
        <SliderSkills/>
      </div>
    </section>
  </>)
}


export default SkillsPage;