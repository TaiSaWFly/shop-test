"use client";

import { navigateData } from "@/data/navigate.data";
import style from "./navigate.module.scss";
import Link from "next/link";
import useOutsideClick from "@/hooks/useOutsideClick";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { BREAKPOINTS } from "@/constants/breakpoint.constants";
import { Menu, X } from "lucide-react";
import { AnimatePresenceComponent, motions } from "@/lib/motion";
import { useEffect, useState } from "react";

const Navigate = () => {
    const [isClient, setClient] = useState(false);
    const { isShow, setShow, ref } = useOutsideClick(false);
    const { windowWidth } = useWindowDimensions();

    useEffect(() => {
        setClient(true);
    }, []);

    return (
        <div className={style.component}>
            {isClient && (
                <>
                    {windowWidth > BREAKPOINTS.BREAKPOINT_520 ? (
                        <nav>
                            <ul className={style.nav_list}>
                                {navigateData.map((nav, i) => (
                                    <li
                                        key={i + nav.PAGE_NAME}
                                        className={style.nav_link}
                                    >
                                        <Link
                                            href={{
                                                pathname: nav.PAGE_URL,
                                                query: {
                                                    catalog: nav.PAGE_QUERY
                                                }
                                            }}
                                        >
                                            {nav.PAGE_NAME}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ) : (
                        <>
                            {isShow ? (
                                <div
                                    className={style.nav_icon}
                                    onClick={() => setShow(!isShow)}
                                >
                                    <X />
                                </div>
                            ) : (
                                <div
                                    className={style.nav_icon}
                                    onClick={() => setShow(!isShow)}
                                >
                                    <Menu />
                                </div>
                            )}

                            <AnimatePresenceComponent>
                                {isShow && (
                                    <motions.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className={style.nav_list}
                                        ref={ref}
                                    >
                                        {navigateData.map((nav, i) => (
                                            <div
                                                key={i + nav.PAGE_NAME}
                                                className={style.nav_link}
                                                onClick={() => setShow(false)}
                                            >
                                                <Link
                                                    href={{
                                                        pathname: nav.PAGE_URL,
                                                        query: {
                                                            catalog:
                                                                nav.PAGE_QUERY
                                                        }
                                                    }}
                                                >
                                                    {nav.PAGE_NAME}
                                                </Link>
                                            </div>
                                        ))}
                                    </motions.div>
                                )}
                            </AnimatePresenceComponent>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default Navigate;
