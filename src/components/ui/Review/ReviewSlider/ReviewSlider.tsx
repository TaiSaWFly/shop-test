"use client";

import { FC } from "react";
import style from "./reviewSlider.module.scss";
import "./reviewSlider.scss";
import { Quote, Star } from "lucide-react";
import Link from "next/link";
import { IReview } from "@/ts/models/IReview";
import SliderComponent from "@/components/common/SliderComponent/SliderComponent";

const ReviewSlider: FC<{ reviews: IReview[] }> = ({ reviews }) => {
    return (
        <div className={style.component}>
            <div className={style.review_quote}>
                <Quote />
            </div>

            <SliderComponent
                options={{
                    className: "review_slider",
                    dots: true,
                    infinite: false,
                    speed: 500,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    customPaging: (i) => (
                        <div className="review_dots">{i + 1}</div>
                    )
                }}
            >
                {reviews.map((rev) => (
                    <div key={rev.id} className={style.review}>
                        <div className={style.review_info}>
                            <div className={style.review_content}>
                                {rev.content}
                            </div>
                        </div>

                        <div className={style.review_action__wrap}>
                            <Link
                                href={"https://t.me/MargielaReviews"}
                                target="_blank"
                                className={`${style.review_action} btn`}
                            >
                                Читать весь отзыв
                            </Link>

                            <div className={style.review_star}>
                                {[1, 2, 3, 4, 5].fill(0).map((_, i) => (
                                    <div
                                        key={i}
                                        className={style.review_star__icon}
                                    >
                                        <Star />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </SliderComponent>

            <div className={style.review_quote}>
                <Quote />
            </div>
        </div>
    );
};

export default ReviewSlider;
