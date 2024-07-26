import { IDeliveryProducts } from "@/ts/models/IDeliveryProducts";

export const deliveryData: IDeliveryProducts[] = [
    {
        label: "5-20 дней — доставка из-за границы",
        value_from: 5,
        value_to: 20,
        short_label: "5-20 дней"
    },
    {
        label: "1-2 дня — из наличия в Москве",
        value_from: 0,
        value_to: 2,
        short_label: "1-2 дня"
    }
];
