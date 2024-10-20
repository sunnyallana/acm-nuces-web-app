import HeroSection from "../components/HomePageComponents/HeroSection"
import AboutCodersCup from "../components/HomePageComponents/AboutCodersCup"
import AboutACM from "../components/HomePageComponents/AboutACM"
import SponsorComp from "../components/HomePageComponents/SponsorComp"
import CodersCupBanner from "../components/HomePageComponents/CodersCupBanner"
import HousesSection from "../components/HomePageComponents/HousesSection"

export default function HomePage(){
    return(
        <div className="overflow-hidden">
            <HeroSection />
            <AboutCodersCup/>
            <AboutACM/>
            <HousesSection/>
            <SponsorComp/>
            <CodersCupBanner/>
        </div>
    )
}