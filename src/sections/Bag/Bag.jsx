import style from "./Bag.module.css";
import { useTranslation } from "react-i18next";
import clothing from "../../assets/images/clothing.png";
import shoes from "../../assets/images/shoes.png";
import accessories from "../../assets/images/accessories.png";
import health from "../../assets/images/health.png";

export default function Bag() {
    const [t, i18n] = useTranslation("global");

    return (
        <section className={style.container}>
            <div className={style.heading}>
                <p className={style.headingTitle}>{t("bag.title")}</p>
                <p className={style.headingSubtitle}>{t("bag.subtitle")}</p>
            </div>
            <div className={style.data}>
                <div className={style.dataSection}>
                    <div className={style.dataSectionTitle}>
                        <div className={style.dataSectionTitleIcon}>
                            <img src={clothing} alt="Icône vêtements" loading="lazy" />
                        </div>
                        <p className={style.dataSectionTitleText}>{t("bag.clothingTitle")}</p>
                    </div>
                    <ul className={style.dataSectionList}>
                        <li className={style.dataSectionListElement}>{t("bag.clothingOne")}</li>
                        <li className={style.dataSectionListElement}>{t("bag.clothingTwo")}</li>
                        <li className={style.dataSectionListElement}>{t("bag.clothingThree")}</li>
                        <li className={style.dataSectionListElement}>{t("bag.clothingFour")}</li>
                        <li className={style.dataSectionListElement}>{t("bag.clothingFive")}</li>
                        <li className={style.dataSectionListElement}>{t("bag.clothingSix")}</li>
                    </ul>
                </div>
                <div className={style.dataSection}>
                    <div className={style.dataSectionTitle}>
                        <div className={style.dataSectionTitleIcon}>
                            <img src={shoes} alt="Icône chaussures" loading="lazy" />
                        </div>
                        <p className={style.dataSectionTitleText}>{t("bag.shoesTitle")}</p>
                    </div>
                    <ul className={style.dataSectionList}>
                        <li className={style.dataSectionListElement}>{t("bag.shoesOne")}</li>
                        <li className={style.dataSectionListElement}>{t("bag.shoesTwo")}</li>
                        <li className={style.dataSectionListElement}>{t("bag.shoesThree")}</li>
                    </ul>
                </div>
                <div className={style.dataSection}>
                    <div className={style.dataSectionTitle}>
                        <div className={style.dataSectionTitleIcon}>
                            <img src={accessories} alt="Icône accessoires" loading="lazy" />
                        </div>
                        <p className={style.dataSectionTitleText}>{t("bag.accessoriesTitle")}</p>
                    </div>
                    <ul className={style.dataSectionList}>
                        <li className={style.dataSectionListElement}>{t("bag.accessoriesOne")}</li>
                        <li className={style.dataSectionListElement}>{t("bag.accessoriesTwo")}</li>
                        <li className={style.dataSectionListElement}>{t("bag.accessoriesThree")}</li>
                        <li className={style.dataSectionListElement}>{t("bag.accessoriesFour")}</li>
                        <li className={style.dataSectionListElement}>{t("bag.accessoriesFive")}</li>
                        <li className={style.dataSectionListElement}>{t("bag.accessoriesSix")}</li>
                        <li className={style.dataSectionListElement}>{t("bag.accessoriesSeven")}</li>
                        <li className={style.dataSectionListElement}>{t("bag.accessoriesEight")}</li>
                    </ul>
                </div>
                <div className={style.dataSection}>
                    <div className={style.dataSectionTitle}>
                        <div className={style.dataSectionTitleIcon}>
                            <img src={health} alt="Icône santé" loading="lazy" />
                        </div>
                        <p className={style.dataSectionTitleText}>{t("bag.healthTitle")}</p>
                    </div>
                    <ul className={style.dataSectionList}>
                        <li className={style.dataSectionListElement}>{t("bag.healthOne")}</li>
                        <li className={style.dataSectionListElement}>{t("bag.healthTwo")}</li>
                        <li className={style.dataSectionListElement}>{t("bag.healthThree")}</li>
                        <li className={style.dataSectionListElement}>{t("bag.healthFour")}</li>
                        <li className={style.dataSectionListElement}>{t("bag.healthFive")}</li>
                        <li className={style.dataSectionListElement}>{t("bag.healthSix")}</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
