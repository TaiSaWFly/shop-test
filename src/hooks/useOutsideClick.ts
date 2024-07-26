import { useEffect, useRef, useState } from "react";

const useOutsideClick = (initialStateIsVisible: boolean) => {
    let timeout: any;

    const ref = useRef<HTMLDivElement | null>(null);
    const refStopPropagation = useRef<any | null>(null);
    const [isShow, setShow] = useState(initialStateIsVisible);

    const handleClickOutside = (e: Event) => {
        if (
            refStopPropagation.current &&
            refStopPropagation.current.contains(e.target as Node)
        ) {
            setTimeout(() => setShow(false), 10);
        }

        if (ref.current && !ref.current.contains(e.target as Node)) {
            if (isShow) {
                timeout = setTimeout(() => setShow(false), 10);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("click", handleClickOutside, true);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener("click", handleClickOutside, true);
        };
    });

    return { ref, refStopPropagation, isShow, setShow };
};

export default useOutsideClick;
