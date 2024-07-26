import { FC, useState } from "react";
import style from "./orderDeliveryModal.module.scss";
import dynamic from "next/dynamic";
import OrderDeliverySearchPickUpPoint from "../OrderDeliverySearchPickUpPoint/OrderDeliverySearchPickUpPoint";
import OrderDeliveryPickUpPoint from "../OrderDeliveryPickUpPoint/OrderDeliveryPickUpPoint";
import { IDeliveryPoint } from "@/ts/models/IDeliveryPoint";
import { IGeocodePoint } from "@/ts/models/IGeocodePoint";

interface OrderDeliveryModalProps {
    point: IDeliveryPoint | null;
    setPoint: (point: IDeliveryPoint | null) => void;
    onClose: () => void;
}

const Map_dynamic = dynamic(() => import("../../../Map/MapComponent"), {
    ssr: false
});

const OrderDeliveryModal: FC<OrderDeliveryModalProps> = ({
    onClose,
    setPoint,
    point
}) => {
    const [pointPlace, setPointPlace] = useState<IGeocodePoint | null>(null);
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div
                className={
                    isOpen
                        ? `${style.delivery_controls} ${style.controls_open}`
                        : style.delivery_controls
                }
            >
                {point ? (
                    <OrderDeliveryPickUpPoint
                        point={point}
                        setActivePoint={setPoint}
                        onClose={onClose}
                    />
                ) : (
                    <OrderDeliverySearchPickUpPoint
                        isOpen={isOpen}
                        setOpen={setOpen}
                        setPointPlace={setPointPlace}
                    />
                )}
            </div>

            <div className={style.delivery_map}>
                <Map_dynamic
                    activePoint={point}
                    setActivePoint={setPoint}
                    pointPlace={pointPlace}
                />
            </div>
        </>
    );
};

export default OrderDeliveryModal;
