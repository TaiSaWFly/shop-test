import style from "./header.module.scss";
import ComponentContainer from "@/components/common/ComponentContainer/ComponentContainer";
import { APP_PAGES } from "@/constants/page-url.config.constants";
import Link from "next/link";
import Navigate from "../Navigate/Navigate";
import OrderLink from "../../OrderComponents/OrderLink/OrderLink";
import FavoriteLink from "../../FavoriteComponents/FavoriteLink/FavoriteLink";
import { HopOff } from "lucide-react";

const Header = () => {
    return (
        <header className={style.component}>
            <ComponentContainer>
                <div className={style.component_wrap}>
                    <div className={style.logo}>
                        <Link href={APP_PAGES.MAIN}>
                            <HopOff />
                        </Link>
                    </div>

                    <div className={style.component_nav}>
                        <Navigate />
                    </div>

                    <div className={style.component_group}>
                        <OrderLink />
                        <FavoriteLink />
                    </div>
                </div>
            </ComponentContainer>
        </header>
    );
};

export default Header;
