"use client";

import { SliderRefType, SliderSettingsType } from "@/ts/types/SliderTypes";
import type { FC, PropsWithChildren } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./sliderComponent.scss";

interface SliderComponentProps {
    sliderRef?: SliderRefType;
    options: SliderSettingsType;
}

const SliderComponent: FC<PropsWithChildren<SliderComponentProps>> = ({
    sliderRef,
    children,
    options
}) => {
    return (
        <Slider ref={sliderRef} {...options}>
            {children}
        </Slider>
    );
};

export default SliderComponent;
