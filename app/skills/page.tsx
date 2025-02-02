import CardSkill from "@/src/components/CardSkill";

function newSkillsPage() {
  const aboutSkills = "Me especializo en construir aplicaciones escalables, optimizadas y centradas en la experiencia del usuario. Mi objetivo es seguir creciendo profesionalmente y aportar valor a cada proyecto en el que participo <3";
  const skillsBasic = [
    {
      title: "Frontend",
      description: "Especializado en la creación de interfaces modernas y responsivas con tecnologías como React, Angular y TailwindCSS, priorizando experiencia de usuario y optimización."
    },
    {
      title: "Backend",
      description: "Desarrollo de sistemas robustos y escalables con Django, NestJS y Laravel, garantizando seguridad, eficiencia en bases de datos y arquitecturas bien estructuradas."
    },
    {
      title: "DevOps",
      description: "Implementación de CI/CD, despliegues automatizados y monitoreo en la nube con Docker, Kubernetes y AWS para optimizar rendimiento y escalabilidad."
    },
    {
      title: "Inteligencia Artificial",
      description: "Integración de modelos de Machine Learning con TensorFlow y OpenCV, aplicando análisis de datos e IA en proyectos innovadores y soluciones automatizadas."
    }
  ];

  return (
  <section className="panel-first pl-20 h-full">
    <div className="w-4/5 mx-auto flex-col md:flex-row flex gap-8 items-center justify-center my-10 md:pt-10">
      <div className="md:w-[40%] border-2 border-opacity-30 border-accent-gray p-6 text-accent-black space-y-4">
        <div className="font-bold text-3xl">
          <h1 >What Do You Needs</h1>
          <h1>I can Do it</h1>
        </div>
        <p className="text-accent-gray">{aboutSkills}</p>
      </div>
      <div className="md:w-[60%] h-full my-auto flex items-center">
        <div className="grid lg:grid-cols-2 gap-4">
        {skillsBasic.map((skill, index) => (
          <CardSkill key={index} skill={skill}/>
        ))}
        </div>
      </div>
    </div>
  </section>
  )
}


export default newSkillsPage;