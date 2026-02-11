import style from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import VillageView from "./views/VillageView/VillageView";
import SafarisView from "./views/SafarisView/SafarisView";
import GabonView from "./views/GabonView/GabonView";
import TravelersView from "./views/TravelersView/TravelersView";
import ContactView from "./views/ContactView/ContactView";
import Footer from "./components/Footer/Footer";

export default function App() {
    return (
        <Router>
            <div className={style.app}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<VillageView />} />
                    <Route path="/safaris" element={<SafarisView />} />
                    <Route path="/gabon" element={<GabonView />} />
                    <Route path="/travelers" element={<TravelersView />} />
                    <Route path="/contact" element={<ContactView />} />
                </Routes>
                <Footer />
                <ScrollToTop />
            </div>
        </Router>
    );
}
