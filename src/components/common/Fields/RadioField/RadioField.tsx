import { ChangeEvent, FC } from "react";
import style from "./radioField.module.scss";

interface RadioFieldProps {
    name: string;
    value: string;
    checked: boolean;
    className?: string;
    error?: string;
    onChange: (value: string) => void;
}

const RadioField: FC<RadioFieldProps> = ({
    name,
    value,
    checked,
    className,
    error,
    onChange
}) => {
    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        onChange(target.value);
    };

    return (
        <div className={className}>
            <label className={style.label}>
                <input
                    {...{
                        id: name,
                        name,
                        type: "radio",
                        value,
                        checked,
                        onChange: handleChange
                    }}
                />

                <span className={style.radio}></span>
                <span className={style.value}>{value}</span>
            </label>

            {error && <div>{error}</div>}
        </div>
    );
};

export default RadioField;
