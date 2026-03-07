import style from "./Enviroment.module.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import imageOne from "../../assets/images/enviroment-1.jpg";
import imageTwo from "../../assets/images/enviroment-2.jpg";
import imageThree from "../../assets/images/enviroment-3.jpg";
import imageFour from "../../assets/images/enviroment-4.jpg";
import imageFive from "../../assets/images/enviroment-5.jpg";

export default function Enviroment() {
    const [t, i18n] = useTranslation("global");

    return (
        <section className={style.container}>
            <div className={style.overlay}>
                <div className={style.content}>
                    <div className={style.heading}>
                        <h2 className={style.headingTitle}>{t("enviroment.headingTitle")}</h2>
                        <p className={style.headingText}>{t("enviroment.headingText")}</p>
                    </div>
                    <div className={style.cards}>
                        <div className={style.cardsCardLeft}>
                            <div className={style.cardsCardLeftData}>
                                <h3 className={style.cardsCardLeftDataTitle}>{t("enviroment.cardTitleOne")}</h3>
                                <p className={style.cardsCardLeftDataText}>{t("enviroment.cardTextOne")}</p>
                            </div>
                            <div className={style.cardsCardImage}>
                                <img src={imageOne} alt="Paysage naturel de l'Eco-Village d'Enamino" loading="lazy" />
                            </div>
                        </div>
                        <div className={style.cardsCardRight}>
                            <div className={style.cardsCardImage}>
                                <img src={imageTwo} alt="Flore tropicale au Gabon" loading="lazy" />
                            </div>
                            <div className={style.cardsCardRightData}>
                                <h3 className={style.cardsCardRightDataTitle}>{t("enviroment.cardTitleTwo")}</h3>
                                <p className={style.cardsCardRightDataText}>{t("enviroment.cardTextTwo")}</p>
                            </div>
                        </div>
                        <div className={style.cardsCardLeft}>
                            <div className={style.cardsCardLeftData}>
                                <h3 className={style.cardsCardLeftDataTitle}>{t("enviroment.cardTitleThree")}</h3>
                                <p className={style.cardsCardLeftDataText}>{t("enviroment.cardTextThree")}</p>
                            </div>
                            <div className={style.cardsCardImage}>
                                <img src={imageThree} alt="Sentier écologique à Enamino" loading="lazy" />
                            </div>
                        </div>
                        <div className={style.cardsCardRight}>
                            <div className={style.cardsCardImage}>
                                <img src={imageFour} alt="Faune sauvage de la côte gabonaise" loading="lazy" />
                            </div>
                            <div className={style.cardsCardRightData}>
                                <h3 className={style.cardsCardRightDataTitle}>{t("enviroment.cardTitleFour")}</h3>
                                <p className={style.cardsCardRightDataText}>{t("enviroment.cardTextFour")}</p>
                            </div>
                        </div>
                        <div className={style.cardsCardLeft}>
                            <div className={style.cardsCardLeftData}>
                                <h3 className={style.cardsCardLeftDataTitle}>{t("enviroment.cardTitleFive")}</h3>
                                <p className={style.cardsCardLeftDataText}>{t("enviroment.cardTextFive")}</p>
                            </div>
                            <div className={style.cardsCardImage}>
                                <img src={imageFive} alt="Environnement préservé à Enamino" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
