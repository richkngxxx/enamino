import style from "./Camp.module.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import image1 from "../../assets/images/camp-1.jpg";
import image2 from "../../assets/images/camp-2.jpg";
import image3 from "../../assets/images/camp-3.jpg";
import image4 from "../../assets/images/camp-4.jpg";
import image5 from "../../assets/images/camp-5.jpg";
import image6 from "../../assets/images/camp-6.jpg";
import image7 from "../../assets/images/camp-7.jpg";
import image8 from "../../assets/images/camp-8.jpg";
import image9 from "../../assets/images/camp-9.jpg";
import image10 from "../../assets/images/camp-10.jpg";

export default function Camp() {
    const [t, i18n] = useTranslation("global");

    return (
        <section className={style.container}>
            <div className={style.data}>
                <div className={style.dataInfo}>
                    <p className={style.dataInfoTitle}>{t("camp.title")}</p>
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
