"use client";

import { FC, useEffect, useState } from "react";
import style from "./sizeFilter.module.scss";
import { SizeFilterProps } from "./SizeFilter";
import { initialStateSizeFilter } from "@/data/initialState.data";
import { shemaCatalogSizes } from "@/data/sizes.data/shemaCatalog.sizes";
import { useAppSelector } from "@/hooks/reduxHooks/reduxHooks";
import { useActions } from "@/hooks/reduxHooks/useActions";
import { ISizeProduct } from "@/ts/models/ISizeProduct";
import useOutsideClick from "@/hooks/useOutsideClick";
import { X } from "lucide-react";
import { AnimatePresenceComponent } from "@/lib/motion";
import { ModalMotion } from "@/components/common/Modal/Modal";
import handleBodyScrollLock from "@/utils/handleBodyScrollLock";
import SizeFilterModal from "./SizeFilterModal";

const SizeFilterMobile: FC<SizeFilterProps> = ({ catalog }) => {
    const { isShow, setShow, ref } = useOutsideClick(false);
    const { size } = useAppSelector((state) => state.filter);
    const { setSize } = useActions();
    const [sizesData, setSizesData] = useState<ISizeProduct[]>([]);

    useEffect(() => {
        setSizesData(shemaCatalogSizes[catalog]);
    }, [catalog]);

    useEffect(() => {
        handleBodyScrollLock(isShow);
    }, [isShow]);

    const handleResetFilter = () => {
        setSize(initialStateSizeFilter);
    };

    if (sizesData.length === 0) return null;

    return (
        <div className={style.component_mobile}>
            {!!size ? (
                <div className={style.component_mobile__info_wrap}>
                    <div
                        className={style.component_mobile__info}
                        onClick={() => setShow(true)}
                    >
                        <div>Размер {size} EU</div>
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
                    <div>Размер</div>
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
                            <SizeFilterModal
                                {...{
                                    isShow,
                                    setShow: () => setShow(false),
                                    sizesData
                                }}
                            />
                        </div>
                    </ModalMotion>
                )}
            </AnimatePresenceComponent>
        </div>
    );
};

export default SizeFilterMobile;
