import style from "./TravelersView.module.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import headerImage from "../../assets/images/travelers-header.jpg";
import Bag from "../../sections/Bag/Bag";
import Donations from "../../sections/Donations/Donations";
import Formalities from "../../sections/Formalities/Formalities";

export default function TravelersView() {
    const [t, i18n] = useTranslation("global");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className={style.container}>
            <Helmet>
                <title>Préparer son voyage | Conseils aux voyageurs | Enamino</title>
                <meta name="description" content="Tout ce qu'il faut savoir avant votre séjour à l'Eco-Village d'Enamino : bagages, formalités, vaccinations et conseils pratiques." />
                <meta property="og:title" content="Préparer son voyage | Conseils aux voyageurs | Enamino" />
                <meta property="og:description" content="Tout ce qu'il faut savoir avant votre séjour à l'Eco-Village d'Enamino : bagages, formalités, vaccinations et conseils pratiques." />
                <meta property="og:url" content="https://enamino.fr/travelers" />
                <link rel="canonical" href="https://enamino.fr/travelers" />
                <link rel="alternate" hreflang="fr" href="https://enamino.fr/travelers" />
                <link rel="alternate" hreflang="en" href="https://enamino.fr/travelers" />
                <link rel="alternate" hreflang="es" href="https://enamino.fr/travelers" />
                <link rel="alternate" hreflang="x-default" href="https://enamino.fr/travelers" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://enamino.fr/" },
                            { "@type": "ListItem", "position": 2, "name": "Voyageurs", "item": "https://enamino.fr/travelers" }
                        ]
                    })}
                </script>
            </Helmet>
            <HeaderComponent image={headerImage} text={t("travelersHeader")} />
            <Bag />
            <Donations />
            <Formalities />
        </section>
    );
}
