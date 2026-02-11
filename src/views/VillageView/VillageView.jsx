import style from "./VillageView.module.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
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
            <Header />
            <Camp />
            <CTASection text={t("cta.afterCamp")} />
            <Bungalow />
            <CTASection text={t("cta.afterBungalow")} />
            <Menu />
            <CTASection text={t("cta.afterMenu")} />
            <Enviroment />
            <CTASection />
        </section>
    );
}
