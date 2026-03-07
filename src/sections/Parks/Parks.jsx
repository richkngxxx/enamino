import style from "./Parks.module.css";
import { useTranslation } from "react-i18next";
import image from "../../assets/images/parks.png";

export default function Parks() {
    const [t, i18n] = useTranslation("global");

    return (
        <section className={style.container}>
            <h2 className={style.title}>{t("parks.title")}</h2>
            <div className={style.data}>
                <table className={style.dataTable}>
                    <thead>
                        <tr>
                            <th>{t("parks.tableHeadOne")}</th>
                            <th>{t("parks.tableHeadTwo")}</th>
                            <th>{t("parks.tableHeadThree")}</th>
                            <th>{t("parks.tableHeadFour")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Akanda</td>
                            <td>Estuaire</td>
                            <td>540 km²</td>
                            <td>{t("parks.bodyOneFour")}</td>
                        </tr>
                        <tr>
                            <td>Monts Birougou</td>
                            <td>Ngounié, Ogooué-Lolo</td>
                            <td>690 km²</td>
                            <td>{t("parks.bodyTwoFour")}</td>
                        </tr>
                        <tr>
                            <td>Ivindo</td>
                            <td>Ogooué-Ivindo</td>
                            <td>3 000 km²</td>
                            <td>{t("parks.bodyThreeFour")}</td>
                        </tr>
                        <tr>
                            <td>Loango</td>
                            <td>Ogooué-Maritime</td>
                            <td>1 550 km²</td>
                            <td>{t("parks.bodyFourFour")}</td>
                        </tr>
                        <tr>
                            <td>Lopé</td>
                            <td>Ogooué-Ivindo</td>
                            <td>4 970 km²</td>
                            <td>{t("parks.bodyFiveFour")}</td>
                        </tr>
                        <tr>
                            <td>Mayumba</td>
                            <td>Nyanga</td>
                            <td>80 km²</td>
                            <td>{t("parks.bodySixFour")}</td>
                        </tr>
                        <tr>
                            <td>Minkébé</td>
                            <td>Woleu-Ntem</td>
                            <td>7 560 km²</td>
                            <td>{t("parks.bodySevenFour")}</td>
                        </tr>
                        <tr>
                            <td>Monts de Cristal</td>
                            <td>Estuaire</td>
                            <td>1 200 km²</td>
                            <td>{t("parks.bodyEightFour")}</td>
                        </tr>
                        <tr>
                            <td>Moukalaba-Doudou</td>
                            <td>Nyanga</td>
                            <td>4 500 km²</td>
                            <td>{t("parks.bodyNineFour")}</td>
                        </tr>
                        <tr>
                            <td>Mwagne</td>
                            <td>Ogooué-Ivindo</td>
                            <td>1 160 km²</td>
                            <td>{t("parks.bodyTenFour")}</td>
                        </tr>
                        <tr>
                            <td>Plateaux Batékés</td>
                            <td>Haut-Ogooué</td>
                            <td>2 050 km²</td>
                            <td>{t("parks.bodyElevenFour")}</td>
                        </tr>
                        <tr>
                            <td>Pongara</td>
                            <td>Estuaire</td>
                            <td>870 km²</td>
                            <td>{t("parks.bodyTwelveFour")}</td>
                        </tr>
                        <tr>
                            <td>Waka</td>
                            <td>Ngounié</td>
                            <td>1 070 km²</td>
                            <td>{t("parks.bodyThirteenFour")}</td>
                        </tr>
                    </tbody>
                </table>
                <div className={style.dataImage}>
                    <img src={image} alt="Carte des parcs nationaux du Gabon" loading="lazy" />
                </div>
            </div>
        </section>
    );
}
