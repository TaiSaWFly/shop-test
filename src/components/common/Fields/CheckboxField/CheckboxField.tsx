import { FormChangeArgsType } from "@/ts/types/app.types";
import { ChangeEvent, FC } from "react";
import style from "./checkboxField.module.scss";

interface CheckboxFieldProps {
    name: string;
    value: string;
    checked: boolean;
    className?: string;
    error?: string;
    onChange: (target: FormChangeArgsType<string, boolean>) => void;
}

const CheckboxField: FC<CheckboxFieldProps> = ({
    name,
    value,
    checked,
    className,
    error,
    onChange
}) => {
    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        onChange({ name: target.name, value: target.checked });
    };

    return (
        <div className={className}>
            <label className={style.label}>
                <input
                    {...{ id: name, name, type: "checkbox", value, checked }}
                    onChange={handleChange}
                />

                <span className={style.box}></span>
                <span className={style.value}>{value}</span>
            </label>

            {error && <div>{error}</div>}
        </div>
    );
};

export default CheckboxField;
