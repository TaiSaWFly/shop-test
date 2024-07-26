"use client";

import { ChangeEvent, FC, useEffect, useState } from "react";
import style from "./sortFilter.module.scss";
import { ArrowDownWideNarrow } from "lucide-react";
import { sortData } from "@/data/sort.data";
import { useActions } from "@/hooks/reduxHooks/useActions";
import { useAppSelector } from "@/hooks/reduxHooks/reduxHooks";
import { SortByType } from "@/ts/types/app.types";

const SortFilter: FC = () => {
    const { sortBy } = useAppSelector((state) => state.filter);
    const { setSortBy } = useActions();
    const [sort, setSort] = useState<SortByType>(sortBy);
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSort(e.target.value as SortByType);
    };

    useEffect(() => {
        setSortBy(sort);
    }, [sort]);

    return (
        <div className={style.component}>
            <div className={style.icon}>
                <ArrowDownWideNarrow />
            </div>
            <select onChange={handleChange}>
                {sortData.map((data, i) => (
                    <option key={data.value + i} value={data.value}>
                        {data.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SortFilter;
