import SliderComponent from "@/components/common/SliderComponent/SliderComponent";
import style from "./arivalsSlider.module.scss";
import { FC, useEffect, useRef, useState } from "react";
import { IProduct } from "@/ts/models/IProduct";
import { SliderSettingsType, SliderType } from "@/ts/types/SliderTypes";
import { ChevronLeft, ChevronRight } from "lucide-react";
import countQtySliders from "@/utils/countQtySliders";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { BREAKPOINTS } from "@/constants/breakpoint.constants";
import ProductComponent from "../../Product/ProductComponent/ProductComponent";

const ArivalsSlider: FC<{ products: IProduct[] }> = ({ products }) => {
    const [isClient, setIsClient] = useState(false);
    const sliderRef = useRef<SliderType | null>(null);
    const [activeSlide, setActiveSlide] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(4);
    const { windowWidth } = useWindowDimensions();
    const options: SliderSettingsType = {
        infinite: false,
        speed: 500,
        arrows: false,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        beforeChange: (_, next) => setActiveSlide(next),
        responsive: [
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (windowWidth <= BREAKPOINTS.BREAKPOINT_720) {
            setSlidesToShow(2);
        } else {
            setSlidesToShow(4);
        }
    }, [windowWidth]);

    return (
        <>
            <ul className={style.component}>
                {isClient ? (
                    <>
                        <SliderComponent
                            options={options}
                            sliderRef={sliderRef}
                        >
                            {products.map((prod) => (
                                <li key={prod.id}>
                                    <ProductComponent.Arivals product={prod} />
                                </li>
                            ))}
                        </SliderComponent>

                        <div className={style.pagination_wrap}>
                            <div className={style.pagination}>
                                <div
                                    className={style.pagination_prev}
                                    onClick={() =>
                                        sliderRef.current?.slickPrev()
                                    }
                                >
                                    <ChevronLeft />
                                </div>

                                <div className={style.pagination_count}>
                                    {activeSlide + 1}/
                                    {countQtySliders(
                                        products.length,
                                        slidesToShow
                                    )}
                                </div>

                                <div
                                    className={style.pagination_next}
                                    onClick={() =>
                                        sliderRef.current?.slickNext()
                                    }
                                >
                                    <ChevronRight />
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <ProductComponent.Loader />
                )}
            </ul>
        </>
    );
};

export default ArivalsSlider;
