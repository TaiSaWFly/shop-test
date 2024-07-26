"use client";

import { FC, useEffect } from "react";
import style from "./priceFilter.module.scss";
import { PriceFilterProps } from "./PriceFilter";
import { useAppSelector } from "@/hooks/reduxHooks/reduxHooks";
import { useActions } from "@/hooks/reduxHooks/useActions";
import { initialStatePriceFilter } from "@/data/initialState.data";
import PriceView from "@/components/common/PriceView/PriceView";
import { X } from "lucide-react";
import useOutsideClick from "@/hooks/useOutsideClick";
import { ModalMotion } from "@/components/common/Modal/Modal";
import handleBodyScrollLock from "@/utils/handleBodyScrollLock";
import { AnimatePresenceComponent } from "@/lib/motion";
import PriceFilterModal from "./PriceFilterModal";

const PriceFilterMobile: FC<PriceFilterProps> = ({ priceInfo }) => {
    const { isShow, setShow, ref } = useOutsideClick(false);
    const { price } = useAppSelector((state) => state.filter);
    const { setPrice } = useActions();

    useEffect(() => {
        handleBodyScrollLock(isShow);
    }, [isShow]);

    const handleResetFilter = () => {
        setPrice(initialStatePriceFilter);
    };

    return (
        <div className={style.component_mobile}>
            {!!price.priceFrom || !!price.priceTo ? (
                <div className={style.component_mobile__info_wrap}>
                    <div
                        className={style.component_mobile__info}
                        onClick={() => setShow(true)}
                    >
                        {!!price.priceFrom && (
                            <>
                                <div>
                                    <PriceView price={price.priceFrom} />
                                </div>

                                <span> - </span>
                            </>
                        )}

                        {!!price.priceTo && (
                            <div>
                                <PriceView price={price.priceTo} />
                            </div>
                        )}
                    </div>

                    <div
                        className={style.component_mobile__info_icon}
                        onClick={handleResetFilter}
                    >
                        <X />
                    </div>
                </div>
            ) : (
                <div
                    className={`${style.component_mobile__info} ${style.empty}`}
                    onClick={() => setShow(true)}
                >
                    <div>Цена</div>
                </div>
            )}

            <AnimatePresenceComponent>
                {isShow && (
                    <ModalMotion
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClose={() => setShow(false)}
                        className={style.component_modal}
                    >
                        <div ref={ref} className={style.component_filter__wrap}>
                            <PriceFilterModal
                                {...{
                                    isShow,
                                    setShow: () => setShow(false),
                                    priceInfo
                                }}
                            />
                        </div>
                    </ModalMotion>
                )}
            </AnimatePresenceComponent>
        </div>
    );
};

export default PriceFilterMobile;
