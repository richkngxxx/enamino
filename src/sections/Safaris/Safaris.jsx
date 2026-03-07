import style from "./Safaris.module.css";
import { useTranslation } from "react-i18next";
import Carousel from "../../components/Carousel/Carousel";
import image1 from "../../assets/images/safaris-akaka-1.jpg";
import image2 from "../../assets/images/safaris-akaka-2.jpg";
import image3 from "../../assets/images/safaris-akaka-3.jpg";
import image4 from "../../assets/images/safaris-akaka-4.jpg";
import image5 from "../../assets/images/safaris-akaka-5.jpg";
import image6 from "../../assets/images/safaris-akaka-6.jpg";
import image7 from "../../assets/images/safaris-akaka-7.jpg";
import image8 from "../../assets/images/safaris-akaka-8.jpg";
import image9 from "../../assets/images/safaris-akaka-9.jpg";
import image10 from "../../assets/images/safaris-akaka-10.jpg";
import image11 from "../../assets/images/safaris-akaka-11.jpg";
import image12 from "../../assets/images/safaris-akaka-12.jpg";
import image13 from "../../assets/images/safaris-akaka-13.jpg";
import image14 from "../../assets/images/safaris-akaka-14.jpg";
import image15 from "../../assets/images/safaris-akaka-15.jpg";
import image16 from "../../assets/images/safaris-enamino-1.jpg";
import image17 from "../../assets/images/safaris-enamino-2.jpg";
import image18 from "../../assets/images/safaris-enamino-3.jpg";
import image19 from "../../assets/images/safaris-enamino-4.jpg";
import image20 from "../../assets/images/safaris-enamino-5.jpg";
import image21 from "../../assets/images/safaris-enamino-6.jpg";
import image23 from "../../assets/images/safaris-enamino-8.jpg";
import image24 from "../../assets/images/safaris-enamino-9.jpg";
import image25 from "../../assets/images/safaris-enamino-10.jpg";
import { Link } from "react-router-dom";

import { GiElephant } from "react-icons/gi";

