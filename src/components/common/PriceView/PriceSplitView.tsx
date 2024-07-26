import { FC } from "react";
import style from "./priceView.module.scss";

const PriceSplitView: FC<{ price: number | string }> = ({ price }) => {
    return (
        <div>
            <span className={style.split}>
                {Math.round(Number(price) / 2).toLocaleString("ru-RU")}&#8381;
                &#215; 2
            </span>
            <span> в сплит</span>
        </div>
    );
};

export default PriceSplitView;
