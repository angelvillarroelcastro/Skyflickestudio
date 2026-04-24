import React, { useEffect, useMemo, useState } from "react";

type Lang = "en" | "ca" | "es" | "de";
type FormStatus = "idle" | "submitting" | "success" | "error";

const WHATSAPP_URL =
  "https://wa.me/34634562634?text=Hi%20Skyflick%20Studio,%20I%20would%20like%20information%20about%20a%20drone%20project%20in%20Mallorca.%20Can%20you%20help%20me%20with%20a%20quote%3F";

const INSTAGRAM_URL = "https://www.instagram.com/skyflickstudio";
const FORMSPREE_URL = "https://formspree.io/f/xjgjjgqr";

type Copy = {
  navContact: string;
  heroTitle: string;
  heroText: string;
  heroSmallText: string;
  seoText: string;
  servicesEyebrow: string;
  service1Title: string;
  service1Text: string;
  service1Footer: string;
  service2Title: string;
  service2Text: string;
  service2Footer: string;
  service3Title: string;
  service3Text: string;
  service3Footer: string;
  statsEyebrow: string;
  stat1Title: string;
  stat1Text: string;
  stat2Title: string;
  stat2Text: string;
  stat3Title: string;
  stat3Text: string;
  stat4Title: string;
  stat4Text: string;
  contactEyebrow: string;
  contactTitle: string;
  contactText: string;
  formTitle: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  submitButton: string;
  submittingButton: string;
  whatsappButton: string;
  sectorsEyebrow: string;
  sector1: string;
  sector2: string;
  sector3: string;
  sector4: string;
  sector5: string;
  footerEyebrow: string;
  zone: string;
  phone: string;
  email: string;
  instagram: string;
  floatingWhatsapp: string;
  successTitle: string;
  successText: string;
  errorTitle: string;
  errorText: string;
};
const COPY: Record<Lang, Copy> = {
  en: {
    navContact: "Get a Quote",
    heroTitle: "Drone Services in Mallorca",
    heroText:
      "Aerial filming, drone inspections and mapping services in Mallorca for real estate, film and industry.",
    heroSmallText: "Based in Mallorca · Operating across the Balearic Islands",
    seoText:
      "Skyflick Studio provides professional drone services in Mallorca and the Balearic Islands, including aerial filming, real estate drone video, technical inspections and drone mapping.",
    servicesEyebrow: "SERVICES",
    service1Title: "Drone Filming in Mallorca",
    service1Text:
      "Cinematic aerial video and photography in 4K for film, advertising, villas and high-end real estate. Designed to elevate your visuals and capture attention instantly.",
    service1Footer: "FILM · ADVERTISING · REAL ESTATE",
    service2Title: "Drone Inspection Services",
    service2Text:
      "Fast and safe aerial inspections for buildings, roofs and infrastructure. Get clear visual data without risk, downtime or costly access methods.",
    service2Footer: "BUILDINGS · ROOFS · INFRASTRUCTURE",
    service3Title: "Drone Mapping & Analysis",
    service3Text:
      "Advanced drone mapping for vegetation, land and coastal analysis. Accurate data capture for environmental monitoring and technical projects.",
    service3Footer: "MAPPING · ANALYSIS · ENVIRONMENT",
    statsEyebrow: "KEY POINTS",
    stat1Title: "SAFE FLIGHTS",
    stat1Text: "Certified operations and compliance.",
    stat2Title: "4K QUALITY",
    stat2Text: "High-resolution capture for professional results.",
    stat3Title: "PRECISE DATA",
    stat3Text: "Advanced technology for reliable visual analysis.",
    stat4Title: "FAST DELIVERY",
    stat4Text: "Efficient processing tailored to each project.",
    contactEyebrow: "CONTACT",
    contactTitle: "Let’s talk about your project",
    contactText:
      "Tell us what you need and we will help define the best aerial solution for your project in Mallorca or the Balearic Islands.",
    formTitle: "Write to us directly",
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    messagePlaceholder: "Tell us about your project",
    submitButton: "Request information",
    submittingButton: "Sending...",
    whatsappButton: "WhatsApp",
    sectorsEyebrow: "AREAS / SECTORS",
    sector1: "Film and advertising",
    sector2: "Architecture and real estate",
    sector3: "Industry and infrastructure",
    sector4: "Environment and territory",
    sector5: "Sport and vegetation",
    footerEyebrow: "CONTACT",
    zone: "Area: Mallorca · Balearic Islands · Spain",
    phone: "Phone: +34 634 562 634",
    email: "Email: skyflickesp@gmail.com",
    instagram: "Instagram: @skyflickstudio",
    floatingWhatsapp: "WhatsApp",
    successTitle: "Message sent",
    successText: "Thank you. We’ll get back to you as soon as possible.",
    errorTitle: "Something went wrong",
    errorText: "Please try again or contact us via WhatsApp.",
  },
    ca: {
    navContact: "Demanar pressupost",
    heroTitle: "Serveis de dron a Mallorca",
    heroText:
      "Filmació aèria, inspeccions amb dron i cartografia a Mallorca per a immobiliària, cinema i indústria.",
    heroSmallText: "Amb base a Mallorca · Operem a totes les Illes Balears",
    seoText:
      "Skyflick Studio ofereix serveis professionals de dron a Mallorca i les Illes Balears: filmació aèria, vídeo immobiliari, inspeccions tècniques i cartografia amb dron.",
    servicesEyebrow: "ELS NOSTRES SERVEIS",
    service1Title: "Filmació aèria amb dron",
    service1Text:
      "Vídeo i fotografia aèria cinematogràfica en 4K per a cinema, publicitat, vil·les i immobiliària premium. Pensat per elevar la imatge del projecte i captar l’atenció.",
    service1Footer: "CINEMA · PUBLICITAT · IMMOBILIÀRIA",
    service2Title: "Inspecció tècnica amb dron",
    service2Text:
      "Inspeccions aèries ràpides i segures per a edificis, cobertes i infraestructures. Dades visuals clares sense riscos, interrupcions ni accessos costosos.",
    service2Footer: "EDIFICIS · COBERTES · INFRAESTRUCTURES",
    service3Title: "Cartografia i anàlisi amb dron",
    service3Text:
      "Cartografia avançada per a vegetació, territori i anàlisi de costa. Captura de dades precisa per a projectes ambientals i tècnics.",
    service3Footer: "CARTOGRAFIA · ANÀLISI · MEDI AMBIENT",
    statsEyebrow: "PUNTS CLAU",
    stat1Title: "VOLS SEGURS",
    stat1Text: "Operacions certificades i compliment normatiu.",
    stat2Title: "QUALITAT 4K",
    stat2Text: "Captura d'alta resolució per a resultats professionals.",
    stat3Title: "DADES PRECISSES",
    stat3Text: "Tecnologia avançada per a anàlisi fiable i visual.",
    stat4Title: "ENTREGA ÀGIL",
    stat4Text: "Processament eficient i entrega adaptada a cada projecte.",
    contactEyebrow: "CONTACTE",
    contactTitle: "Parlem del teu projecte",
    contactText:
      "Explica’ns què necessites i t’ajudarem a definir la millor solució aèria per al teu projecte a Mallorca o les Illes Balears.",
    formTitle: "Escriu-nos directament",
    namePlaceholder: "Nom",
    emailPlaceholder: "Correu electrònic",
    messagePlaceholder: "Explica’ns el teu projecte",
    submitButton: "Demanar informació",
    submittingButton: "Enviant...",
    whatsappButton: "WhatsApp",
    sectorsEyebrow: "ÀREES / SECTORS",
    sector1: "Cinema i publicitat",
    sector2: "Arquitectura i immobiliària",
    sector3: "Indústria i infraestructures",
    sector4: "Medi ambient i territori",
    sector5: "Esport i vegetació",
    footerEyebrow: "CONTACTE",
    zone: "Zona: Mallorca · Illes Balears · Espanya",
    phone: "Telèfon: +34 634 562 634",
    email: "Correu: skyflickesp@gmail.com",
    instagram: "Instagram: @skyflickstudio",
    floatingWhatsapp: "WhatsApp",
    successTitle: "Missatge enviat",
    successText: "Gràcies. Et respondrem al més aviat possible.",
    errorTitle: "Hi ha hagut un problema",
    errorText: "Torna-ho a provar o escriu-nos per WhatsApp.",
  },
    es: {
    navContact: "Pedir presupuesto",
    heroTitle: "Servicios de dron en Mallorca",
    heroText:
      "Filmación aérea, inspecciones con dron y cartografía en Mallorca para inmobiliaria, cine e industria.",
    heroSmallText: "Con base en Mallorca · Operamos en todas las Islas Baleares",
    seoText:
      "Skyflick Studio ofrece servicios profesionales de dron en Mallorca y las Islas Baleares: filmación aérea, vídeo inmobiliario, inspecciones técnicas y cartografía con dron.",
    servicesEyebrow: "SERVICIOS",
    service1Title: "Filmación aérea con dron",
    service1Text:
      "Vídeo y fotografía aérea cinematográfica en 4K para cine, publicidad, villas e inmobiliaria premium. Diseñado para elevar la imagen del proyecto y captar atención al instante.",
    service1Footer: "CINE · PUBLICIDAD · INMOBILIARIA",
    service2Title: "Inspección técnica con dron",
    service2Text:
      "Inspecciones aéreas rápidas y seguras para edificios, cubiertas e infraestructuras. Obtén datos visuales claros sin riesgos, interrupciones ni accesos costosos.",
    service2Footer: "EDIFICIOS · CUBIERTAS · INFRAESTRUCTURAS",
    service3Title: "Cartografía y análisis con dron",
    service3Text:
      "Cartografía avanzada para análisis de vegetación, terreno y costa. Captura de datos precisa para proyectos ambientales y técnicos.",
    service3Footer: "CARTOGRAFÍA · ANÁLISIS · MEDIO AMBIENTE",
    statsEyebrow: "PUNTOS CLAVE",
    stat1Title: "VUELOS SEGUROS",
    stat1Text: "Operaciones certificadas y cumplimiento normativo.",
    stat2Title: "CALIDAD 4K",
    stat2Text: "Captura de alta resolución para resultados profesionales.",
    stat3Title: "DATOS PRECISOS",
    stat3Text: "Tecnología avanzada para análisis fiable.",
    stat4Title: "ENTREGA ÁGIL",
    stat4Text: "Procesado eficiente y entrega adaptada.",
    contactEyebrow: "CONTACTO",
    contactTitle: "Hablemos de tu proyecto",
    contactText:
      "Cuéntanos qué necesitas y te ayudaremos a definir la mejor solución aérea para tu proyecto en Mallorca o Baleares.",
    formTitle: "Escríbenos",
    namePlaceholder: "Nombre",
    emailPlaceholder: "Email",
    messagePlaceholder: "Cuéntanos tu proyecto",
    submitButton: "Pedir información",
    submittingButton: "Enviando...",
    whatsappButton: "WhatsApp",
    sectorsEyebrow: "SECTORES",
    sector1: "Cine y publicidad",
    sector2: "Arquitectura e inmobiliaria",
    sector3: "Industria e infraestructuras",
    sector4: "Medio ambiente y territorio",
    sector5: "Deporte y vegetación",
    footerEyebrow: "CONTACTO",
    zone: "Mallorca · Islas Baleares · España",
    phone: "+34 634 562 634",
    email: "skyflickesp@gmail.com",
    instagram: "Instagram: @skyflickstudio",
    floatingWhatsapp: "WhatsApp",
    successTitle: "Mensaje enviado",
    successText: "Gracias. Te responderemos lo antes posible.",
    errorTitle: "Ha ocurrido un error",
    errorText: "Inténtalo de nuevo o contáctanos por WhatsApp.",
  },
    de: {
    navContact: "Angebot anfragen",
    heroTitle: "Drohnenservices auf Mallorca",
    heroText:
      "Luftaufnahmen, Drohneninspektionen und Mapping auf Mallorca für Immobilien, Film und Industrie.",
    heroSmallText: "Sitz auf Mallorca · Einsatz auf den Balearen",
    seoText:
      "Skyflick Studio bietet professionelle Drohnendienstleistungen auf Mallorca und den Balearen: Luftaufnahmen, Immobilienvideos, technische Inspektionen und Drohnenmapping.",
    servicesEyebrow: "DIENSTLEISTUNGEN",
    service1Title: "Drohnenaufnahmen auf Mallorca",
    service1Text:
      "Cinematische 4K-Luftaufnahmen und Fotografie für Film, Werbung, Villen und hochwertige Immobilienprojekte. Entwickelt, um visuelle Qualität und Aufmerksamkeit zu steigern.",
    service1Footer: "FILM · WERBUNG · IMMOBILIEN",
    service2Title: "Drohneninspektionen",
    service2Text:
      "Schnelle und sichere Luftinspektionen für Gebäude, Dächer und Infrastruktur. Klare visuelle Daten ohne Risiko, Ausfallzeiten oder teure Zugangsmethoden.",
    service2Footer: "GEBÄUDE · DÄCHER · INFRASTRUKTUR",
    service3Title: "Drohnenmapping & Analyse",
    service3Text:
      "Fortschrittliches Drohnenmapping für Vegetation, Land- und Küstenanalyse. Präzise Datenerfassung für Umwelt- und technische Projekte.",
    service3Footer: "MAPPING · ANALYSE · UMWELT",
    statsEyebrow: "WICHTIGSTE PUNKTE",
    stat1Title: "SICHERE FLÜGE",
    stat1Text: "Zertifizierte und legale Einsätze.",
    stat2Title: "4K QUALITÄT",
    stat2Text: "Hochauflösende Bilder für Profis.",
    stat3Title: "PRÄZISE DATEN",
    stat3Text: "Moderne Technik für genaue Analysen.",
    stat4Title: "SCHNELLE LIEFERUNG",
    stat4Text: "Effiziente Bearbeitung.",
    contactEyebrow: "KONTAKT",
    contactTitle: "Lassen Sie uns sprechen",
    contactText:
      "Erzählen Sie uns von Ihrem Projekt – wir finden die beste Luftlösung.",
    formTitle: "Nachricht senden",
    namePlaceholder: "Name",
    emailPlaceholder: "E-Mail",
    messagePlaceholder: "Ihr Projekt",
    submitButton: "Information anfragen",
    submittingButton: "Senden...",
    whatsappButton: "WhatsApp",
    sectorsEyebrow: "BEREICHE",
    sector1: "Film und Werbung",
    sector2: "Architektur und Immobilien",
    sector3: "Industrie",
    sector4: "Umwelt",
    sector5: "Sport",
    footerEyebrow: "KONTAKT",
    zone: "Mallorca · Balearen · Spanien",
    phone: "+34 634 562 634",
    email: "skyflickesp@gmail.com",
    instagram: "Instagram: @skyflickstudio",
    floatingWhatsapp: "WhatsApp",
    successTitle: "Gesendet",
    successText: "Danke. Wir melden uns bald.",
    errorTitle: "Fehler",
    errorText: "Bitte erneut versuchen.",
  },
};
function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 12a9 9 0 1 1-16.5 5.2L3 21l3.9-1.4A9 9 0 1 1 21 12Z"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 8.9c.25-.55.55-.65.92-.65h.68c.25 0 .52.04.72.52.2.48.68 1.68.74 1.8.08.18.12.36.02.58-.1.2-.16.3-.32.48-.16.16-.34.36-.48.48-.16.16-.32.32-.14.64.18.3.8 1.32 1.72 2.14 1.18 1.04 2.18 1.38 2.5 1.54.32.16.52.14.72-.08.22-.24.84-.98 1.06-1.32.22-.34.44-.28.74-.18.3.1 1.88.88 2.2 1.04.32.16.54.24.62.38.08.14.08.82-.2 1.6-.28.78-1.62 1.5-2.24 1.58-.58.08-1.34.12-2.16-.14-.5-.16-1.16-.38-2-.74-3.52-1.52-5.82-5.04-6-5.28-.18-.24-1.44-1.92-1.44-3.66 0-1.74.9-2.6 1.22-2.94Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21s-6-5.686-6-10a6 6 0 1 1 12 0c0 4.314-6 10-6 10z" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.09 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.62a2 2 0 0 1-.45 2.11L9 10a16 16 0 0 0 5 5l.55-1.28a2 2 0 0 1 2.11-.45c.84.29 1.72.5 2.62.62A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M4 6l8 7 8-7" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 900);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return isMobile;
}

