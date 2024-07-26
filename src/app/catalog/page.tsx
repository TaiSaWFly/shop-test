import CatalogPage from "@/components/pages/CatalogPage/CatalogPage";
import { navigateData } from "@/data/navigate.data";
import { shemaCatalogProducts } from "@/data/products.data/shemaCatalog.products";
import { CatalogType } from "@/ts/models/IProduct";
import { redirect } from "next/navigation";

type Params = {
    searchParams: { catalog: CatalogType };
};

const CatalogPageComponent = ({ searchParams }: Params) => {
    const data = shemaCatalogProducts[searchParams.catalog];
    const titlePage = navigateData.find(
        (data) => data.PAGE_QUERY === searchParams.catalog
    );

    if (data)
        return (
            <CatalogPage
                catalog={searchParams.catalog}
                products={data}
                titlePage={titlePage?.PAGE_NAME}
            />
        );
    redirect("/404");
};

export default CatalogPageComponent;
