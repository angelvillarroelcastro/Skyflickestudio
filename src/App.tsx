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
      "Captura y análisis visual para vegetación, costa, golf, villas, casas, naves
