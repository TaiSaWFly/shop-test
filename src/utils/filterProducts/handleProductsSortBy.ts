import { IProduct } from "@/ts/models/IProduct";
import { SortByType } from "@/ts/types/app.types";

const handleProductsSortBy = (products: IProduct[], sortBy: SortByType) => {
    let sortData = products;

    if (sortBy === "by_relevance") {
        sortData = [...sortData];
    }

    if (sortBy === "by_cheap") {
        sortData = [...sortData].sort((a, b) => a.price - b.price);
    }

    if (sortBy === "by_expensive") {
        sortData = [...sortData].sort((a, b) => b.price - a.price);
    }

    return sortData;
};

export default handleProductsSortBy;
