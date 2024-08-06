import FeaturesLandingPage from "../../components/FeaturesLandingPage/FeaturesLandingPage";
import Landing_Banner from "../../components/Landing_Banner/Landing_Banner";
import Landing_Navbar from "../../components/Landing_Navbar/Landing_Navbar";

const LandingPage = () => {
    return (
        <div>
            <Landing_Navbar></Landing_Navbar>
            <Landing_Banner></Landing_Banner>
            <FeaturesLandingPage></FeaturesLandingPage>
        </div>
    );
};

export default LandingPage;