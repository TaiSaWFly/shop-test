import { useEffect, useState } from "react";

const useWindowDimensions = () => {
    const hasWindow = typeof window !== "undefined";

    const [windowDimensions, setWindowDimensions] = useState({
        windowWidth: hasWindow ? window.innerWidth : 0,
        windowHeigth: hasWindow ? window.innerHeight : 0,
        windowScrollY: hasWindow ? window.scrollY : 0
    });

    const getWindowDimensions = () => {
        const windowWidth = window.innerWidth;
        const windowHeigth = window.innerHeight;
        const windowScrollY = window.scrollY;

        return { windowWidth, windowHeigth, windowScrollY };
    };

    useEffect(() => {
        const handleWindowResize = () =>
            setWindowDimensions(getWindowDimensions());

        if (hasWindow) {
            window.addEventListener("scroll", handleWindowResize, true);
            window.addEventListener("resize", handleWindowResize, true);

            return () => {
                window.removeEventListener("scroll", handleWindowResize, true);
                window.removeEventListener("resize", handleWindowResize, true);
            };
        }
    }, []);

    return { ...windowDimensions };
};

export default useWindowDimensions;
