import { useState } from 'react';
import style from './LazyImage.module.css';

export default function LazyImage({ src, alt, className }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className={`${style.container} ${className || ''}`}>
            {!loaded && <div className={style.placeholder}>Loading...</div>}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                className={`${style.image} ${loaded ? style.loaded : ''}`}
                onLoad={() => setLoaded(true)}
            />
        </div>
    );
}
