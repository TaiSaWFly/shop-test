import { FC, useEffect, useRef, useState } from "react";
import style from "./orderSizeModalSlider.module.scss";
import { motions } from "@/lib/motion";
import { shoesSizesData } from "@/data/sizes.data/shoes.sizes.data";
import useBlockDimensionsOnEvents from "@/hooks/useBlockDimensionsOnEvents";
import ItemOrderSizeModalSlide from "./ItemOrderSizeModalSlide";
import { ISizeShoes } from "@/ts/models/ISizeProduct";

interface OrderSizeModalSliderProps {
    onClose: () => void;
    setActiveSize: (valur: number) => void;
    activeSize: number;
    setSelectedSize: (size: ISizeShoes) => void;
}

export type ColumnType = {
    header: string;
    value: string;
};

const OrderSizeModalSlider: FC<OrderSizeModalSliderProps> = ({
    onClose,
    activeSize,
    setActiveSize,
    setSelectedSize
}) => {
    const ativeWindowRef = useRef<HTMLDivElement>(null);
    const { dimensions } = useBlockDimensionsOnEvents({ ref: ativeWindowRef });

    const [activeSlide, setActiveSlide] = useState(activeSize);
    const [initialOffset, setInitialOffset] = useState(372);
    const [activeOffset, setActiveOffset] = useState(0);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        setInitialOffset(dimensions.offsetTop - dimensions.offsetHeight / 2);
    }, [dimensions]);

    useEffect(() => {
        setOffset(initialOffset - activeOffset);
    }, [activeOffset, initialOffset]);

    useEffect(() => {
        setActiveSize(activeSlide);
    }, [activeSlide]);

    const column: ColumnType[] = [
        {
            header: "EU",
            value: "size"
        },
        {
            header: "Длина стопы",
            value: "foot_length"
        }
    ];

    return (
        <div className={style.slider}>
            <table>
                <thead>
                    {column.map((c, i) => (
                        <th key={i}>{c.header}</th>
                    ))}
                </thead>
                <tbody>
                    <motions.div
                        initial={{ top: initialOffset }}
                        animate={{ top: offset }}
                        className={style.slider_list}
                    >
                        {shoesSizesData.map((size, i) => (
                            <ItemOrderSizeModalSlide
                                key={i}
                                item={size}
                                index={i}
                                column={column}
                                activeSlide={activeSlide}
                                setActiveOffset={setActiveOffset}
                                setSelectedSize={() => setSelectedSize(size)}
                                onClick={() => setActiveSlide(i)}
                            />
                        ))}
                    </motions.div>

                    <div
                        ref={ativeWindowRef}
                        className={style.ative_window}
                    ></div>
                </tbody>
                <tfoot>
                    <div className={style.slider_action} onClick={onClose}>
                        Выбрать
                    </div>
                </tfoot>
            </table>
        </div>
    );
};

export default OrderSizeModalSlider;
