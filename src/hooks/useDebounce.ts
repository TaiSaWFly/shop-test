import { useEffect, useState } from "react";

const useDebounce = <T>(value: T, delay = 500) => {
    const [debounced, setDebounced] = useState(value);

    useEffect(() => {
        const timeout = setTimeout(() => setDebounced(value), delay);
        return () => clearTimeout(timeout);
    }, [value, delay]);

    return debounced;
};

export default useDebounce;
