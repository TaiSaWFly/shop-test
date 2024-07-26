import deliveryPointsService from "@/services/delivery-points.service";
import { IDeliveryPoint } from "@/ts/models/IDeliveryPoint";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useDeliveryPoints = (coords: number[]) => {
    const [points, setPoints] = useState<IDeliveryPoint[]>([]);
    const { isLoading, isFetching, data, error, isSuccess } = useQuery({
        queryKey: ["delivery-points", coords],
        queryFn: () => deliveryPointsService.getPoints(coords[1], coords[0]),
        select: (data) => data
    });

    useEffect(() => {
        const filterDataByCdek = data?.filter(
            (item) => item.type !== "BOXBERRY"
        );

        if (filterDataByCdek) {
            setPoints(filterDataByCdek);
        }
    }, [data]);

    return {
        isLoading,
        isFetching,
        deliveryPoints: points,
        error,
        isSuccess
    };
};

export default useDeliveryPoints;
