import style from "./SafarisView.module.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import headerImage from "../../assets/images/safaris-header.jpg";
import Loango from "../../sections/Loango/Loango";
import Safaris from "../../sections/Safaris/Safaris";

export default function SafarisView() {
    const [t, i18n] = useTranslation("global");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className={style.container}>
            <Helmet>
                <title>Safaris au Parc National de Loango | Eco-Village d'Enamino</title>
                <meta name="description" content="Découvrez nos safaris en forêt, lagune et savane au cœur du Parc National de Loango. Observation de gorilles, éléphants, baleines et plus." />
                <meta property="og:title" content="Safaris au Parc National de Loango | Eco-Village d'Enamino" />
                <meta property="og:description" content="Découvrez nos safaris en forêt, lagune et savane au cœur du Parc National de Loango. Observation de gorilles, éléphants, baleines et plus." />
                <meta property="og:url" content="https://enamino.fr/safaris" />
                <link rel="canonical" href="https://enamino.fr/safaris" />
                <link rel="alternate" hreflang="fr" href="https://enamino.fr/safaris" />
                <link rel="alternate" hreflang="en" href="https://enamino.fr/safaris" />
                <link rel="alternate" hreflang="es" href="https://enamino.fr/safaris" />
                <link rel="alternate" hreflang="x-default" href="https://enamino.fr/safaris" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://enamino.fr/" },
                            { "@type": "ListItem", "position": 2, "name": "Safaris", "item": "https://enamino.fr/safaris" }
                        ]
                    })}
                </script>
            </Helmet>
            <HeaderComponent image={headerImage} text={t("safarisHeader")} />
            <Loango />
            <Safaris />
            <CTASection text={t("cta.afterSafaris") || "Contactez-nous pour réserver votre safari !"} showWhatsApp={true} />
        </section>
    );
}
