import SkeletonLoader from "@/components/common/SkeletonLoader/SkeletonLoader";
import { FC } from "react";
import style from "./productLoader.module.scss";

const ProductLoader: FC = () => {
    return (
        <div className={style.component}>
            {[1, 2, 3, 4].fill(0).map((_, i) => (
                <div key={i} className={style.component_item_wrap}>
                    <div className={style.component_item}>
                        <SkeletonLoader
                            options={{
                                viewBox: "0 0 350 300",
                                height: 150,
                                width: 150
                            }}
                        >
                            <rect
                                x="20"
                                y="0"
                                rx="7"
                                ry="7"
                                width="300"
                                height="170"
                            />
                            <rect
                                x="20"
                                y="190"
                                rx="7"
                                ry="7"
                                width="300"
                                height="20"
                            />
                            <rect
                                x="20"
                                y="220"
                                rx="7"
                                ry="7"
                                width="300"
                                height="20"
                            />
                            <rect
                                x="20"
                                y="250"
                                rx="7"
                                ry="7"
                                width="300"
                                height="20"
                            />
                        </SkeletonLoader>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductLoader;
