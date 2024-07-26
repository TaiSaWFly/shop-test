import { FC, useRef, useEffect } from "react";
import style from "./orderSizeSlider.module.scss";
import { CatalogType } from "@/ts/models/IProduct";

interface ItemOrderSlideProps {
    size: string;
    index: number;
    activeSlide: number;
    onClick: () => void;
    setActiveOffset: (n: number) => void;
    setSelectedSize: () => void;
    catalog?: CatalogType;
}

const ItemOrderSlide: FC<ItemOrderSlideProps> = ({
    onClick,
    setSelectedSize,
    size,
    setActiveOffset,
    index,
    activeSlide,
    catalog
}) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current && ref.current.tabIndex === activeSlide) {
            setActiveOffset(ref.current.offsetLeft);
        }
    }, [activeSlide]);

    return (
        <div
            tabIndex={index}
            ref={ref}
            className={
                catalog && catalog === "cloth"
                    ? `${style.component_item} ${style.cloth}`
                    : style.component_item
            }
            onClick={() => {
                setSelectedSize();
                onClick();
            }}
        >
            {size}
        </div>
    );
};

export default ItemOrderSlide;
