import { IDeliveryPoint } from "@/ts/models/IDeliveryPoint";
import httpService from "./http.service";
const deliveryEndPoint = "delivery-points";

type DeliveryPointsServiceType = {
    getPoints: (
        longitude: number,
        latitude: number
    ) => Promise<IDeliveryPoint[]>;
};

const deliveryPointsService: DeliveryPointsServiceType = {
    getPoints: async (longitude, latitude) => {
        try {
            const { data } = await httpService.get<{ items: IDeliveryPoint[] }>(
                `${deliveryEndPoint}?longitude=${longitude}&latitude=${latitude}&distance=100`
            );
            return data.items;
        } catch (error) {
            throw error;
        }
    }
};

export default deliveryPointsService;
