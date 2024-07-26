import ProductPage from "@/components/pages/ProductPage/ProductPage";
import { products } from "@/data/products.data/products.data";
import { CatalogType } from "@/ts/models/IProduct";
import { Metadata } from "next";
import { redirect } from "next/navigation";

type Params = {
    params: {
        productId: string;
    };
    searchParams: { catalog: CatalogType };
};

export const generateMetadata = ({
    params,
    searchParams
}: Params): Metadata => {
    const data = products.find(
        (prod) =>
            prod.catalog === searchParams.catalog &&
            prod.id === params.productId
    );
    if (data)
        return {
            title: `${data.name}`
        };

    return {
        title: `404`
    };
};

const ProductPageComponent = ({ params, searchParams }: Params) => {
    const data = products.find(
        (prod) =>
            prod.catalog === searchParams.catalog &&
            prod.id === params.productId
    );

    if (data)
        return <ProductPage product={data} catalog={searchParams.catalog} />;
    redirect("/404");
};

export default ProductPageComponent;
