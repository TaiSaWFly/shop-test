"use client";

import { FC, ReactNode } from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

interface SkeletonLoaderProps {
    options?: IContentLoaderProps;
    children: ReactNode;
}

const SkeletonLoader: FC<SkeletonLoaderProps> = ({
    options = {},
    children
}) => {
    return (
        <ContentLoader speed={1} {...options}>
            {children}
        </ContentLoader>
    );
};

export default SkeletonLoader;
