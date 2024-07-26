import { FC } from "react";
import style from "./filterActions.module.scss";
import Button from "@/components/common/Button/Button";

interface FilterActionsProps {
    onResetFilter: () => void;
    onSubmitFilter: () => void;
}

const FilterActions: FC<FilterActionsProps> = ({
    onResetFilter,
    onSubmitFilter
}) => {
    return (
        <div className={style.component}>
            <Button className={style.action_reset} onClick={onResetFilter}>
                Сбросить
            </Button>

            <Button className={style.action_submit} onClick={onSubmitFilter}>
                Применить
            </Button>
        </div>
    );
};

export default FilterActions;
