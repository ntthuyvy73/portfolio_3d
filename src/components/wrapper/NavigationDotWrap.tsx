import { Tooltip } from "react-tooltip";
import { navLinks } from "../../constants";
import { useContext } from "react";
import { LinkContext } from "../../utils";

const NavigationDotWrap = () => {
    const context = useContext(LinkContext);

    return (
        <div className="flex flex-col gap-7">
            {navLinks.map((item, index) => (
                <>
                    <a
                        key={`navgiation-${index}`}
                        href={`#${item.id}`}
                        className={`w-5 h-5  rounded-full hover:bg-secondary transition-all duration-100 ease-in-out ${
                            item.id === context?.activeLink
                                ? "bg-purple"
                                : "bg-white"
                        }`}
                        data-tooltip-id={`tooltip-nav-${item.id}`}
                        data-tooltip-content={item.title}
                        onClick={() => context?.setActiveLink(item.id)}
                    />
                    <Tooltip
                        id={`tooltip-nav-${item.id}`}
                        place="left"
                        style={{
                            padding: "1rem",
                            borderRadius: "10px",
                            textTransform: "capitalize",
                            fontSize: "18px",
                        }}
                    />
                </>
            ))}
        </div>
    );
};

export default NavigationDotWrap;
