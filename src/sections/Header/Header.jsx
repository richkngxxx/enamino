import style from "./Header.module.css";
import { useTranslation } from "react-i18next";
import video from "../../assets/videos/header.mp4";
import logo from "../../assets/images/logo.png";
import audioFile from "../../assets/audio/header.mp3";

export default function Header() {
    const { t } = useTranslation("global");

    const playAudio = () => {
        const audio = new Audio(audioFile);
        audio.play();
    };

    return (
        <section className={style.container}>
            <video 
                className={style.video} 
                autoPlay 
                loop 
                muted 
                playsInline
                disablePictureInPicture
                disableRemotePlayback
                poster={logo}
                preload="auto"
                onError={(e) => console.error('Video error:', e)}
            >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={style.overlay}>
                <div className={style.logo}>
                    <img src={logo} alt="Enamino Eco-Village Logo" />
                </div>
                <p className={style.slogan}>{t("header.slogan")}</p>
                <p className={style.title}>L' Eco-Village d' Enamino</p>
                <button className={style.audio} onClick={playAudio}>
                    {t("header.audio")}
                </button>
            </div>
        </section>
    );
}
