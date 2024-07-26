import { X } from "lucide-react";
import style from "./deliveryFilter.module.scss";
import useOutsideClick from "@/hooks/useOutsideClick";
import { AnimatePresenceComponent } from "@/lib/motion";
import { ModalMotion } from "@/components/common/Modal/Modal";
import { deliveryData } from "@/data/delivery.data/delivery.data";
import RadioField from "@/components/common/Fields/RadioField/RadioField";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/hooks/reduxHooks/reduxHooks";
import { useActions } from "@/hooks/reduxHooks/useActions";
import { DeliveryFilterDataType } from "@/ts/types/app.types";
import FilterActions from "../FilterActions/FilterActions";
import handleBodyScrollLock from "@/utils/handleBodyScrollLock";
import { initialStateDiliveryFilter } from "@/data/initialState.data";
import DeliveryFilterModal from "./DeliveryFilterModal";

const DeliveryFilter = () => {
    const { delivery } = useAppSelector((state) => state.filter);
    const { setDilivery } = useActions();
    const { isShow, setShow, ref } = useOutsideClick(false);

    useEffect(() => {
        handleBodyScrollLock(isShow);
    }, [isShow]);

    const handleResetFilter = () => {
        setDilivery(initialStateDiliveryFilter);
    };

    return (
        <div className={style.component}>
            {!!delivery ? (
                <div className={style.component_mobile__info_wrap}>
                    <div
                        className={style.component_mobile__info}
                        onClick={() => setShow(true)}
                    >
                        <div>{delivery.short_label}</div>
                    </div>

                    <div
                        className={style.component_mobile__info_icon}
                        onClick={handleResetFilter}
                    >
                        <X />
                    </div>
                </div>
            ) : (
                <div
                    className={`${style.component_mobile__info} ${style.empty}`}
                    onClick={() => setShow(true)}
                >
                    <div>Срок доставки</div>
                </div>
            )}

            <AnimatePresenceComponent>
                {isShow && (
                    <ModalMotion
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClose={() => setShow(false)}
                        className={style.component_modal}
                    >
                        <div ref={ref} className={style.component_filter__wrap}>
                            <DeliveryFilterModal
                                {...{
                                    isShow,
                                    setShow: () => setShow(false),
                                    deliveryData
                                }}
                            />
                        </div>
                    </ModalMotion>
                )}
            </AnimatePresenceComponent>
        </div>
    );
};

export default DeliveryFilter;
