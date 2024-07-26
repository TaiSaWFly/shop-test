import { APP_PAGES } from "@/constants/page-url.config.constants";
import { Heart } from "lucide-react";
import Link from "next/link";
import style from "./favoriteLink.module.scss";

const FavoriteLink = () => {
    return (
        <div className={style.component}>
            <Link href={APP_PAGES.FAVORITE} className={style.link}>
                <Heart />
            </Link>
        </div>
    );
};

export default FavoriteLink;
