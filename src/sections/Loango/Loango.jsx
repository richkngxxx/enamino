import style from "./Loango.module.css";
import { useTranslation } from "react-i18next";
import image1 from "../../assets/images/loango-1.jpg";
import image2 from "../../assets/images/loango-2.jpg";

export default function Loango() {
    const [t, i18n] = useTranslation("global");

    return (
        <section className={style.container}>
            <div className={style.content}>
                <h2 className={style.title}>{t("loango.title")}</h2>
                <div className={style.blocks}>
                    <div className={style.blocksBlock}>
                        <p className={style.blocksBlockText}>{t("loango.blockOne")}</p>
                        <div className={style.blocksBlockImage}>
                            <img src={image1} alt="Vue aérienne du Parc National de Loango" loading="lazy" />
                        </div>
                    </div>
                    <div className={style.blocksBlock}>
                        <div className={style.blocksBlockImage}>
                            <img src={image2} alt="Paysage du Parc National de Loango" loading="lazy" />
                        </div>
                        <p className={style.blocksBlockText}>{t("loango.blockTwo")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
