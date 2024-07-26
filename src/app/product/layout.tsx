import { FC, PropsWithChildren } from "react";

const ProductPageLayout: FC<PropsWithChildren<unknown>> = ({ children }) => {
    return <section>{children}</section>;
};

export default ProductPageLayout;
