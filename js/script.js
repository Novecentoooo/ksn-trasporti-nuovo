const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

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

/* ========================================
   SCROLL REVEAL
======================================== */

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

/* ========================================
   pulsante per cambiare lingua
======================================== */
const languageButtons = document.querySelectorAll(".language-btn");

function changeLanguage(language) {

    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach((element) => {

        const key = element.dataset.i18n;

        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }

    });

    languageButtons.forEach((button) => {

        button.classList.toggle(
            "active",
            button.dataset.lang === language
        );

    });

}

languageButtons.forEach((button) => {

    button.addEventListener("click", () => {

        changeLanguage(button.dataset.lang);

    });

});
/* ========================================
   per efettivo cambio lingua 
======================================== */

const translations = {

    it: {
        nav_home: "Home",
        nav_services: "Servizi",
        nav_about: "Chi siamo",
        nav_contact: "Richiedi un preventivo",

        hero_title: "Trasportiamo ciò che conta.",

        hero_text:
            "Trasporti affidabili e professionali da un punto all'altro, in Italia e in tutta Europa.",

        hero_services: "I nostri servizi",

        hero_quote: "Richiedi un preventivo",

        services_title: "I nostri servizi",

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
        
         /* ========================================
             banner rosso
           ======================================== */  
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

         /* ========================================
             perchè scegliere ksn trasporti?
           ======================================== */  

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
     
    },


    en: {
        nav_home: "Home",
        nav_services: "Services",
        nav_about: "About us",
        nav_contact: "Request a quote",

        hero_title: "We transport what matters.",

        hero_text:
            "Reliable and professional transport from one point to another, throughout Italy and Europe.",

        hero_services: "Our services",

        hero_quote: "Request a quote",

        services_title: "Our services",

        service_1_title: "Freight transport",
        service_1_text:
            "Freight transport from point A to point B, managed with professional organization.",

        service_2_title: "Domestic transport",
        service_2_text:
            "Transport services throughout Italy.",

        service_3_title: "International transport",
        service_3_text:
            "Transport connections and services throughout Europe.",

        service_4_title: "Customized solutions",
        service_4_text:
            "We evaluate every need to find the solution best suited to your transport.",
    
        banner_reliability_title: "Reliability",
        banner_reliability_text:
          "An attentive and professional service for every transport",

        banner_europe_title: "Europe",
        banner_europe_text:
          "Destinations throughout Europe",

        banner_goods_title: "All types of goods",
        banner_goods_text:
          "Solutions for different transport needs",

        banner_custom_title: "Customized solutions",
        banner_custom_text:
           "Services designed around your needs",  
           
        /* ========================================
             perchè scegliere ksn trasporti?
           ======================================== */ 

        
        why_label: "WHY CHOOSE KSN TRANSPORTS?",

       why_intro:
    "Every transport has different requirements. That is why we work with care and flexibility to provide a service tailored to each customer's needs.",

why_1_title: "Reliability",
why_1_text:
    "We organize every transport with care and professionalism.",

why_2_title: "Flexibility",
why_2_text:
    "Solutions adapted to each customer's specific needs.",

why_3_title: "European coverage",
why_3_text:
    "Transport services to destinations throughout Europe.",

why_4_title: "Support",
why_4_text:
    "We are available to support you with your transport needs.",

           
    }

};

// Animazione delle card servizi anche su dispositivi touch

const serviceCards = document.querySelectorAll(".service-card");

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