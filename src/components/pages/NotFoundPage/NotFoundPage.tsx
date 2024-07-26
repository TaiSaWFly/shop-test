import { FC } from "react";
import style from "./notFoundPage.module.scss";
import ComponentContainer from "@/components/common/ComponentContainer/ComponentContainer";

const NotFoundPageComponent: FC = () => {
    return (
        <div className={style.component}>
            <ComponentContainer>
                <div className={style.not_found}>
                    <div>Возникла ошибка 404</div>
                    <div>Страница с таким адресом</div>
                    <div>Не найдена</div>
                </div>
            </ComponentContainer>
        </div>
    );
};

export default NotFoundPageComponent;
