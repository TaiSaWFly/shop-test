import {
    forwardRef,
    ForwardRefExoticComponent,
    PropsWithChildren,
    RefAttributes
} from "react";

interface ButtonProps {
    className?: string;
    disabled?: boolean;
    onClick?: (e?: any) => void;
}

interface ButtonCompnent
    extends ForwardRefExoticComponent<
        PropsWithChildren<ButtonProps> & RefAttributes<HTMLButtonElement>
    > {}

const Button: ButtonCompnent = forwardRef(
    ({ className, children, onClick, disabled }, ref) => {
        return (
            <button
                {...{
                    ref,
                    onClick,
                    className,
                    disabled
                }}
            >
                {children}
            </button>
        );
    }
);

export default Button;
