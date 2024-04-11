import { Tooltip } from "react-tooltip";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";

const Tech = () => {
    return (
        <div className="flex flex-wrap justify-center gap-10">
            {technologies.map((item, index) => (
                <div>
                    <div
                        key={`ball-${index}`}
                        className="w-28 h-28"
                        data-tooltip-id={`my-tooltip-${index}`}
                        data-tooltip-content={item.name}
                    >
                        <BallCanvas icon={item.icon} />
                    </div>

                    <Tooltip
                        id={`my-tooltip-${index}`}
                        style={{
                            padding: "1rem",
                            borderRadius: "10px",
                            textTransform: "capitalize",
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

export default Tech;
