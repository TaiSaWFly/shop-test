import { FC } from "react";
import PriceSplitView from "./PriceSplitView";

interface PriceViewProps {
    price: number | string;
}
interface PriceViewComponents {
    Split: FC<PriceViewProps>;
}

const PriceView: FC<PriceViewProps> & PriceViewComponents = ({ price }) => {
    return <span>{price.toLocaleString("ru-RU")} &#8381;</span>;
};

PriceView.Split = PriceSplitView;
export default PriceView;
