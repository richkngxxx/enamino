import React from 'react';
import style from './WhatsAppButton.module.css';
import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function WhatsAppButton() {
    const { t } = useTranslation('global');

    // Using the number and message pattern from Footer.jsx
    const whatsappNumber = "34686067814";
    const message = encodeURIComponent(t("footer.whatsappMessage"));
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            className={style.button}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactez-nous sur WhatsApp"
        >
            <FaWhatsapp className={style.icon} />
        </a>
    );
}
