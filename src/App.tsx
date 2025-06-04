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
                    <div className="col-span-9 border-l border-border-color pt-12 pr-10">
                        {INFO_LIST.map(info => (
                            <Info 
                                key={info.title}
                                {...info}
                            />
                        ))}
                    </div>
                    <div className="col-span-3 pt-12 px-10">
                        <Skills 
                            title="مهارت‌ها"
                            skills={[
                                {skill: "Rust", ability: 5 },
                                {skill: "React", ability: 5 },
                                {skill: "Next.js", ability: 5 },
                                {skill: "Nest.js", ability: 5 },
                                {skill: "Golang", ability: 4 },
                                {skill: "Typescript", ability: 4 },
                                {skill: "MongoDB", ability: 4 },
                                {skill: "Angular", ability: 4 },
                                {skill: "Flutter", ability: 3 },
                                {skill: "nginx", ability: 3 },
                                {skill: "C", ability: 3 },
                            ]}
                        />
                        <Skills 
                            title="Languages"
                            skills={[
                                {skill: "English", ability: 5},
                                {skill: "Persian", ability: 5},
                            ]}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
