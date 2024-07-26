import { FC } from "react";
import style from "./arrowsIndicator.module.scss";

const ArrowsIndicator: FC = () => {
    return (
        <div className={style.component}>
            <div className={style.arrow}></div>
        </div>
    );
};

export default ArrowsIndicator;
