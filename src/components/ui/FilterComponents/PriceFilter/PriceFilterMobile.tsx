"use client";

import { FC, useEffect, useState } from "react";
import style from "./priceFilter.module.scss";
import { PriceFilterProps } from "./PriceFilter";
import ComponentPriceFilter from "./ComponentPriceFilter";
import { useAppSelector } from "@/hooks/reduxHooks/reduxHooks";
import { useActions } from "@/hooks/reduxHooks/useActions";
import { FormChangeArgsType, PriceFilterDataType } from "@/ts/types/app.types";
import { initialStatePriceFilter } from "@/data/initialState.data";
import PriceView from "@/components/common/PriceView/PriceView";
import { X } from "lucide-react";
import useOutsideClick from "@/hooks/useOutsideClick";
import { ModalMotion } from "@/components/common/Modal/Modal";
import handleBodyScrollLock from "@/utils/handleBodyScrollLock";
import FilterActions from "../FilterActions/FilterActions";
import { AnimatePresenceComponent } from "@/lib/motion";

const PriceFilterMobile: FC<PriceFilterProps> = ({ priceInfo }) => {
    const { isShow, setShow, ref, refStopPropagation } = useOutsideClick(false);
    const { price } = useAppSelector((state) => state.filter);
    const { setPrice } = useActions();
    const [data, setData] = useState<PriceFilterDataType>(price);

    useEffect(() => {
        if (!isShow) {
            setPrice(data);
        }
    }, [data]);

    useEffect(() => {
        setData(price);
    }, [price]);

    useEffect(() => {
        handleBodyScrollLock(isShow);
        if (!isShow) {
            setData(price);
        }
    }, [isShow]);

    const handleChange = (target: FormChangeArgsType<string, string>) => {
        setData((prevStare) => ({
            ...prevStare,
            [target.name]: target.value.replace(/[^0-9]/g, "")
        }));
    };

    const handleResetFilter = () => {
        setData(initialStatePriceFilter);
    };

    const handleSubmitFilter = () => {
        setPrice(data);
        setShow(false);
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
                            <ComponentPriceFilter
                                className={style.component_filter__mobile}
                                data={data}
                                onChange={handleChange}
                                priceFrom={priceInfo.priceFromInfo}
                                priceTo={priceInfo.priceToInfo}
                            />

                            <FilterActions
                                refStopPropagation={refStopPropagation}
                                onResetFilter={handleResetFilter}
                                onSubmitFilter={handleSubmitFilter}
                            />
                        </div>
                    </ModalMotion>
                )}
            </AnimatePresenceComponent>
        </div>
    );
};

export default PriceFilterMobile;
