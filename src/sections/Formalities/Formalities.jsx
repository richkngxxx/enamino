import style from "./Formalities.module.css";
import { useTranslation } from "react-i18next";
import documents from "../../assets/images/documents.png";
import visa from "../../assets/images/visa.png";
import vaccination from "../../assets/images/vaccination.png";
import insurance from "../../assets/images/insurance.png";
import directions from "../../assets/images/directions.png";

export default function Formalities() {
    const [t, i18n] = useTranslation("global");

    return (
        <section className={style.container}>
            <p className={style.title}>{t("formailities.title")}</p>
            <div className={style.cards}>
                <div className={style.cardsCard}>
                    <div className={style.cardsCardIcon}>
                        <img src={documents} alt="Icône documents de voyage" loading="lazy" />
                    </div>
                    <div className={style.cardsCardTitles}>
                        <p className={style.cardsCardTitlesTitle}>{t("formailities.cardOneTitle")}</p>
                        <p className={style.cardsCardTitlesSubtitle}>{t("formailities.cardOneSubtitle")}</p>
                    </div>
                    <ul className={style.cardsCardList}>
                        <li className={style.cardsCardListElement}>{t("formailities.cardOneElementOne")}</li>
                        <li className={style.cardsCardListElement}>{t("formailities.cardOneElementTwo")}</li>
                        <li className={style.cardsCardListElement}>{t("formailities.cardOneElementThree")}</li>
                        <li className={style.cardsCardListElement}>{t("formailities.cardOneElementFour")}</li>
                        <li className={style.cardsCardListElement}>{t("formailities.cardOneElementFive")}</li>
                    </ul>
                </div>
                <div className={style.cardsCard}>
                    <div className={style.cardsCardIcon}>
                        <img src={visa} alt="Icône visa" loading="lazy" />
                    </div>
                    <div className={style.cardsCardTitles}>
                        <p className={style.cardsCardTitlesTitle}>{t("formailities.cardTwoTitle")}</p>
                        <p className={style.cardsCardTitlesSubtitle}>{t("formailities.cardTwoSubtitle")}</p>
                    </div>
                    <ul className={style.cardsCardList}>
                        <li className={style.cardsCardListElement}>
                            <p>{t("formailities.cardTwoElementOneTitle")}</p>
                            <ul>
                                <li>{t("formailities.cardTwoElementOneOne")}</li>
                                <li>
                                    <a href="https://ga.ambafrance.org/" target="_blank">
                                        {t("formailities.cardTwoElementOneThree")}
                                    </a>
                                </li>
                                <li>{t("formailities.cardTwoElementOneTwo")}</li>
                            </ul>
                        </li>
                        <li className={style.cardsCardListElement}>
                            <p>{t("formailities.cardTwoElementTwoTitle")}</p>
                            <ul>
                                <li>{t("formailities.cardTwoElementTwoOne")}</li>
                                <li>
                                    <a href="https://amba-france.ga/" target="_blank">
                                        {t("formailities.cardTwoElementTwoTwo")}
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.dgdi.ga" target="_blank">
                                        {t("formailities.cardTwoElementTwoThree")}
                                    </a>
                                </li>
                                <li>
                                    <a href="https://evisa.dgdi.ga/" target="_blank">
                                        {t("formailities.cardTwoElementTwoFour")}
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className={style.cardsCard}>
                    <div className={style.cardsCardIcon}>
                        <img src={vaccination} alt="Icône vaccination" loading="lazy" />
                    </div>
                    <div className={style.cardsCardTitles}>
                        <p className={style.cardsCardTitlesTitle}>{t("formailities.cardThreeTitle")}</p>
                        <p className={style.cardsCardTitlesSubtitle}>{t("formailities.cardThreeSubtitle")}</p>
                    </div>
                    <ul className={style.cardsCardList}>
                        <li className={style.cardsCardListElement}>{t("formailities.cardThreeElementOne")}</li>
                        <li className={style.cardsCardListElement}>{t("formailities.cardThreeElementTwo")}</li>
                        <li className={style.cardsCardListElement}>{t("formailities.cardThreeElementThree")}</li>
                        <li className={style.cardsCardListElement}>
                            <a href="http://www.pasteur.fr" target="_blank">
                                {t("formailities.cardThreeElementFour")}
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={style.cardsCard}>
                    <div className={style.cardsCardIcon}>
                        <img src={insurance} alt="Icône assurance voyage" loading="lazy" />
                    </div>
                    <div className={style.cardsCardTitles}>
                        <p className={style.cardsCardTitlesTitle}>{t("formailities.cardFourTitle")}</p>
                        <p className={style.cardsCardTitlesSubtitle}>{t("formailities.cardFourSubtitle")}</p>
                    </div>
                    <ul className={style.cardsCardList}>
                        <li className={style.cardsCardListElement}>{t("formailities.cardFourElementOne")}</li>
                        <li className={style.cardsCardListElement}>{t("formailities.cardFourElementTwo")}</li>
                        <li className={style.cardsCardListElement}>
                            <a href="http://www.diplomatie.gouv.fr" target="_blank">
                                {t("formailities.cardFourElementThree")}
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={style.cardsCard}>
                    <div className={style.cardsCardIcon}>
                        <img src={directions} alt="Icône itinéraire" loading="lazy" />
                    </div>
                    <div className={style.cardsCardTitles}>
                        <p className={style.cardsCardTitlesTitle}>{t("formailities.cardFiveTitle")}</p>
                        <p className={style.cardsCardTitlesSubtitle}>{t("formailities.cardFiveSubtitle")}</p>
                    </div>
                    <ul className={style.cardsCardList}>
                        <li className={style.cardsCardListElement}>{t("formailities.cardFiveElementOne")}</li>
                        <li className={style.cardsCardListElement}>{t("formailities.cardFiveElementThree")}</li>
                        <li className={style.cardsCardListElement}>{t("formailities.cardFiveElementFour")}</li>
                        <li className={style.cardsCardListElement}>{t("formailities.cardFiveElementFive")}</li>
                        <li className={style.cardsCardListElement}>{t("formailities.cardFiveElementSix")}</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
