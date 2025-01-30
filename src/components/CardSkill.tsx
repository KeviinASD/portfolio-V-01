import Link from "next/link";


interface SkillProps {
  skill: {title: string, description: string};
}

const CardSkill: React.FC<SkillProps> = ({skill}) => {
  const {title, description} = skill;
  return (
    <div className="p-6 border-2 border-opacity-30 border-accent-black space-y-3 group hover:bg-accent-black transition-all duration-300">
      <p>
      <svg className="w-12 h-12 " viewBox="0 0 100 60" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="100" height="60" rx="8" fill="currentColor"/>
  
  <path d="M25 20 L40 30 L25 40" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
  
  <line x1="50" y1="42" x2="75" y2="42" stroke="white" stroke-width="6" stroke-linecap="round"/>
</svg>


      </p>
      <h1 className="font-bold text-xl group-hover:text-white">{title}</h1>
      <p className="text-accent-gray group-hover:text-gray-400">{description}</p>
      <p ><Link className="flex gap-2 items-center font-bold text-lg group-hover:text-white" href={"/"}>Learn More <svg className="w-5 h-5 group-hover:text-white" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 10 L30 25 L15 40" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg></Link></p>
    </div>
  );
};

export default CardSkill;