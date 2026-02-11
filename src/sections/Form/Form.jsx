import style from "./Form.module.css";
import { useTranslation } from "react-i18next";
import { MdAlternateEmail } from "react-icons/md";
import { FaUser, FaMessage } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";

export default function Form() {
    const { t } = useTranslation("global");

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const formRef = useRef(null);

    const [confirmMessage, setConfirmMessage] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [canSubmit, setCanSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            if (response.ok) {
                setConfirmMessage(200);
                setForm({ name: "", email: "", message: "" });
            } else {
                setConfirmMessage(400);
            }
        } catch (error) {
            setConfirmMessage(400);
        } finally {
            setIsSubmitting(false);
            setTimeout(() => {
                setConfirmMessage(0);
            }, 3000);
        }
    };

    useEffect(() => {
        setCanSubmit(Object.values(form).every((value) => value !== "") && !isSubmitting);
    }, [form, isSubmitting]);

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
                        value={form.name}
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
                        value={form.email}
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
                        value={form.message}
                    />
                </div>
                <input 
                    type="submit" 
                    value={isSubmitting ? "Envoi..." : t("contact.send")} 
                    disabled={!canSubmit} 
                    className={style.formSubmit} 
                />
                {confirmMessage === 200 && <p className={style.formMessageOk}>{t("contact.messageOk")}</p>}
                {confirmMessage === 400 && <p className={style.formMessageBad}>{t("contact.messageBad")}</p>}
            </form>
        </section>
    );
}
