import NavbarComponent from "./components/GlobalComponents/NavBarComponent";
import HomePage from "./pages/HomePage";
import EventFlow from "./pages/EventFlow";
import FooterComponent from "./components/GlobalComponents/FooterComponent";

export default function App() {
  return (
    <div className="relative">
    <NavbarComponent/>
     <HomePage />
      {/* <EventFlow /> */}
      <FooterComponent />
      
    </div>
  );
}
