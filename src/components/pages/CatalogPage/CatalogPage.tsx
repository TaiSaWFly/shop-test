import { CatalogType, IProduct } from "@/ts/models/IProduct";
import { FC } from "react";
import style from "./catalogPage.module.scss";
import ComponentContainer from "@/components/common/ComponentContainer/ComponentContainer";
import Catalog from "@/components/ui/CatalogComponents/Catalog";

interface CatalogPageProps {
    catalog: CatalogType;
    titlePage?: string;
    products: IProduct[];
}

const CatalogPage: FC<CatalogPageProps> = ({
    products,
    catalog,
    titlePage
}) => {
    return (
        <section className={style.component}>
            <ComponentContainer>
                <div className={style.title}>
                    {titlePage ? titlePage : "Каталог"}
                </div>

                <Catalog {...{ products, catalog }} />
            </ComponentContainer>
        </section>
    );
};

export default CatalogPage;
