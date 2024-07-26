import { MapPin, MoveLeft, History } from "lucide-react";
import style from "./orderDeliveryPickUpPoint.module.scss";
import Button from "@/components/common/Button/Button";
import { FC, FormEvent } from "react";
import { IDeliveryPoint } from "@/ts/models/IDeliveryPoint";

interface OrderDeliveryPickUpPointProps {
    point: IDeliveryPoint;
    setActivePoint: (point: IDeliveryPoint | null) => void;
    onClose: () => void;
}

const OrderDeliveryPickUpPoint: FC<OrderDeliveryPickUpPointProps> = ({
    point,
    setActivePoint,
    onClose
}) => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onClose();
    };

    return (
        <div className={style.component}>
            <div>
                <div className={style.title}>
                    <div
                        className={style.title_icon}
                        onClick={() => setActivePoint(null)}
                    >
                        <MoveLeft />
                    </div>
                    <div>Пункт выдачи заказов СДЕК</div>
                </div>

                <div className={style.address}>
                    <div className={style.address_icon}>
                        <MapPin />
                    </div>
                    <div>{point.address}</div>
                </div>

                <div className={style.work_time}>
                    <div className={style.work_time_icon}>
                        <History />
                    </div>
                    <div>{point.workTime}</div>
                </div>
            </div>

            <Button className={style.action} onClick={handleSubmit}>
                Заберу здесь
            </Button>
        </div>
    );
};

export default OrderDeliveryPickUpPoint;
