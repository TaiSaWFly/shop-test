import { uuid } from "@/lib/uuid";
import { IReview } from "@/ts/models/IReview";

export const reviews: IReview[] = [
    {
        id: uuid(),
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Neque numquam ducimus, ad fugiat facilis sequi liberodicta a perferendis id debitis amet"
    },
    {
        id: uuid(),
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit, ad fugiat facilis sequi liberodicta a perferendis id debitis amet"
    },
    {
        id: uuid(),
        content:
            "Neque numquam ducimus, ad fugiat facilis sequi liberodicta a perferendis id debitis amet"
    }
];
