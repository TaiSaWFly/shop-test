"use client";

import Button from "@/components/common/Button/Button";
import style from "./orderDeliveryComponent.module.scss";
import useOutsideClick from "@/hooks/useOutsideClick";
import OrderDeliveryModal from "../OrderDeliveryModal/OrderDeliveryModal";
import handleBodyScrollLock from "@/utils/handleBodyScrollLock";
import { FC, FormEvent, useEffect } from "react";
import { ModalMotion } from "@/components/common/Modal/Modal";
import { AnimatePresenceComponent } from "@/lib/motion";
import TextField from "@/components/common/Fields/TextField/TextField";
import { MoveLeft } from "lucide-react";

interface OrderDeliveryComponentProps {
    onChange: (value: string) => void;
    value: string;
    error?: string;
}

const OrderDeliveryComponent: FC<OrderDeliveryComponentProps> = ({
    onChange,
    value,
    error
}) => {
    const { isShow, setShow, ref } = useOutsideClick(false);

    useEffect(() => {
        handleBodyScrollLock(isShow);
    }, [isShow]);

    return (
        <div className={style.component}>
            <div className={style.title}>Как получать</div>
            <Button
                onClick={(e: FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    setShow(true);
                }}
                className={style.action}
            >
                В пункте выдачи
            </Button>

            <div>
                <TextField
                    className={style.component_field}
                    name={"addressPoint"}
                    value={value}
                    placeholder={"Выбрать пунк выдачи"}
                    error={error}
                    onClick={() => setShow(true)}
                />
            </div>

            <div>
                <AnimatePresenceComponent>
                    {isShow && (
                        <ModalMotion
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClose={() => setShow(false)}
                            className={style.component_modal}
                        >
                            <div
                                ref={ref}
                                className={style.component_modal__wrap}
                            >
                                <OrderDeliveryModal
                                    {...{
                                        onChange,
                                        onClose: () => setShow(false)
                                    }}
                                />

                                <div
                                    className={style.action_close}
                                    onClick={() => setShow(false)}
                                >
                                    <div>
                                        <MoveLeft />
                                    </div>
                                </div>
                            </div>
                        </ModalMotion>
                    )}
                </AnimatePresenceComponent>
            </div>
        </div>
    );
};

export default OrderDeliveryComponent;
