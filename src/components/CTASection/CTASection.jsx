import style from './CTASection.module.css';
import { useTranslation } from 'react-i18next';
import { FaWhatsapp } from 'react-icons/fa';

export default function CTASection({ text, showWhatsApp = false }) {
    const { t } = useTranslation('global');

    const whatsappNumber = "34686067814";
    const message = encodeURIComponent(t("footer.whatsappMessage"));
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    return (
        <section className={style.container}>
            <p className={style.text}>{text || t('cta.defaultText')}</p>
            {showWhatsApp && (
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={style.whatsappButton}
                >
                    <FaWhatsapp /> WhatsApp
                </a>
            )}
        </section>
    );
}
