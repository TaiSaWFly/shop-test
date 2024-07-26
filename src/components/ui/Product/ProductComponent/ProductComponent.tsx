import { FC } from "react";
import style from "./productComponent.module.scss";
import ProductArivals from "../ProductArivals/ProductArivals";
import { CatalogType, IProduct } from "@/ts/models/IProduct";
import PriceView from "@/components/common/PriceView/PriceView";
import ProductGalery from "../ProductGalery/ProductGalery";
import ProductSizes from "../ProductSizes/ProductSizes";
import ProductSizesTable from "../ProductSizesTable/ProductSizesTable";
import ProductAdvantageComponent from "../ProductAdvantage/ProductAdvantageComponent";
import ProductOrderAction from "../../OrderComponents/ProductOrderAction/ProductOrderAction";
import ProductCatalog from "../ProductCatalog/ProductCatalog";
import ProductOrder from "../ProductOrder/ProductOrder";
import AddFavorite from "../../FavoriteComponents/AddFavorite/AddFavorite";
import ProductLoader from "../ProductLoader/ProductLoader";

export interface ProductComponentProps {
    product: IProduct;
}

interface ProductComponents {
    Arivals: FC<ProductComponentProps>;
    Catalog: FC<ProductComponentProps>;
    Order: FC<ProductComponentProps>;
    Loader: FC;
}

const ProductComponent: FC<ProductComponentProps & { catalog: CatalogType }> &
    ProductComponents = ({ product, catalog }) => {
    return (
        <div className={style.component}>
            <div className={style.product_galery}>
                <ProductGalery {...{ product }} />
            </div>

            <div className={style.product_info}>
                <div className={style.product_add_favorite}>
                    <AddFavorite {...{ product }} />
                </div>

                <div className={style.product_info__wrap}>
                    <div className={style.product_brand}>{product.brand}</div>
                    <div className={style.product_name}>{product.name}</div>
                    <div className={style.product_price}>
                        <PriceView price={product.price} />
                    </div>
                </div>

                <ProductSizes {...{ catalog }} />
                {catalog !== "accessory" && (
                    <ProductSizesTable catalog={catalog} />
                )}

                <ProductAdvantageComponent />
                <ProductOrderAction {...{ product }} />
            </div>
        </div>
    );
};

ProductComponent.Order = ProductOrder;
ProductComponent.Arivals = ProductArivals;
ProductComponent.Catalog = ProductCatalog;
ProductComponent.Loader = ProductLoader;
export default ProductComponent;
