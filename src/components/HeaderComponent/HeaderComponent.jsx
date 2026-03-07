import style from "./HeaderComponent.module.css";

export default function HeaderComponent({ image, text }) {
    return (
        <section className={style.container} style={{ backgroundImage: `url(${image})` }}>
            <div className={style.overlay}>
                <h1 className={style.text}>{text}</h1>
            </div>
        </section>
    );
}
