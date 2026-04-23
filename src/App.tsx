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
  featureEyebrow: string;
  featureTitle: string;
  featureText: string;
  featureEmailButton: string;
  featureWhatsappButton: string;
  sector1: string;
  sector2: string;
  sector3: string;
  sector4: string;
  sector5: string;
  contactEyebrow: string;
  zone: string;
  phone: string;
  email: string;
  instagram: string;
  stat1Title: string;
  stat1Text: string;
  stat2Title: string;
  stat2Text: string;
  stat3Title: string;
  stat3Text: string;
  stat4Title: string;
  stat4Text: string;
};

const COPY: Record<Lang, Copy> = {
  ca: {
    navContact: "Contacta",
    heroTitle: "Imatge aèria i anàlisi visual amb drons",
    heroText:
      "Serveis audiovisuals, inspecció tècnica i cartografia multiespectral per a cinema, edificis, indústria, golf, vegetació i costa.",
    servicesEyebrow: "ELS NOSTRES SERVEIS",
    service1Title: "Serveis audiovisuals amb dron",
    service1Text:
      "Vídeo i fotografia aèria en 4K per a cinema, publicitat, localitzacions tècniques i projectes que necessiten una imatge cuidada des de l'aire.",
    service1Footer: "VIL·LES · HOTELS · PUBLICITAT",
    service2Title: "Inspecció tècnica",
    service2Text:
      "Revisió visual de cobertes, edificis, estructures i zones industrials per detectar incidències visibles i documentar l'estat general amb rapidesa i seguretat.",
    service2Footer: "INDÚSTRIA · INFRAESTRUCTURES · EDIFICIS",
    service3Title: "Mapes multiespectrals",
    service3Text:
      "Captura i anàlisi visual per a vegetació, costa, golf, vil·les, cases, naus industrials i superfícies tècniques mitjançant sensors que mostren informació que no s'aprecia a simple vista.",
    service3Footer: "GOLF · VEGETACIÓ · COSTA",
    featureEyebrow: "ENFOCAMENT PROFESSIONAL",
    featureTitle:
      "Cada projecte és únic. La nostra feina és aportar la perspectiva que necessites.",
    featureText:
      "Projectes visuals i tècnics des de l'aire pensats per entendre millor cada espai i prendre decisions amb criteri.",
    featureEmailButton: "Enviar correu",
    featureWhatsappButton: "WhatsApp",
    sector1: "Cinema i publicitat",
    sector2: "Arquitectura i immobiliària",
    sector3: "Indústria i infraestructures",
    sector4: "Medi ambient i territori",
    sector5: "Esport i camps de golf",
    contactEyebrow: "CONTACTE",
    zone: "Zona: Felanitx · Mallorca · Illes Balears",
    phone: "Telèfon: +34 634 562 634",
    email: "Correu: skyflickesp@gmail.com",
    instagram: "Instagram: @_Skyflick_",
    stat1Title: "VOLS SEGURS",
    stat1Text: "Operacions certificades i compliment normatiu.",
    stat2Title: "QUALITAT 4K",
    stat2Text: "Captura d'alta resolució per a resultats professionals.",
    stat3Title: "DADES PRECISSES",
    stat3Text: "Tecnologia avançada per a anàlisis fiables i visuals.",
    stat4Title: "ENTREGA ÀGIL",
    stat4Text: "Processament eficient i entrega adaptada a cada projecte."
  },
  es: {
    navContact: "Contacta",
    heroTitle: "Imagen aérea y análisis visual con drones",
    heroText:
      "Servicios audiovisuales, inspección técnica y cartografía multiespectral para cine, edificios, industria, golf, vegetación y costa.",
    servicesEyebrow: "NUESTROS SERVICIOS",
    service1Title: "Servicios audiovisuales con dron",
    service1Text:
      "Vídeo y fotografía aérea en 4K para cine, publicidad, localizaciones técnicas y proyectos que necesitan una imagen cuidada desde el aire.",
    service1Footer: "VILLAS · HOTELES · PUBLICIDAD",
    service2Title: "Inspección técnica",
    service2Text:
      "Revisión visual de cubiertas, edificios, estructuras y zonas industriales para detectar incidencias visibles y documentar el estado general con rapidez y seguridad.",
    service2Footer: "INDUSTRIA · INFRAESTRUCTURAS · EDIFICIOS",
    service3Title: "Mapas multiespectrales",
    service3Text:
      "Captura y análisis visual para vegetación, costa, golf, villas, casas, naves industriales y superficies técnicas mediante sensores que muestran información que no se aprecia a simple vista.",
    service3Footer: "GOLF · VEGETACIÓN · COSTA",
    featureEyebrow: "ENFOQUE PROFESIONAL",
    featureTitle:
      "Cada proyecto es único. Nuestra misión es aportar la perspectiva que necesitas.",
    featureText:
      "Proyectos visuales y técnicos desde el aire pensados para entender mejor cada espacio y tomar decisiones con criterio.",
    featureEmailButton: "Enviar correo",
    featureWhatsappButton: "WhatsApp",
    sector1: "Cine y publicidad",
    sector2: "Arquitectura e inmobiliaria",
    sector3: "Industria e infraestructuras",
    sector4: "Medio ambiente y territorio",
    sector5: "Deporte y campos de golf",
    contactEyebrow: "CONTACTO",
    zone: "Zona: Felanitx · Mallorca · Islas Baleares",
    phone: "Teléfono: +34 634 562 634",
    email: "Correo: skyflickesp@gmail.com",
    instagram: "Instagram: @_Skyflick_",
    stat1Title: "VUELOS SEGUROS",
    stat1Text: "Operaciones certificadas y cumplimiento normativo.",
    stat2Title: "CALIDAD 4K",
    stat2Text: "Captura de alta resolución para resultados profesionales.",
    stat3Title: "DATOS PRECISOS",
    stat3Text: "Tecnología avanzada para análisis fiables y visuales.",
    stat4Title: "ENTREGA ÁGIL",
    stat4Text: "Procesamiento eficiente y entrega adaptada a cada proyecto."
  },
  en: {
    navContact: "Contact",
    heroTitle: "Aerial imaging and visual analysis with drones",
    heroText:
      "Audiovisual services, technical inspection and multispectral mapping for film, buildings, industry, golf, vegetation and coastline.",
    servicesEyebrow: "OUR SERVICES",
    service1Title: "Aerial audiovisual services",
    service1Text:
      "4K aerial video and photography for film, advertising, technical scouting and projects that need a carefully crafted image from above.",
    service1Footer: "VILLAS · HOTELS · ADVERTISING",
    service2Title: "Technical inspection",
    service2Text:
      "Visual review of roofs, buildings, structures and industrial areas to detect visible issues and document the overall condition quickly and safely.",
    service2Footer: "INDUSTRY · INFRASTRUCTURE · BUILDINGS",
    service3Title: "Multispectral mapping",
    service3Text:
      "Visual capture and analysis for vegetation, coastline, golf, villas, houses, industrial warehouses and technical surfaces using sensors that reveal information not visible to the naked eye.",
    service3Footer: "GOLF · VEGETATION · COASTLINE",
    featureEyebrow: "PROFESSIONAL APPROACH",
    featureTitle:
      "Every project is unique. Our mission is to provide the perspective you need.",
    featureText:
      "Visual and technical aerial work designed to better understand every space and support better decisions.",
    featureEmailButton: "Send email",
    featureWhatsappButton: "WhatsApp",
    sector1: "Film and advertising",
    sector2: "Architecture and real estate",
    sector3: "Industry and infrastructure",
    sector4: "Environment and territory",
    sector5: "Sports and golf courses",
    contactEyebrow: "CONTACT",
    zone: "Area: Felanitx · Mallorca · Balearic Islands",
    phone: "Phone: +34 634 562 634",
    email: "Email: skyflickesp@gmail.com",
    instagram: "Instagram: @_Skyflick_",
    stat1Title: "SAFE FLIGHTS",
    stat1Text: "Certified operations and regulatory compliance.",
    stat2Title: "4K QUALITY",
    stat2Text: "High-resolution capture for professional results.",
    stat3Title: "PRECISE DATA",
    stat3Text: "Advanced technology for reliable visual analysis.",
    stat4Title: "FAST DELIVERY",
    stat4Text: "Efficient processing and delivery adapted to each project."
  },
  de: {
    navContact: "Kontakt",
    heroTitle: "Luftbild und visuelle Analyse mit Drohnen",
    heroText:
      "Audiovisuelle Dienstleistungen, technische Inspektion und multispektrale Kartierung für Film, Gebäude, Industrie, Golf, Vegetation und Küste.",
    servicesEyebrow: "UNSERE LEISTUNGEN",
    service1Title: "Audiovisuelle Drohnendienste",
    service1Text:
      "4K-Luftvideo und -fotografie für Film, technisches Scouting und Projekte, die ein hochwertiges Bild aus der Luft benötigen.",
    service1Footer: "VILLEN · HOTELS · WERBUNG",
    service2Title: "Technische Inspektion",
    service2Text:
      "Visuelle Prüfung von Dächern, Gebäuden, Strukturen und Industrieflächen, um sichtbare Mängel schnell und sicher zu erkennen und zu dokumentieren.",
    service2Footer: "INDUSTRIE · INFRASTRUKTUR · GEBÄUDE",
    service3Title: "Multispektrale Karten",
    service3Text:
      "Visuelle Erfassung und Analyse von Vegetation, Küste, Golf, Villen, Häusern, Industriehallen und technischen Flächen mit Sensoren, die Informationen sichtbar machen, die mit bloßem Auge nicht erkennbar sind.",
    service3Footer: "GOLF · VEGETATION · KÜSTE",
    featureEyebrow: "PROFESSIONELLER ANSATZ",
    featureTitle:
      "Jedes Projekt ist einzigartig. Unsere Aufgabe ist es, die Perspektive zu liefern, die du brauchst.",
    featureText:
      "Visuelle und technische Luftarbeit, um Räume besser zu verstehen und fundiertere Entscheidungen zu treffen.",
    featureEmailButton: "E-Mail senden",
    featureWhatsappButton: "WhatsApp",
    sector1: "Film und Werbung",
    sector2: "Architektur und Immobilien",
    sector3: "Industrie und Infrastruktur",
    sector4: "Umwelt und Territorium",
    sector5: "Sport und Golfplätze",
    contactEyebrow: "KONTAKT",
    zone: "Gebiet: Felanitx · Mallorca · Balearen",
    phone: "Telefon: +34 634 562 634",
    email: "E-Mail: skyflickesp@gmail.com",
    instagram: "Instagram: @_Skyflick_",
    stat1Title: "SICHERE FLÜGE",
    stat1Text: "Zertifizierte Einsätze und normgerechte Durchführung.",
    stat2Title: "4K-QUALITÄT",
    stat2Text: "Hochauflösende Erfassung für professionelle Ergebnisse.",
    stat3Title: "PRÄZISE DATEN",
    stat3Text: "Fortschrittliche Technologie für zuverlässige visuelle Analysen.",
    stat4Title: "SCHNELLE LIEFERUNG",
    stat4Text: "Effiziente Bearbeitung und Lieferung passend zum Projekt."
  }
};

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
    opacity: active ? 1 : 0.72
  };
}

