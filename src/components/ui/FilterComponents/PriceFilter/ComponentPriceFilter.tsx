import { FC } from "react";
import style from "./priceFilter.module.scss";
import TextField from "@/components/common/Fields/TextField/TextField";
import { FormChangeArgsType, PriceFilterDataType } from "@/ts/types/app.types";

export interface ComponentPriceFilterProps {
    className: string;
    data: PriceFilterDataType;
    onChange: (target: FormChangeArgsType<string, string>) => void;
    priceFrom: number;
    priceTo: number;
}

const ComponentPriceFilter: FC<ComponentPriceFilterProps> = ({
    className,
    data,
    onChange,
    priceFrom,
    priceTo
}) => {
    return (
        <div className={className}>
            <div className={style.title}>
                Цена<span>, RUB</span>
            </div>
            <div className={style.fields_wrap}>
                <div className={style.component_field}>
                    <div className={style.lable}>от</div>
                    <TextField
                        className={style.field}
                        name="priceFrom"
                        value={data.priceFrom}
                        onChange={onChange}
                        placeholder={`${priceFrom.toLocaleString("ru-RU")} ₽`}
                    />
                </div>

                <div className={style.component_field}>
                    <div className={style.lable}>до</div>
                    <TextField
                        className={style.field}
                        name="priceTo"
                        value={data.priceTo}
                        onChange={onChange}
                        placeholder={`${priceTo.toLocaleString("ru-RU")} ₽`}
                    />
                </div>
            </div>
        </div>
    );
};

export default ComponentPriceFilter;
