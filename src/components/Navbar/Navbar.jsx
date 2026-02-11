import style from "./Navbar.module.css";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import franceFlag from "../../assets/images/flag-france.jpg";
import spainFlag from "../../assets/images/flag-spain.jpg";
import usaFlag from "../../assets/images/flag-usa.jpg";
import { useState } from "react";

export default function Navbar() {
    const [t, i18n] = useTranslation("global");
    const [language, setLanguage] = useState("fr");
    const [menuMobile, setMenuMobile] = useState(false);

    const handleMenu = () => {
        window.scrollTo(0, 0);
        setMenuMobile(!menuMobile);
    };

    const handleLanguage = (e) => {
        setLanguage(e.target.value);
        i18n.changeLanguage(e.target.value);
        handleMenu();
    };

    return (
        <section className={style.container}>
            <Link to="/" className={style.logo} onClick={() => window.scrollTo(0, 0)}>
                <img src={logo} alt="Enamino Logo" loading="lazy" />
            </Link>
            <button className={style.switch} onClick={handleMenu} aria-label="Toggle menu">
                {menuMobile ? <FaTimes /> : <FaBars />}
            </button>
            <ul className={menuMobile ? `${style.links}` : `${style.links} ${style.linksMobile}`}>
                <li className={style.linksLink}>
                    <Link to="/" onClick={handleMenu}>
                        {t("navbar.linkOne")}
                    </Link>
                </li>
                <li className={style.linksLink}>
                    <Link to="/safaris" onClick={handleMenu}>
                        {t("navbar.linkTwo")}
                    </Link>
                </li>
                <li className={style.linksLink}>
                    <Link to="/gabon" onClick={handleMenu}>
                        {t("navbar.linkThree")}
                    </Link>
                </li>
                <li className={style.linksLink}>
                    <Link to="/travelers" onClick={handleMenu}>
                        {t("navbar.linkFour")}
                    </Link>
                </li>
                <li className={style.linksLink}>
                    <Link to="/contact" onClick={handleMenu}>
                        {t("navbar.linkFive")}
                    </Link>
                </li>
            </ul>
            <div className={menuMobile ? `${style.language}` : `${style.language} ${style.languageMobile}`}>
                {language === "fr" && (
                    <div className={style.languageFlag}>
                        <img src={franceFlag} alt="French Flag" loading="lazy" />
                    </div>
                )}
                {language === "es" && (
                    <div className={style.languageFlag}>
                        <img src={spainFlag} alt="Spanish Flag" loading="lazy" />
                    </div>
                )}
                {language === "en" && (
                    <div className={style.languageFlag}>
                        <img src={usaFlag} alt="USA Flag" loading="lazy" />
                    </div>
                )}
                <select className={style.languageSelector} onChange={(e) => handleLanguage(e)}>
                    <option value="" hidden>
                        {t("navbar.selectLanguage")}
                    </option>
                    <option value="fr">{t("navbar.france")}</option>
                    <option value="es">{t("navbar.spanish")}</option>
                    <option value="en">{t("navbar.english")}</option>
                </select>
            </div>
        </section>
    );
}