function cardStyle(): React.CSSProperties {
  return {
    background: "#07131a",
    borderRadius: "8px",
    overflow: "hidden",
    transform: "translateY(0)",
    transition: "transform 220ms ease, box-shadow 220ms ease, filter 220ms ease",
    boxShadow: "0 10px 30px rgba(0,0,0,0.18)"
  };
}

export default function App() {
  const [lang, setLang] = useState<Lang>("ca");
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
  }, [lang]);

  const c = COPY[lang];

  const services = useMemo(
    () => [
      {
        title: c.service1Title,
        text: c.service1Text,
        footer: c.service1Footer,
        image:
          "https://plus.unsplash.com/premium_photo-1696273224432-51e74c998de2?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        title: c.service2Title,
        text: c.service2Text,
        footer: c.service2Footer,
        image:
          "https://aerocamaras.es/wp-content/uploads/2019/04/Presa-Aerocamaras.jpg"
      },
      {
        title: c.service3Title,
        text: c.service3Text,
        footer: c.service3Footer,
        image:
          "https://eos.com/wp-content/uploads/2024/03/multispectral-image-index-ndvi.png.webp"
      }
    ],
    [c]
  );

  const sectorsLine = `${c.sector1} · ${c.sector2} · ${c.sector3} · ${c.sector4} · ${c.sector5}`;

  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        background: "#030607",
        color: "#f5f5f5"
      }}
    >
      <section
        style={{
          minHeight: isMobile ? "auto" : "820px",
          position: "relative",
          background:
            "linear-gradient(90deg, rgba(2,7,10,0.88) 0%, rgba(2,7,10,0.62) 36%, rgba(2,7,10,0.22) 62%), url('https://images.pexels.com/photos/36532574/pexels-photo-36532574.jpeg') center/cover no-repeat"
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
            flexDirection: isMobile ? "column" : "row"
          }}
        >
          <div>
            <div
              style={{
                fontSize: isMobile ? "52px" : "88px",
                lineHeight: 0.9,
                fontWeight: 800,
                letterSpacing: "-0.06em",
                transition: "transform 220ms ease"
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
                opacity: 0.94
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
              width: isMobile ? "100%" : "auto"
            }}
          >
            <div
              style={{
                display: "flex",
                gap: isMobile ? "16px" : "22px",
                flexWrap: "wrap"
              }}
            >
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
                transition:
                  "background 220ms ease, transform 220ms ease, border-color 220ms ease"
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
            padding: isMobile ? "8px 20px 36px 20px" : "18px 54px 54px 54px"
          }}
        >
          <div
            style={{
              maxWidth: isMobile ? "100%" : "760px",
              marginTop: isMobile ? "18px" : "34px"
            }}
          >
            <h1
              style={{
                fontSize: isMobile ? "40px" : "68px",
                lineHeight: 1.05,
                fontWeight: 500,
                letterSpacing: "-0.05em",
                margin: 0
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
                marginTop: "20px"
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
          borderTop: "1px solid rgba(255,255,255,0.08)"
        }}
      >
        <div
          style={{
            maxWidth: "1520px",
            margin: "0 auto",
            padding: isMobile ? "0 20px" : "0 54px"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              marginBottom: isMobile ? "22px" : "28px"
            }}
          >
            <div
              style={{
                color: "#d8d0b0",
                fontSize: isMobile ? "13px" : "15px",
                letterSpacing: "0.2em"
              }}
            >
              {c.servicesEyebrow}
            </div>
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "rgba(255,255,255,0.16)"
              }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
              gap: isMobile ? "18px" : "28px"
            }}
          >
            {services.map((card) => (
              <div key={card.title} style={cardStyle()}>
                <div
                  style={{
                    height: isMobile ? "220px" : "278px",
                    background: `linear-gradient(rgba(0,0,0,0.16), rgba(0,0,0,0.24)), url('${card.image}') center/cover no-repeat`,
                    transition: "transform 300ms ease, filter 300ms ease"
                  }}
                />
                <div style={{ padding: isMobile ? "20px" : "26px 22px 24px 22px" }}>
                  <h3
                    style={{
                      fontSize: isMobile ? "22px" : "24px",
                      fontWeight: 500,
                      margin: "0 0 12px 0",
                      letterSpacing: "-0.03em"
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.84)",
                      fontSize: isMobile ? "16px" : "17px",
                      lineHeight: 1.62,
                      margin: 0
                    }}
                  >
                    {card.text}
                  </p>
                  <div
                    style={{
                      marginTop: "18px",
                      color: "#d5ba72",
                      fontSize: isMobile ? "12px" : "14px",
                      letterSpacing: "0.12em"
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
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
              gap: isMobile ? "18px" : "36px",
              marginTop: isMobile ? "26px" : "40px",
              padding: isMobile ? "10px 0 0 0" : "26px 14px 0 14px"
            }}
          >
            {[
              [c.stat1Title, c.stat1Text],
              [c.stat2Title, c.stat2Text],
              [c.stat3Title, c.stat3Text],
              [c.stat4Title, c.stat4Text]
            ].map(([title, text]) => (
              <div
                key={title}
                style={{
                  transition: "transform 220ms ease, opacity 220ms ease"
                }}
              >
                <div
                  style={{
                    color: "#f0d38c",
                    fontSize: isMobile ? "13px" : "15px",
                    letterSpacing: "0.08em",
                    marginBottom: "10px"
                  }}
                >
                  {title}
                </div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.72)",
                    fontSize: isMobile ? "15px" : "16px",
                    lineHeight: 1.55
                  }}
                >
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contacte"
        style={{
          minHeight: isMobile ? "auto" : "520px",
          background:
            "linear-gradient(90deg, rgba(3,12,16,0.84) 0%, rgba(3,12,16,0.5) 35%, rgba(3,12,16,0.12) 62%), url('https://images.pexels.com/photos/975771/pexels-photo-975771.jpeg') center/cover no-repeat",
          padding: isMobile ? "44px 0" : "70px 0"
        }}
      >
        <div
          style={{
            maxWidth: "1520px",
            margin: "0 auto",
            padding: isMobile ? "0 20px" : "0 54px",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1.2fr 0.8fr",
            gap: isMobile ? "24px" : "40px",
            alignItems: "end"
          }}
        >
          <div>
            <div
              style={{
                color: "#d5ba72",
                fontSize: isMobile ? "13px" : "14px",
                letterSpacing: "0.18em",
                marginBottom: "16px"
              }}
            >
              {c.featureEyebrow}
            </div>
            <h2
              style={{
                fontSize: isMobile ? "34px" : "58px",
                lineHeight: 1.08,
                fontWeight: 500,
                letterSpacing: "-0.05em",
                maxWidth: "720px",
                margin: 0
              }}
            >
              {c.featureTitle}
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.78)",
                fontSize: isMobile ? "17px" : "18px",
                lineHeight: 1.7,
                maxWidth: "740px",
                marginTop: "20px"
              }}
            >
              {c.featureText}
            </p>
            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                marginTop: "24px"
              }}
            >
              <a
                href="mailto:skyflickesp@gmail.com?subject=Skyflick%20Studio%20-%20Nou%20projecte&body=Hola%20Skyflick%20Studio,%0D%0A%0D%0AM'agradaria%20rebre%20informaci%C3%B3%20sobre..."
                style={{
                  display: "inline-block",
                  color: "#fff",
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.5)",
                  padding: isMobile ? "14px 18px" : "16px 26px",
                  borderRadius: "10px",
                  fontSize: isMobile ? "17px" : "20px",
                  width: isMobile ? "100%" : "auto",
                  textAlign: "center",
                  boxSizing: "border-box",
                  transition: "background 220ms ease, transform 220ms ease"
                }}
              >
                {c.featureEmailButton}
              </a>
              <a
                href="https://wa.me/34634562634"
                style={{
                  display: "inline-block",
                  color: "#fff",
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.5)",
                  padding: isMobile ? "14px 18px" : "16px 26px",
                  borderRadius: "10px",
                  fontSize: isMobile ? "17px" : "20px",
                  width: isMobile ? "100%" : "auto",
                  textAlign: "center",
                  boxSizing: "border-box",
                  transition: "background 220ms ease, transform 220ms ease"
                }}
              >
                {c.featureWhatsappButton}
              </a>
            </div>
          </div>

          <div
            style={{
              background: "rgba(4,10,13,0.76)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "10px",
              padding: isMobile ? "22px 20px" : "30px 28px",
              transition: "transform 220ms ease, background 220ms ease"
            }}
          >
            <div
              style={{
                color: "rgba(255,255,255,0.62)",
                fontSize: isMobile ? "13px" : "14px",
                letterSpacing: "0.18em",
                marginBottom: "18px"
              }}
            >
              ÀREES / SECTORS
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.72)",
                fontSize: isMobile ? "14px" : "16px",
                lineHeight: 1.8,
                letterSpacing: "0.03em"
              }}
            >
              {sectorsLine}
            </div>
          </div>
        </div>
      </section>

      <footer
        style={{
          background: "#02080b",
          padding: isMobile ? "32px 0" : "40px 0",
          borderTop: "1px solid rgba(255,255,255,0.08)"
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
            flexDirection: isMobile ? "column" : "row"
          }}
        >
          <div>
            <div
              style={{
                color: "#d5ba72",
                fontSize: isMobile ? "12px" : "13px",
                letterSpacing: "0.25em",
                marginBottom: "18px",
                fontWeight: 500
              }}
            >
              {c.contactEyebrow}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "#e5e7eb",
                  fontSize: isMobile ? "15px" : "17px",
                  letterSpacing: "0.03em"
                }}
              >
                {c.zone}
              </div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "#e5e7eb",
                  fontSize: isMobile ? "15px" : "17px",
                  letterSpacing: "0.03em"
                }}
              >
                {c.phone}
              </div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "#e5e7eb",
                  fontSize: isMobile ? "15px" : "17px",
                  letterSpacing: "0.03em"
                }}
              >
                {c.email}
              </div>
              <a
                href="https://instagram.com/_Skyflick_"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "#e5e7eb",
                  fontSize: isMobile ? "15px" : "17px",
                  textDecoration: "none",
                  letterSpacing: "0.03em",
                  transition: "opacity 180ms ease"
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
                color: "rgba(255,255,255,0.12)"
              }}
            >
              Skyflick
            </div>
            <div
              style={{
                fontSize: isMobile ? "13px" : "18px",
                letterSpacing: isMobile ? "0.28em" : "0.42em",
                color: "rgba(255,255,255,0.2)",
                marginTop: "10px"
              }}
            >
              STUDIO
            </div>
            <div
              style={{
                marginTop: "18px",
                color: "rgba(255,255,255,0.4)",
                fontSize: isMobile ? "14px" : "16px"
              }}
            >
              © 2024 Skyflick Studio
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
 this i can paste in github?
