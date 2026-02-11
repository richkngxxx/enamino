import style from "./GabonView.module.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import headerImage from "../../assets/images/gabon-header.jpg";
import Gabon from "../../sections/Gabon/Gabon";
import Identification from "../../sections/Identification/Identification";
import Parks from "../../sections/Parks/Parks";
import Biodiversity from "../../sections/Biodiversity/Biodiversity";

export default function GabonView() {
    const [t, i18n] = useTranslation("global");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className={style.container}>
            <HeaderComponent image={headerImage} text={t("gabonHeader")} />
            <Gabon />
            <Identification />
            <Biodiversity />
            <Parks />
        </section>
    );
}