export default function Safaris() {
    const [t, i18n] = useTranslation("global");

    return (
        <section className={style.container}>
            <div className={style.heading}>
                <h2 className={style.headingTitle}>{t("safaris.title")}</h2>
                <p className={style.headingSubtitle}>{t("safaris.subtitle")}</p>
            </div>
            <div className={style.section}>
                <div className={style.sectionHeading}>
                    <h3 className={style.sectionHeadingTitle}>{t("safaris.sectionOneTitle")}</h3>
                </div>
                <div className={style.sectionSafaris}>
                    <div className={style.sectionSafarisSafari}>
                        <p className={style.sectionSafarisSafariTitle}>{t("safaris.sectionOneSafariOneTitle")}</p>
                        <p className={style.sectionSafarisSafariText}>
                            <span>{t("safaris.sectionOneSafariOneTextHeading")}</span>
                            {t("safaris.sectionOneSafariOneText")}
                        </p>
                    </div>
                    <div className={style.sectionSafarisSafari}>
                        <p className={style.sectionSafarisSafariTitle}>{t("safaris.sectionOneSafariTwoTitle")}</p>
                        <p className={style.sectionSafarisSafariText}>
                            <span>{t("safaris.sectionOneSafariTwoTextHeading")}</span>
                            {t("safaris.sectionOneSafariTwoText")}
                        </p>
                    </div>
                    <div className={style.sectionSafarisProgress}>
                        <p className={style.sectionSafarisProgressTitle}>{t("safaris.sectionOneSafariProgressOneTitle")}</p>
                        <ul className={style.sectionSafarisProgressList}>
                            <li>{t("safaris.sectionOneSafariProgressOneOne")}</li>
                            <li>{t("safaris.sectionOneSafariProgressOneTwo")}</li>
                            <li>{t("safaris.sectionOneSafariProgressOneThree")}</li>
                            <li>{t("safaris.sectionOneSafariProgressOneFour")}</li>
                            <li>{t("safaris.sectionOneSafariProgressOneFive")}</li>
                            <li>{t("safaris.sectionOneSafariProgressOneSix")}</li>
                            <li>{t("safaris.sectionOneSafariProgressOneSeven")}</li>
                        </ul>
                    </div>
                    <div className={style.sectionSafarisSafari}>
                        <p className={style.sectionSafarisSafariTitle}>{t("safaris.sectionOneSafariThreeTitle")}</p>
                        <p className={style.sectionSafarisSafariText}>
                            <span>{t("safaris.sectionOneSafariThreeTextHeading")} </span>
                            {t("safaris.sectionOneSafariThreeText")}
                        </p>
                    </div>
                    <div className={style.sectionSafarisProgress}>
                        <p className={style.sectionSafarisProgressTitle}>{t("safaris.sectionOneSafariProgressTwoTitle")}</p>
                        <ul className={style.sectionSafarisProgressList}>
                            <li>{t("safaris.sectionOneSafariProgressTwoOne")}</li>
                            <li>{t("safaris.sectionOneSafariProgressTwoTwo")}</li>
                            <li>{t("safaris.sectionOneSafariProgressTwoThree")}</li>
                            <li>{t("safaris.sectionOneSafariProgressTwoFour")}</li>
                        </ul>
                    </div>
                </div>
                <div className={style.sectionCarousel}>
                    <Carousel>
                        <div>
                            <img src={image16} alt="Safari près de l'Eco-Village d'Enamino - observation de la faune" loading="lazy" />
                        </div>
                        <div>
                            <img src={image17} alt="Safari en forêt à Enamino" loading="lazy" />
                        </div>
                        <div>
                            <img src={image18} alt="Safari en lagune près d'Enamino" loading="lazy" />
                        </div>
                        <div>
                            <img src={image19} alt="Paysage de savane à Enamino" loading="lazy" />
                        </div>
                        <div>
                            <img src={image20} alt="Safari nocturne à l'Eco-Village d'Enamino" loading="lazy" />
                        </div>
                        <div>
                            <img src={image21} alt="Observation des oiseaux à Enamino" loading="lazy" />
                        </div>
                        <div>
                            <img src={image23} alt="Safari en 4x4 près de l'Eco-Village" loading="lazy" />
                        </div>
                        <div>
                            <img src={image24} alt="Flore tropicale près d'Enamino" loading="lazy" />
                        </div>
                        <div>
                            <img src={image25} alt="Safari à l'Eco-Village d'Enamino - paysage du Gabon" loading="lazy" />
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className={style.divisor}>
                <hr />
                <GiElephant />
                <hr />
            </div>
            <div className={style.section}>
                <div className={style.sectionHeading}>
                    <h3 className={style.sectionHeadingTitle}>{t("safaris.sectionTwoTitle")}</h3>
                    <p className={style.sectionHeadingSubtitle}>{t("safaris.sectionTwoSubtitle")}</p>
                </div>
                <div className={style.sectionSafaris}>
                    <div className={style.sectionSafarisSafari}>
                        <p className={style.sectionSafarisSafariTitle}>{t("safaris.sectionTwoSafariOneTitle")}</p>
                        <p className={style.sectionSafarisSafariText}>
                            <span>{t("safaris.sectionTwoSafariOneTextHeading")}</span>
                            {t("safaris.sectionTwoSafariOneText")}
                        </p>
                    </div>
                    <div className={style.sectionSafarisSafari}>
                        <p className={style.sectionSafarisSafariTitle}>{t("safaris.sectionTwoSafariTwoTitle")}</p>
                        <p className={style.sectionSafarisSafariText}>
                            <span>{t("safaris.sectionTwoSafariTwoTextHeading")}</span>
                            {t("safaris.sectionTwoSafariTwoText")}
                        </p>
                    </div>
                    <div className={style.sectionSafarisSafari}>
                        <p className={style.sectionSafarisSafariTitle}>{t("safaris.sectionTwoSafariThreeTitle")}</p>
                        <p className={style.sectionSafarisSafariText}>
                            <span>{t("safaris.sectionTwoSafariThreeTextHeading")}</span>
                            {t("safaris.sectionTwoSafariThreeText")}
                        </p>
                    </div>
                    <div className={style.sectionSafarisProgress}>
                        <p className={style.sectionSafarisProgressTitle}>{t("safaris.sectionTwoSafariProgressTitle")}</p>
                        <ul className={style.sectionSafarisProgressList}>
                            <li>{t("safaris.sectionTwoSafariProgressOne")}</li>
                            <li>{t("safaris.sectionTwoSafariProgressTwo")}</li>
                            <li>{t("safaris.sectionTwoSafariProgressThree")}</li>
                            <li>{t("safaris.sectionTwoSafariProgressFour")}</li>
                            <li>{t("safaris.sectionTwoSafariProgressFive")}</li>
                            <li>{t("safaris.sectionTwoSafariProgressSix")}</li>
                            <li>
                                {t("safaris.sectionTwoSafariProgressSeven")} <Link to="/contact">{t("safaris.sectionTwoSafariProgressSevenLink")}</Link>
                            </li>
                            <li>{t("safaris.sectionTwoSafariProgressEight")}</li>
                            <li>{t("safaris.sectionTwoSafariProgressNine")}</li>
                        </ul>
                    </div>
                </div>
                <div className={style.sectionCarousel}>
                    <Carousel>
                        <div>
                            <img src={image1} alt="Safari à Akaka - observation des hippopotames" loading="lazy" />
                        </div>
                        <div>
                            <img src={image2} alt="Safari en lagune à Akaka" loading="lazy" />
                        </div>
                        <div>
                            <img src={image3} alt="Faune sauvage à Akaka - Parc National de Loango" loading="lazy" />
                        </div>
                        <div>
                            <img src={image4} alt="Safari en forêt au Parc National de Loango - Akaka" loading="lazy" />
                        </div>
                        <div>
                            <img src={image5} alt="Observation des éléphants à Akaka" loading="lazy" />
                        </div>
                        <div>
                            <img src={image6} alt="Paysage de lagune à Akaka" loading="lazy" />
                        </div>
                        <div>
                            <img src={image7} alt="Safari en bateau à Akaka" loading="lazy" />
                        </div>
                        <div>
                            <img src={image8} alt="Gorille en forêt tropicale à Loango" loading="lazy" />
                        </div>
                        <div>
                            <img src={image9} alt="Exploration de la jungle à Akaka" loading="lazy" />
                        </div>
                        <div>
                            <img src={image10} alt="Rivière sauvage à Akaka" loading="lazy" />
                        </div>
                        <div>
                            <img src={image11} alt="Buffle dans la savane Loango" loading="lazy" />
                        </div>
                        <div>
                            <img src={image12} alt="Safari photo à Akaka" loading="lazy" />
                        </div>
                        <div>
                            <img src={image13} alt="Coucher de soleil sur la lagune Akaka" loading="lazy" />
                        </div>
                        <div>
                            <img src={image14} alt="Nature préservée au Parc National de Loango" loading="lazy" />
                        </div>
                        <div>
                            <img src={image15} alt="Safari aventure à Akaka - Gabon" loading="lazy" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
