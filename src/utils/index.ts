import { Dispatch, SetStateAction, createContext } from "react";

export type LinkContextProps = {
    activeLink: string;
    setActiveLink: Dispatch<SetStateAction<string>>;
};
export const LinkContext = createContext<LinkContextProps | null>(null);

export const generateRandomColor = (length: number = 1) => {
    const colors = [""];
    let i = 0;
    while (i <= length) {
        var color = Math.random().toString(16).substr(-6);
        var hasData = colors.filter((m) => m === color);
        if (hasData) colors.push(color);
        i++;
    }

    return colors;
};
