import Image from "next/image";
import { Project } from "../interfaces/projects";

interface SideBarModalProjectProps {
    project: Project;
    setIsOpen: (isOpen: boolean) => void;
}

const SideBarModalProject: React.FC<SideBarModalProjectProps> = ({project, setIsOpen}) => {
    const {name, description, image, about, technologies, website} = project;
    const backToProjects = () => {
        setIsOpen(false);
    }

    return (<>
        <div className="">
            <div className="z-[99999] fixed h-screen w-screen top-0 right-0"
                style={{background: "rgba(0, 0, 0, 0.8)"}}
                onClick={backToProjects}
            ></div>
            <aside className="w-full md:w-[34rem] z-[999999] fixed top-0 right-0 bg-[#fffdfc] h-full fadeInLeft transition-all duration-500 linear">
                <div className="p-8 max-h-full overflow-y-scroll">
                    <div className="flex justify-between py-4 border-b items-center">
                        <button className="" onClick={backToProjects}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#8F9BB3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.0055 7.835L10.1255 11.715L14.0055 15.595C14.098 15.6876 14.1715 15.7975 14.2216 15.9185C14.2717 16.0394 14.2975 16.1691 14.2975 16.3C14.2975 16.4309 14.2717 16.5606 14.2216 16.6815C14.1715 16.8025 14.098 16.9124 14.0055 17.005C13.9129 17.0976 13.803 17.171 13.682 17.2211C13.561 17.2712 13.4314 17.297 13.3005 17.297C13.1695 17.297 13.0399 17.2712 12.9189 17.2211C12.798 17.171 12.688 17.0976 12.5955 17.005L8.00546 12.415C7.91276 12.3225 7.83921 12.2126 7.78903 12.0916C7.73885 11.9707 7.71302 11.841 7.71302 11.71C7.71302 11.579 7.73885 11.4494 7.78903 11.3284C7.83921 11.2074 7.91276 11.0975 8.00546 11.005L12.5955 6.415C12.688 6.3223 12.7979 6.24875 12.9188 6.19857C13.0398 6.14839 13.1695 6.12256 13.3005 6.12256C13.4314 6.12256 13.5611 6.14839 13.6821 6.19857C13.8031 6.24875 13.913 6.3223 14.0055 6.415C14.3855 6.805 14.3955 7.445 14.0055 7.835Z" fill="#8F9BB3"></path></svg>
                        </button>
                        <button className="text-sm font-extrabold" onClick={backToProjects}>Back To Projects</button>
                    </div>
                    <div className="space-y-6 mt-6">
                        <div>
                            <h1 className="mb-2 font-bold text-xl">{name}</h1>
                            <p className="text-sm text-[#545454]">{description}</p>
                        </div>
                        <div className="w-full h-[20rem] relative">
                            <Image src={image} fill alt="" className="rounded-lg object-cover"/>
                        </div>
                        <div>
                            <h1 className="mb-2 font-bold text-lg">About</h1>
                            <p className="text-sm text-[#545454]">{about}</p>
                        </div>
                        <div>
                            <h1 className="mb-2 font-bold text-lg">Technologies</h1>
                            <p className="text-sm ">
                                {technologies.map((tech, index) => (
                                    <span key={index} className="bg-[#efe9e4] text-black font-bold px-4 py-1  mr-2">{tech}</span>
                                ))}
                            </p>
                        </div>
                        { project.website && (
                            <div>
                                <h1 className="mb-2 font-bold text-lg">Website</h1>
                                <a href={website}>{website}</a>
                            </div>
                        )}
                        { project.github && (
                            <div>
                                <h1 className="mb-2 font-bold text-lg">Github</h1>
                                <a className="font-sans text-[#545454]" href={project.github}>{project.github}</a>
                            </div>
                        )}
                    </div>
                </div>
            </aside>
        </div>
    </>)
}

export default SideBarModalProject;