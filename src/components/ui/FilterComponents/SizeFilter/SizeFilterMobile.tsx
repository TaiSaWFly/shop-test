import { FC, useEffect, useState } from "react";
import style from "./sizeFilter.module.scss";
import { SizeFilterProps } from "./SizeFilter";
import { initialStateSizeFilter } from "@/data/initialState.data";
import { shemaCatalogSizes } from "@/data/sizes.data/shemaCatalog.sizes";
import { useAppSelector } from "@/hooks/reduxHooks/reduxHooks";
import { useActions } from "@/hooks/reduxHooks/useActions";
import { ISizeProduct } from "@/ts/models/ISizeProduct";
import { SizeFilterDataType } from "@/ts/types/app.types";
import useOutsideClick from "@/hooks/useOutsideClick";
import { X } from "lucide-react";
import { AnimatePresenceComponent } from "@/lib/motion";
import { ModalMotion } from "@/components/common/Modal/Modal";
import FilterActions from "../FilterActions/FilterActions";
import handleBodyScrollLock from "@/utils/handleBodyScrollLock";
import SizesView from "@/components/common/SizesView/SizesView";

const SizeFilterMobile: FC<SizeFilterProps> = ({ catalog }) => {
    const { isShow, setShow, ref, refStopPropagation } = useOutsideClick(false);
    const { size } = useAppSelector((state) => state.filter);
    const { setSize } = useActions();

    const [sizesData, setSizesData] = useState<ISizeProduct[]>([]);
    const [sizeName, setSizeName] = useState<SizeFilterDataType>(size);

    useEffect(() => {
        setSizesData(shemaCatalogSizes[catalog]);
    }, [catalog]);

    useEffect(() => {
        if (!isShow) {
            setSize(sizeName);
        }
    }, [sizeName]);

    useEffect(() => {
        setSizeName(size);
    }, [size]);

    useEffect(() => {
        handleBodyScrollLock(isShow);
        if (!isShow) {
            setSizeName(size);
        }
    }, [isShow]);

    const handleChange = (value: string) => setSizeName(value);

    const handleResetFilter = () => {
        setSizeName(initialStateSizeFilter);
    };

    const handleSubmitFilter = () => {
        setSize(sizeName);
        setShow(false);
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
                            <div>
                                <div className={style.title}>Размер</div>
                                <span className={style.subtitle}>EU</span>

                                <SizesView
                                    className={style.component_filter__mobile}
                                    sizeName={sizeName}
                                    sizes={sizesData}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <FilterActions
                                    refStopPropagation={refStopPropagation}
                                    onResetFilter={handleResetFilter}
                                    onSubmitFilter={handleSubmitFilter}
                                />
                            </div>{" "}
                        </div>
                    </ModalMotion>
                )}
            </AnimatePresenceComponent>
        </div>
    );
};

export default SizeFilterMobile;