function langButtonStyle(active: boolean): React.CSSProperties {
  return {
    background: "transparent",
    color: "#f5f5f5",
    border: "none",
    borderBottom: active ? "2px solid #f5f5f5" : "2px solid transparent",
    padding: "4px 2px 8px 2px",
    cursor: "pointer",
    fontSize: "14px",
    letterSpacing: "0.08em",
    transition: "border-color 180ms ease, opacity 180ms ease",
    opacity: active ? 1 : 0.72,
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };
}
function cardStyle(): React.CSSProperties {
  return {
    background: "#07131a",
    borderRadius: "10px",
    overflow: "hidden",
    transform: "translateY(0)",
    transition: "transform 220ms ease, box-shadow 220ms ease, filter 220ms ease",
    boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
  };
}

function FlagCatalonia() {
  return (
    <span
      style={{
        width: 18,
        height: 12,
        borderRadius: 2,
        display: "inline-block",
        background:
          "linear-gradient(to bottom, #f5c400 0%, #f5c400 16.66%, #c61d23 16.66%, #c61d23 33.33%, #f5c400 33.33%, #f5c400 50%, #c61d23 50%, #c61d23 66.66%, #f5c400 66.66%, #f5c400 83.33%, #c61d23 83.33%, #c61d23 100%)",
        boxShadow: "0 0 0 1px rgba(255,255,255,0.12) inset",
      }}
    />
  );
}

