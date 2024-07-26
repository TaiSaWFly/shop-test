import { IProduct } from "@/ts/models/IProduct";
import { DeliveryFilterDataType } from "@/ts/types/app.types";

const handleProductsDeliveryFilter = (
    products: IProduct[],
    delivery: DeliveryFilterDataType
) => {
    let deliveryData = products;

    deliveryData = !!delivery
        ? deliveryData.filter(
              (data) =>
                  delivery.value_from <= data.delivery &&
                  delivery.value_to >= data.delivery
          )
        : deliveryData;

    return deliveryData;
};

export default handleProductsDeliveryFilter;
