// "https://unicorngo.ru/main-api/api/customer-bot/geocoder/by-address?geocode=%D0%B7%D0%B0%D0%B2%D0%B5%D1%82%D1%8B%20%D0%B8%D0%BB%D1%8C%D0%B8%D1%87%D0%B0";

import { IGeocodePoint } from "@/ts/models/IGeocodePoint";
import httpService from "./http.service";
const geocodeEndPoint = "geocoder/by-address";

type GeocodePointServiceType = {
    getGeocodePoint: (searchValue: string) => Promise<IGeocodePoint[]>;
};

const geocodePointService: GeocodePointServiceType = {
    getGeocodePoint: async (searchValue: string) => {
        try {
            const { data } = await httpService.get<{ items: IGeocodePoint[] }>(
                `${geocodeEndPoint}?geocode=${searchValue}&ll=39.95752428427617%2C56.09584225860437`
            );
            return data.items;
        } catch (error) {
            throw error;
        }
    }
};

export default geocodePointService;