function LangFlag({ code }: { code: Lang }) {
  if (code === "en") return <span style={{ fontSize: 14 }}>🇬🇧</span>;
  if (code === "ca") return <FlagCatalonia />;
  if (code === "es") return <span style={{ fontSize: 14 }}>🇪🇸</span>;
  return <span style={{ fontSize: 14 }}>🇩🇪</span>;
}

function cleanContactText(text: string) {
  return text
    .replace("Area: ", "")
    .replace("Zona: ", "")
    .replace("Gebiet: ", "")
    .replace("Phone: ", "")
    .replace("Teléfono: ", "")
    .replace("Telèfon: ", "")
    .replace("Telefon: ", "")
    .replace("Email: ", "")
    .replace("Correo: ", "")
    .replace("Correu: ", "")
    .replace("E-Mail: ", "")
    .replace("Instagram: ", "");
}
export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const c = COPY[lang];
  const isMobile = useIsMobile();

  useEffect(() => {
    const inter = document.createElement("link");
    inter.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap";
    inter.rel = "stylesheet";
    document.head.appendChild(inter);

    const mono = document.createElement("link");
    mono.href =
      "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500&display=swap";
    mono.rel = "stylesheet";
    document.head.appendChild(mono);

    document.documentElement.lang = lang;

    return () => {
      if (document.head.contains(inter)) document.head.removeChild(inter);
      if (document.head.contains(mono)) document.head.removeChild(mono);
    };
  }, [lang]);

  const services = useMemo(
    () => [
      {
        title: c.service1Title,
        text: c.service1Text,
        footer: c.service1Footer,
        image:
          "https://plus.unsplash.com/premium_photo-1696273224432-51e74c998de2?q=80&w=1200&auto=format&fit=crop",
      },
      {
        title: c.service2Title,
        text: c.service2Text,
        footer: c.service2Footer,
        image:
          "https://aerocamaras.es/wp-content/uploads/2019/04/Presa-Aerocamaras.jpg",
      },
      {
        title: c.service3Title,
        text: c.service3Text,
        footer: c.service3Footer,
        image:
          "https://eos.com/wp-content/uploads/2024/03/multispectral-image-index-ndvi.png.webp",
      },
    ],
    [c]
  );

  const stats = useMemo(
    () => [
      { title: c.stat1Title, text: c.stat1Text },
      { title: c.stat2Title, text: c.stat2Text },
      { title: c.stat3Title, text: c.stat3Text },
      { title: c.stat4Title, text: c.stat4Text },
    ],
    [c]
  );

  const sectorsLine = `${c.sector1} · ${c.sector2} · ${c.sector3} · ${c.sector4} · ${c.sector5}`;
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: "New Skyflick contact",
          language: lang,
        }),
      });

      if (response.ok) {
        setFormStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        return;
      }

      setFormStatus("error");
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <>
      <style>{`
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; }
        body {
          margin: 0;
          background: #030607;
          color: #f5f5f5;
          font-family: Inter, system-ui, sans-serif;
        }
        a { color: inherit; text-decoration: none; }
        a:visited { color: inherit; }
        input, textarea, button { font: inherit; }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.45); }
        input:focus, textarea:focus {
          outline: none;
          border-color: rgba(213,186,114,0.8) !important;
          box-shadow: 0 0 0 3px rgba(213,186,114,0.12);
        }
        .fade-up { animation: fadeUp 700ms ease both; }
        .fade-up-delay { animation: fadeUp 950ms ease both; }
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(0,0,0,0.28);
          filter: brightness(1.03);
        }
        .button-polish {
          transition: transform 180ms ease, background 180ms ease, border-color 180ms ease, box-shadow 180ms ease, opacity 180ms ease;
        }
        .button-polish:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.85);
          box-shadow: 0 0 18px rgba(213,186,114,0.18);
        }
                .footer-link {
          position: relative;
          color: #e5e7eb;
          text-decoration: none;
          opacity: 0.85;
          transition: all 0.25s ease;
        }
        .footer-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -3px;
          width: 0%;
          height: 1px;
          background: #d5ba72;
          transition: width 0.3s ease;
        }
        .footer-link:hover {
          color: #d5ba72;
          opacity: 1;
          transform: translateX(2px);
          text-shadow: 0 0 6px rgba(213, 186, 114, 0.35);
        }
        .footer-link:hover::after { width: 100%; }
        .floating-whatsapp {
          position: fixed;
          right: 18px;
          bottom: 18px;
          z-index: 50;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          color: white;
          background: #0b1418;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 999px;
          padding: 12px 16px;
          box-shadow: 0 12px 24px rgba(0,0,0,0.28);
          transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
        }
        .floating-whatsapp:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 32px rgba(0,0,0,0.35);
          background: #0f1b20;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <a className="floating-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
        <WhatsAppIcon size={17} />
        {c.floatingWhatsapp}
      </a>

      <div className="fade-up" style={{ fontFamily: "Inter, sans-serif", background: "#030607", color: "#f5f5f5" }}>
        <section
          style={{
            minHeight: isMobile ? "auto" : "820px",
            position: "relative",
            background:
              "linear-gradient(90deg, rgba(2,7,10,0.88) 0%, rgba(2,7,10,0.62) 36%, rgba(2,7,10,0.22) 62%), url('https://images.pexels.com/photos/36532574/pexels-photo-36532574.jpeg') center/cover no-repeat",
          }}
        >
                    <div
            style={{
              maxWidth: "1520px",
              margin: "0 auto",
              padding: isMobile ? "24px 20px" : "34px 54px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "20px",
              flexDirection: isMobile ? "column" : "row",
            }}
          >
            <div>
              <div style={{ fontSize: isMobile ? "52px" : "88px", lineHeight: 0.9, fontWeight: 800, letterSpacing: "-0.06em" }}>
                Skyflick
              </div>
              <div style={{ fontSize: isMobile ? "14px" : "22px", letterSpacing: isMobile ? "0.28em" : "0.42em", marginTop: "10px", marginLeft: isMobile ? "68px" : "150px", opacity: 0.94 }}>
                STUDIO
              </div>
            </div>

            <div style={{ display: "flex", alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? "18px" : "28px", flexDirection: isMobile ? "column" : "row", width: isMobile ? "100%" : "auto" }}>
              <div style={{ display: "flex", gap: isMobile ? "16px" : "22px", flexWrap: "wrap" }}>
                {(["en", "ca", "es", "de"] as Lang[]).map((code) => (
                  <button key={code} onClick={() => setLang(code)} style={langButtonStyle(lang === code)}>
                    <LangFlag code={code} />
                    {code.toUpperCase()}
                  </button>
                ))}
              </div>

              <a className="button-polish" href="#contacte" style={{ color: "#fff", textDecoration: "none", border: "1px solid rgba(255,255,255,0.55)", padding: isMobile ? "14px 20px" : "16px 28px", borderRadius: "12px", fontSize: isMobile ? "16px" : "18px", width: isMobile ? "100%" : "auto", textAlign: "center" }}>
                {c.navContact}
              </a>
            </div>
          </div>

          <div style={{ maxWidth: "1520px", margin: "0 auto", padding: isMobile ? "40px 20px 74px 20px" : "90px 54px 120px 54px" }}>
            <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
              <h1 style={{ fontSize: isMobile ? "44px" : "78px", lineHeight: 1.03, fontWeight: 500, letterSpacing: "-0.055em", margin: 0 }}>
                {c.heroTitle}
              </h1>

              <p style={{ fontSize: isMobile ? "18px" : "22px", lineHeight: 1.55, color: "rgba(255,255,255,0.86)", maxWidth: "760px", margin: "22px auto 0 auto" }}>
                {c.heroText}
              </p>

              <div style={{ marginTop: "14px", fontSize: isMobile ? "13px" : "14px", letterSpacing: "0.12em", color: "rgba(255,255,255,0.58)", textTransform: "uppercase" }}>
                {c.heroSmallText}
              </div>

              <div style={{ marginTop: "32px", display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                <a href="#contacte" className="button-polish" style={{ color: "#fff", textDecoration: "none", border: "1px solid rgba(255,255,255,0.65)", padding: isMobile ? "14px 22px" : "16px 28px", borderRadius: "12px" }}>
                  {c.navContact}
                </a>

                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="button-polish" style={{ display: "inline-flex", alignItems: "center", gap: "10px", color: "#fff", textDecoration: "none", border: "1px solid rgba(255,255,255,0.65)", padding: isMobile ? "14px 22px" : "16px 28px", borderRadius: "12px" }}>
                  <WhatsAppIcon size={18} />
                  {c.whatsappButton}
                </a>
              </div>
            </div>
          </div>
        </section>
                <section style={{ background: "#041015", padding: isMobile ? "22px 0 36px 0" : "26px 0 56px 0", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ maxWidth: "1520px", margin: "0 auto", padding: isMobile ? "0 20px" : "0 54px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: isMobile ? "22px" : "28px" }}>
              <div style={{ color: "#d8d0b0", fontSize: isMobile ? "13px" : "15px", letterSpacing: "0.2em" }}>{c.servicesEyebrow}</div>
              <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.16)" }} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: isMobile ? "18px" : "28px" }}>
              {services.map((card) => (
                <div key={card.title} className="card-hover fade-up-delay" style={cardStyle()}>
                  <div
                    role="img"
                    aria-label={`${card.title} Mallorca drone services`}
                    style={{
                      height: isMobile ? "220px" : "278px",
                      background: `linear-gradient(rgba(0,0,0,0.16), rgba(0,0,0,0.24)), url('${card.image}') center/cover no-repeat`,
                    }}
                  />
                  <div style={{ padding: isMobile ? "20px" : "26px 22px 24px 22px" }}>
                    <h3 style={{ fontSize: isMobile ? "22px" : "24px", fontWeight: 500, margin: "0 0 12px 0", letterSpacing: "-0.03em" }}>{card.title}</h3>
                    <p style={{ color: "rgba(255,255,255,0.84)", fontSize: isMobile ? "16px" : "17px", lineHeight: 1.62, margin: 0 }}>{card.text}</p>
                    <div style={{ marginTop: "18px", color: "#d5ba72", fontSize: isMobile ? "12px" : "14px", letterSpacing: "0.12em" }}>{card.footer}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: isMobile ? "30px" : "42px" }}>
              <div style={{ color: "#d8d0b0", fontSize: isMobile ? "13px" : "15px", letterSpacing: "0.2em", marginBottom: "18px" }}>{c.statsEyebrow}</div>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)", gap: isMobile ? "18px" : "36px" }}>
                {stats.map((item) => (
                  <div key={item.title}>
                    <div style={{ color: "#f0d38c", fontSize: isMobile ? "13px" : "15px", letterSpacing: "0.08em", marginBottom: "10px" }}>{item.title}</div>
                    <div style={{ color: "rgba(255,255,255,0.72)", fontSize: isMobile ? "15px" : "16px", lineHeight: 1.55 }}>{item.text}</div>
                  </div>
                ))}
              </div>
            </div>

            <p style={{ fontSize: "13px", lineHeight: 1.7, color: "rgba(255,255,255,0.44)", maxWidth: "860px", marginTop: "34px" }}>
              {c.seoText}
            </p>
          </div>
        </section>
                <section
          id="contacte"
          style={{
            minHeight: isMobile ? "auto" : "560px",
            background:
              "linear-gradient(90deg, rgba(3,12,16,0.84) 0%, rgba(3,12,16,0.5) 35%, rgba(3,12,16,0.12) 62%), url('https://images.pexels.com/photos/1173777/pexels-photo-1173777.jpeg?auto=compress&cs=tinysrgb&w=1800') center/cover no-repeat",
            padding: isMobile ? "44px 0" : "70px 0",
          }}
        >
          <div
            style={{
              maxWidth: "1520px",
              margin: "0 auto",
              padding: isMobile ? "0 20px" : "0 54px",
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1.05fr 0.95fr",
              gap: isMobile ? "24px" : "40px",
              alignItems: "start",
            }}
          >
            <div>
              <div
                style={{
                  color: "#d5ba72",
                  fontSize: isMobile ? "13px" : "14px",
                  letterSpacing: "0.18em",
                  marginBottom: "16px",
                }}
              >
                {c.contactEyebrow}
              </div>

              <h2
                style={{
                  fontSize: isMobile ? "34px" : "58px",
                  lineHeight: 1.08,
                  fontWeight: 500,
                  letterSpacing: "-0.05em",
                  maxWidth: "720px",
                  margin: 0,
                }}
              >
                {c.contactTitle}
              </h2>

              <p
                style={{
                  color: "rgba(255,255,255,0.78)",
                  fontSize: isMobile ? "17px" : "18px",
                  lineHeight: 1.7,
                  maxWidth: "740px",
                  marginTop: "20px",
                }}
              >
                {c.contactText}
              </p>

              {formStatus === "success" && (
                <div
                  style={{
                    marginTop: "22px",
                    background: "rgba(15, 50, 36, 0.72)",
                    border: "1px solid rgba(99, 179, 132, 0.35)",
                    borderRadius: "12px",
                    padding: "16px 18px",
                    maxWidth: "560px",
                  }}
                >
                  <div style={{ color: "#c6f6d5", fontWeight: 600, marginBottom: 6 }}>
                    {c.successTitle}
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.6 }}>
                    {c.successText}
                  </div>
                </div>
              )}

              {formStatus === "error" && (
                <div
                  style={{
                    marginTop: "22px",
                    background: "rgba(74, 20, 20, 0.72)",
                    border: "1px solid rgba(245, 101, 101, 0.28)",
                    borderRadius: "12px",
                    padding: "16px 18px",
                    maxWidth: "560px",
                  }}
                >
                  <div style={{ color: "#feb2b2", fontWeight: 600, marginBottom: 6 }}>
                    {c.errorTitle}
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.6 }}>
                    {c.errorText}
                  </div>
                </div>
              )}
            </div>

            <div
              style={{
                background: "rgba(4,10,13,0.76)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: isMobile ? "18px" : "24px",
                backdropFilter: "blur(6px)",
              }}
            >
              <div
                style={{
                  color: "#d5ba72",
                  fontSize: isMobile ? "13px" : "14px",
                  letterSpacing: "0.18em",
                  marginBottom: "14px",
                }}
              >
                {c.formTitle}
              </div>

              <form onSubmit={handleSubmit} style={{ display: "grid", gap: "12px" }}>
                <input
                  type="text"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={c.namePlaceholder}
                  style={{
                    width: "100%",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#fff",
                    borderRadius: "10px",
                    padding: "14px 16px",
                    fontSize: "16px",
                  }}
                />

                <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={c.emailPlaceholder}
                  style={{
                    width: "100%",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#fff",
                    borderRadius: "10px",
                    padding: "14px 16px",
                    fontSize: "16px",
                  }}
                />

                <textarea
                  name="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={c.messagePlaceholder}
                  style={{
                    width: "100%",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#fff",
                    borderRadius: "10px",
                    padding: "14px 16px",
                    fontSize: "16px",
                    resize: "vertical",
                    fontFamily: "Inter, sans-serif",
                  }}
                />
                                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    flexWrap: "wrap",
                    marginTop: "4px",
                  }}
                >
                  <button
                    type="submit"
                    className="button-polish"
                    disabled={formStatus === "submitting"}
                    style={{
                      display: "inline-block",
                      color: "#fff",
                      background: "transparent",
                      border: "1px solid rgba(255,255,255,0.5)",
                      padding: isMobile ? "14px 18px" : "16px 26px",
                      borderRadius: "10px",
                      fontSize: isMobile ? "17px" : "18px",
                      textAlign: "center",
                      cursor: formStatus === "submitting" ? "default" : "pointer",
                      opacity: formStatus === "submitting" ? 0.7 : 1,
                    }}
                  >
                    {formStatus === "submitting" ? c.submittingButton : c.submitButton}
                  </button>

                  <a
                    className="button-polish"
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      color: "#fff",
                      textDecoration: "none",
                      border: "1px solid rgba(255,255,255,0.5)",
                      padding: isMobile ? "14px 18px" : "16px 26px",
                      borderRadius: "10px",
                      fontSize: isMobile ? "17px" : "18px",
                      textAlign: "center",
                    }}
                  >
                    <WhatsAppIcon size={18} />
                    {c.whatsappButton}
                  </a>
                </div>
              </form>

              <div
                style={{
                  marginTop: "22px",
                  paddingTop: "18px",
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{
                    color: "rgba(255,255,255,0.62)",
                    fontSize: isMobile ? "13px" : "14px",
                    letterSpacing: "0.18em",
                    marginBottom: "12px",
                  }}
                >
                  {c.sectorsEyebrow}
                </div>

                <div
                  style={{
                    color: "rgba(255,255,255,0.72)",
                    fontSize: isMobile ? "14px" : "16px",
                    lineHeight: 1.8,
                    letterSpacing: "0.03em",
                  }}
                >
                  {sectorsLine}
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer
          style={{
            background: "#02080b",
            padding: isMobile ? "32px 0" : "40px 0",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              maxWidth: "1520px",
              margin: "0 auto",
              padding: isMobile ? "0 20px" : "0 54px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: isMobile ? "flex-start" : "end",
              gap: "30px",
              flexWrap: "wrap",
              flexDirection: isMobile ? "column" : "row",
            }}
          >
            <div>
              <div
                style={{
                  color: "#d5ba72",
                  fontSize: isMobile ? "12px" : "13px",
                  letterSpacing: "0.25em",
                  marginBottom: "18px",
                  fontWeight: 500,
                }}
              >
                {c.footerEyebrow}
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "#e5e7eb",
                  fontSize: isMobile ? "15px" : "17px",
                  letterSpacing: "0.03em",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <LocationIcon />
                  <span>{cleanContactText(c.zone)}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <PhoneIcon />
                  <a href="tel:+34634562634" className="footer-link">
                    {cleanContactText(c.phone)}
                  </a>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <MailIcon />
                  <a
                    href="mailto:skyflickesp@gmail.com?subject=Drone%20Project%20Mallorca&body=Hi%20Skyflick%20Studio,%20I%20am%20interested%20in%20your%20drone%20services%20in%20Mallorca."
                    className="footer-link"
                  >
                    {cleanContactText(c.email)}
                  </a>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <InstagramIcon />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="footer-link"
                  >
                    {cleanContactText(c.instagram)}
                  </a>
                </div>

                <div style={{ fontSize: "12px", opacity: 0.4, marginTop: "2px" }}>
                  Drone services Mallorca · Aerial filming · Drone inspection · Balearic Islands
                </div>
              </div>
            </div>

            <div style={{ textAlign: isMobile ? "left" : "right" }}>
              <div
                style={{
                  fontSize: isMobile ? "48px" : "86px",
                  lineHeight: 0.9,
                  fontWeight: 800,
                  letterSpacing: "-0.06em",
                  color: "rgba(255,255,255,0.12)",
                }}
              >
                Skyflick
              </div>

              <div
                style={{
                  fontSize: isMobile ? "13px" : "18px",
                  letterSpacing: isMobile ? "0.28em" : "0.42em",
                  color: "rgba(255,255,255,0.2)",
                  marginTop: "10px",
                }}
              >
                STUDIO
              </div>

              <div
                style={{
                  marginTop: "18px",
                  color: "rgba(255,255,255,0.4)",
                  fontSize: isMobile ? "14px" : "16px",
                }}
              >
                © 2024 Skyflick Studio
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
