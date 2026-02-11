import style from "./SafarisView.module.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
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
            <HeaderComponent image={headerImage} text={t("safarisHeader")} />
            <Loango />
            <Safaris />
        </section>
    );
}
