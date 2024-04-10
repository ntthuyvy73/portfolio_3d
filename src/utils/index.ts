import { Dispatch, SetStateAction, createContext } from "react";

export type LinkContextProps = {
    activeLink: string;
    setActiveLink: Dispatch<SetStateAction<string>>;
};
export const LinkContext = createContext<LinkContextProps | null>(null);
