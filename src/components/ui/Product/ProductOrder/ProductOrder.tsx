"use client";

import { FC, useEffect } from "react";
import style from "./productOrder.module.scss";
import Image from "next/image";
import { ProductComponentProps } from "../ProductComponent/ProductComponent";
import { Check, ChevronRight } from "lucide-react";
import useOutsideClick from "@/hooks/useOutsideClick";
import { AnimatePresenceComponent } from "@/lib/motion";
import { ModalMotion } from "@/components/common/Modal/Modal";
import handleBodyScrollLock from "@/utils/handleBodyScrollLock";

const ProductOrder: FC<ProductComponentProps> = ({ product }) => {
    const { isShow, setShow, ref } = useOutsideClick(false);

    useEffect(() => {
        handleBodyScrollLock(isShow);
    }, [isShow]);

    return (
        <div className={style.component}>
            <div className={style.image_wrap}>
                <Image
                    className={style.product_image}
                    src={product.prev_image}
                    alt={product.name}
                    placeholder="blur"
                />
            </div>

            <div className={style.product_info}>
                <div className={style.product_name}>{product.name}</div>
                <div className={style.product_original__wrap}>
                    <div className={style.product_original}>
                        <div className={style.product_original__icon}>
                            <Check />
                        </div>
                        <div>Оригинал</div>
                    </div>

                    <div
                        className={style.product_original__action}
                        onClick={() => setShow(true)}
                    >
                        <div>Убедиться</div>
                        <div className={style.product_original__icon_action}>
                            <ChevronRight />
                        </div>
                    </div>
                </div>
            </div>

            <AnimatePresenceComponent>
                {isShow && (
                    <ModalMotion
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClose={() => setShow(false)}
                        className={style.component_modal}
                    >
                        <div ref={ref}>
                            <div className={style.component_modal__title}>
                                Гарантируем оригинальность
                            </div>

                            <div className={style.component_modal__content}>
                                <span>
                                    Все товары проходят проверку, есть
                                    сертификат и пломба.
                                </span>
                                <span>
                                    Материал, подошва, швы, ярлычок, стелька,
                                    коробка — каждый товар проверяется на
                                    оригинальность по 16 параметрам. Если всё
                                    хорошо, на обувь вешается ярлычок с пломбой,
                                    а в коробку кладется сертификат подлинности.
                                </span>
                                <span>
                                    Мы гарантируем, что любой купленный товар в
                                    Unicorn является оригинальным. Если по
                                    каким-то причинам у вас на руках окажется
                                    подделка — вернем деньги в трехкратном
                                    размере.
                                </span>
                                <span>Как проверяются товары</span>
                            </div>
                        </div>
                    </ModalMotion>
                )}
            </AnimatePresenceComponent>
        </div>
    );
};

export default ProductOrder;
