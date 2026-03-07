import style from "./HeaderComponent.module.css";

export default function HeaderComponent({ image, text }) {
    return (
        <section className={style.container}>
            <img src={image} alt="" className={style.backgroundImage} fetchpriority="high" />
            <div className={style.overlay}>
                <h1 className={style.text}>{text}</h1>
            </div>
        </section>
    );
}
