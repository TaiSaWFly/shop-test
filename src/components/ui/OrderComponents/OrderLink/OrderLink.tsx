import Link from "next/link";
import style from "./orderLink.module.scss";
import { APP_PAGES } from "@/constants/page-url.config.constants";
import { ShoppingCart } from "lucide-react";

const OrderLink = () => {
    return (
        <div className={style.component}>
            <Link href={APP_PAGES.ORDER} className={style.link}>
                <ShoppingCart />
            </Link>
        </div>
    );
};

export default OrderLink;
