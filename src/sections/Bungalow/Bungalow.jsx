import style from "./Bungalow.module.css";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import bungalowOne from "../../assets/images/bungalow-1.webp";
import BungalowTwo from "../../assets/images/bungalow-2.webp";
import BungalowThree from "../../assets/images/bungalow-3.webp";
import { IoArrowBackCircleSharp, IoArrowForwardCircleSharp } from "react-icons/io5";

export default function Bungalow() {
    const [t, i18n] = useTranslation("global");
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const [carouselIndex, setCarouselIndex] = useState(1);

    const onNext = () => {
        const images = Array.from(document.querySelectorAll(".bungalowsCarouselImage"));
        switch (carouselIndex) {
            case 1:
                images.forEach((e) => {
                    e.style.transform = "translateX(-100%)";
                });
                setCarouselIndex(2);
                break;
            case 2:
                images.forEach((e) => {
                    e.style.transform = "translateX(-200%)";
                });
                setCarouselIndex(3);
                break;
            case 3:
                images.forEach((e) => {
                    e.style.transform = "translateX(0)";
                });
                setCarouselIndex(1);
                break;
            default:
                break;
        }
    };

    const onPrev = () => {
        const images = Array.from(document.querySelectorAll(".bungalowsCarouselImage"));
        switch (carouselIndex) {
            case 1:
                images.forEach((e) => {
                    e.style.transform = "translateX(-200%)";
                });
                setCarouselIndex(3);
                break;
            case 2:
                images.forEach((e) => {
                    e.style.transform = "translateX(0)";
                });
                setCarouselIndex(1);
                break;
            case 3:
                images.forEach((e) => {
                    e.style.transform = "translateX(-100%)";
                });
                setCarouselIndex(2);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        window.addEventListener("resize", () => {
            setInnerWidth(window.innerWidth);
        });
    }, []);

    return (
        <section className={style.container}>
            <div className={style.heading}>
                <h2 className={style.headingTitle}>{t("bungalow.title")}</h2>
                <p className={style.headingText}>{t("bungalow.subtitle")}</p>
            </div>
            <div className={style.data}>
                <ul className={style.dataList}>
                    <li>{t("bungalow.listOne")}</li>
                    <li>{t("bungalow.listTwo")}</li>
                    <li>{t("bungalow.listThree")}</li>
                    <li>{t("bungalow.listFour")}</li>
                    <li>{t("bungalow.listFive")}</li>
                    <li>{t("bungalow.listSix")}</li>
                </ul>
                <ul className={style.dataList}>
                    <li>{t("bungalow.listSeven")}</li>
                    <li>{t("bungalow.listEight")}</li>
                    <li>{t("bungalow.listNine")}</li>
                    <li>{t("bungalow.listTen")}</li>
                    <li>{t("bungalow.listEleven")}</li>
                    <li>{t("bungalow.listTwelve")}</li>
                </ul>
            </div>
            {innerWidth > 767 ? (
                <div className={style.images}>
                    <div className={style.imagesImage}>
                        <img src={BungalowTwo} alt="Intérieur du bungalow" loading="lazy" />
                    </div>
                    <div className={style.imagesImage}>
                        <img src={bungalowOne} alt="Bungalow de l'Eco-Village d'Enamino" loading="lazy" />
                    </div>
                    <div className={style.imagesImage}>
                        <img src={BungalowThree} alt="Terrasse du bungalow" loading="lazy" />
                    </div>
                </div>
            ) : (
                <div className={style.imagesCarousel}>
                    <div className={style.imagesCarouselBig}>
                        <div className={`${style.imagesCarouselBigImage} bungalowsCarouselImage`}>
                            <img src={bungalowOne} alt="Bungalow de l'Eco-Village d'Enamino" loading="lazy" />
                        </div>
                        <div className={`${style.imagesCarouselBigImage} bungalowsCarouselImage`}>
                            <img src={BungalowTwo} alt="Intérieur du bungalow" loading="lazy" />
                        </div>
                        <div className={`${style.imagesCarouselBigImage} bungalowsCarouselImage`}>
                            <img src={BungalowThree} alt="Terrasse du bungalow" loading="lazy" />
                        </div>
                    </div>
                    <div className={style.imagesCarouselNavbar}>
                        <IoArrowBackCircleSharp onClick={onPrev} />
                        <IoArrowForwardCircleSharp onClick={onNext} />
                    </div>
                </div>
            )}
            <p className={style.text}>{t("bungalow.text")}</p>
        </section>
    );
}
