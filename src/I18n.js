import { createI18n } from "react-router-i18n";

// Array of supported locales
// The first in the array is treated as the default locale
const locales = ["en", "fr"];

// Dictionary of translations
const translations = {
	en: {
		main: {
			route: {
				language: "Language",
				rules: "Rules",
				tos: "TOS",
			},
			onlinePlayers: "online players",
			copyright: "All Right Reserved.",
		},
	},
	fr: {
		main: {
			route: {
				language: "Langue",
				rules: "Règlement",
				tos: "CGU",
			},
			onlinePlayers: "joueurs en ligne",
			copyright: "Tous droits réservés.",
		},
	},
};

const I18n = createI18n(locales, translations);

export default I18n;
