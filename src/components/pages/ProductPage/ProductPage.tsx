import ComponentContainer from "@/components/common/ComponentContainer/ComponentContainer";
import ProductComponent from "@/components/ui/Product/ProductComponent/ProductComponent";
import { CatalogType, IProduct } from "@/ts/models/IProduct";
import { FC } from "react";

interface ProductPageProps {
    product: IProduct;
    catalog: CatalogType;
}

const ProductPage: FC<ProductPageProps> = ({ product, catalog }) => {
    return (
        <ComponentContainer>
            <ProductComponent {...{ product, catalog }} />
        </ComponentContainer>
    );
};

export default ProductPage;
