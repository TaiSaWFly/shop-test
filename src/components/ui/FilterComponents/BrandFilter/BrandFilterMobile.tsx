import { FC, useEffect, useState } from "react";
import style from "./brandFilter.module.scss";
import { shemaCatalogBrands } from "@/data/brand.data/shemaCatalog.brands";
import { useAppSelector } from "@/hooks/reduxHooks/reduxHooks";
import { useActions } from "@/hooks/reduxHooks/useActions";
import { IBrandProduct } from "@/ts/models/IBrandProduct";
import { BrandFilterProps } from "./BrandFilter";
import useOutsideClick from "@/hooks/useOutsideClick";
import { X } from "lucide-react";
import { initialStateBrandFilter } from "@/data/initialState.data";
import handleBodyScrollLock from "@/utils/handleBodyScrollLock";
import { AnimatePresenceComponent } from "@/lib/motion";
import { ModalMotion } from "@/components/common/Modal/Modal";
import BrandsFilterModal from "./BrandsFilterModal";

const BrandFilterMobile: FC<BrandFilterProps> = ({ catalog }) => {
    const { brand } = useAppSelector((state) => state.filter);
    const { setBrand } = useActions();
    const { isShow, setShow, ref } = useOutsideClick(false);
    const [brandsData, setBrandsData] = useState<IBrandProduct[]>([]);

    useEffect(() => {
        setBrandsData(shemaCatalogBrands[catalog]);
    }, [catalog]);

    useEffect(() => {
        handleBodyScrollLock(isShow);
    }, [isShow]);

    const handleResetFilter = () => {
        setBrand(initialStateBrandFilter);
    };

    if (brandsData.length === 0) return null;

    return (
        <div className={style.component_mobile}>
            {!!brand ? (
                <div className={style.component_mobile__info_wrap}>
                    <div
                        className={style.component_mobile__info}
                        onClick={() => setShow(true)}
                    >
                        <div>{brand}</div>
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
                    <div>Бренд</div>
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
                            <BrandsFilterModal
                                {...{
                                    isShow,
                                    setShow: () => setShow(false),
                                    brandsData
                                }}
                            />
                        </div>
                    </ModalMotion>
                )}
            </AnimatePresenceComponent>
        </div>
    );
};

export default BrandFilterMobile;
