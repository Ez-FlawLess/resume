import ContactInfo from "./components/contact_info/ContactInfo"
import Header from "./components/ui/Header"
import Info from "./components/info/Info"
import Skills from "./components/skills/Skills"
import { INFO_LIST } from "./constants/items/info_list.constants"

function App() {

    return (
        <>
            <Header />
            <div className="px-16 pt-6">
                <ContactInfo />
                <div
                    className="border-t border-border-color mt-6"
                />
                <div className="grid grid-cols-12">
                    <div className="col-span-9 border-r border-border-color pt-12 pr-10">
                        {INFO_LIST.map(info => (
                            <Info
                                key={info.title}
                                {...info}
                            />
                        ))}
                    </div>
                    <div className="col-span-3 pt-12 px-10">
                        <Skills
                            title="Skills"
                            skills={[
                                {skill: "Rust", ability: 5 },
                                {skill: "Golang", ability: 4 },
                                {skill: "XDP", ability: 4 },
                                {skill: "React", ability: 4 },
                                {skill: "Next.js", ability: 4 },
                                {skill: "Nest.js", ability: 4 },
                                {skill: "Typescript", ability: 4 },
                                {skill: "MongoDB", ability: 4 },
                                {skill: "Angular", ability: 4 },
                                {skill: "Flutter", ability: 3 },
                                {skill: "C", ability: 3 },
                                {skill: "Assembly", ability: 3 },
                                {skill: "Linux", ability: 3 },
                                {skill: "Postgresql", ability: 2 },
                            ]}
                        />
                        <Skills
                            title="Languages"
                            skills={[
                                {skill: "English", ability: 5},
                                {skill: "Persian", ability: 5},
                            ]}
                        />
                        <Skills
                            title="Books"
                            skills={[
                                { skill: "Computer Systems: A Programmer's Perspective", ability: 5 },
                                { skill: "Rust Atomics and Locks", ability: 5 },
                                { skill: "Async Rust (Microsoft RT)", ability: 5 },
                                { skill: "Rust Patterns (Microsoft RT)", ability: 5 },
                                { skill: "Type-Driven Correctness in Rust (Microsoft RT)", ability: 5 },
                                { skill: "Rust Engineering Practices (Microsoft RT)", ability: 5 },
                                { skill: "Learning EBPF", ability: 4 },
                                { skill: "Async Rust (O'Reilly)", ability: 3 },
                                { skill: "Designing Data-Intensive Applications", ability: 2 },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
