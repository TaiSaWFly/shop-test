import { IProduct } from "@/ts/models/IProduct";
import { C_1_1, C_1_2, J_1_1, J_1_2 } from "../images.data";

const accessoryData: IProduct[] = [
    {
        id: "1-a",
        name: "Jordan",
        price: 1145,
        size: "",
        brand: "Jordan",
        delivery: 20,
        catalog: "accessory",
        prev_image: J_1_1,
        images: [J_1_1, J_1_2, J_1_1, J_1_2]
    },
    {
        id: "2-a",
        name: "CASIOYOUTHVINTAGE A168WEM-1",
        price: 900,
        size: "",
        brand: "CASIOYOUTHVINTAGE",
        delivery: 20,
        catalog: "accessory",
        prev_image: C_1_1,
        images: [C_1_1, C_1_2, C_1_2, C_1_1]
    },
    {
        id: "3-a",
        name: "COACH Holden 25 Logo",
        price: 10600,
        size: "",
        brand: "COACH",
        delivery: 20,
        catalog: "accessory",
        prev_image: C_1_1,
        images: [C_1_1, C_1_2, C_1_2, C_1_1]
    },
    {
        id: "4-a",
        name: "Stussy",
        price: 11605,
        size: "",
        brand: "Stussy",
        delivery: 20,
        catalog: "accessory",
        prev_image: J_1_1,
        images: [J_1_1, J_1_2, J_1_1, J_1_2]
    }
];

export default accessoryData;
