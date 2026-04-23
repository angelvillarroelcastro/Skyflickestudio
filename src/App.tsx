import { useEffect, useMemo, useState } from "react";

type Lang = "ca" | "es";

const COPY = {
  ca: {
    navContact: "Contacta",
    heroTitle: "Imatge aèria i anàlisi visual amb drons",
    heroText:
      "Serveis audiovisuals, inspecció tècnica i cartografia multiespectral per a cinema, edificis, indústria, vegetació i costa.",
    services: "ELS NOSTRES SERVEIS",
    contact: "CONTACTE",
    emailBtn: "Enviar correu",
    whatsapp: "WhatsApp",
  },
  es: {
    navContact: "Contacto",
    heroTitle: "Imagen aérea y análisis visual con drones",
    heroText:
      "Servicios audiovisuales, inspección técnica y cartografía multiespectral para cine, edificios, industria, vegetación y costa.",
    services: "SERVICIOS",
    contact: "CONTACTO",
    emailBtn: "Enviar correo",
    whatsapp: "WhatsApp",
  },
};

export default function App() {
  const [lang, setLang] = useState<Lang>("es");
  const c = COPY[lang];

  useEffect(() => {
    document.title = "Skyflick Studio";
  }, []);

  const services = useMemo(
    () => [
      {
        title: "Audiovisual",
        img: "https://plus.unsplash.com/premium_photo-1696273224432-51e74c998de2",
      },
      {
        title: "Inspección técnica",
        img: "https://aerocamaras.es/wp-content/uploads/2019/04/Presa-Aerocamaras.jpg",
      },
      {
        title: "Multiespectral",
        img: "https://eos.com/wp-content/uploads/2024/03/multispectral-image-index-ndvi.png.webp",
      },
    ],
    []
  );

  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: "#030607", color: "#fff" }}>

      {/* HERO */}
      <section
        style={{
          minHeight: "80vh",
          background:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1501785888041-af3ef285b470') center/cover",
          padding: "40px",
        }}
      >
        <h1 style={{ fontSize: "60px" }}>Skyflick Studio</h1>
        <h2 style={{ maxWidth: "700px" }}>{c.heroTitle}</h2>
        <p style={{ maxWidth: "600px", opacity: 0.8 }}>{c.heroText}</p>
      </section>

      {/* SERVICIOS */}
      <section style={{ padding: "60px 20px" }}>
        <h3>{c.services}</h3>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
          {services.map((s) => (
            <div key={s.title}>
              <div
                style={{
                  height: "200px",
                  background: `url(${s.img}) center/cover`,
                }}
              />
              <p>{s.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacte"
        style={{
          padding: "60px 20px",
          background:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e') center/cover",
        }}
      >
        <h3>{c.contact}</h3>

        {/* BOTONES */}
        <div style={{ marginBottom: "20px" }}>
          <a href="mailto:skyflickesp@gmail.com">
            <button>{c.emailBtn}</button>
          </a>

          <a href="https://wa.me/34634562634">
            <button>{c.whatsapp}</button>
          </a>
        </div>

        {/* FORMULARIO (AHORA SIEMPRE VISIBLE) */}
        <form
          action="https://formsubmit.co/skyflickesp@gmail.com"
          method="POST"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            maxWidth: "500px",
          }}
        >
          <input type="text" name="name" placeholder="Nombre" required />
          <input type="email" name="email" placeholder="Correo" required />
          <textarea name="message" placeholder="Mensaje" required />
          <button type="submit">Enviar</button>

          <input type="hidden" name="_captcha" value="false" />
        </form>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "20px", textAlign: "center", opacity: 0.6 }}>
        © Skyflick Studio
      </footer>
    </div>
  );
}
