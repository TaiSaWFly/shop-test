"use client";

import { FC, useEffect, useState } from "react";
import style from "./deliveryFilter.module.scss";
import RadioField from "@/components/common/Fields/RadioField/RadioField";
import { IDeliveryProducts } from "@/ts/models/IDeliveryProducts";
import FilterActions from "../FilterActions/FilterActions";
import { initialStateDiliveryFilter } from "@/data/initialState.data";
import { useAppSelector } from "@/hooks/reduxHooks/reduxHooks";
import { useActions } from "@/hooks/reduxHooks/useActions";
import { DeliveryFilterDataType } from "@/ts/types/app.types";

const DeliveryFilterModal: FC<{
    deliveryData: IDeliveryProducts[];
    setShow: () => void;
    isShow: boolean;
}> = ({ deliveryData, setShow, isShow }) => {
    const { delivery } = useAppSelector((state) => state.filter);
    const { setDilivery } = useActions();

    const [deliveryName, setDeliveryName] = useState(delivery?.label || "");
    const [activeDelivery, setActiveDelivery] =
        useState<DeliveryFilterDataType>(delivery);
    const handleChange = (value: string) => setDeliveryName(value);

    useEffect(() => {
        const findDelivery =
            deliveryData.find((data) => data.label === deliveryName) || null;
        setActiveDelivery(findDelivery);
    }, [deliveryName]);

    useEffect(() => {
        if (!isShow) {
            setDilivery(activeDelivery);
        }
    }, [activeDelivery]);

    const handleResetFilter = () => {
        setDeliveryName("");
        setActiveDelivery(initialStateDiliveryFilter);
    };

    const handleSubmitFilter = () => {
        setDilivery(activeDelivery);
        setShow();
    };

    return (
        <>
            <div>
                <div className={style.title}>Сроки доставки</div>

                <ul>
                    {deliveryData.map((data, i) => (
                        <li
                            key={data.label + i}
                            className={style.delivery_item}
                        >
                            <RadioField
                                name="delivery"
                                value={data.label}
                                checked={deliveryName === data.label}
                                onChange={handleChange}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <FilterActions
                    onResetFilter={handleResetFilter}
                    onSubmitFilter={handleSubmitFilter}
                />
            </div>
        </>
    );
};

export default DeliveryFilterModal;
