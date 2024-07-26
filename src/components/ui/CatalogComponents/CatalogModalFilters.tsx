"use client";

import { FC, useEffect } from "react";
import style from "./catalog.module.scss";
import Button from "@/components/common/Button/Button";
import { ModalMotion } from "@/components/common/Modal/Modal";
import { AnimatePresenceComponent } from "@/lib/motion";
import { SlidersHorizontal, X, Check } from "lucide-react";
import BrandFilter from "../FilterComponents/BrandFilter/BrandFilter";
import PriceFilter from "../FilterComponents/PriceFilter/PriceFilter";
import SizeFilter from "../FilterComponents/SizeFilter/SizeFilter";
import SortFilter from "../FilterComponents/SortFilter/SortFilter";
import { CatalogType } from "@/ts/models/IProduct";
import useOutsideClick from "@/hooks/useOutsideClick";
import { PriceInfoType } from "@/ts/types/app.types";
import handleBodyScrollLock from "@/utils/handleBodyScrollLock";

interface CatalogModalFiltersProps {
    catalog: CatalogType;
    priceInfo: PriceInfoType;
}

const CatalogModalFilters: FC<CatalogModalFiltersProps> = ({
    catalog,
    priceInfo
}) => {
    const { isShow, setShow, ref } = useOutsideClick(false);

    useEffect(() => {
        handleBodyScrollLock(isShow);
    }, [isShow]);

    return (
        <div className={style.component_wrap__mobile}>
            <div className={style.filters}>
                <div>
                    <SortFilter />
                </div>

                <div
                    className={style.filter_mobile__item}
                    onClick={() => setShow(true)}
                >
                    <SlidersHorizontal />
                    <span>Фильтры</span>
                </div>

                <AnimatePresenceComponent>
                    {isShow && (
                        <ModalMotion
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            closeButton={false}
                            onClose={() => setShow(false)}
                            className={style.component_modal}
                        >
                            <div
                                ref={ref}
                                className={style.component_modal__wrap}
                            >
                                <div className={style.component_modal__title}>
                                    <div>Фильтры</div>

                                    <div
                                        className={style.component_modal__close}
                                        onClick={() => setShow(false)}
                                    >
                                        <X />
                                    </div>
                                </div>
                                <PriceFilter {...{ priceInfo }} />
                                <SizeFilter {...{ catalog }} />
                                <BrandFilter {...{ catalog }} />

                                <div
                                    className={
                                        style.component_modal__action_wrap
                                    }
                                >
                                    <Button
                                        className={
                                            style.component_modal__action
                                        }
                                        onClick={() => setShow(false)}
                                    >
                                        <Check />
                                        <div>Применить</div>
                                    </Button>
                                </div>
                            </div>
                        </ModalMotion>
                    )}
                </AnimatePresenceComponent>
            </div>
        </div>
    );
};

export default CatalogModalFilters;
