import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Facebook, Github, Instagram, Linkedin, Moon, Sun } from "lucide-react";

import avatar from "@/assets/projeto/avatar.png";
import bgMobile from "@/assets/projeto/bg-mobile.jpg";
import bgMobileLight from "@/assets/projeto/bg-mobile-light.jpg";
import bgDesktop from "@/assets/projeto/bg-desktop.jpg";
import bgDesktopLight from "@/assets/projeto/bg-desktop-light.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "@FranciscoChagas" },
      { name: "description", content: "Links de Francisco Chagas — redes sociais e contatos." },
      { property: "og:title", content: "@FranciscoChagas" },
      { property: "og:description", content: "Links de Francisco Chagas — redes sociais e contatos." },
    ],
  }),
  component: Index,
});

const links = [
  { href: "https://www.facebook.com/francisco.c.silva.31", label: "Me siga no Facebook", Icon: Facebook },
  { href: "https://github.com/Franksilva959", label: "Me siga no GitHub", Icon: Github },
  { href: "https://www.instagram.com/silva.franciscochagas/", label: "Me siga no Instagram", Icon: Instagram },
  { href: "https://www.linkedin.com/in/francisco-das-chagas-ferreira-silva-b880601b3/", label: "Me siga no LinkedIn", Icon: Linkedin },
];

function Index() {
  const [light, setLight] = useState(false);

  const bg = light ? bgMobileLight : bgMobile;
  const bgLg = light ? bgDesktopLight : bgDesktop;
  const textColor = light ? "#000" : "#fff";
  const stroke = light ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)";
  const surface = light ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)";
  const surfaceHover = light ? "rgba(0,0,0,0.02)" : "rgba(0,0,0,0.02)";
  const highlight = light ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.2)";

  return (
    <>
      <style>{`
        @media (max-width: 699px) { .projeto-bg { background-image: url(${bg}) !important; } }
        @media (min-width: 700px) { .projeto-bg { background-image: url(${bgLg}) !important; } }
        .projeto-link:hover { background: ${surfaceHover} !important; border: 1.5px solid ${textColor} !important; }
        .projeto-switch-btn:hover { outline: 8px solid ${highlight} !important; }
      `}</style>
      <div
        className="projeto-bg"
        style={{
          minHeight: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
          fontFamily: "Inter, sans-serif",
          color: textColor,
        }}
      >
        <div style={{ width: "100%", maxWidth: 588, margin: "0 auto", padding: "56px 24px 0" }}>
          <div style={{ textAlign: "center", padding: 24 }}>
            <img src={avatar} alt="Foto Francisco." style={{ width: 112, borderRadius: 61 }} />
            <h1 style={{ fontWeight: 500, lineHeight: "24px", marginTop: 8, fontSize: 16 }}>
              @FranciscoChagas
            </h1>
          </div>

          <div style={{ position: "relative", width: 64, margin: "4px auto", height: 32 }}>
            <button
              className="projeto-switch-btn"
              onClick={() => setLight((v) => !v)}
              aria-label="Alternar tema"
              style={{
                width: 32,
                height: 32,
                background: "#fff",
                border: 0,
                borderRadius: "50%",
                position: "absolute",
                top: "50%",
                left: light ? "50%" : 0,
                zIndex: 1,
                transform: "translateY(-50%)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "left 0.2s",
              }}
            >
              {light ? <Sun size={18} color="#000" /> : <Moon size={18} color="#000" />}
            </button>
            <span
              style={{
                display: "block",
                width: 64,
                height: 24,
                background: surface,
                border: `1px solid ${stroke}`,
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                borderRadius: 9999,
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          </div>

          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16, padding: "24px 0", margin: 0 }}>
            {links.map(({ href, label, Icon }) => (
              <li key={href}>
                <a
                  className="projeto-link"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    padding: "16px 24px",
                    background: surface,
                    border: `1px solid ${stroke}`,
                    borderRadius: 8,
                    backdropFilter: "blur(4px)",
                    WebkitBackdropFilter: "blur(4px)",
                    textDecoration: "none",
                    fontWeight: 500,
                    color: textColor,
                    transition: "background 0.2s",
                  }}
                >
                  <span>{label}</span>
                  <Icon size={20} />
                </a>
              </li>
            ))}
          </ul>

          <footer style={{ padding: "24px 0", textAlign: "center", fontSize: 16 }}>
            Feito com ♥ por Francisco
          </footer>
        </div>
      </div>
    </>
  );
}
