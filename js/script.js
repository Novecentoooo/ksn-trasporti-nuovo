const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

// ========================================
// EFFETTO HEADER DURANTE LO SCROLL
// ========================================

const siteHeader = document.querySelector(".site-header");

if (siteHeader) {

    window.addEventListener("scroll", () => {

        siteHeader.classList.toggle(
            "scrolled",
            window.scrollY > 30
        );

    });

}


// ========================================
// MENU MOBILE
// ========================================

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        const isOpen = mainNav.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.innerHTML = isOpen ? "✕" : "☰";

    });


    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.innerHTML = "☰";

        });

    });

}


// ========================================
// SCROLL REVEAL
// ========================================

const revealElements = document.querySelectorAll(
    ".section-heading, .service-card, .why-us, .about, .emergency-content, .quote-form, .final-cta"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


// ========================================
// CAMBIO LINGUA
// ========================================

const languageButtons = document.querySelectorAll(".language-btn");

function changeLanguage(language) {

    // Traduzione dei testi
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach((element) => {

        const key = element.dataset.i18n;

        if (
            translations[language] &&
            translations[language][key]
        ) {

            element.textContent =
                translations[language][key];

        }

    });


    // Traduzione dei placeholder
    const placeholderElements =
        document.querySelectorAll("[data-i18n-placeholder]");

    placeholderElements.forEach((element) => {

        const key = element.dataset.i18nPlaceholder;

        if (
            translations[language] &&
            translations[language][key]
        ) {

            element.placeholder =
                translations[language][key];

        }

    });


    // Aggiorna il pulsante della lingua attiva
    languageButtons.forEach((button) => {

        button.classList.toggle(
            "active",
            button.dataset.lang === language
        );

    });


    // Aggiorna la lingua della pagina
    document.documentElement.lang = language;

}


// Pulsanti lingua
languageButtons.forEach((button) => {

    button.addEventListener("click", () => {

        changeLanguage(button.dataset.lang);

    });

});


// ========================================
// TRADUZIONI
// ========================================

const translations = {

    // ========================================
    // ITALIANO
    // ========================================

    it: {

        nav_home: "Home",
        nav_services: "Servizi",
        nav_about: "Chi siamo",
        nav_contact: "Richiedi un preventivo",

        hero_label: "TRASPORTI E LOGISTICA",

        hero_title: "Trasportiamo ciò che conta.",

        hero_text:
            "Trasporti affidabili e professionali da un punto all'altro, in Italia e in tutta Europa.",

        hero_services: "I nostri servizi",

        hero_quote: "Richiedi un preventivo",


        // SERVIZI

        services_title: "I nostri servizi",

        services_label: "COSA FACCIAMO",

        services_intro:
            "Soluzioni di trasporto pensate per accompagnare le tue merci dalla partenza alla destinazione.",

        service_1_title: "Trasporto merci",

        service_1_text:
            "Trasporto di merci dal punto A al punto B in modo organizzato e professionale.",

        service_2_title: "Trasporti nazionali",

        service_2_text:
            "Servizi di trasporto su tutto il territorio italiano.",

        service_3_title: "Trasporti internazionali",

        service_3_text:
            "Trasporti con destinazioni in tutta Europa.",

        service_4_title: "Soluzioni personalizzate",

        service_4_text:
            "Valutiamo ogni esigenza per trovare la soluzione più adatta al tuo trasporto.",


        // BANNER ROSSO

        banner_reliability_title: "Affidabilità",

        banner_reliability_text:
            "Un servizio attento e professionale per ogni trasporto",

        banner_europe_title: "Europa",

        banner_europe_text:
            "Destinazioni in tutta Europa",

        banner_goods_title: "Ogni tipo di merce",

        banner_goods_text:
            "Soluzioni per diverse esigenze di trasporto",

        banner_custom_title: "Soluzioni personalizzate",

        banner_custom_text:
            "Servizi pensati per le tue necessità",


        // PERCHÉ SCEGLIERE KSN

        why_label: "PERCHÉ SCEGLIERE KSN TRASPORTI?",

        why_intro:
            "Ogni trasporto ha esigenze diverse. Per questo lavoriamo con attenzione e flessibilità per offrire un servizio adatto alle necessità del cliente.",

        why_1_title: "Affidabilità",

        why_1_text:
            "Organizziamo ogni trasporto con attenzione e professionalità.",

        why_2_title: "Flessibilità",

        why_2_text:
            "Soluzioni adattabili alle esigenze specifiche di ogni cliente.",

        why_3_title: "Copertura europea",

        why_3_text:
            "Trasporti con destinazioni in tutta Europa.",

        why_4_title: "Assistenza",

        why_4_text:
            "Siamo disponibili per supportarti nelle tue esigenze di trasporto.",


        // CHI SIAMO

        about_label: "CHI SIAMO",

        about_title:
            "Trasporto e affidabilità, in movimento.",

        about_text_1:
            "KSN TRASPORTI è un'azienda con sede a Borso del Grappa, specializzata nel trasporto di merci in Italia e in Europa.",

        about_text_2:
            "Ci occupiamo di trasportare le tue merci dal punto A al punto B, offrendo un servizio professionale e flessibile.",

        about_button:
            "Parliamo del tuo trasporto",


        // URGENZE

        emergency_label: "REPERIBILITÀ H24",

        emergency_title:
            "Hai un'urgenza?",

        emergency_text:
            "Hai bisogno di organizzare un trasporto rapidamente? Contattaci subito: siamo disponibili H24.",

        emergency_call:
            "📞 Contattaci subito",

        emergency_quote:
            "Richiedi un preventivo",


        // MODULO PREVENTIVO

        contact_label: "CONTATTACI",

        contact_title:
            "Richiedi un preventivo",

        contact_intro:
            "Raccontaci cosa devi trasportare e da dove a dove. Ti ricontatteremo per valutare la tua richiesta.",

        route_departure:
            "PARTENZA",

        route_departure_title:
            "Da dove parte la merce?",

        route_destination:
            "DESTINAZIONE",

        route_destination_title:
            "Dove deve arrivare la merce?",

        country_label:
            "Paese",

        city_label:
            "Città",

        zip_label:
            "CAP",

        departure_country_placeholder:
            "Es. Italia",

        departure_city_placeholder:
            "Es. Borso del Grappa",

        departure_zip_placeholder:
            "Es. 31030",

        destination_country_placeholder:
            "Es. Germania",

        destination_city_placeholder:
            "Es. Monaco",

        destination_zip_placeholder:
            "Es. 80331",

        name_label:
            "Nome e cognome / Azienda",

        name_placeholder:
            "Es. Mario Rossi / Azienda S.r.l.",

        email_label:
            "Email",

        email_placeholder:
            "nome@azienda.it",

        phone_label:
            "Telefono",

        phone_placeholder:
            "+39 ...",

        goods_label:
            "Tipo di merce",

        goods_placeholder:
            "Es. Pallet, mobili, macchinari...",

        packages_label:
            "Numero di colli",

        packages_placeholder:
            "Es. 5",

        weight_label:
            "Peso indicativo",

        weight_placeholder:
            "Es. 500 kg",

        dimensions_label:
            "Dimensioni",

        dimensions_placeholder:
            "Es. 120 × 80 × 100 cm",

        date_label:
            "Data desiderata",

        message_placeholder:
            "Descrivi il trasporto, quantità, eventuali esigenze particolari...",

        submit_quote:
            "Richiedi il preventivo",


        // FINAL CTA

        final_cta_title:
            "Hai bisogno di un trasporto?",

        final_cta_text:
            "Raccontaci cosa devi trasportare e da dove a dove.",

        final_cta_button:
            "Richiedi un preventivo",


        // FOOTER

        footer_description:
            "Trasporti e soluzioni logistiche da Borso del Grappa in tutta Italia e in Europa.",

        footer_contacts:
            "Contatti",

        footer_availability:
            "🕐 Reperibilità H24",

        footer_quick_links:
            "Link rapidi",

        footer_copyright:
            "© 2026 KSN TRASPORTI. Tutti i diritti riservati.",


        // PRIVACY

        privacy_label:
            "INFORMAZIONI LEGALI",

        privacy_title:
            "Informativa Privacy",

        privacy_intro:
            "In questa pagina sono riportate le informazioni relative al trattamento dei dati personali degli utenti che consultano il sito web di KSN TRASPORTI e utilizzano il modulo di richiesta preventivo.",

        privacy_1_title:
            "1. Titolare del trattamento",

        privacy_1_text:
            "Il Titolare del trattamento dei dati personali è KSN TRASPORTI, con sede in Borso del Grappa (TV), Italia.",

        privacy_email_label:
            "Email:",

        privacy_2_title:
            "2. Quali dati raccogliamo",

        privacy_2_text:
            "Attraverso il modulo di richiesta preventivo possono essere raccolti dati forniti direttamente dall'utente, tra cui:",

        privacy_2_item_1:
            "nome e cognome;",

        privacy_2_item_2:
            "nome dell'azienda;",

        privacy_2_item_3:
            "indirizzo email;",

        privacy_2_item_4:
            "numero di telefono;",

        privacy_2_item_5:
            "informazioni relative alla partenza e alla destinazione;",

        privacy_2_item_6:
            "informazioni relative alla merce da trasportare;",

        privacy_2_item_7:
            "eventuali informazioni aggiuntive inserite dall'utente.",

        privacy_3_title:
            "3. Finalità del trattamento",

        privacy_3_text:
            "I dati personali vengono trattati per consentire a KSN TRASPORTI di ricevere e gestire le richieste di preventivo e di contattare l'utente in relazione alla richiesta effettuata.",

        privacy_4_title:
            "4. Modalità del trattamento",

        privacy_4_text:
            "I dati personali vengono trattati con strumenti elettronici e secondo modalità adeguate a garantire la sicurezza e la riservatezza delle informazioni.",

        privacy_5_title:
            "5. Conferimento dei dati",

        privacy_5_text:
            "Il conferimento dei dati richiesti nel modulo è necessario per poter gestire la richiesta di preventivo. L'utente può scegliere di non fornire tali dati, ma in questo caso potrebbe non essere possibile rispondere alla richiesta.",

        privacy_6_title:
            "6. Conservazione dei dati",

        privacy_6_text:
            "I dati personali saranno conservati per il periodo necessario alla gestione della richiesta e per gli eventuali ulteriori adempimenti previsti dalla legge.",

        privacy_7_title:
            "7. Comunicazione dei dati",

        privacy_7_text:
            "I dati personali non saranno diffusi pubblicamente. Potranno essere trattati da soggetti che forniscono servizi tecnici necessari al funzionamento del sito e alla gestione delle richieste inviate tramite il modulo di contatto, nei limiti necessari allo svolgimento delle relative attività.",

        privacy_8_title:
            "8. Diritti dell'interessato",

        privacy_8_text_1:
            "L'interessato può esercitare i diritti previsti dalla normativa applicabile in materia di protezione dei dati personali, tra cui il diritto di accesso, rettifica, cancellazione, limitazione del trattamento e opposizione, ove applicabili.",

        privacy_8_text_2:
            "Per esercitare i propri diritti è possibile contattare KSN TRASPORTI all'indirizzo:",

        privacy_9_title:
            "9. Aggiornamenti dell'informativa",

        privacy_9_text:
            "La presente informativa può essere aggiornata nel tempo per riflettere eventuali modifiche al sito, ai servizi offerti o alla normativa applicabile.",

        privacy_back:
            "← Torna al sito",

        privacy_footer_link:
            "Informativa Privacy",

        privacy_checkbox:
            "Dichiaro di aver letto l'Informativa Privacy e acconsento al trattamento dei miei dati personali per la gestione della richiesta di preventivo."

    },


    // ========================================
    // INGLESE
    // ========================================

    en: {

        nav_home: "Home",

        nav_services: "Services",

        nav_about: "About us",

        nav_contact:
            "Request a quote",


        // HERO

        hero_label:
            "TRANSPORT & LOGISTICS",

        hero_title:
            "We transport what matters.",

        hero_text:
            "Reliable and professional transport from one point to another, throughout Italy and Europe.",

        hero_services:
            "Our services",

        hero_quote:
            "Request a quote",


        // SERVICES

        services_title:
            "Our services",

        services_label:
            "WHAT WE DO",

        services_intro:
            "Transport solutions designed to move your goods from departure to destination.",

        service_1_title:
            "Freight transport",

        service_1_text:
            "Freight transport from point A to point B, managed with professional organization.",

        service_2_title:
            "Domestic transport",

        service_2_text:
            "Transport services throughout Italy.",

        service_3_title:
            "International transport",

        service_3_text:
            "Transport connections and services throughout Europe.",

        service_4_title:
            "Customized solutions",

        service_4_text:
            "We evaluate every need to find the solution best suited to your transport.",


        // RED BANNER

        banner_reliability_title:
            "Reliability",

        banner_reliability_text:
            "An attentive and professional service for every transport",

        banner_europe_title:
            "Europe",

        banner_europe_text:
            "Destinations throughout Europe",

        banner_goods_title:
            "All types of goods",

        banner_goods_text:
            "Solutions for different transport needs",

        banner_custom_title:
            "Customized solutions",

        banner_custom_text:
            "Services designed around your needs",


        // WHY CHOOSE

        why_label:
            "WHY CHOOSE KSN TRANSPORTS?",

        why_intro:
            "Every transport has different requirements. That is why we work with care and flexibility to provide a service tailored to each customer's needs.",

        why_1_title:
            "Reliability",

        why_1_text:
            "We organize every transport with care and professionalism.",

        why_2_title:
            "Flexibility",

        why_2_text:
            "Solutions adapted to each customer's specific needs.",

        why_3_title:
            "European coverage",

        why_3_text:
            "Transport services to destinations throughout Europe.",

        why_4_title:
            "Support",

        why_4_text:
            "We are available to support you with your transport needs.",


        // ABOUT

        about_label:
            "ABOUT US",

        about_title:
            "Transport and reliability, always moving.",

        about_text_1:
            "KSN TRASPORTI is a company based in Borso del Grappa, specializing in freight transport throughout Italy and Europe.",

        about_text_2:
            "We transport your goods from point A to point B, providing a professional and flexible service.",

        about_button:
            "Let's talk about your transport",


        // EMERGENCY

        emergency_label:
            "AVAILABLE 24/7",

        emergency_title:
            "Do you have an urgent request?",

        emergency_text:
            "Do you need to arrange transport quickly? Contact us immediately: we are available 24/7.",

        emergency_call:
            "📞 Contact us now",

        emergency_quote:
            "Request a quote",


        // CONTACT FORM

        contact_label:
            "CONTACT US",

        contact_title:
            "Request a quote",

        contact_intro:
            "Tell us what you need to transport and from where to where. We will contact you to evaluate your request.",

        route_departure:
            "DEPARTURE",

        route_departure_title:
            "Where does the goods start from?",

        route_destination:
            "DESTINATION",

        route_destination_title:
            "Where should the goods arrive?",

        country_label:
            "Country",

        city_label:
            "City",

        zip_label:
            "Postal code",

        departure_country_placeholder:
            "E.g. Italy",

        departure_city_placeholder:
            "E.g. Borso del Grappa",

        departure_zip_placeholder:
            "E.g. 31030",

        destination_country_placeholder:
            "E.g. Germany",

        destination_city_placeholder:
            "E.g. Munich",

        destination_zip_placeholder:
            "E.g. 80331",

        name_label:
            "Full name / Company",

        name_placeholder:
            "E.g. Mario Rossi / Company Ltd.",

        email_label:
            "Email",

        email_placeholder:
            "name@company.com",

        phone_label:
            "Phone",

        phone_placeholder:
            "+39 ...",

        goods_label:
            "Type of goods",

        goods_placeholder:
            "E.g. Pallets, furniture, machinery...",

        packages_label:
            "Number of packages",

        packages_placeholder:
            "E.g. 5",

        weight_label:
            "Approximate weight",

        weight_placeholder:
            "E.g. 500 kg",

        dimensions_label:
            "Dimensions",

        dimensions_placeholder:
            "E.g. 120 × 80 × 100 cm",

        date_label:
            "Preferred date",

        message_placeholder:
            "Describe the transport, quantity, and any special requirements...",

        submit_quote:
            "Request a quote",


        // FINAL CTA

        final_cta_title:
            "Do you need transport?",

        final_cta_text:
            "Tell us what you need to transport and from where to where.",

        final_cta_button:
            "Request a quote",


        // FOOTER

        footer_description:
            "Transport and logistics solutions from Borso del Grappa throughout Italy and Europe.",

        footer_contacts:
            "Contacts",

        footer_availability:
            "🕐 Available 24/7",

        footer_quick_links:
            "Quick links",

        footer_copyright:
            "© 2026 KSN TRASPORTI. All rights reserved.",


        // PRIVACY

        privacy_label:
            "LEGAL INFORMATION",

        privacy_title:
            "Privacy Policy",

        privacy_intro:
            "This page provides information about the processing of personal data of users who visit the KSN TRASPORTI website and use the quote request form.",

        privacy_1_title:
            "1. Data Controller",

        privacy_1_text:
            "The Data Controller is KSN TRASPORTI, based in Borso del Grappa (TV), Italy.",

        privacy_email_label:
            "Email:",

        privacy_2_title:
            "2. What data we collect",

        privacy_2_text:
            "Through the quote request form, we may collect information provided directly by the user, including:",

        privacy_2_item_1:
            "first and last name;",

        privacy_2_item_2:
            "company name;",

        privacy_2_item_3:
            "email address;",

        privacy_2_item_4:
            "telephone number;",

        privacy_2_item_5:
            "departure and destination information;",

        privacy_2_item_6:
            "information about the goods to be transported;",

        privacy_2_item_7:
            "any additional information provided by the user.",

        privacy_3_title:
            "3. Purpose of processing",

        privacy_3_text:
            "Personal data is processed to allow KSN TRASPORTI to receive and manage quote requests and to contact the user regarding the submitted request.",

        privacy_4_title:
            "4. How data is processed",

        privacy_4_text:
            "Personal data is processed using electronic tools and appropriate procedures designed to ensure the security and confidentiality of the information.",

        privacy_5_title:
            "5. Provision of data",

        privacy_5_text:
            "Providing the information requested in the form is necessary to process the quote request. The user may choose not to provide this information, but in that case it may not be possible to respond to the request.",

        privacy_6_title:
            "6. Data retention",

        privacy_6_text:
            "Personal data will be retained for the period necessary to manage the request and for any further obligations required by law.",

        privacy_7_title:
            "7. Communication of data",

        privacy_7_text:
            "Personal data will not be publicly disclosed. It may be processed by service providers that supply technical services necessary for the operation of the website and management of requests submitted through the contact form, within the limits necessary for these activities.",

        privacy_8_title:
            "8. Rights of the data subject",

        privacy_8_text_1:
            "The data subject may exercise the rights provided for by applicable data protection legislation, including the right of access, rectification, erasure, restriction of processing and objection, where applicable.",

        privacy_8_text_2:
            "To exercise these rights, you can contact KSN TRASPORTI at:",

        privacy_9_title:
            "9. Updates to this privacy policy",

        privacy_9_text:
            "This privacy policy may be updated from time to time to reflect changes to the website, the services provided or applicable legislation.",

        privacy_back:
            "← Back to website",

        privacy_footer_link:
            "Privacy Policy",

        privacy_checkbox:
            "I declare that I have read the Privacy Policy and consent to the processing of my personal data for the purpose of managing my quote request."

    }

};


// ========================================
// EFFETTO TOUCH SULLE CARD SERVIZI
// ========================================

const serviceCards =
    document.querySelectorAll(".service-card");

serviceCards.forEach((card) => {

    card.addEventListener("touchstart", () => {

        card.classList.add("touch-active");

    });

    card.addEventListener("touchend", () => {

        setTimeout(() => {

            card.classList.remove("touch-active");

        }, 250);

    });

});


// ========================================
// EFFETTO TOUCH SULLE VOCI "PERCHÉ SCEGLIERE"
// ========================================

const whyItems =
    document.querySelectorAll(".why-item");

whyItems.forEach((item) => {

    item.addEventListener("touchstart", () => {

        item.classList.add("touch-active");

    });

    item.addEventListener("touchend", () => {

        setTimeout(() => {

            item.classList.remove("touch-active");

        }, 250);

    });

});


// ========================================
// FEEDBACK TOUCH SUI BOTTONI
// ========================================

const buttons =
    document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.addEventListener("touchstart", () => {

        button.classList.add("touch-active");

    });

    button.addEventListener("touchend", () => {

        setTimeout(() => {

            button.classList.remove("touch-active");

        }, 150);

    });

});