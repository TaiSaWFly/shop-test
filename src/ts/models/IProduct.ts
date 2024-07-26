import { StaticImageData } from "next/image";

export type CatalogType = "shoes" | "cloth" | "accessory";

export interface IProduct {
    id: string;
    name: string;
    price: number;
    size: string;
    brand: string;
    catalog: CatalogType;
    delivery: number;
    prev_image: StaticImageData;
    images: StaticImageData[];
}
