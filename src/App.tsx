import { useEffect, useMemo, useState } from "react";

type Lang = "ca" | "es" | "en" | "de";

type Copy = {
  navContact: string;
  heroTitle: string;
  heroText: string;
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
  contactFormTitle: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  featureEmailButton: string;
  featureWhatsappButton: string;
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
  formSuccessHint: string;
};

const COPY: Record<Lang, Copy> = {
  ca: {
    navContact: "Contacta",
    heroTitle: "Imatge aèria i anàlisi visual amb drons",
    heroText:
      "Serveis audiovisuals, inspecció tècnica i cartografia multiespectral per a cinema, edificis, indústria, vegetació i costa.",
    servicesEyebrow: "ELS NOSTRES SERVEIS",
    service1Title: "Serveis audiovisuals amb dron",
    service1Text:
      "Vídeo i fotografia aèria en 4K per a cinema, publicitat i projectes que necessiten una imatge cuidada des de l'aire.",
    service1Footer: "VIL·LES · HOTELS · PUBLICITAT",
    service2Title: "Inspecció tècnica",
    service2Text:
      "Revisió visual d'edificis, cobertes, estructures i zones industrials per detectar incidències amb rapidesa i seguretat.",
    service2Footer: "INDÚSTRIA · INFRAESTRUCTURES",
    service3Title: "Mapes multiespectrals",
    service3Text:
      "Anàlisi de vegetació, costa i superfícies tècniques amb sensors avançats i captura especialitzada.",
    service3Footer: "VEGETACIÓ · COSTA · ANÀLISI",
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
      "Si necessites imatge aèria, inspecció tècnica o anàlisi multiespectral, escriu-nos i t'ajudarem a definir la millor solució.",
    contactFormTitle: "Escriu-nos directament",
    namePlaceholder: "Nom",
    emailPlaceholder: "Correu electrònic",
    messagePlaceholder: "Explica'ns el teu projecte",
    featureEmailButton: "Enviar formulari",
    featureWhatsappButton: "WhatsApp",
    sectorsEyebrow: "ÀREES / SECTORS",
    sector1: "Cinema i publicitat",
    sector2: "Arquitectura i immobiliària",
    sector3: "Indústria i infraestructures",
    sector4: "Medi ambient i territori",
    sector5: "Esport i vegetació",
    footerEyebrow: "CONTACTE",
    zone: "Zona: Felanitx · Mallorca · Illes Balears",
    phone: "Telèfon: +34 634 562 634",
    email: "Correu: skyflickesp@gmail.com",
    instagram: "Instagram: @_Skyflick_",
    floatingWhatsapp: "WhatsApp",
    formSuccessHint: "Et respondrem al més aviat possible.",
  },
  es: {
    navContact: "Contacto",
    heroTitle: "Imagen aérea y análisis visual con drones",
    heroText:
      "Servicios audiovisuales, inspección técnica y cartografía multiespectral para cine, edificios, industria, vegetación y costa.",
    servicesEyebrow: "SERVICIOS",
    service1Title: "Servicios audiovisuales con dron",
    service1Text:
      "Vídeo y fotografía aérea en 4K para cine, publicidad y proyectos que necesitan una imagen cuidada desde el aire.",
    service1Footer: "VILLAS · HOTELES · PUBLICIDAD",
    service2Title: "Inspección técnica",
    service2Text:
      "Revisión visual de edificios, cubiertas, estructuras y zonas industriales para detectar incidencias con rapidez y seguridad.",
    service2Footer: "INDUSTRIA · INFRAESTRUCTURAS",
    service3Title: "Mapas multiespectrales",
    service3Text:
      "Análisis de vegetación, costa y superficies técnicas con sensores avanzados y captura especializada.",
    service3Footer: "VEGETACIÓN · COSTA · ANÁLISIS",
    statsEyebrow: "PUNTOS CLAVE",
    stat1Title: "VUELOS SEGUROS",
    stat1Text: "Operaciones certificadas y cumplimiento normativo.",
    stat2Title: "CALIDAD 4K",
    stat2Text: "Captura de alta resolución para resultados profesionales.",
    stat3Title: "DATOS PRECISOS",
    stat3Text: "Tecnología avanzada para análisis fiable y visual.",
    stat4Title: "ENTREGA ÁGIL",
    stat4Text: "Procesamiento eficiente y entrega adaptada a cada proyecto.",
    contactEyebrow: "CONTACTO",
    contactTitle: "Hablemos de tu proyecto",
    contactText:
      "Si necesitas imagen aérea, inspección técnica o análisis multiespectral, escríbenos y te ayudaremos a definir la mejor solución.",
    contactFormTitle: "Escríbenos directamente",
    namePlaceholder: "Nombre",
    emailPlaceholder: "Correo electrónico",
    messagePlaceholder: "Cuéntanos tu proyecto",
    featureEmailButton: "Enviar formulario",
    featureWhatsappButton: "WhatsApp",
    sectorsEyebrow: "ÁREAS / SECTORES",
    sector1: "Cine y publicidad",
    sector2: "Arquitectura e inmobiliaria",
    sector3: "Industria e infraestructuras",
    sector4: "Medio ambiente y territorio",
    sector5: "Deporte y vegetación",
    footerEyebrow: "CONTACTO",
    zone: "Zona: Felanitx · Mallorca · Islas Baleares",
    phone: "Teléfono: +34 634 562 634",
    email: "Correo: skyflickesp@gmail.com",
    instagram: "Instagram: @_Skyflick_",
    floatingWhatsapp: "WhatsApp",
    formSuccessHint: "Te responderemos lo antes posible.",
  },
  en: {
    navContact: "Contact",
    heroTitle: "Aerial imaging and visual analysis with drones",
    heroText:
      "Audiovisual services, technical inspection and multispectral mapping for film, buildings, industry, vegetation and coastline.",
    servicesEyebrow: "SERVICES",
    service1Title: "Aerial audiovisual services",
    service1Text:
      "4K aerial video and photography for film, advertising and projects that need a carefully crafted image from above.",
    service1Footer: "VILLAS · HOTELS · ADVERTISING",
    service2Title: "Technical inspection",
    service2Text:
      "Visual review of buildings, roofs, structures and industrial areas to detect issues quickly and safely.",
    service2Footer: "INDUSTRY · INFRASTRUCTURE",
    service3Title: "Multispectral mapping",
    service3Text:
      "Vegetation, coastline and technical surface analysis with advanced sensors and specialized capture.",
    service3Footer: "VEGETATION · COASTLINE · ANALYSIS",
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
      "If you need aerial imaging, technical inspection or multispectral analysis, write to us and we will help define the best solution.",
    contactFormTitle: "Write to us directly",
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    messagePlaceholder: "Tell us about your project",
    featureEmailButton: "Send form",
    featureWhatsappButton: "WhatsApp",
    sectorsEyebrow: "AREAS / SECTORS",
    sector1: "Film and advertising",
    sector2: "Architecture and real estate",
    sector3: "Industry and infrastructure",
    sector4: "Environment and territory",
    sector5: "Sport and vegetation",
    footerEyebrow: "CONTACT",
    zone: "Area: Felanitx · Mallorca · Balearic Islands",
    phone: "Phone: +34 634 562 634",
    email: "Email: skyflickesp@gmail.com",
    instagram: "Instagram: @_Skyflick_",
    floatingWhatsapp: "WhatsApp",
    formSuccessHint: "We will get back to you as soon as possible.",
  },
  de: {
    navContact: "Kontakt",
    heroTitle: "Luftbild und visuelle Analyse mit Drohnen",
    heroText:
      "Audiovisuelle Dienstleistungen, technische Inspektion und multispektrale Kartierung für Film, Gebäude, Industrie, Vegetation und Küste.",
    servicesEyebrow: "LEISTUNGEN",
    service1Title: "Audiovisuelle Drohnendienste",
    service1Text:
      "4K-Luftvideo und -fotografie für Film, Werbung und Projekte mit hochwertigem visuellen Anspruch.",
    service1Footer: "VILLEN · HOTELS · WERBUNG",
    service2Title: "Technische Inspektion",
    service2Text:
      "Visuelle Prüfung von Gebäuden, Dächern, Strukturen und Industrieflächen mit Schnelligkeit und Sicherheit.",
    service2Footer: "INDUSTRIE · INFRASTRUKTUR",
    service3Title: "Multispektrale Karten",
    service3Text:
      "Analyse von Vegetation, Küste und technischen Flächen mit fortschrittlichen Sensoren.",
    service3Footer: "VEGETATION · KÜSTE · ANALYSE",
    statsEyebrow: "KERNPUNKTE",
    stat1Title: "SICHERE FLÜGE",
    stat1Text: "Zertifizierte Einsätze und Normkonformität.",
    stat2Title: "4K-QUALITÄT",
    stat2Text: "Hochauflösende Erfassung für professionelle Ergebnisse.",
    stat3Title: "PRÄZISE DATEN",
    stat3Text: "Fortschrittliche Technologie für zuverlässige Analysen.",
    stat4Title: "SCHNELLE LIEFERUNG",
    stat4Text: "Effiziente Bearbeitung je nach Projekt.",
    contactEyebrow: "KONTAKT",
    contactTitle: "Erzähl uns von deinem Projekt",
    contactText:
      "Wenn du Luftbild, technische Inspektion oder multispektrale Analyse brauchst, schreib uns und wir definieren die beste Lösung.",
    contactFormTitle: "Schreib uns direkt",
    namePlaceholder: "Name",
    emailPlaceholder: "E-Mail",
    messagePlaceholder: "Erzähl uns von deinem Projekt",
    featureEmailButton: "Formular senden",
    featureWhatsappButton: "WhatsApp",
    sectorsEyebrow: "BEREICHE / SEKTOREN",
    sector1: "Film und Werbung",
    sector2: "Architektur und Immobilien",
    sector3: "Industrie und Infrastruktur",
    sector4: "Umwelt und Territorium",
    sector5: "Sport und Vegetation",
    footerEyebrow: "KONTAKT",
    zone: "Gebiet: Felanitx · Mallorca · Balearen",
    phone: "Telefon: +34 634 562 634",
    email: "E-Mail: skyflickesp@gmail.com",
    instagram: "Instagram: @_Skyflick_",
    floatingWhatsapp: "WhatsApp",
    formSuccessHint: "Wir melden uns so schnell wie möglich.",
  },
};

