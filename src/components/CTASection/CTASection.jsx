import style from './CTASection.module.css';
import { useTranslation } from 'react-i18next';

export default function CTASection({ text }) {
    const { t } = useTranslation('global');
    
    return (
        <section className={style.container}>
            <p className={style.text}>{text || t('cta.defaultText')}</p>
        </section>
    );
}
