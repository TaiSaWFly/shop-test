"use client";

import { ChevronDown } from "lucide-react";
import style from "./productAdvantage.module.scss";
import useOutsideClick from "@/hooks/useOutsideClick";
import { motions, VariantsMotionType } from "@/lib/motion";
import { FC } from "react";

const variants: VariantsMotionType = {
    hidden: {
        opacity: 0,
        transform: "translateY(-60px)",
        transitionEnd: {
            display: "none"
        }
    },
    visible: {
        display: "block",
        opacity: 1,
        transform: "translateY(0px)"
    }
};

interface ProductAdvantageProps {
    title: string;
    icon: JSX.Element;
    content: string;
}

const ProductAdvantage: FC<ProductAdvantageProps> = ({
    title,
    icon,
    content
}) => {
    const { isShow, ref, setShow } = useOutsideClick(false);

    return (
        <div className={style.component_wrap} ref={ref}>
            <div>
                <div
                    className={style.advantage_title}
                    onClick={() => setShow(!isShow)}
                >
                    <div className={style.advantage_title__wrap}>
                        <div className={style.advantage_title__icon}>
                            {icon}
                        </div>
                        <div>{title}</div>
                    </div>

                    <div
                        className={
                            isShow
                                ? `${style.advantage_title__chevron} ${style.active}`
                                : style.advantage_title__chevron
                        }
                    >
                        <ChevronDown />
                    </div>
                </div>
            </div>

            <motions.div
                initial="hidden"
                animate={isShow ? "visible" : "hidden"}
                variants={variants}
                className={style.advantage_description}
            >
                {content}
            </motions.div>
        </div>
    );
};

export default ProductAdvantage;
