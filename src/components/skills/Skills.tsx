import { FC } from "react";
import { SkillI } from "../../types/skills.types"; 

const SkillItem: FC<SkillI> = props => (
    <div className="mb-4">
        <h6 className="mb-2 text-text-color text-lg">
            {props.skill}
        </h6>
        <div className="grid grid-cols-5 w-full">
            {Array(5).fill(0).map((_, index) => (
                <div className={`h-3 relative group ${index < props.ability ? "test" : ""} `}>
                    <div 
                        className="absolute w-2/3 top-0 left-0 border-b-10 border-b-skill-bg group-[.test]:border-b-blue border-l-4 border-l-transparent"
                    />
                    {/* <div 
                        className="absolute w-1/2 top-0 h-[10px] left-1/4 group-[.test]:bg-blue"
                    /> */}
                    <div
                        className="absolute w-2/3 top-0 right-0 border-t-10 border-t-skill-bg group-[.test]:border-t-blue border-r-4 border-r-transparent"
                    />
                </div>
            ))}
        </div>
    </div>
)

const Skills: FC<{
    title: string,
    skills: SkillI[],
}> = props => {
    return (
        <div className="mb-8">
            <h3 className="mb-2 text-black text-2xl font-bold">
                {props.title}
            </h3>
            {props.skills.map(skill => (
                <SkillItem 
                    key={skill.skill}
                    {...skill}
                />
            ))}
        </div>
    )
}

export default Skills