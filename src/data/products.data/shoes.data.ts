import {
    N_1_1,
    N_1_2,
    N_1_3,
    N_1_4,
    NB_1_1,
    NB_1_2,
    NB_1_3,
    NB_1_4,
    V_1_1,
    V_1_2,
    V_1_3,
    V_1_4
} from "../images.data";
import { IProduct } from "@/ts/models/IProduct";

const shoesData: IProduct[] = [
    {
        id: "1-s",
        name: "New Balance NB 530 D",
        price: 11735,
        size: "37",
        brand: "New Balance",
        delivery: 0,
        catalog: "shoes",
        prev_image: NB_1_1,
        images: [NB_1_1, NB_1_2, NB_1_3, NB_1_4]
    },
    {
        id: "2-s",
        name: "Nike Air Force 1 07",
        price: 15335,
        size: "36",
        brand: "Nike",
        delivery: 0,
        catalog: "shoes",
        prev_image: N_1_1,
        images: [N_1_1, N_1_2, N_1_3, N_1_4]
    },
    {
        id: "3-s",
        name: "Vans Knu Skool",
        price: 13835,
        size: "36",
        brand: "Vans",
        delivery: 20,
        catalog: "shoes",
        prev_image: V_1_2,
        images: [V_1_1, V_1_2, V_1_3, V_1_4]
    },
    {
        id: "4-s",
        name: "New Balance NB 4 вв",
        price: 11745,
        size: "38",
        brand: "New Balance",
        delivery: 20,
        catalog: "shoes",
        prev_image: NB_1_1,
        images: [NB_1_1, NB_1_2, NB_1_3, NB_1_4]
    },

    {
        id: "5-s",
        name: "Nike Air 1 07",
        price: 18335,
        size: "37",
        brand: "Nike",
        delivery: 0,
        catalog: "shoes",
        prev_image: N_1_1,
        images: [N_1_1, N_1_2, N_1_3, N_1_4]
    },
    {
        id: "6-s",
        name: "Vans Kn",
        price: 9835,
        size: "38",
        brand: "Vans",
        delivery: 20,
        catalog: "shoes",
        prev_image: V_1_3,
        images: [V_1_2, V_1_2, V_1_3, V_1_4]
    }
];

export default shoesData;
