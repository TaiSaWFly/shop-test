import { FC, PropsWithChildren } from "react";

const ComponentContainer: FC<PropsWithChildren<unknown>> = ({ children }) => {
    return <div className="conteiner">{children}</div>;
};

export default ComponentContainer;
