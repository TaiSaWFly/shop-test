import style from "./subsBanner.module.scss";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

const SubsBanner = () => {
    return (
        <section className={style.component}>
            <div className={style.info}>
                <h3 className={style.title}>
                    подписывайся
                    <br />
                    на наш telegram
                </h3>
                <div className={style.sub_title}>
                    и забирай купон на первый заказ без комиссии &#8595;
                </div>

                <Link
                    href={"https://t.me/MargielaStore"}
                    target="_blank"
                    className={`${style.action} btn`}
                >
                    <span>перейти в telegram</span>
                    <div className={style.action_chevron}>
                        <MoveUpRight />
                    </div>
                </Link>
            </div>

            <div className={style.component_bg}>
                <div className={style.bg_a}></div>
                <div className={style.bg_b}></div>
                <div className={style.bg_c}></div>
            </div>
        </section>
    );
};

export default SubsBanner;
