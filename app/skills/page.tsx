import CardSkill from "@/src/components/CardSkill";

function newSkillsPage() {
  const aboutSkills = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eum dolores sapiente magni aspernatur eveniet eius. At magnam fuga error, doloremque debitis consequuntur sed labore itaque dicta harum ullam quaerat!";
  const skillsBasic = [
    {
      title: "Apps Development",
      description: "Our support team will get assistance from AI/powered to services your need"
    },
    {
      title: "Apps Development",
      description: "Our support team will get assistance from AI/powered to services your need"
    },
    {
      title: "Apps Development",
      description: "Our support team will get assistance from AI/powered to services your need"
    },
    {
      title: "Apps Development",
      description: "Our support team will get assistance from AI/powered to services your need"
    }
  ]

  return (
  <section className="panel-first pl-20 h-full">
    <div className="w-4/5 mx-auto flex-col md:flex-row flex gap-8 items-center justify-center my-10 md:py-20">
      <div className="md:w-[40%] border-2 border-opacity-30 border-accent-gray p-6 text-accent-black space-y-4">
        <div className="font-bold text-3xl">
          <h1 >What Do You Needs</h1>
          <h1>We can Do it</h1>
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