"use client";

import { FC, useRef, useState } from "react";
import style from "./productGalery.module.scss";
import { IProduct } from "@/ts/models/IProduct";
import SliderComponent from "@/components/common/SliderComponent/SliderComponent";
import { SliderSettingsType, SliderType } from "@/ts/types/SliderTypes";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductGalery: FC<{ product: IProduct }> = ({ product }) => {
    const sliderRef = useRef<SliderType | null>(null);
    const [activeSlide, setActiveSlide] = useState(0);

    const options: SliderSettingsType = {
        infinite: true,
        speed: 300,
        swipe: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (_, next) => setActiveSlide(next)
    };

    return (
        <div className={style.component}>
            <div className={style.slider}>
                <SliderComponent sliderRef={sliderRef} options={options}>
                    {product.images.map((img, i) => (
                        <div
                            key={product.name + i}
                            className={style.product_slide}
                        >
                            <div className={style.product_image__wrap}>
                                <Image
                                    className={style.product_image}
                                    src={img}
                                    alt={product.name}
                                    placeholder="blur"
                                />
                            </div>
                        </div>
                    ))}
                </SliderComponent>

                <div
                    className={style.slide_prev}
                    onClick={() => sliderRef.current?.slickPrev()}
                >
                    <ChevronLeft />
                </div>
                <div
                    className={style.slide_next}
                    onClick={() => sliderRef.current?.slickNext()}
                >
                    <ChevronRight />
                </div>
            </div>

            <ul className={style.paginate}>
                {product.images.map((img, i) => (
                    <li
                        key={product.name + i}
                        className={
                            activeSlide === i
                                ? `${style.paginate_item} ${style.active}`
                                : `${style.paginate_item}`
                        }
                        onMouseEnter={() =>
                            sliderRef.current?.slickGoTo(i, true)
                        }
                    >
                        <div className={style.paginate_item__image_wrap}>
                            <Image
                                className={style.product_image}
                                src={img}
                                alt={product.name}
                                placeholder="blur"
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductGalery;
