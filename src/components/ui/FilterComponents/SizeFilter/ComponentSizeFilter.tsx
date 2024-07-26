import { FC } from "react";
import style from "./sizeFilter.module.scss";
import { ISizeProduct } from "@/ts/models/ISizeProduct";
import { SizeFilterDataType } from "@/ts/types/app.types";
import RadioField from "@/components/common/Fields/RadioField/RadioField";

export interface ComponentSizeFilterProps {
    className: string;
    sizesData: ISizeProduct[];
    sizeName: SizeFilterDataType;
    onChange: (value: string) => void;
}

const ComponentSizeFilter: FC<ComponentSizeFilterProps> = ({
    className,
    sizesData,
    sizeName,
    onChange
}) => {
    return (
        <div className={className}>
            <div className={style.title}>Размер</div>

            <div className={style.description}>
                <span>EU</span>
            </div>

            <div className={style.component_field}>
                {sizesData.map((size, i) => (
                    <div key={size.size + i}>
                        <RadioField
                            className={style.field}
                            name="size"
                            value={size.size}
                            checked={size.size === sizeName}
                            onChange={onChange}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ComponentSizeFilter;
