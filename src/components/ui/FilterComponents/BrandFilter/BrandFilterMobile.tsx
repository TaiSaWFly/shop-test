import { FC, useEffect, useState } from "react";
import style from "./brandFilter.module.scss";
import { shemaCatalogBrands } from "@/data/brand.data/shemaCatalog.brands";
import { useAppSelector } from "@/hooks/reduxHooks/reduxHooks";
import { useActions } from "@/hooks/reduxHooks/useActions";
import { IBrandProduct } from "@/ts/models/IBrandProduct";
import { BrandFilterDataType, FormChangeArgsType } from "@/ts/types/app.types";
import { BrandFilterProps } from "./BrandFilter";
import useOutsideClick from "@/hooks/useOutsideClick";
import { X } from "lucide-react";
import { initialStateBrandFilter } from "@/data/initialState.data";
import handleBodyScrollLock from "@/utils/handleBodyScrollLock";
import { AnimatePresenceComponent } from "@/lib/motion";
import { ModalMotion } from "@/components/common/Modal/Modal";
import FilterActions from "../FilterActions/FilterActions";
import ComponentBrandFilter from "./ComponentBrandFilter";

const BrandFilterMobile: FC<BrandFilterProps> = ({ catalog }) => {
    const { brand } = useAppSelector((state) => state.filter);
    const { setBrand } = useActions();
    const { isShow, setShow, ref, refStopPropagation } = useOutsideClick(false);

    const [brandsData, setBrandsData] = useState<IBrandProduct[]>([]);
    const [brandName, setBrandName] = useState<BrandFilterDataType>(brand);

    useEffect(() => {
        setBrandsData(shemaCatalogBrands[catalog]);
    }, [catalog]);

    useEffect(() => {
        if (!isShow) {
            setBrand(brandName);
        }
    }, [brandName]);

    useEffect(() => {
        setBrandName(brand);
    }, [brand]);

    useEffect(() => {
        handleBodyScrollLock(isShow);
        if (!isShow) {
            setBrandName(brand);
        }
    }, [isShow]);

    const handleChange = (target: FormChangeArgsType<string, boolean>) => {
        setBrandName(target.value ? target.name : "");
    };

    const handleResetFilter = () => {
        setBrandName(initialStateBrandFilter);
    };

    const handleSubmitFilter = () => {
        setBrand(brandName);
        setShow(false);
    };

    if (brandsData.length === 0) return null;

    const activeBrand =
        brandName !== ""
            ? brandsData.filter((brand) => brand.brand_name === brandName)
            : brandsData;

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
                            <div>
                                <ComponentBrandFilter
                                    className={style.component_filter__mobile}
                                    brandsData={activeBrand}
                                    brandName={brandName}
                                    onChange={handleChange}
                                />
                            </div>

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

export default BrandFilterMobile;
