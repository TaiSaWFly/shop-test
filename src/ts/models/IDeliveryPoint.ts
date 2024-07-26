export interface IDeliveryPoint {
    type: "CDEK" | "BOXBERRY";
    id: string;
    latitude: number;
    longitude: number;
    address: string;
    name: string;
    workTime: string;
    city: string;
}
