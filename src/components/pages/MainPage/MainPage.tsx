import ComponentContainer from "@/components/common/ComponentContainer/ComponentContainer";
import Arrivals from "@/components/ui/Arrivals/Arrivals";
import OrderCost from "@/components/ui/OrderCost/OrderCost";
import Review from "@/components/ui/Review/ReviewComponent/Review";
import SubsBanner from "@/components/ui/SubsBanner/SubsBanner";

const MainPage = () => {
    return (
        <ComponentContainer>
            <Arrivals />
            <OrderCost />
            <SubsBanner />
            <Review />
        </ComponentContainer>
    );
};

export default MainPage;
