import style from "./ContactView.module.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import headerImage from "../../assets/images/contact-header.jpg";
import Form from "../../sections/Form/Form";
import Map from "../../sections/Map/Map";

export default function ContactView() {
    const [t, i18n] = useTranslation("global");

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className={style.container}>
            <Helmet>
                <title>Contactez l'Eco-Village d'Enamino | Réservation au Gabon</title>
                <meta name="description" content="Contactez-nous pour réserver votre séjour éco-touristique au Parc National de Loango, Gabon. Formulaire de contact et coordonnées." />
                <meta property="og:title" content="Contactez l'Eco-Village d'Enamino | Réservation au Gabon" />
                <meta property="og:description" content="Contactez-nous pour réserver votre séjour éco-touristique au Parc National de Loango, Gabon. Formulaire de contact et coordonnées." />
                <meta property="og:url" content="https://enamino.fr/contact" />
                <link rel="canonical" href="https://enamino.fr/contact" />
                <link rel="alternate" hreflang="fr" href="https://enamino.fr/contact" />
                <link rel="alternate" hreflang="en" href="https://enamino.fr/contact" />
                <link rel="alternate" hreflang="es" href="https://enamino.fr/contact" />
                <link rel="alternate" hreflang="x-default" href="https://enamino.fr/contact" />
            </Helmet>
            <HeaderComponent image={headerImage} text={"Contact"} />
            <Form />
            <Map />
        </section>
    );
}
