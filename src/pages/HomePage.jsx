import HeroSection from "../components/HomePageComponents/HeroSection"
import AboutCodersCup from "../components/HomePageComponents/AboutCodersCup"
import AboutACM from "../components/HomePageComponents/AboutACM"
import SponsorComp from "../components/HomePageComponents/SponsorComp"
import CodersCupBanner from "../components/HomePageComponents/CodersCupBanner"

export default function HomePage(){
    return(
        <div className="overflow-hidden">
            <HeroSection />
            <AboutCodersCup/>
            <AboutACM/>
            <SponsorComp/>
            <CodersCupBanner/>
        </div>
    )
}