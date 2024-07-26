import { FC } from "react";
import style from "./productCatalog.module.scss";
import Image from "next/image";
import Link from "next/link";
import PriceView from "@/components/common/PriceView/PriceView";
import DeliveryView from "@/components/common/DeliveryView/DeliveryView";
import { ProductComponentProps } from "../ProductComponent/ProductComponent";
import AddFavorite from "../../FavoriteComponents/AddFavorite/AddFavorite";

const ProductCatalog: FC<ProductComponentProps> = ({ product }) => {
    return (
        <div className={style.component}>
            <AddFavorite {...{ product }} />

            <Link
                href={{
                    pathname: `/product/${product.id}`,
                    query: { catalog: product.catalog }
                }}
            >
                <div className={style.product_image__wrap}>
                    <Image
                        className={style.product_image}
                        src={product.prev_image}
                        alt={product.name}
                        placeholder="blur"
                    />
                </div>

                <div className={style.product_info}>
                    <div className={style.product_price}>
                        <PriceView price={product.price} />
                    </div>
                    <div className={style.product_price__split}>
                        <PriceView.Split price={product.price} />
                    </div>
                    <div className={style.product_name}>{product.name}</div>
                    <div>
                        <DeliveryView days={product.delivery} />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCatalog;