export default function App() {
  const [lang, setLang] = useState<Lang>("ca");
  const c = COPY[lang];

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

  const isMobile = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 900;
  }, []);

  const services = [
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
  ];

  const stats = [
    { title: c.stat1Title, text: c.stat1Text },
    { title: c.stat2Title, text: c.stat2Text },
    { title: c.stat3Title, text: c.stat3Text },
    { title: c.stat4Title, text: c.stat4Text },
  ];

  const sectorsLine = `${c.sector1} · ${c.sector2} · ${c.sector3} · ${c.sector4} · ${c.sector5}`;

  return (
    <>
      <style>{`
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; }

        body {
          margin: 0;
          background: #030607;
          color: #f5f5f5;
          font-family: Inter, sans-serif;
        }

        input, textarea, button {
          font: inherit;
        }

        input::placeholder, textarea::placeholder {
          color: rgba(255,255,255,0.45);
        }

        input:focus, textarea:focus {
          outline: none;
          border-color: rgba(213,186,114,0.8) !important;
          box-shadow: 0 0 0 3px rgba(213,186,114,0.12);
        }

        .fade-up { animation: fadeUp 700ms ease both; }
        .fade-up-delay { animation: fadeUp 950ms ease both; }

        .card-hover {
          transition: transform 220ms ease, box-shadow 220ms ease, filter 220ms ease;
        }
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(0,0,0,0.28);
          filter: brightness(1.03);
        }

        .button-polish {
          transition: transform 180ms ease, background 180ms ease, border-color 180ms ease, box-shadow 180ms ease, opacity 180ms ease;
          box-shadow: 0 0 0 rgba(213,186,114,0);
        }
        .button-polish:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.85);
          box-shadow: 0 0 18px rgba(213,186,114,0.18);
        }

        .link-polish {
          transition: opacity 180ms ease;
        }
        .link-polish:hover {
          opacity: 0.82;
        }

        .floating-whatsapp {
          position: fixed;
          right: 18px;
          bottom: 18px;
          z-index: 50;
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

      <a
        className="floating-whatsapp"
        href="https://wa.me/34634562634?text=Hola%20Skyflick,%20me%20interesa%20vuestro%20servicio"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        {c.floatingWhatsapp}
      </a>

      <div
        className="fade-up"
        style={{
          fontFamily: "Inter, sans-serif",
          background: "#030607",
          color: "#f5f5f5",
        }}
      >
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
              <div
                style={{
                  fontSize: isMobile ? "52px" : "88px",
                  lineHeight: 0.9,
                  fontWeight: 800,
                  letterSpacing: "-0.06em",
                }}
              >
                Skyflick
              </div>
              <div
                style={{
                  fontSize: isMobile ? "14px" : "22px",
                  letterSpacing: isMobile ? "0.28em" : "0.42em",
                  marginTop: "10px",
                  marginLeft: isMobile ? "68px" : "150px",
                  opacity: 0.94,
                }}
              >
                STUDIO
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: isMobile ? "flex-start" : "center",
                gap: isMobile ? "18px" : "28px",
                flexDirection: isMobile ? "column" : "row",
                width: isMobile ? "100%" : "auto",
              }}
            >
              <div style={{ display: "flex", gap: isMobile ? "16px" : "22px", flexWrap: "wrap" }}>
                <button onClick={() => setLang("ca")} style={langButtonStyle(lang === "ca")}>
                  CA
                </button>
                <button onClick={() => setLang("es")} style={langButtonStyle(lang === "es")}>
                  ES
                </button>
                <button onClick={() => setLang("en")} style={langButtonStyle(lang === "en")}>
                  EN
                </button>
                <button onClick={() => setLang("de")} style={langButtonStyle(lang === "de")}>
                  DE
                </button>
              </div>

              <a
                className="button-polish"
                href="#contacte"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.55)",
                  padding: isMobile ? "14px 20px" : "16px 28px",
                  borderRadius: "12px",
                  fontSize: isMobile ? "16px" : "18px",
                  width: isMobile ? "100%" : "auto",
                  textAlign: "center",
                  boxSizing: "border-box",
                }}
              >
                {c.navContact}
              </a>
            </div>
          </div>

          <div
            style={{
              maxWidth: "1520px",
              margin: "0 auto",
              padding: isMobile ? "8px 20px 36px 20px" : "18px 54px 54px 54px",
            }}
          >
            <div
              style={{
                maxWidth: isMobile ? "100%" : "760px",
                marginTop: isMobile ? "18px" : "34px",
              }}
            >
              <h1
                style={{
                  fontSize: isMobile ? "40px" : "68px",
                  lineHeight: 1.05,
                  fontWeight: 500,
                  letterSpacing: "-0.05em",
                  margin: 0,
                }}
              >
                {c.heroTitle}
              </h1>
              <p
                style={{
                  fontSize: isMobile ? "18px" : "22px",
                  lineHeight: 1.55,
                  color: "rgba(255,255,255,0.86)",
                  maxWidth: isMobile ? "100%" : "760px",
                  marginTop: "20px",
                }}
              >
                {c.heroText}
              </p>
            </div>
          </div>
        </section>

        <section
          style={{
            background: "#041015",
            padding: isMobile ? "22px 0 36px 0" : "26px 0 56px 0",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              maxWidth: "1520px",
              margin: "0 auto",
              padding: isMobile ? "0 20px" : "0 54px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                marginBottom: isMobile ? "22px" : "28px",
              }}
            >
              <div
                style={{
                  color: "#d8d0b0",
                  fontSize: isMobile ? "13px" : "15px",
                  letterSpacing: "0.2em",
                }}
              >
                {c.servicesEyebrow}
              </div>
              <div
                style={{
                  flex: 1,
                  height: "1px",
                  background: "rgba(255,255,255,0.16)",
                }}
              />
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
                gap: isMobile ? "18px" : "28px",
              }}
            >
              {services.map((card) => (
                <div key={card.title} className="card-hover fade-up-delay" style={cardStyle()}>
                  <div
                    style={{
                      height: isMobile ? "220px" : "278px",
                      background: `linear-gradient(rgba(0,0,0,0.16), rgba(0,0,0,0.24)), url('${card.image}') center/cover no-repeat`,
                    }}
                  />
                  <div style={{ padding: isMobile ? "20px" : "26px 22px 24px 22px" }}>
                    <h3
                      style={{
                        fontSize: isMobile ? "22px" : "24px",
                        fontWeight: 500,
                        margin: "0 0 12px 0",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.84)",
                        fontSize: isMobile ? "16px" : "17px",
                        lineHeight: 1.62,
                        margin: 0,
                      }}
                    >
                      {card.text}
                    </p>
                    <div
                      style={{
                        marginTop: "18px",
                        color: "#d5ba72",
                        fontSize: isMobile ? "12px" : "14px",
                        letterSpacing: "0.12em",
                      }}
                    >
                      {card.footer}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: isMobile ? "30px" : "42px",
              }}
            >
              <div
                style={{
                  color: "#d8d0b0",
                  fontSize: isMobile ? "13px" : "15px",
                  letterSpacing: "0.2em",
                  marginBottom: "18px",
                }}
              >
                {c.statsEyebrow}
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
                  gap: isMobile ? "18px" : "36px",
                }}
              >
                {stats.map((item) => (
                  <div key={item.title}>
                    <div
                      style={{
                        color: "#f0d38c",
                        fontSize: isMobile ? "13px" : "15px",
                        letterSpacing: "0.08em",
                        marginBottom: "10px",
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        color: "rgba(255,255,255,0.72)",
                        fontSize: isMobile ? "15px" : "16px",
                        lineHeight: 1.55,
                      }}
                    >
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
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

              <div
                style={{
                  marginTop: "24px",
                  color: "rgba(255,255,255,0.72)",
                  fontSize: isMobile ? "15px" : "16px",
                }}
              >
                {c.formSuccessHint}
              </div>
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
                {c.contactFormTitle}
              </div>

              <form
                action="https://formsubmit.co/skyflickesp@gmail.com"
                method="POST"
                style={{ display: "grid", gap: "12px" }}
              >
                <input type="hidden" name="_subject" value="Nou projecte - Skyflick Studio" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <input
                  type="text"
                  name="name"
                  required
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
                    style={{
                      display: "inline-block",
                      color: "#fff",
                      background: "transparent",
                      border: "1px solid rgba(255,255,255,0.5)",
                      padding: isMobile ? "14px 18px" : "16px 26px",
                      borderRadius: "10px",
                      fontSize: isMobile ? "17px" : "18px",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    {c.featureEmailButton}
                  </button>

                  <a
                    className="button-polish"
                    href="https://wa.me/34634562634?text=Hola%20Skyflick,%20me%20interesa%20vuestro%20servicio"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-block",
                      color: "#fff",
                      textDecoration: "none",
                      border: "1px solid rgba(255,255,255,0.5)",
                      padding: isMobile ? "14px 18px" : "16px 26px",
                      borderRadius: "10px",
                      fontSize: isMobile ? "17px" : "18px",
                      textAlign: "center",
                      boxSizing: "border-box",
                    }}
                  >
                    {c.featureWhatsappButton}
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

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#e5e7eb",
                    fontSize: isMobile ? "15px" : "17px",
                    letterSpacing: "0.03em",
                  }}
                >
                  {c.zone}
                </div>

                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#e5e7eb",
                    fontSize: isMobile ? "15px" : "17px",
                    letterSpacing: "0.03em",
                  }}
                >
                  {c.phone}
                </div>

                <a
                  href="mailto:skyflickesp@gmail.com?subject=Nou%20projecte%20Skyflick"
                  className="link-polish"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#e5e7eb",
                    fontSize: isMobile ? "15px" : "17px",
                    textDecoration: "none",
                    letterSpacing: "0.03em",
                  }}
                >
                  {c.email}
                </a>

                <a
                  className="link-polish"
                  href="https://instagram.com/_Skyflick_"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#e5e7eb",
                    fontSize: isMobile ? "15px" : "17px",
                    textDecoration: "none",
                    letterSpacing: "0.03em",
                  }}
                >
                  {c.instagram}
                </a>
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
