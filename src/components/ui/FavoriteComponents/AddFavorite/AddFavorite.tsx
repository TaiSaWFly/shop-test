"use client";

import { FC } from "react";
import style from "./addFavorite.module.scss";
import { IProduct } from "@/ts/models/IProduct";
import { Heart } from "lucide-react";
import { useAppSelector } from "@/hooks/reduxHooks/reduxHooks";
import { useActions } from "@/hooks/reduxHooks/useActions";

const AddFavorite: FC<{ product: IProduct }> = ({ product }) => {
    const { favorites } = useAppSelector((state) => state.favorite);
    const { setFavorite, deleteFavorite } = useActions();

    const isFavorite = favorites.some((data) => data.id === product.id);

    const handleToggleFavorite = () =>
        !isFavorite ? setFavorite(product) : deleteFavorite(product);

    return (
        <div
            className={
                isFavorite
                    ? `${style.component} ${style.active}`
                    : style.component
            }
            onClick={handleToggleFavorite}
        >
            <div className={style.component_icon}>
                <Heart />
            </div>
        </div>
    );
};

export default AddFavorite;
