import translations_EN from "~/locales/en/translation.json"
import translations_FR from "~/locales/fr/translation.json"

export default {
  // This is the list of languages your application supports
  supportedLngs: ["fr", "en"],
  // This is the language you want to use in case
  // if the user language is not in the supportedLngs
  fallbackLng: "fr",
  // The default namespace of i18next is "translation", but you can customize it here
  defaultNS: "translation",
  resources: {
    en: { translation: 
      translations_EN
    },
    fr: { translation: 
      translations_FR
    },
  }
};

export const urlTranslationSearchString:{[locale:string]:{[url:string]:string}} = {
  "en" : {
    '' : '',
    about : "about-url",
    music : "music-url",
    "computer-science": 'computer-science-url',
    "games": "games-url"
  },
  "fr" : {
    '' : '',
    "a-propos" : "about-url",
    musique : "music-url",
    informatique: 'computer-science-url',
    "jeux": "games-url"

  }
}