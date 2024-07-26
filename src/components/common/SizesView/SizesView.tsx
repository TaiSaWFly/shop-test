import { FC } from "react";
import style from "./sizesView.module.scss";
import { ISizeProduct } from "@/ts/models/ISizeProduct";

interface SizesViewProps {
    className?: string;
    sizes: ISizeProduct[];
    sizeName: string;
    onChange: (value: string) => void;
}

const SizesView: FC<SizesViewProps> = ({
    sizes,
    sizeName,
    onChange,
    className
}) => {
    return (
        <ul
            className={
                className ? `${style.component} ${className}` : style.component
            }
        >
            {sizes.map((size, i) => (
                <li
                    key={size.size + i}
                    className={
                        size.size === sizeName
                            ? `${style.item} ${style.active}`
                            : style.item
                    }
                    onClick={() => onChange(size.size)}
                >
                    {size.size}
                </li>
            ))}
        </ul>
    );
};

export default SizesView;
