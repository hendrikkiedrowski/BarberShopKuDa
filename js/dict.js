var dict = {
    "Termin Buchen": {
        en: "Book Now"
    },
    "Unser ethnisch gemischter Barbier aus Daenemark": {
        en: "Our ethnically mixed barber from Denmark"
    },
    "Mit einer langjaehrigen Berufserfahrung": {
        en: "with a big work experience"
    },
    'Ein "Old-School" inspirierter Perfektionist': {
        en: "An 'old-school' inspired perfectionist"
    },
    "Mit einem kreativen Arbeitsstil": {
        en: "with a creative workflow"
    },
    "Unser Barbier aus Litauen": {
        en: "Our Barber from Latvia"
    },
    "Ein wahrer Perfektionist": {
        en: "A true perfectionist"
    },
    "Saubere und praezise Schnitt-Technik": {
        en: "clean and precise cutting technique"
    },
    "Studierte die Barbier-Kunst in London": {
        en: "studied barbering in London"
    },
    "Unser gewandter Barbier aus England": {
        en: "Our adroit barber from England"
    },
    "Fade-Spezialist fuer alle Haartypen": {
        en: "Fade specialist in all hair types"
    },
    "Ein verfechter der Praezision": {
        en: "A stickler for accuracy"
    },
    "Sprache": {
        en: "Language"
    },
    " Deutsch": {
        en: " German"
    },
    " Englisch": {
        en: " English"
    }
};
var translator;

function translate() {
    if ((navigator.language || navigator.userLanguage) != "de") {

        translator = $('body').translate({lang: "en", t: dict}); //use English
    }

}

function translateEN() {
    translator = $('body').translate({lang: "en", t: dict});
    translator = $('footer').translate({lang: "en", t: dict});
}

function translateDE() {
    translator = $('body').translate({lang: "de", t: dict});
    translator = $('footer').translate({lang: "de", t: dict});
}