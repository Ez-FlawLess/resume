import { FC } from "react";

const Header: FC = () => {
    return (
        <div className="w-full bg-blue px-16 py-20">
            <h1 className="text-6xl text-white font-bold italic mb-4">
                Amir Ali Mohammadi
            </h1>
            <h3 className="text-white text-xl">
                Systems Programmer (Web, Network, Embedded)
            </h3>
        </div>
    )
}

export default Header