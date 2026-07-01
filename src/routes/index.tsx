import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Facebook, Github, Instagram, Linkedin, Moon, Sun, ArrowUpRight } from "lucide-react";

import avatar from "@/assets/projeto/avatar.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "@FranciscoChagas — Links" },
      { name: "description", content: "Links de Francisco Chagas — redes sociais e contatos." },
      { property: "og:title", content: "@FranciscoChagas" },
      { property: "og:description", content: "Links de Francisco Chagas — redes sociais e contatos." },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Serif&display=swap",
      },
    ],
  }),
  component: Index,
});

const links = [
  { href: "https://www.facebook.com/francisco.c.silva.31", label: "Facebook", handle: "francisco.c.silva.31", Icon: Facebook },
  { href: "https://github.com/Franksilva959", label: "GitHub", handle: "Franksilva959", Icon: Github },
  { href: "https://www.instagram.com/silva.franciscochagas/", label: "Instagram", handle: "@silva.franciscochagas", Icon: Instagram },
  { href: "https://www.linkedin.com/in/francisco-das-chagas-ferreira-silva-b880601b3/", label: "LinkedIn", handle: "Francisco C. F. Silva", Icon: Linkedin },
];

function Index() {
  const [light, setLight] = useState(false);

  const theme = light
    ? {
        bg: "#f5f2ec",
        bgGrad: "radial-gradient(1200px 600px at 20% -10%, #e8dfd0 0%, transparent 60%), radial-gradient(900px 500px at 100% 100%, #e0d4c0 0%, transparent 55%), #f5f2ec",
        text: "#1a1613",
        subtle: "#6b6157",
        card: "rgba(255,255,255,0.55)",
        cardHover: "rgba(255,255,255,0.85)",
        border: "rgba(26,22,19,0.08)",
        borderStrong: "rgba(26,22,19,0.18)",
        accent: "#8b5a2b",
      }
    : {
        bg: "#03110a",
        bgGrad: "radial-gradient(1200px 600px at 20% -10%, #0a3a24 0%, transparent 60%), radial-gradient(900px 500px at 100% 100%, #0d4a2a 0%, transparent 55%), linear-gradient(160deg, #041a10 0%, #02120a 55%, #010805 100%)",
        text: "#f5f0e8",
        subtle: "#8a8178",
        card: "rgba(255,255,255,0.03)",
        cardHover: "rgba(255,255,255,0.06)",
        border: "rgba(255,255,255,0.08)",
        borderStrong: "rgba(255,255,255,0.18)",
        accent: "#39ff88",
      };

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        html, body { margin: 0; padding: 0; overflow-x: hidden; -webkit-text-size-adjust: 100%; }
        .fc-shell { max-width: 480px; margin: 0 auto; padding: clamp(40px, 10vw, 80px) clamp(16px, 5vw, 24px) clamp(32px, 8vw, 48px); width: 100%; }
        .fc-title { font-family: 'Instrument Serif', Georgia, serif; font-weight: 400; letter-spacing: -0.02em; line-height: 1.1; margin: 0; font-size: clamp(28px, 7vw, 36px); }
        .fc-avatar { width: clamp(84px, 22vw, 104px); height: clamp(84px, 22vw, 104px); border-radius: 50%; display: block; position: relative; }
        .fc-link { transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1); }
        .fc-link:hover { background: ${theme.cardHover} !important; border-color: ${theme.borderStrong} !important; transform: translateY(-1px); }
        .fc-link:hover .fc-arrow { transform: translate(2px, -2px); opacity: 1; }
        .fc-link-label { font-size: clamp(13px, 3.6vw, 14px); font-weight: 600; letter-spacing: -0.005em; }
        .fc-link-handle { font-size: clamp(11px, 3.2vw, 12px); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .fc-arrow { transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1); opacity: 0.4; flex-shrink: 0; }
        .fc-theme-btn { transition: background 0.3s ease, transform 0.2s ease; touch-action: manipulation; }
        .fc-theme-btn:hover { transform: scale(1.05); }
        .fc-avatar-ring { animation: fc-pulse 4s ease-in-out infinite; }
        @keyframes fc-pulse { 0%, 100% { opacity: 0.6; transform: scale(1); } 50% { opacity: 0.9; transform: scale(1.03); } }
        .fc-fade-in { animation: fc-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
        @keyframes fc-in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @media (hover: none) {
          .fc-link:hover { transform: none; }
          .fc-theme-btn:hover { transform: none; }
        }
      `}</style>
      <main
        style={{
          minHeight: "100dvh",
          background: theme.bgGrad,
          color: theme.text,
          fontFamily: "'Inter', system-ui, sans-serif",
          transition: "background 0.6s ease, color 0.4s ease",
          fontFeatureSettings: "'ss01', 'cv11'",
        }}
      >
        <div className="fc-shell">

          {/* Header */}
          <header className="fc-fade-in" style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ position: "relative", display: "inline-block", marginBottom: 20 }}>
              <div
                className="fc-avatar-ring"
                style={{
                  position: "absolute",
                  inset: -6,
                  borderRadius: "50%",
                  background: `conic-gradient(from 0deg, ${theme.accent}, transparent 60%, ${theme.accent})`,
                  filter: "blur(8px)",
                }}
              />
              <img
                src={avatar}
                alt="Francisco Chagas"
                className="fc-avatar"
                style={{ border: `1px solid ${theme.borderStrong}`, objectFit: "cover" }}
              />
            </div>
            <h1 className="fc-title">Francisco Chagas</h1>
          </header>

          {/* Theme toggle */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
            <div
              style={{
                display: "inline-flex",
                padding: 4,
                background: theme.card,
                border: `1px solid ${theme.border}`,
                borderRadius: 999,
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >

              {[
                { key: false as const, Icon: Moon, label: "Escuro" },
                { key: true as const, Icon: Sun, label: "Claro" },
              ].map(({ key, Icon, label }) => {
                const active = light === key;
                return (
                  <button
                    key={label}
                    className="fc-theme-btn"
                    onClick={() => setLight(key)}
                    aria-label={label}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "8px 16px",
                      minHeight: 36,
                      border: 0,
                      borderRadius: 999,
                      background: active ? theme.text : "transparent",
                      color: active ? theme.bg : theme.subtle,
                      cursor: "pointer",
                      fontSize: 12,
                      fontWeight: 500,
                      fontFamily: "inherit",
                      letterSpacing: "0.02em",
                    }}
                  >
                    <Icon size={13} />
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <ul className="fc-fade-in" style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, padding: 0, margin: 0 }}>
            {links.map(({ href, label, handle, Icon }) => (
              <li key={href}>
                <a
                  className="fc-link"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "16px 20px",
                    background: theme.card,
                    border: `1px solid ${theme.border}`,
                    borderRadius: 14,
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    textDecoration: "none",
                    color: theme.text,
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 38,
                      height: 38,
                      borderRadius: 10,
                      background: theme.cardHover,
                      border: `1px solid ${theme.border}`,
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={17} />
                  </span>
                  <span style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
                    <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: "-0.005em" }}>{label}</span>
                    <span
                      style={{
                        fontSize: 12,
                        color: theme.subtle,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {handle}
                    </span>
                  </span>
                  <ArrowUpRight className="fc-arrow" size={16} color={theme.subtle} />
                </a>
              </li>
            ))}
          </ul>

          <footer
            style={{
              marginTop: 48,
              paddingTop: 24,
              borderTop: `1px solid ${theme.border}`,
              textAlign: "center",
              fontSize: 12,
              color: theme.subtle,
              letterSpacing: "0.04em",
            }}
          >
            Feito com{" "}
            <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", color: theme.accent, fontSize: 14 }}>
              afeto
            </span>{" "}
            por Francisco
          </footer>
        </div>
      </main>
    </>
  );
}
