import { BadgeCheck, Truck, Undo2 } from "lucide-react";
import ProductAdvantage from "./ProductAdvantage";
import style from "./productAdvantage.module.scss";

const ProductAdvantageComponent = () => {
    const advantagesData = [
        {
            title: "гарантия лучшей цены",
            icon: <BadgeCheck />,
            content:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,impedit consequuntur ab similique atque facilis mollitia afugiat rem quae. Quidem temporibus suscipit odit officiaarchitecto dolore cupiditate fuga iure!"
        },
        {
            title: "способы доставки и оплаты",
            icon: <Truck />,
            content:
                "Lorem Cum,impedit consequuntur ab similique atque facilis mollitia afugiat rem quae. Quidem temporibus suscipit odit officiaarchitecto dolore cupiditate fuga iure!"
        },
        {
            title: "обмен и возврат",
            icon: <Undo2 />,
            content:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. "
        }
    ];

    return (
        <div className={style.component}>
            {advantagesData.map((data, i) => (
                <ProductAdvantage
                    key={data.title + i}
                    title={data.title}
                    icon={data.icon}
                    content={data.content}
                />
            ))}
        </div>
    );
};

export default ProductAdvantageComponent;
