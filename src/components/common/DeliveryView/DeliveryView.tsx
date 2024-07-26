import { FC } from "react";
import renderPhrase from "@/utils/renderPhrase";

const DeliveryView: FC<{ days: string | number }> = ({ days }) => {
    return (
        <div>
            {Number(days) === 0
                ? "сегодня"
                : `${days} ${renderPhrase(Number(days), {
                      nominativeCase: "день",
                      genitiveCase: "дня",
                      instrumentalCase: "дней"
                  })}`}
        </div>
    );
};

export default DeliveryView;
