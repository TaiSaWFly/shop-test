import { FC, useEffect, useRef } from "react";
import { ColumnType } from "./OrderSizeModalSlider";

interface ItemOrderSizeModalSlideProps {
    item: any;
    index: number;
    column: ColumnType[];
    activeSlide: number;
    onClick: () => void;
    setActiveOffset: (n: number) => void;
    setSelectedSize: () => void;
}

const ItemOrderSizeModalSlide: FC<ItemOrderSizeModalSlideProps> = ({
    item,
    index,
    column,
    activeSlide,
    onClick,
    setActiveOffset,
    setSelectedSize
}) => {
    const ref = useRef<HTMLTableRowElement>(null);

    useEffect(() => {
        if (ref.current && ref.current.tabIndex === activeSlide) {
            setActiveOffset(ref.current.offsetTop);
        }
    }, [activeSlide]);
    return (
        <tr
            ref={ref}
            tabIndex={index}
            onClick={() => {
                onClick();
                setSelectedSize();
            }}
        >
            {column.map((c, i) => (
                <td key={i}>{item[c.value]}</td>
            ))}
        </tr>
    );
};

export default ItemOrderSizeModalSlide;
