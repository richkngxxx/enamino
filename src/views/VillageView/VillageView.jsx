import style from "./VillageView.module.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../sections/Header/Header";
import Camp from "../../sections/Camp/Camp";
import Bungalow from "../../sections/Bungalow/Bungalow";
import Menu from "../../sections/Menu/Menu";
import Enviroment from "../../sections/Enviroment/Enviroment";
import CTASection from "../../components/CTASection/CTASection";

export default function VillageView() {
    const { t } = useTranslation("global");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className={style.container}>
            <Helmet>
                <title>L'Eco-Village d'Enamino | Séjour éco-touristique au Gabon</title>
                <meta name="description" content="Découvrez l'Eco-Village d'Enamino, un camp éco-touristique de charme situé dans le Parc National de Loango au Gabon. Safari, biodiversité exceptionnelle et immersion en pleine nature." />
                <meta property="og:title" content="L'Eco-Village d'Enamino | Séjour éco-touristique au Gabon" />
                <meta property="og:description" content="Découvrez l'Eco-Village d'Enamino, un camp éco-touristique de charme situé dans le Parc National de Loango au Gabon. Safari, biodiversité exceptionnelle et immersion en pleine nature." />
                <meta property="og:url" content="https://enamino.fr/" />
                <link rel="canonical" href="https://enamino.fr/" />
                <link rel="alternate" hreflang="fr" href="https://enamino.fr/" />
                <link rel="alternate" hreflang="en" href="https://enamino.fr/" />
                <link rel="alternate" hreflang="es" href="https://enamino.fr/" />
                <link rel="alternate" hreflang="x-default" href="https://enamino.fr/" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "LocalBusiness",
                                "@id": "https://enamino.fr/#business",
                                "name": "L'Eco-Village d'Enamino",
                                "description": "Camp éco-touristique de charme situé dans le Parc National de Loango au Gabon. Safaris, observation de la faune et immersion en pleine nature.",
                                "url": "https://enamino.fr",
                                "image": "https://enamino.fr/images/logo-complete.png",
                                "telephone": "+34 686 067 814",
                                "email": "enamino@gmail.com",
                                "address": {
                                    "@type": "PostalAddress",
                                    "addressLocality": "Parc National de Loango",
                                    "addressRegion": "Ogooué-Maritime",
                                    "addressCountry": "GA"
                                },
                                "geo": {
                                    "@type": "GeoCoordinates",
                                    "latitude": -2.0,
                                    "longitude": 9.5
                                },
                                "priceRange": "$$",
                                "openingHours": "Mo-Su 00:00-23:59",
                                "sameAs": [
                                    "https://www.instagram.com/ecovillage_enamino?igsh=dGpoN3J1aW1kMWlu",
                                    "https://www.facebook.com/share/1AeY6a2bXg/",
                                    "https://www.instagram.com/nathalie.experience?utm_source=qr&igsh=Y3Z1b2NqdXoyeGty",
                                    "https://www.facebook.com/share/1CzzPiSjoy/"
                                ]
                            },
                            {
                                "@type": "TouristAttraction",
                                "@id": "https://enamino.fr/#attraction",
                                "name": "Eco-Village d'Enamino",
                                "description": "Eco-village au cœur du Parc National de Loango offrant des safaris en forêt, lagune et savane pour observer gorilles, éléphants et baleines.",
                                "url": "https://enamino.fr",
                                "image": "https://enamino.fr/images/logo-complete.png",
                                "touristType": ["Ecotourisme", "Safari", "Nature", "Aventure"],
                                "isAccessibleForFree": false,
                                "availableLanguage": ["fr", "en", "es"],
                                "containedInPlace": {
                                    "@type": "Place",
                                    "name": "Parc National de Loango",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "addressCountry": "GA"
                                    }
                                }
                            }
                        ]
                    })}
                </script>
            </Helmet>
            <Header />
            <Camp />
            <CTASection text={t("cta.afterCamp")} />
            <Bungalow />
            <CTASection text={t("cta.afterBungalow")} showWhatsApp={true} />
            <Menu />
            <CTASection text={t("cta.afterMenu")} />
            <Enviroment />
            <CTASection />
        </section>
    );
}
