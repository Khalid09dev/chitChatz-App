import DirectOrders from "../../components/DirectOrdersLandingPage/DirectOrders";
import FeaturesLandingPage from "../../components/FeaturesLandingPage/FeaturesLandingPage";
import Footer from "../../components/FooterLandingPage/Footer";
import Landing_Banner from "../../components/Landing_Banner/Landing_Banner";
import Landing_Navbar from "../../components/Landing_Navbar/Landing_Navbar";
import LiveVideoChat from "../../components/LiveVideoChatLandingPage/LiveVideoChat";
import Review from "../../components/ReviewLandingPage/Review";
import SellingConversation from "../../components/SellingConversations/SellingConversation";

const LandingPage = () => {
    return (
        <div>
            <Landing_Navbar></Landing_Navbar>
            <Landing_Banner></Landing_Banner>
            <FeaturesLandingPage></FeaturesLandingPage>
            <LiveVideoChat></LiveVideoChat>
            <SellingConversation></SellingConversation>
            <DirectOrders></DirectOrders>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default LandingPage;