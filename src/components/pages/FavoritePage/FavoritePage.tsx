"use client";

import ComponentContainer from "@/components/common/ComponentContainer/ComponentContainer";
import style from "./favoritePage.module.scss";
import { FC } from "react";
import { useAppSelector } from "@/hooks/reduxHooks/reduxHooks";
import ProductComponent from "@/components/ui/Product/ProductComponent/ProductComponent";

const FavoritePage: FC = () => {
    const { favorites } = useAppSelector((state) => state.favorite);

    return (
        <div className={style.component}>
            <ComponentContainer>
                <div className={style.title}>Избранное</div>

                {favorites.length !== 0 ? (
                    <div className={style.favorites_list}>
                        {favorites.map((data) => (
                            <ProductComponent.Arivals
                                key={data.id}
                                product={data}
                            />
                        ))}
                    </div>
                ) : (
                    <div className={style.favorites_list_empty}>
                        Лист избранного пока пуст
                    </div>
                )}
            </ComponentContainer>
        </div>
    );
};

export default FavoritePage;
