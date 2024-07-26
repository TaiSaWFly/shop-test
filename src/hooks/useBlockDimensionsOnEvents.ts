import { initialStateBlockDimentions } from "@/data/initialState.data";
import getBlockDimensions from "@/utils/getBlockDimensions";
import { RefObject, useEffect, useState } from "react";

type useBlockDimensionsOnEventsType<T extends HTMLElement> = {
    ref: RefObject<T | null> | null;
    event?: "resize" | "mousedown" | "scroll";
    dependencies?: unknown;
};

const useBlockDimensionsOnEvents = ({
    ref,
    event,
    dependencies
}: useBlockDimensionsOnEventsType<HTMLElement>) => {
    const [dimensions, setDimensions] = useState(initialStateBlockDimentions);

    const handleSetDimensions = () => {
        ref && setDimensions(getBlockDimensions(ref));
    };

    const addEventListeners = () => {
        window.addEventListener("scroll", handleSetDimensions, true);
        window.addEventListener("resize", handleSetDimensions, true);
        window.addEventListener("mousedown", handleSetDimensions, true);
    };

    useEffect(() => {
        if (ref) {
            setDimensions(getBlockDimensions(ref));
        }

        if (event) {
            if (event === "scroll") {
                window.addEventListener("scroll", handleSetDimensions, true);
            }

            if (event === "resize") {
                window.addEventListener("resize", handleSetDimensions, true);
            }

            if (event === "mousedown") {
                window.addEventListener("mousedown", handleSetDimensions, true);
            }
        } else {
            addEventListeners();
        }

        return () => {
            window.removeEventListener("scroll", handleSetDimensions, true);
            window.removeEventListener("resize", handleSetDimensions, true);
            window.removeEventListener("mousedown", handleSetDimensions, true);
        };
    }, [ref, dependencies]);

    return { dimensions };
};

export default useBlockDimensionsOnEvents;
