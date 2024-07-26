import { reviews } from "@/data/review.data";
import ReviewSlider from "../ReviewSlider/ReviewSlider";
import style from "./review.module.scss";

const Review = () => {
    return (
        <section className={style.component}>
            <div className={style.component_info}>
                <h3 className={style.title}>Отзыв клиентов о нашей работе</h3>
                <div className={style.subtitle}>
                    Живые и настоящие отзывы клиентов, который покупают
                    оригинальные брендовые вещи у нас
                </div>
            </div>

            <ReviewSlider {...{ reviews }} />
        </section>
    );
};

export default Review;
