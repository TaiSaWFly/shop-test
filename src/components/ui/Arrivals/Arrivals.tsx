import style from "./arrivals.module.scss";
import ArrivalsComponent from "./ArrivalsComponent";
import {
    ACCESSORY_NAVIGATE,
    CLOTH_NAVIGATE,
    SHOES_NAVIGATE
} from "@/data/navigate.data";
import shoesData from "@/data/products.data/shoes.data";
import accessoryData from "@/data/products.data/accessory.data";
import clothData from "@/data/products.data/cloth.data";

const Arrivals = () => {
    const arrivalsComponents = [
        <ArrivalsComponent
            key={SHOES_NAVIGATE.PAGE_NAME}
            categoryName={SHOES_NAVIGATE.PAGE_NAME}
            catalog={SHOES_NAVIGATE.PAGE_QUERY}
            pageUrl={SHOES_NAVIGATE.PAGE_URL}
            products={shoesData}
        />,
        <ArrivalsComponent
            key={CLOTH_NAVIGATE.PAGE_NAME}
            categoryName={CLOTH_NAVIGATE.PAGE_NAME}
            catalog={CLOTH_NAVIGATE.PAGE_QUERY}
            pageUrl={CLOTH_NAVIGATE.PAGE_URL}
            products={clothData}
        />,
        <ArrivalsComponent
            key={ACCESSORY_NAVIGATE.PAGE_NAME}
            categoryName={ACCESSORY_NAVIGATE.PAGE_NAME}
            catalog={ACCESSORY_NAVIGATE.PAGE_QUERY}
            pageUrl={ACCESSORY_NAVIGATE.PAGE_URL}
            products={accessoryData}
        />
    ];

    return (
        <section className={style.component}>
            {arrivalsComponents.map((component) => (
                <div key={component.key} className={style.arivals}>
                    {component}
                </div>
            ))}
        </section>
    );
};

export default Arrivals;
