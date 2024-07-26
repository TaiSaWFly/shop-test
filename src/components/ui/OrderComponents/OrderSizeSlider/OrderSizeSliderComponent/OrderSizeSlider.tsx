"use client";

import { FC, useEffect, useRef, useState } from "react";
import style from "./orderSizeSlider.module.scss";
import useBlockDimensionsOnEvents from "@/hooks/useBlockDimensionsOnEvents";
import { AnimatePresenceComponent, motions } from "@/lib/motion";
import { ChevronDown } from "lucide-react";
import ItemOrderSlide from "./ItemOrderSlide";
import OrderSizeModalSlider from "../OrderSizeModalSlider/OrderSizeModalSlider";
import useOutsideClick from "@/hooks/useOutsideClick";
import { ModalMotion } from "@/components/common/Modal/Modal";
import handleBodyScrollLock from "@/utils/handleBodyScrollLock";
import { ISizeProduct } from "@/ts/models/ISizeProduct";
import { shemaCatalogSizes } from "@/data/sizes.data/shemaCatalog.sizes";
import { CatalogType } from "@/ts/models/IProduct";

interface OrderSizeSliderProps {
    onChange: (value: string) => void;
    value: string;
    catalog?: CatalogType;
    error?: string;
}

const OrderSizeSlider: FC<OrderSizeSliderProps> = ({
    onChange,
    error,
    catalog,
    value
}) => {
    const ativeWindowRef = useRef<HTMLDivElement>(null);
    const { dimensions } = useBlockDimensionsOnEvents({ ref: ativeWindowRef });
    const { isShow, setShow } = useOutsideClick(false);

    const [sizesData, setSizesData] = useState<ISizeProduct[]>([]);
    const [selectedSize, setSelectedSize] = useState<ISizeProduct>();

    const [activeSlide, setActiveSlide] = useState(0);
    const [initialOffset, setInitialOffset] = useState(280);
    const [activeOffset, setActiveOffset] = useState(0);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        if (catalog) {
            setSizesData(shemaCatalogSizes[catalog]);
        }
    }, []);

    useEffect(() => {
        if (sizesData.length !== 0) {
            const dataSize = sizesData.find((data) => data.size === value);
            const index = sizesData.findIndex((data) => data.size === value);

            if (dataSize && index) {
                setActiveSlide(index);
                setSelectedSize(dataSize);
            } else {
                setActiveSlide(0);
                setSelectedSize(sizesData[0]);
            }
        }
    }, [sizesData]);

    useEffect(() => {
        if (selectedSize) {
            onChange(selectedSize.size);
        }
    }, [selectedSize]);

    useEffect(() => {
        handleBodyScrollLock(isShow);
    }, [isShow]);

    useEffect(() => {
        setInitialOffset(dimensions.offsetLeft - dimensions.offsetWidth / 2);
    }, [dimensions]);

    useEffect(() => {
        setOffset(initialOffset - activeOffset);
    }, [activeOffset, initialOffset]);

    return (
        <>
            {catalog !== "accessory" && (
                <div className={style.component}>
                    <div className={style.slider_wrap}>
                        <div className={style.slider_track}>
                            <motions.div
                                initial={{ left: initialOffset }}
                                animate={{ left: offset }}
                                className={
                                    catalog && catalog === "cloth"
                                        ? `${style.slider_list} ${style.cloth}`
                                        : style.slider_list
                                }
                            >
                                {sizesData.map((size, i) => (
                                    <ItemOrderSlide
                                        key={size.size + i}
                                        index={i}
                                        catalog={catalog}
                                        activeSlide={activeSlide}
                                        size={size.size}
                                        setSelectedSize={() =>
                                            setSelectedSize(size)
                                        }
                                        setActiveOffset={setActiveOffset}
                                        onClick={() => setActiveSlide(i)}
                                    />
                                ))}
                            </motions.div>
                        </div>

                        <div
                            ref={ativeWindowRef}
                            className={
                                catalog && catalog === "cloth"
                                    ? `${style.ative_window} ${style.cloth}`
                                    : style.ative_window
                            }
                        ></div>
                        <div className={style.order_info}>EU</div>
                        {catalog !== "cloth" && (
                            <div
                                className={style.order_chevron}
                                onClick={() => setShow(true)}
                            >
                                <ChevronDown />
                            </div>
                        )}
                    </div>

                    {error && <div className={style.error}>{error}</div>}

                    {catalog !== "cloth" && (
                        <AnimatePresenceComponent>
                            {isShow && (
                                <ModalMotion
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    closeButton={false}
                                    onClose={() => setShow(false)}
                                    className={style.component_modal}
                                >
                                    <OrderSizeModalSlider
                                        setActiveSize={setActiveSlide}
                                        setSelectedSize={setSelectedSize}
                                        activeSize={activeSlide}
                                        onClose={() => setShow(false)}
                                    />
                                </ModalMotion>
                            )}
                        </AnimatePresenceComponent>
                    )}
                </div>
            )}
        </>
    );
};

export default OrderSizeSlider;
