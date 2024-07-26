"use client";

import { navigateData } from "@/data/navigate.data";
import style from "./orderCost.module.scss";
import Button from "@/components/common/Button/Button";
import PriceView from "@/components/common/PriceView/PriceView";
import { useRouter } from "next/navigation";
import ArrowsIndicator from "@/components/common/ArrowsIndicator/ArrowsIndicator";
import TextField from "@/components/common/Fields/TextField/TextField";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { FormChangeArgsType } from "@/ts/types/app.types";

const OrderCost = () => {
    const router = useRouter();
    const [data, setData] = useState({ priceCost: "" });

    const handleChange = (target: FormChangeArgsType<string, string>) =>
        setData((prevStare) => ({
            ...prevStare,
            [target.name]: target.value.replace(/[^0-9]/g, "")
        }));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(data);
    };

    return (
        <section className={style.component}>
            <div className={style.component_wrap}>
                <div className={style.title}>
                    Рассчитать стоймость заказа прямо на сайте
                </div>

                <div className={style.cost_field__wrap}>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            className={style.cost_field}
                            name="priceCost"
                            value={data.priceCost}
                            maxLength={10}
                            onChange={handleChange}
                            placeholder="Цена на товар в юанях"
                        />
                    </form>
                </div>

                <ul className={style.action_list}>
                    {navigateData.map((nav, i) => (
                        <li key={i + nav.PAGE_NAME} className={style.list_item}>
                            <Button
                                className={style.action}
                                onClick={() =>
                                    router.push(
                                        `${nav.PAGE_URL}?catalog=${nav.PAGE_QUERY}`
                                    )
                                }
                            >
                                {nav.PAGE_NAME}
                            </Button>
                            <div
                                className={style.action_chevron}
                                onClick={() =>
                                    router.push(
                                        `${nav.PAGE_URL}?catalog=${nav.PAGE_QUERY}`
                                    )
                                }
                            >
                                <ArrowsIndicator />
                            </div>
                        </li>
                    ))}
                </ul>

                <div className={style.info_cost}>
                    <div className={style.info_price}>
                        Итоговая стоимость: {<PriceView price={3500} />}
                    </div>
                    <div className={style.info_delivery}>С учётом доставки</div>
                </div>

                <Button className={style.action_order}>
                    <div className={style.action_order__title}>
                        Сделать заказ
                    </div>
                    <div className={style.action_order__chevron}>
                        <ChevronRight height={15} width={15} />
                    </div>
                </Button>
            </div>
        </section>
    );
};

export default OrderCost;
