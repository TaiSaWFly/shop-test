import { IProduct } from "@/ts/models/IProduct";
import { D_1_1, D_1_2, D_1_3, D_1_4, Y_1_1, Y_1_2 } from "../images.data";

const clothData: IProduct[] = [
    {
        id: "1-c",
        name: "Dickies FW22",
        price: 6285,
        size: "XXS",
        brand: "Dickies",
        delivery: 20,
        catalog: "cloth",
        prev_image: D_1_1,
        images: [D_1_1, D_1_2, D_1_3, D_1_4]
    },
    {
        id: "2-c",
        name: "YEEZY x Gap x Balenciaga Dove No Seam Tee LogoT",
        price: 14035,
        size: "XS",
        brand: "YEEZY",
        delivery: 20,
        catalog: "cloth",
        prev_image: Y_1_1,
        images: [Y_1_1, Y_1_2, Y_1_1, Y_1_1]
    },
    {
        id: "3-c",
        name: "PUMA x Gap x Balenciaga Dove No ",
        price: 1405,
        size: "S",
        brand: "PUMA",
        delivery: 0,
        catalog: "cloth",
        prev_image: Y_1_1,
        images: [Y_1_1, Y_1_2, Y_1_1, Y_1_1]
    },
    {
        id: "4-c",
        name: "Jordan x Balenciaga Dove No Seam Tee LogoT",
        price: 6905,
        size: "M",
        brand: "Jordan",
        delivery: 20,
        catalog: "cloth",
        prev_image: Y_1_1,
        images: [Y_1_1, D_1_2, D_1_2, Y_1_1]
    }
];

export default clothData;
