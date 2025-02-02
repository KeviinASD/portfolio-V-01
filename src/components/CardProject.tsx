"use client"
import { useState } from "react";
import { Project } from "../interfaces/projects";
import SideBarModalProject from "./SideBarModalProject";
import Image from "next/image";

interface CardProjectProps {
    project: Project;
}

const CardProject: React.FC<CardProjectProps> = ({ project }) => {

  const {name, description, technologies, image} = project;
  const [isOpen, setIsOpen] = useState(false);

  return (
  <>
  <div className="card-project h-[400px] flex relative p-10 items-end rounded-lg mb-6 overflow-hidden bg-[#f4f1ee] md:after:opacity-30 group md:after:hover:opacity-100 "
    onClick={() => setIsOpen((prev) => !prev)}
  >
    <Image 
      src={image}
      alt={description}
      width={400}
      height={400}
      priority={false}
      className="absolute object-cover left-0 top-0 h-full w-full rounded-xl overflow-hidden"
    />

    <div className="z-[10] space-y-3 md:opacity-0 md:group-hover:opacity-100 md:group-hover:-translate-y-[10%] md:transition-all md:duration-500 md:ease-in-out">
      <h1 className="text-white font-extrabold text-3xl">{name}</h1>
      <p className="text-[#d5d5d5]">
        {description}
      </p>
      <div className="flex gap-2">
        {technologies.map((tech, index) => (
            <p className="bg-[#696869] text-white px-4 py-1 rounded-xl text-xs" key={index}>
                {tech}
            </p>
        ))}
      </div>
    </div>
  </div>
  {
    isOpen && (
      <SideBarModalProject project={project} setIsOpen={setIsOpen}/>
    )
  }
  </>
  );
  
};

export default CardProject;