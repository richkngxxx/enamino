import React from "react";
import style from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Footer from "./components/Footer/Footer";

const VillageView = React.lazy(() => import('./views/VillageView/VillageView'));
const SafarisView = React.lazy(() => import('./views/SafarisView/SafarisView'));
const GabonView = React.lazy(() => import('./views/GabonView/GabonView'));
const TravelersView = React.lazy(() => import('./views/TravelersView/TravelersView'));
const ContactView = React.lazy(() => import('./views/ContactView/ContactView'));

export default function App() {
    return (
        <Router>
            <div className={style.app}>
                <Navbar />
                <React.Suspense fallback={
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#352a24' }}>
                        <div style={{ width: '60px', height: '60px', border: '4px solid rgba(173,193,120,0.3)', borderRadius: '50%', borderTopColor: '#adc178', animation: 'spin 1s ease-in-out infinite' }} />
                    </div>
                }>
                    <Routes>
                        <Route path="/" element={<VillageView />} />
                        <Route path="/safaris" element={<SafarisView />} />
                        <Route path="/gabon" element={<GabonView />} />
                        <Route path="/travelers" element={<TravelersView />} />
                        <Route path="/contact" element={<ContactView />} />
                    </Routes>
                </React.Suspense>
                <Footer />
                <ScrollToTop />
            </div>
        </Router>
    );
}
