import { SortByType } from "@/ts/types/app.types";

export const sortData: { label: string; value: SortByType }[] = [
    { label: "Популярные", value: "by_relevance" },
    { label: "Подешевле", value: "by_cheap" },
    { label: "Подороже", value: "by_expensive" }
];
