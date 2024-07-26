import { useEffect, useRef, useState } from "react";

const useOutsideClick = (initialStateIsVisible: boolean) => {
    let timeout: any;

    const ref = useRef<HTMLDivElement | null>(null);
    const [isShow, setShow] = useState(initialStateIsVisible);

    const handleClickOutside = (e: Event) => {
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

    return { ref, isShow, setShow };
};

export default useOutsideClick;
