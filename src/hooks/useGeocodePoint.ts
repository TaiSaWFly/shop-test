import { useQuery } from "@tanstack/react-query";
import useDebounce from "./useDebounce";
import geocodePointService from "@/services/geocode-point.service";
import { useEffect } from "react";

const useGeocodePoint = (searchValue: string) => {
    const debouncedValue = useDebounce(searchValue);
    const { isLoading, isFetching, data, error, isSuccess, refetch } = useQuery(
        {
            queryKey: ["geocode-points", debouncedValue],
            queryFn: () => geocodePointService.getGeocodePoint(debouncedValue),
            select: (data) => data,
            enabled: !!debouncedValue
        }
    );

    useEffect(() => {
        !!debouncedValue && refetch();
    }, [debouncedValue]);

    return {
        isLoading,
        isFetching,
        geocodePoints: data,
        error,
        isSuccess,
        refetch
    };
};

export default useGeocodePoint;
