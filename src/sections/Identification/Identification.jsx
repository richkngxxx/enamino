import style from "./Identification.module.css";
import { useTranslation } from "react-i18next";
import provinces from "../../assets/images/gabon-provinces.png";
import flag from "../../assets/images/gabon-flag.png";

export default function Identification() {
    const [t, i18n] = useTranslation("global");

    return (
        <section className={style.container}>
            <div className={style.card}>
                <div className={style.data}>
                    <p className={style.dataName}>{t("identification.name")}</p>
                    <div className={style.dataInfo}>
                        <div className={style.dataInfoSection}>
                            <p className={style.dataInfoSectionTitle}>{t("identification.area")}</p>
                            <ul className={style.dataInfoSectionList}>
                                <li className={style.dataInfoSectionListElement}>{t("identification.areaOne")}</li>
                            </ul>
                        </div>
                        <div className={style.dataInfoSection}>
                            <p className={style.dataInfoSectionTitle}>{t("identification.capital")}</p>
                            <ul className={style.dataInfoSectionList}>
                                <li className={style.dataInfoSectionListElement}>{t("identification.capitalOne")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.capitalTwo")}</li>
                            </ul>
                        </div>
                        <div className={style.dataInfoSection}>
                            <p className={style.dataInfoSectionTitle}>{t("identification.population")}</p>
                            <ul className={style.dataInfoSectionList}>
                                <li className={style.dataInfoSectionListElement}>{t("identification.populationOne")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.populationTwo")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.populationThree")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.populationFour")}</li>
                            </ul>
                        </div>
                        <div className={style.dataInfoSection}>
                            <p className={style.dataInfoSectionTitle}>{t("identification.languages")}</p>
                            <ul className={style.dataInfoSectionList}>
                                <li className={style.dataInfoSectionListElement}>{t("identification.languagesOne")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.languagesTwo")}</li>
                            </ul>
                        </div>
                        <div className={style.dataInfoSection}>
                            <p className={style.dataInfoSectionTitle}>{t("identification.groups")}</p>
                            <ul className={style.dataInfoSectionList}>
                                <li className={style.dataInfoSectionListElement}>{t("identification.groupsOne")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.groupsTwo")}</li>
                            </ul>
                        </div>
                        <div className={style.dataInfoSection}>
                            <p className={style.dataInfoSectionTitle}>{t("identification.religion")}</p>
                            <ul className={style.dataInfoSectionList}>
                                <li className={style.dataInfoSectionListElement}>{t("identification.religionOne")}</li>
                            </ul>
                        </div>
                        <div className={style.dataInfoSection}>
                            <p className={style.dataInfoSectionTitle}>{t("identification.provinces")}</p>
                            <ul className={style.dataInfoSectionList}>
                                <li className={style.dataInfoSectionListElement}>{t("identification.provincesOne")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.provincesTwo")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.provincesThree")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.provincesFour")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.provincesFive")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.provincesSix")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.provincesSeven")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.provincesEight")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.provincesNine")}</li>
                            </ul>
                        </div>
                        <div className={style.dataInfoSection}>
                            <p className={style.dataInfoSectionTitle}>{t("identification.vegetation")}</p>
                            <ul className={style.dataInfoSectionList}>
                                <li className={style.dataInfoSectionListElement}>{t("identification.vegetationOne")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.vegetationTwo")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.vegetationThree")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.vegetationFour")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.vegetationFive")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.vegetationSix")}</li>
                            </ul>
                        </div>
                        <div className={style.dataInfoSection}>
                            <p className={style.dataInfoSectionTitle}>{t("identification.climate")}</p>
                            <ul className={style.dataInfoSectionList}>
                                <li className={style.dataInfoSectionListElement}>{t("identification.climateOne")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.climateTwo")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.climateThree")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.climateFour")}</li>
                            </ul>
                        </div>
                        <div className={style.dataInfoSection}>
                            <p className={style.dataInfoSectionTitle}>{t("identification.seasons")}</p>
                            <ul className={style.dataInfoSectionList}>
                                <li className={style.dataInfoSectionListElement}>{t("identification.seasonsOne")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.seasonsTwo")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.seasonsThree")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.seasonsFour")}</li>
                            </ul>
                        </div>
                        <div className={style.dataInfoSection}>
                            <p className={style.dataInfoSectionTitle}>{t("identification.signs")}</p>
                            <ul className={style.dataInfoSectionList}>
                                <li className={style.dataInfoSectionListElement}>{t("identification.signsOne")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.signsTwo")}</li>
                            </ul>
                        </div>
                        <div className={style.dataInfoSection}>
                            <p className={style.dataInfoSectionTitle}>{t("identification.cash")}</p>
                            <ul className={style.dataInfoSectionList}>
                                <li className={style.dataInfoSectionListElement}>{t("identification.cashOne")}</li>
                            </ul>
                        </div>
                        <div className={style.dataInfoSection}>
                            <p className={style.dataInfoSectionTitle}>{t("identification.export")}</p>
                            <ul className={style.dataInfoSectionList}>
                                <li className={style.dataInfoSectionListElement}>{t("identification.exportOne")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.exportTwo")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.exportThree")}</li>
                            </ul>
                        </div>
                        <div className={style.dataInfoSection}>
                            <p className={style.dataInfoSectionTitle}>{t("identification.infrastructure")}</p>
                            <ul className={style.dataInfoSectionList}>
                                <li className={style.dataInfoSectionListElement}>{t("identification.infrastructureOne")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.infrastructureTwo")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.infrastructureThree")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.infrastructureFour")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.infrastructureFive")}</li>
                            </ul>
                        </div>
                        <div className={style.dataInfoSection}>
                            <p className={style.dataInfoSectionTitle}>{t("identification.history")}</p>
                            <ul className={style.dataInfoSectionList}>
                                <li className={style.dataInfoSectionListElement}>{t("identification.historyOne")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.historyTwo")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.historyThree")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.historyFour")}</li>
                                <li className={style.dataInfoSectionListElement}>{t("identification.historyFive")}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={style.images}>
                    <div className={style.imagesImage}>
                        <img src={flag} alt="Drapeau du Gabon" loading="lazy" />
                    </div>
                    <div className={style.imagesImage}>
                        <img src={provinces} alt="Carte des provinces du Gabon" loading="lazy" />
                    </div>
                </div>
            </div>
        </section>
    );
}
