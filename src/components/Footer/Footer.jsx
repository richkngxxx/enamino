import style from "./Footer.module.css";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/logo-complete.png";
import { FaHome, FaUser, FaPhone, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

export default function Footer() {
    const [t, i18n] = useTranslation("global");
    
    // Get current language
    const currentLang = i18n.language;
    
    // Social media links based on language
    const socialLinks = {
        // Spanish - Nathalie's social media
        es: {
            instagram: "https://www.instagram.com/nathalie.experience?utm_source=qr&igsh=Y3Z1b2NqdXoyeGty",
            facebook: "https://www.facebook.com/share/1CzzPiSjoy/"
        },
        // French - Enamino's social media
        fr: {
            instagram: "https://www.instagram.com/ecovillage_enamino?igsh=dGpoN3J1aW1kMWlu",
            facebook: "https://www.facebook.com/share/1AeY6a2bXg/"
        },
        // English - default to Nathalie's
        en: {
            instagram: "https://www.instagram.com/nathalie.experience?utm_source=qr&igsh=Y3Z1b2NqdXoyeGty",
            facebook: "https://www.facebook.com/share/1CzzPiSjoy/"
        }
    };
    
    const currentSocial = socialLinks[currentLang] || socialLinks.en;

    return (
        <section className={style.container}>
            <div className={style.logo}>
                <img src={logo} alt="Enamino Logo" loading="lazy" />
            </div>
            <ul className={style.data}>
                <li className={style.dataElement}>
                    <FaHome />
                    <p>L'Eco-Village d'Enamino - Parc National de Loango - Gabon</p>
                </li>
                <li className={style.dataElement}>
                    <FaUser />
                    <p>Nathalie CARRIÈRE (Nanou)</p>
                </li>
                <li className={style.dataElement}>
                    <FaPhone />
                    <p>WhatsApp +34686067814</p>
                </li>

                <li className={style.dataElement}>
                    <MdAlternateEmail />
                    <p>enamino@gmail.com</p>
                </li>
            </ul>
            <div className={style.widget}>
                <a href="https://www.petitfute.com/v56217-parc-national-de-loango/c1166-hebergement/c158-hotel/342697-l-eco-village-d-enamino.html" target="_blank">
                    <img src="https://www.petitfute.com/img/widget/logo.jpg" alt="Petit Futé" loading="lazy" />
                </a>
            </div>
            <div className={style.links}>
                <p className={style.linksTitle}>{t("footer.linksTitle")}</p>
                <ul className={style.linksList}>
                    <li>
                        <a href="https://www.routard.com/forums/c/gabon/142" target="_blank">
                            {t("footer.linkOne")}
                        </a>
                    </li>
                    <li>
                        <a href="https://www.petitfute.com/d1298-ogooue-maritime/c1166-hebergement/" target="_blank">
                            {t("footer.linkTwo")}
                        </a>
                    </li>
                    <li>
                        <a href="https://carnetsdevoyages.jeanlou.fr/Le_Parc_de_Loango/" target="_blank">
                            {t("footer.linkThree")}
                        </a>
                    </li>
                    <li>
                        <a href="http://notrevieaugabon.canalblog.com/archives/2012/03/15/24021852.html" target="_blank">
                            {t("footer.linkFour")}
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=AIprYvNcn_A" target="_blank">
                            {t("footer.linkFive")}
                        </a>
                    </li>
                </ul>
            </div>
            <script language="javascript" type="text/javascript" src="https://pro.petitfute.com/compte/widget/etablissement/337595/src/1/"></script>
            <div className={style.social}>
                <p className={style.socialTitle}>{t("footer.followUs")}</p>
                <div className={style.socialIcons}>
                    <a href={currentSocial.instagram} target="_blank" rel="noopener noreferrer" className={style.socialIcon}>
                        <FaInstagram />
                    </a>
                    <a href={currentSocial.facebook} target="_blank" rel="noopener noreferrer" className={style.socialIcon}>
                        <FaFacebook />
                    </a>

                </div>
            </div>
        </section>
    );
}
