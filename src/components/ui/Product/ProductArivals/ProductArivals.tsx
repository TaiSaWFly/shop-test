import { FC } from "react";
import style from "./productArivals.module.scss";
import Image from "next/image";
import PriceView from "@/components/common/PriceView/PriceView";
import Link from "next/link";
import { ProductComponentProps } from "../ProductComponent/ProductComponent";
import AddFavorite from "../../FavoriteComponents/AddFavorite/AddFavorite";

const ProductArivals: FC<ProductComponentProps> = ({ product }) => {
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
            </Link>

            <div className={style.product_info}>
                <div className={style.product_name}>{product.name}</div>
                <div className={style.product_brand}>{product.brand}</div>
                <div className={style.product_price}>
                    <PriceView price={product.price} />
                </div>
            </div>
        </div>
    );
};

export default ProductArivals;
