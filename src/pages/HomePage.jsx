import NavbarComponent from "../components/GlobalComponents/NavBarComponent"
import HeroSection from "../components/HomePageComponents/HeroSection"
import AboutCodersCup from "../components/HomePageComponents/AboutCodersCup"
import AboutACM from "../components/HomePageComponents/AboutACM"
export default function HomePage(){
    return(
        <div className="overflow-hidden">
            <HeroSection />
            <AboutCodersCup/>
            <AboutACM/>
        </div>
    )
}