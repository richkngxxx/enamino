import style from "./Camp.module.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import image1 from "../../assets/images/camp-1.webp";
import image2 from "../../assets/images/camp-2.webp";
import image3 from "../../assets/images/camp-3.webp";
import image4 from "../../assets/images/camp-4.webp";
import image5 from "../../assets/images/camp-5.webp";
import image6 from "../../assets/images/camp-6.webp";
import image7 from "../../assets/images/camp-7.webp";
import image8 from "../../assets/images/camp-8.webp";
import image9 from "../../assets/images/camp-9.webp";
import image10 from "../../assets/images/camp-10.webp";

export default function Camp() {
    const [t, i18n] = useTranslation("global");

    return (
        <section className={style.container}>
            <div className={style.data}>
                <div className={style.dataInfo}>
                    <h2 className={style.dataInfoTitle}>{t("camp.title")}</h2>
                    <p className={style.dataInfoText}>
                        {t("camp.textOne")}
                        <br />
                        <br />
                        {t("camp.textTwo")} <Link to="/contact">{t("camp.link")}</Link>
                        {t("camp.textThree")}
                    </p>
                    <Link to="/contact" className={style.dataInfoButton}>
                        {t("camp.button")}
                    </Link>
                </div>
            </div>
            <Carousel>
                <div>
                    <img src={image1} alt="Camp Enamino - Vue panoramique" loading="lazy" />
                </div>
                <div>
                    <img src={image2} alt="Camp Enamino - Bungalows" loading="lazy" />
                </div>
                <div>
                    <img src={image3} alt="Camp Enamino - Restaurant" loading="lazy" />
                </div>
                <div>
                    <img src={image4} alt="Camp Enamino - Plage" loading="lazy" />
                </div>
                <div>
                    <img src={image5} alt="Camp Enamino - Nature" loading="lazy" />
                </div>
                <div>
                    <img src={image6} alt="Camp Enamino - Vue océan" loading="lazy" />
                </div>
                <div>
                    <img src={image7} alt="Camp Enamino - Environnement" loading="lazy" />
                </div>
                <div>
                    <img src={image8} alt="Camp Enamino - Faune" loading="lazy" />
                </div>
                <div>
                    <img src={image9} alt="Camp Enamino - Paysage" loading="lazy" />
                </div>
                <div>
                    <img src={image10} alt="Camp Enamino - Safari" loading="lazy" />
                </div>
            </Carousel>
        </section>
    );
}
