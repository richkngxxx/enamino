import style from "./Carousel.module.css";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react";

export default function Carousel({ children }) {
    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? children.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex === children.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <section className={style.container}>
            <div
                className={style.containerBig}
                style={{ width: `${children.length}00%`, transform: `translateX(-${(index / children.length) * 100}%)` }}
            >
                {children}
            </div>
            <div className={style.sliderNavbar}>
                <FaArrowAltCircleLeft
                    onClick={handlePrev}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handlePrev(); }}
                    role="button"
                    tabIndex={0}
                    aria-label="Image précédente"
                />
                <FaArrowAltCircleRight
                    onClick={handleNext}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleNext(); }}
                    role="button"
                    tabIndex={0}
                    aria-label="Image suivante"
                />
            </div>
        </section>
    );
}
