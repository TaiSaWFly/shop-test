import { FC, useEffect, useState } from "react";
import style from "./brandFilter.module.scss";
import ComponentBrandFilter from "./ComponentBrandFilter";
import FilterActions from "../FilterActions/FilterActions";
import { initialStateBrandFilter } from "@/data/initialState.data";
import { useAppSelector } from "@/hooks/reduxHooks/reduxHooks";
import { useActions } from "@/hooks/reduxHooks/useActions";
import { BrandFilterDataType, FormChangeArgsType } from "@/ts/types/app.types";
import { IBrandProduct } from "@/ts/models/IBrandProduct";

const BrandsFilterModal: FC<{
    setShow: () => void;
    isShow: boolean;
    brandsData: IBrandProduct[];
}> = ({ setShow, isShow, brandsData }) => {
    const { brand } = useAppSelector((state) => state.filter);
    const { setBrand } = useActions();
    const [brandName, setBrandName] = useState<BrandFilterDataType>(brand);

    useEffect(() => {
        if (!isShow) {
            setBrand(brandName);
        }
    }, [brandName]);

    const handleChange = (target: FormChangeArgsType<string, boolean>) => {
        setBrandName(target.value ? target.name : "");
    };

    const handleResetFilter = () => {
        setBrandName(initialStateBrandFilter);
    };

    const handleSubmitFilter = () => {
        setBrand(brandName);
        setShow();
    };

    const activeBrand =
        brandName !== ""
            ? brandsData.filter((brand) => brand.brand_name === brandName)
            : brandsData;

    return (
        <>
            <div>
                <ComponentBrandFilter
                    className={style.component_filter__mobile}
                    brandsData={activeBrand}
                    brandName={brandName}
                    onChange={handleChange}
                />
            </div>

            <FilterActions
                onResetFilter={handleResetFilter}
                onSubmitFilter={handleSubmitFilter}
            />
        </>
    );
};

export default BrandsFilterModal;
