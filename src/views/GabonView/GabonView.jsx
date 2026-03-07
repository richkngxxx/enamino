import style from "./GabonView.module.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
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
            <Helmet>
                <title>Découvrir le Gabon | Parcs Nationaux & Nature | Enamino</title>
                <meta name="description" content="Explorez le Gabon, ses parcs nationaux, sa biodiversité exceptionnelle et ses formalités de voyage. Guide pratique pour préparer votre séjour." />
                <meta property="og:title" content="Découvrir le Gabon | Parcs Nationaux & Nature | Enamino" />
                <meta property="og:description" content="Explorez le Gabon, ses parcs nationaux, sa biodiversité exceptionnelle et ses formalités de voyage. Guide pratique pour préparer votre séjour." />
                <meta property="og:url" content="https://enamino.fr/gabon" />
                <link rel="canonical" href="https://enamino.fr/gabon" />
                <link rel="alternate" hreflang="fr" href="https://enamino.fr/gabon" />
                <link rel="alternate" hreflang="en" href="https://enamino.fr/gabon" />
                <link rel="alternate" hreflang="es" href="https://enamino.fr/gabon" />
                <link rel="alternate" hreflang="x-default" href="https://enamino.fr/gabon" />
            </Helmet>
            <HeaderComponent image={headerImage} text={t("gabonHeader")} />
            <Gabon />
            <Identification />
            <Biodiversity />
            <Parks />
        </section>
    );
}
