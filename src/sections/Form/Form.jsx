import style from "./Form.module.css";
import { useTranslation } from "react-i18next";
import { MdAlternateEmail } from "react-icons/md";
import { FaUser, FaMessage } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
    const { t } = useTranslation("global");

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const formRef = useRef(null);

    const [confirmMessage, setConfirmMessage] = useState(0);

    const [canSubmit, setCanSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    setConfirmMessage(200);
                    setTimeout(() => {
                        setConfirmMessage(0);
                    }, 3000);
                },
                (error) => {
                    setConfirmMessage(400);
                }
            );
    };

    useEffect(() => {
        setCanSubmit(Object.values(form).every((value) => value !== ""));
    }, [form]);

    return (
        <section className={style.container}>
            <p className={style.text}>{t("contact.text")}</p>
            <form className={style.form} ref={formRef} onSubmit={handleSubmit}>
                <div className={style.formSection}>
                    <div className={style.formSectionIcon}>
                        <FaUser />
                    </div>
                    <input
                        type="text"
                        name="name"
                        placeholder={t("contact.name")}
                        className={style.formSectionInput}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className={style.formSection}>
                    <div className={style.formSectionIcon}>
                        <MdAlternateEmail />
                    </div>
                    <input
                        type="email"
                        name="email"
                        placeholder={t("contact.email")}
                        className={style.formSectionInput}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className={style.formSection}>
                    <div className={style.formSectionIcon}>
                        <FaMessage />
                    </div>
                    <textarea
                        name="message"
                        placeholder={t("contact.message")}
                        className={style.formSectionInput}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <input type="submit" value={t("contact.send")} disabled={!canSubmit} className={style.formSubmit} />
                {confirmMessage === 200 && <p className={style.formMessageOk}>{t("contact.messageOk")}</p>}
                {confirmMessage === 400 && <p className={style.formMessageBad}>{t("contact.messageBad")}</p>}
            </form>
        </section>
    );
}
