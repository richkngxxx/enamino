import style from './CTASection.module.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function CTASection({ text }) {
    const { t } = useTranslation('global');
    
    return (
        <section className={style.container}>
            <p className={style.text}>{text || t('cta.defaultText')}</p>
            <Link to="/contact" className={style.button}>
                {t('camp.button')}
            </Link>
        </section>
    );
}
