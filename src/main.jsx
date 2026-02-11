import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import frLocale from "./locales/fr/global.json";
import esLocale from "./locales/es/global.json";
import enLocale from "./locales/en/global.json";

i18next.init({
    interpolation: { escapeValue: false },
    lng: "fr",
    resources: {
        fr: {
            global: frLocale,
        },
        es: {
            global: esLocale,
        },
        en: {
            global: enLocale,
        },
    },
});

// Hide loading screen when React is ready
const hideLoading = () => {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.style.opacity = '0';
        loading.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            loading.style.display = 'none';
        }, 500);
    }
};

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <App />
        </I18nextProvider>
    </React.StrictMode>
);

// Hide loading screen after render
hideLoading();

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered:', registration);
            })
            .catch((error) => {
                console.log('SW registration failed:', error);
            });
    });
}
