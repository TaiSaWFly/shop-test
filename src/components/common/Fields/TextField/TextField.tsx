import { FormChangeArgsType } from "@/ts/types/app.types";
import { ChangeEvent, FC, HTMLInputTypeAttribute, memo } from "react";
import style from "./textField.module.scss";

interface TextFieldProps {
    name: string;
    value: string;
    placeholder: string;
    className?: string;
    type?: HTMLInputTypeAttribute;
    error?: string;
    maxLength?: number;
    onChange?: (target: FormChangeArgsType<string, string>) => void;
    onClick?: () => void;
}

const TextField: FC<TextFieldProps> = ({
    name,
    value,
    type = "text",
    placeholder,
    className,
    error,
    maxLength,
    onChange,
    onClick
}) => {
    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange({ name: target.name, value: target.value });
    };

    return (
        <div>
            <input
                className={className}
                {...{ name, type, value, placeholder, maxLength, onClick }}
                id={name}
                onChange={handleChange}
            />

            {error && <div className={style.error}>{error}</div>}
        </div>
    );
};

export default memo(TextField);
