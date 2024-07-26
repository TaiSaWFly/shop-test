"use client";

import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import style from "./paymentReceipt.module.scss";
import Image from "next/image";
import { OPLATA_REC } from "@/data/images.data";
import Button from "@/components/common/Button/Button";
import { formatFile } from "@/data/app.data";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { APP_PAGES } from "@/constants/page-url.config.constants";
import { useActions } from "@/hooks/reduxHooks/useActions";
import { initialStateOrderForm } from "@/data/initialState.data";
import { OrderFormType } from "@/ts/types/app.types";

const PaymentReceipt: FC<{ form: OrderFormType }> = ({ form }) => {
    const router = useRouter();
    const fileRef = useRef<HTMLInputElement | null>(null);
    const { setOrderForm } = useActions();

    const [isSubmit, setSubmit] = useState(false);
    const [isDragActive, setDragActive] = useState(false);
    const [receiptFile, setReceiptFile] = useState<FileReader["result"]>(null);
    const [typeError, setTypeError] = useState<string | null>(null);
    const [preview, setPreview] = useState<string | null>(null);

    const handleFile = (files: FileList | null) => {
        let selectedFile = files ? files[0] : null;

        if (selectedFile) {
            if (formatFile.some((f) => f === selectedFile.type)) {
                setTypeError(null);
                let reader = new FileReader();
                const previewUrl = URL.createObjectURL(selectedFile);
                setPreview(previewUrl);
                reader.readAsArrayBuffer(selectedFile);
                reader.onload = (e: ProgressEvent<FileReader>) =>
                    setReceiptFile(e.target?.result || null);
            } else {
                setTypeError("Загрузите квитанцию в формате изображения");
            }
        } else {
            setReceiptFile(null);
            setTypeError("Загрузите квитанцию в формате изображения");
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        handleFile(event.target.files);
    };

    const handleDrop = (event: React.DragEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleFile(event.dataTransfer.files);
        setDragActive(false);
    };

    const handleFileSubmit = () => {
        if (!receiptFile) {
            setTypeError("Загрузите квитанцию в формате изображения");
        } else {
            fileRef.current!.value = "";
            setSubmit(true);
            console.log("PaymentReceipt:", receiptFile);
            console.log("Order:", form);
        }
    };

    useEffect(() => {
        return () => {
            if (preview) {
                URL.revokeObjectURL(preview);
                setPreview(null);
            }
            setOrderForm(initialStateOrderForm);
        };
    }, []);

    useEffect(() => {
        let timeout: any;
        if (isSubmit) {
            timeout = setTimeout(() => {
                router.push(APP_PAGES.MAIN);
            }, 850);
        }

        return () => clearTimeout(timeout);
    }, [isSubmit]);

    return (
        <div className={style.component}>
            <div className={style.component_wrap}>
                <form
                    className={style.document_form}
                    onDragEnter={(e) => {
                        e.preventDefault();
                        setDragActive(true);
                    }}
                    onDragOver={(e) => {
                        e.preventDefault();
                        setDragActive(true);
                    }}
                    onDragLeave={(e) => {
                        e.preventDefault();
                        setDragActive(false);
                    }}
                    onDrop={handleDrop}
                >
                    <label
                        htmlFor="file"
                        className={
                            !isSubmit
                                ? isDragActive
                                    ? `${style.file_lable} ${style.active}`
                                    : style.file_lable
                                : `${style.file_lable} ${style.block}`
                        }
                    >
                        {!isSubmit ? (
                            <>
                                {preview ? (
                                    <div className={style.image_wrap}>
                                        <Image
                                            className={style.image}
                                            src={preview}
                                            alt="preview"
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                ) : (
                                    <div className={style.title_wrap}>
                                        <div className={style.image_wrap}>
                                            <Image
                                                className={style.image}
                                                src={OPLATA_REC}
                                                alt="OPLATA_REC"
                                            />
                                        </div>
                                        <div className={style.title}>
                                            Загрузите чек
                                        </div>
                                        <div className={style.description}>
                                            Прикрепите квитанцию перевода из
                                            приложения банка. Если квитанции
                                            нет, прикрепите скриншот перевода.
                                        </div>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className={style.succses}>
                                <div className={style.succses_icon}>
                                    <Check />
                                </div>
                                <div className={style.succses_title}>
                                    Успешно!
                                </div>
                            </div>
                        )}

                        <input
                            ref={fileRef}
                            id="file"
                            name="file"
                            className={style.component_file}
                            type="file"
                            onChange={handleChange}
                            disabled={isSubmit}
                        />
                    </label>
                </form>

                {typeError && <div className={style.error}>{typeError}</div>}

                {!isSubmit && (
                    <Button className={style.action} onClick={handleFileSubmit}>
                        Загрузить
                    </Button>
                )}
            </div>
        </div>
    );
};

export default PaymentReceipt;
