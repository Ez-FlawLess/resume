import { FC, Fragment } from "react";
import { InfoI } from "../../types/info.types";

const Info: FC<InfoI> = props => {
    return (
        <div className="mb-8">
            <h2 className="mb-2 text-black text-2xl font-bold">
                {props.title}
            </h2>
            {props.list.map(infoItem => (
                <div className="mb-4" key={infoItem.title}>
                    <h3 className="text-black text-xl mb-1">
                        {infoItem.title}
                    </h3>
                    {infoItem.from && infoItem.to && (
                        <h6 className="text-sub-text-color text-sm mb-4">
                            {infoItem.from} - {infoItem.to}
                        </h6>
                    )}
                    <ul className="list-disc pl-10">
                        {infoItem.works.map((work, index) => (
                            <li key={index}>
                                {work}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Info