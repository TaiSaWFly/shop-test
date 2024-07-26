import TextField from "@/components/common/Fields/TextField/TextField";
import useGeocodePoint from "@/hooks/useGeocodePoint";
import { FormChangeArgsType } from "@/ts/types/app.types";
import { FC, useState } from "react";
import style from "./orderDeliverySearchPickUpPoint.module.scss";
import { IGeocodePoint } from "@/ts/models/IGeocodePoint";

interface OrderDeliverySearchPickUpPointProps {
    setPointPlace: (pointPlace: IGeocodePoint | null) => void;
    setOpen: (isOpen: boolean) => void;
    isOpen: boolean;
}

const OrderDeliverySearchPickUpPoint: FC<
    OrderDeliverySearchPickUpPointProps
> = ({ setPointPlace, setOpen, isOpen }) => {
    const [searchAddres, setSearchAddres] = useState({ addres: "" });
    const { geocodePoints } = useGeocodePoint(searchAddres.addres);

    const handleChange = (target: FormChangeArgsType<string, string>) => {
        setSearchAddres((prevStare) => ({
            ...prevStare,
            [target.name]: target.value
        }));
    };

    return (
        <div className={style.component}>
            <div className={style.title}>Выберите пункт выдачи</div>

            <div>
                <div className={style.info}>Пункт выдачи</div>
            </div>

            <div>
                <TextField
                    className={style.component_field}
                    name="addres"
                    value={searchAddres.addres}
                    placeholder="Найти адрес"
                    onChange={handleChange}
                    onClick={() => setOpen(true)}
                />
            </div>

            <ul
                className={
                    isOpen
                        ? `${style.result_list} ${style.list_open}`
                        : style.result_list
                }
            >
                {geocodePoints &&
                    geocodePoints.map((data, i) => (
                        <li
                            key={data.name + i}
                            className={style.result_item}
                            onClick={() => {
                                setOpen(false);
                                setPointPlace(data);
                            }}
                        >
                            <div className={style.item_name}>{data.name}</div>
                            <div className={style.item_description}>
                                {data.description}
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default OrderDeliverySearchPickUpPoint;
