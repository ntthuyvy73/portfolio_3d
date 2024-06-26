export const textVariant = () => {
    return {
        hidden: {
            opacity: 0,
            y: -50,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1.5,
                type: "spring",
            },
        },
    };
};

export const fadeIn = (
    direction: string,
    type: string,
    delay: number,
    duration: number
) => {
    return {
        hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: "easeOut",
            },
        },
    };
};

export const slideIn = (
    direction: string,
    type: string,
    delay: number,
    duration: number
) => {
    return {
        hidden: {
            x:
                direction === "left"
                    ? "-100%"
                    : direction === "right"
                    ? "100%"
                    : 0,
            y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
        },
        show: {
            x: 0,
            y: 0,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: "easeOut",
            },
        },
    };
};
