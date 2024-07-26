import {
    ForwardRefExoticComponent,
    PropsWithChildren,
    RefAttributes,
    forwardRef
} from "react";
import style from "./modal.module.scss";
import { motions } from "@/lib/motion";
import { X } from "lucide-react";

interface ModalProps {
    onClose: () => void;
    className?: string;
    closeButton?: boolean;
}

interface ModalComponent
    extends ForwardRefExoticComponent<
        PropsWithChildren<ModalProps> & RefAttributes<HTMLDivElement>
    > {}

const Modal: ModalComponent = forwardRef(
    ({ children, onClose, className, closeButton }, ref) => {
        return (
            <div className={style.component} ref={ref}>
                <div
                    className={
                        className
                            ? `${style.modal_content} ${className}`
                            : style.modal_content
                    }
                >
                    {closeButton === undefined ? (
                        <div className={style.modal_close} onClick={onClose}>
                            <X />
                        </div>
                    ) : closeButton ? (
                        <div className={style.modal_close} onClick={onClose}>
                            <X />
                        </div>
                    ) : null}

                    {children}
                </div>
            </div>
        );
    }
);

export const ModalMotion = motions(Modal);
export default Modal;
