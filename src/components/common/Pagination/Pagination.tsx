import { FC } from "react";
import style from "./pagination.module.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
    itemCount: number;
    pageSize: number;
    currentPage: number;
    onPageChange: (pageIndex: number) => void;
}

const Pagination: FC<PaginationProps> = ({
    currentPage,
    itemCount,
    onPageChange,
    pageSize
}) => {
    const pageCount = Math.ceil(itemCount / pageSize);

    return (
        <div className={style.component}>
            <div
                className={style.prev}
                onClick={() =>
                    currentPage !== 1 && onPageChange(currentPage - 1)
                }
            >
                <ChevronLeft />
            </div>

            <div className={style.count}>
                {currentPage}/{pageCount}
            </div>

            <div
                className={style.next}
                onClick={() =>
                    currentPage < pageCount && onPageChange(currentPage + 1)
                }
            >
                <ChevronRight />
            </div>
        </div>
    );
};

export default Pagination;
