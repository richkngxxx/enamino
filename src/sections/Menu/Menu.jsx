import style from "./Menu.module.css";
import { useTranslation } from "react-i18next";
import imageOne from "../../assets/images/menu-1.jpg";
import imageTwo from "../../assets/images/menu-2.jpg";
import imageThree from "../../assets/images/menu-3.jpg";
import imageFour from "../../assets/images/menu-4.jpg";

export default function Menu() {
    const [t, i18n] = useTranslation("global");

    return (
        <section className={style.container}>
            <div className={style.heading}>
                <p className={style.headingTitle}>{t("menu.title")}</p>
                <p className={style.headingText}>{t("menu.subtitle")}</p>
            </div>
            <div className={style.data}>
                <ul className={style.dataList}>
                    <li className={style.dataListElement}>{t("menu.listOne")}</li>
                    <li className={style.dataListElement}>{t("menu.listTwo")}</li>
                    <li className={style.dataListElement}>{t("menu.listThree")}</li>
                    <li className={style.dataListElement}>{t("menu.listFour")}</li>
                    <li className={style.dataListElement}>{t("menu.listFive")}</li>
                    <li className={style.dataListElement}>{t("menu.listSix")}</li>
                    <li className={style.dataListElement}>{t("menu.listSeven")}</li>
                </ul>
                <div className={style.dataImages}>
                    <div className={style.dataImagesImage}>
                        <img src={imageOne} alt="Cuisine locale - Spécialités gabonaises" loading="lazy" />
                    </div>
                    <div className={style.dataImagesImage}>
                        <img src={imageTwo} alt="Poisson frais pêché sur place" loading="lazy" />
                    </div>
                    <div className={style.dataImagesImage}>
                        <img src={imageThree} alt="Fruits frais du potager" loading="lazy" />
                    </div>
                    <div className={style.dataImagesImage}>
                        <img src={imageFour} alt="Dîner traditionnel au camp" loading="lazy" />
                    </div>
                </div>
            </div>
        </section>
    );
}
