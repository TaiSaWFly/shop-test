import { FC } from "react";
import style from "./brandFilter.module.scss";
import { IBrandProduct } from "@/ts/models/IBrandProduct";
import CheckboxField from "@/components/common/Fields/CheckboxField/CheckboxField";
import { BrandFilterDataType, FormChangeArgsType } from "@/ts/types/app.types";

interface ComponentBrandFilterProps {
    className: string;
    brandsData: IBrandProduct[];
    brandName: BrandFilterDataType;
    onChange: (target: FormChangeArgsType<string, boolean>) => void;
}

const ComponentBrandFilter: FC<ComponentBrandFilterProps> = ({
    className,
    brandsData,
    brandName,
    onChange
}) => {
    return (
        <div className={className}>
            <div className={style.title}>Бренды</div>

            <ul className={style.fields_wrap}>
                {brandsData.map((brand, i) => (
                    <li
                        key={brand.brand_name + i}
                        className={style.fields_item}
                    >
                        <CheckboxField
                            className={style.field}
                            name={brand.brand_name}
                            value={brand.brand_name}
                            checked={brand.brand_name === brandName}
                            onChange={onChange}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ComponentBrandFilter;
