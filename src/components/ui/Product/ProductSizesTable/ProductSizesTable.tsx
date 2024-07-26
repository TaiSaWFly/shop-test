"use client";

import { FC, useEffect, useState } from "react";
import style from "./productSizesTable.module.scss";
import { ISizeProduct, ISizeShoes } from "@/ts/models/ISizeProduct";
import { createColumnHelper } from "@tanstack/react-table";
import Table from "@/components/common/TableComponents/Table/Table";
import useOutsideClick from "@/hooks/useOutsideClick";
import { ModalMotion } from "@/components/common/Modal/Modal";
import handleBodyScrollLock from "@/utils/handleBodyScrollLock";
import { AnimatePresenceComponent } from "@/lib/motion";
import { CatalogType } from "@/ts/models/IProduct";
import { shemaCatalogSizes } from "@/data/sizes.data/shemaCatalog.sizes";

const ProductSizesTable: FC<{ catalog: CatalogType }> = ({ catalog }) => {
    const { isShow, setShow, ref } = useOutsideClick(false);
    const column = createColumnHelper<
        ISizeShoes | (ISizeProduct & ISizeShoes)
    >();
    const [sizesData, setSizesData] = useState<ISizeProduct[]>([]);

    useEffect(() => {
        setSizesData(shemaCatalogSizes[catalog]);
    }, []);

    useEffect(() => {
        handleBodyScrollLock(isShow);
    }, [isShow]);

    const columns =
        catalog === "shoes"
            ? [
                  column.display({
                      id: "size_country",
                      header: () => "EU",
                      cell: ({ row }) => <div>{row.original.size}</div>
                  }),
                  column.display({
                      id: "foot_length",
                      header: () => "Длина стопы",
                      cell: ({ row }) => <div>{row.original.foot_length}</div>
                  })
              ]
            : [
                  column.display({
                      id: "size_country",
                      header: () => "EU",
                      cell: ({ row }) => <div>{row.original.size}</div>
                  })
              ];

    return (
        <div className={style.component}>
            <div className={style.sizes_table} onClick={() => setShow(true)}>
                Taблица размеров
            </div>

            <AnimatePresenceComponent>
                {isShow && (
                    <ModalMotion
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClose={() => setShow(false)}
                        className={style.component_modal__wrap}
                    >
                        <div className={style.component_modal} ref={ref}>
                            <Table
                                data={sizesData as any}
                                columns={columns}
                                className={style.size_table}
                                title="Таблица размеров"
                            />

                            {catalog !== "accessory" && catalog !== "cloth" && (
                                <>
                                    <video
                                        className={style.video}
                                        width="390"
                                        height="219.375"
                                        src="https://cdn.unicorngo.ru/videos/how-to-measure-size.mp4#t=0.01"
                                        preload="auto"
                                        controls={true}
                                    />
                                    <div className={style.description}>
                                        <div
                                            className={style.description_title}
                                        >
                                            Как определить размер
                                        </div>

                                        <div
                                            className={
                                                style.description_content
                                            }
                                        >
                                            Поставьте ногу на чистый лист
                                            бумаги. Измерьте расстояние от
                                            основания пятки до крайней точки
                                            самого длинного пальца. Измерьте обе
                                            стопы и используйте наибольшее
                                            значение для определения размера.
                                            Стелька длиннее стопы на величину
                                            функционального припуска 0,5–1,5 см.
                                            При выборе размера ориентируйтесь на
                                            длину стопы.
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </ModalMotion>
                )}
            </AnimatePresenceComponent>
        </div>
    );
};

export default ProductSizesTable;
