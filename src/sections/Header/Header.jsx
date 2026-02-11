import style from "./Header.module.css";
import { useTranslation } from "react-i18next";
import video from "../../assets/videos/header.mp4";
import logo from "../../assets/images/logo.png";
import audioFile from "../../assets/audio/header.mp3";
import { useState, useEffect } from "react";

export default function Header() {
    const { t } = useTranslation("global");
    const [isMobile, setIsMobile] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        // Detect mobile devices
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const playAudio = () => {
        const audio = new Audio(audioFile);
        audio.play();
    };

    return (
        <section className={style.container}>
            {/* Show static image on mobile, video on desktop */}
            {isMobile ? (
                <div 
                    className={style.mobileBackground}
                    style={{ backgroundImage: `url(${logo})` }}
                />
            ) : (
                <>
                    {!videoLoaded && (
                        <div className={style.videoLoading}>
                            <div className={style.spinner}></div>
                        </div>
                    )}
                    <video 
                        className={`${style.video} ${videoLoaded ? style.videoLoaded : ''}`}
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        disablePictureInPicture
                        disableRemotePlayback
                        poster={logo}
                        preload="metadata"
                        onLoadedData={() => setVideoLoaded(true)}
                        onError={(e) => console.error('Video error:', e)}
                    >
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </>
            )}
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
