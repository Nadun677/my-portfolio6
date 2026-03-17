import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGit,
  FaWindows,
  FaLinux
} from "react-icons/fa"

import {
  SiC,
  SiAngular,
  SiMysql,
  SiMongodb,
  SiSqlite,
  SiArduino,
  SiCisco,
SiTypescript,
  SiTailwindcss
} from "react-icons/si"

function Skills() {

  const skills = [
    {name:"Java", icon:<FaJava/>},
    {name:"Python", icon:<FaPython/>},
    {name:"C", icon:<SiC/>},
    {name:"JavaScript", icon:<FaJs/>},
    {name:"TypeScript", icon:<SiTypescript/>},
    {name:"HTML", icon:<FaHtml5/>},
    {name:"CSS", icon:<FaCss3Alt/>},
    {name:"Tailwind CSS", icon:<SiTailwindcss/>},
    {name:"PHP", icon:<FaPhp/>},
    {name:"React", icon:<FaReact/>},
    {name:"Bootstrap", icon:<FaBootstrap/>},
    {name:"Angular", icon:<SiAngular/>},
    {name:"MySQL", icon:<SiMysql/>},
    {name:"SQLite", icon:<SiSqlite/>},
    {name:"MongoDB", icon:<SiMongodb/>},
    {name:"Git", icon:<FaGit/>},
    {name:"Windows", icon:<FaWindows/>},
    {name:"Linux", icon:<FaLinux/>},
    {name:"Arduino", icon:<SiArduino/>},
    {name:"Cisco Packet Tracer", icon:<SiCisco/>},
  ]

  return (
    <section id="skills" className="mt-40 px-10">

      <h2 className="text-3xl font-bold mb-10 text-purple-400">
        Skils
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">

        {skills.map((skill,index)=>(
          <div
            key={index}
            className="flex flex-col items-center backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-6 hover:scale-110 transition"
          >
            <div className="text-4xl text-purple-400 mb-2">
              {skill.icon}
            </div>

            <p className="text-sm text-gray-300 text-center">
              {skill.name}
            </p>
          </div>
        ))}

      </div>

    </section>
  )
}

export default Skills