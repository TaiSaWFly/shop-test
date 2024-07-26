"use client";

import Button from "@/components/common/Button/Button";
import style from "./orderDeliveryComponent.module.scss";
import useOutsideClick from "@/hooks/useOutsideClick";
import OrderDeliveryModal from "../OrderDeliveryModal/OrderDeliveryModal";
import handleBodyScrollLock from "@/utils/handleBodyScrollLock";
import { FC, FormEvent, useEffect, useState } from "react";
import { ModalMotion } from "@/components/common/Modal/Modal";
import { AnimatePresenceComponent } from "@/lib/motion";
import TextField from "@/components/common/Fields/TextField/TextField";
import { IDeliveryPoint } from "@/ts/models/IDeliveryPoint";
import { MoveLeft } from "lucide-react";

interface OrderDeliveryComponentProps {
    onChange: (value: string) => void;
    error?: string;
}

const OrderDeliveryComponent: FC<OrderDeliveryComponentProps> = ({
    onChange,
    error
}) => {
    const { isShow, setShow, ref } = useOutsideClick(false);
    const [point, setPoint] = useState<IDeliveryPoint | null>(null);

    useEffect(() => {
        handleBodyScrollLock(isShow);
    }, [isShow]);

    useEffect(() => {
        point && onChange(point.address);
    }, [point]);

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
                    value={point?.address || ""}
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
                                    point={point}
                                    setPoint={setPoint}
                                    onClose={() => setShow(false)}
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
