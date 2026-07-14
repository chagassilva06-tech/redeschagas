import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect, useMemo } from "react";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Moon,
  Sun,
  ArrowUpRight,
  Copy,
  QrCode,
  X,
  MapPin,
  Sparkles,
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

import avatar from "@/assets/projeto/avatar.jpg";
import stravaIcon from "@/assets/projeto/strava.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Francisco Chagas — Minhas Conexões" },
      { name: "description", content: "Links, redes sociais e contatos de Francisco Chagas." },
      { property: "og:title", content: "Francisco Chagas — Minhas Conexões" },
      { property: "og:description", content: "Links, redes sociais e contatos de Francisco Chagas." },
    ],
  }),
  component: Index,
});

type SocialLink = {
  href: string;
  label: string;
  handle: string;
  Icon?: typeof Facebook;
  img?: string;
  accent: string;
};

const links: SocialLink[] = [
  { href: "https://github.com/chagassilva06-tech", label: "GitHub", handle: "chagassilva06-tech", Icon: Github, accent: "oklch(0.78 0.15 280)" },
  { href: "https://www.instagram.com/silva.franciscochagas/", label: "Instagram", handle: "@silva.franciscochagas", Icon: Instagram, accent: "oklch(0.72 0.20 20)" },
  { href: "https://www.linkedin.com/in/francisco-das-chagas-ferreira-silva-b880601b3/", label: "LinkedIn", handle: "Francisco C. F. Silva", Icon: Linkedin, accent: "oklch(0.68 0.16 240)" },
  { href: "https://www.strava.com/athletes/44632513", label: "Strava", handle: "athletes/44632513", img: stravaIcon, accent: "oklch(0.72 0.20 40)" },
  { href: "https://www.facebook.com/", label: "Facebook", handle: "facebook.com", Icon: Facebook, accent: "oklch(0.68 0.16 250)" },
];

function Index() {
  const [light, setLight] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  const profileUrl = "https://redeschagas.lovable.app/";

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(profileUrl);
      toast.success("Link copiado", { description: "Compartilhe onde quiser." });
    } catch {
      toast.error("Não foi possível copiar");
    }
  };

  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 3,
        delay: Math.random() * 8,
        duration: 14 + Math.random() * 12,
      })),
    [],
  );

  const t = light
    ? {
        text: "oklch(0.18 0.02 260)",
        subtle: "oklch(0.48 0.03 260)",
        card: "oklch(1 0 0 / 0.65)",
        cardHover: "oklch(1 0 0 / 0.85)",
        border: "oklch(0.20 0.04 260 / 0.10)",
        borderStrong: "oklch(0.20 0.04 260 / 0.22)",
        bg: "oklch(0.97 0.01 260)",
        surface: "oklch(1 0 0 / 0.7)",
      }
    : {
        text: "oklch(0.97 0.01 260)",
        subtle: "oklch(0.68 0.03 260)",
        card: "oklch(1 0 0 / 0.04)",
        cardHover: "oklch(1 0 0 / 0.08)",
        border: "oklch(1 0 0 / 0.08)",
        borderStrong: "oklch(1 0 0 / 0.18)",
        bg: "oklch(0.16 0.04 270)",
        surface: "oklch(0.20 0.05 265 / 0.55)",
      };

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        html, body { margin: 0; padding: 0; overflow-x: hidden; -webkit-text-size-adjust: 100%; }
        :root {
          --aurora-green: oklch(0.82 0.19 155);
          --aurora-purple: oklch(0.76 0.15 300);
          --aurora-navy: oklch(0.28 0.08 265);
        }
        .fc-mesh {
          position: fixed; inset: 0; z-index: 0; pointer-events: none;
          background:
            radial-gradient(55% 45% at 15% 20%, oklch(0.45 0.18 285 / 0.60) 0%, transparent 65%),
            radial-gradient(50% 45% at 88% 12%, oklch(0.55 0.20 155 / 0.40) 0%, transparent 65%),
            radial-gradient(60% 50% at 80% 88%, oklch(0.42 0.20 300 / 0.55) 0%, transparent 65%),
            radial-gradient(45% 45% at 8% 92%, oklch(0.50 0.18 175 / 0.35) 0%, transparent 65%);
          filter: blur(24px) saturate(135%);
          animation: fc-mesh 22s ease-in-out infinite alternate;
        }
        .fc-mesh.light {
          background:
            radial-gradient(55% 45% at 15% 20%, oklch(0.88 0.09 285 / 0.7) 0%, transparent 65%),
            radial-gradient(50% 45% at 88% 12%, oklch(0.92 0.08 155 / 0.55) 0%, transparent 65%),
            radial-gradient(60% 50% at 80% 88%, oklch(0.86 0.10 300 / 0.6) 0%, transparent 65%);
        }
        @keyframes fc-mesh {
          0% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-3%,2%) scale(1.08); }
          100% { transform: translate(2%,-2%) scale(1.04); }
        }
        .fc-cursor {
          position: fixed; top: 0; left: 0; width: 520px; height: 520px;
          margin: -260px 0 0 -260px; pointer-events: none; z-index: 1;
          background: radial-gradient(circle, oklch(0.76 0.15 300 / 0.20) 0%, oklch(0.82 0.19 155 / 0.08) 40%, transparent 70%);
          mix-blend-mode: screen; transition: transform 0.18s cubic-bezier(0.22,1,0.36,1);
          filter: blur(24px);
        }
        @media (hover: none) { .fc-cursor { display: none; } }
        .fc-particle {
          position: absolute; border-radius: 50%;
          background: radial-gradient(circle, var(--aurora-green) 0%, transparent 70%);
          animation: fc-float linear infinite;
          opacity: 0.45;
        }
        @keyframes fc-float {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.35; }
          100% { transform: translate(30px, -140px); opacity: 0; }
        }
        .fc-shell {
          position: relative; z-index: 2;
          max-width: 1180px; margin: 0 auto;
          padding: clamp(28px, 6vw, 64px) clamp(16px, 4vw, 40px);
          width: 100%;
        }
        .fc-topbar {
          display: flex; align-items: center; justify-content: space-between;
          gap: 12px; margin-bottom: clamp(24px, 4vw, 40px);
        }
        .fc-brand {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: 22px; letter-spacing: -0.01em;
        }
        .fc-brand em { font-style: italic; color: var(--aurora-green); }
        .fc-kicker {
          font-family: 'Work Sans', system-ui, sans-serif;
          font-size: 10.5px; font-weight: 500; letter-spacing: 0.32em;
          text-transform: uppercase; color: var(--aurora-green);
        }
        .fc-serif { font-family: 'Instrument Serif', Georgia, serif; font-style: italic; font-weight: 400; }

        /* Bento grid */
        .fc-bento {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-auto-rows: minmax(120px, auto);
          gap: 14px;
        }
        @media (max-width: 860px) {
          .fc-bento { grid-template-columns: repeat(6, 1fr); gap: 12px; }
        }
        @media (max-width: 520px) {
          .fc-bento { grid-template-columns: repeat(2, 1fr); gap: 10px; }
        }

        .fc-tile {
          position: relative;
          background: ${t.card};
          border: 1px solid ${t.border};
          border-radius: 20px;
          backdrop-filter: blur(24px) saturate(140%);
          -webkit-backdrop-filter: blur(24px) saturate(140%);
          padding: 20px;
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), background 0.35s ease, border-color 0.35s ease;
          display: flex; flex-direction: column;
          min-height: 100%;
        }
        .fc-tile::before {
          content: ""; position: absolute; inset: -1px; border-radius: 21px; padding: 1px;
          background: linear-gradient(135deg, transparent 30%, var(--aurora-green), var(--aurora-purple), transparent 80%);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
          opacity: 0; transition: opacity 0.4s ease;
          pointer-events: none;
        }
        .fc-tile:hover { background: ${t.cardHover}; transform: translateY(-3px); }
        .fc-tile:hover::before { opacity: 1; }
        .fc-link-tile { text-decoration: none; color: inherit; cursor: pointer; }
        .fc-link-tile:hover .fc-arrow { transform: translate(3px, -3px); opacity: 1; }

        .fc-arrow { transition: all 0.35s cubic-bezier(0.22,1,0.36,1); opacity: 0.35; }

        /* Tile layout spans */
        .col-hero { grid-column: span 7; grid-row: span 2; }
        .col-actions { grid-column: span 5; grid-row: span 1; }
        .col-qr { grid-column: span 5; grid-row: span 1; }
        .col-social { grid-column: span 4; grid-row: span 1; }
        .col-footer { grid-column: span 12; }

        @media (max-width: 860px) {
          .col-hero { grid-column: span 6; grid-row: span 2; }
          .col-actions { grid-column: span 6; }
          .col-qr { grid-column: span 6; }
          .col-social { grid-column: span 3; }
          .col-footer { grid-column: span 6; }
        }
        @media (max-width: 520px) {
          .col-hero { grid-column: span 2; grid-row: span 1; }
          .col-actions, .col-qr { grid-column: span 2; }
          .col-social { grid-column: span 1; }
          .col-footer { grid-column: span 2; }
        }

        .fc-avatar {
          width: clamp(88px, 18vw, 128px);
          height: clamp(88px, 18vw, 128px);
          border-radius: 50%;
          object-fit: cover;
          display: block;
          border: 1px solid ${t.borderStrong};
        }
        .fc-avatar-ring {
          position: absolute; inset: -6px; border-radius: 50%;
          background: conic-gradient(from 0deg, var(--aurora-green), var(--aurora-purple), var(--aurora-green));
          filter: blur(12px); opacity: 0.7;
          animation: fc-spin 10s linear infinite;
        }
        @keyframes fc-spin { to { transform: rotate(360deg); } }

        .fc-title {
          font-family: 'Instrument Serif', Georgia, serif;
          font-weight: 400; letter-spacing: -0.02em; line-height: 1.02; margin: 0;
          font-size: clamp(40px, 6vw, 68px);
          color: ${t.text};
        }
        .fc-title em {
          font-style: italic;
          background: linear-gradient(120deg, var(--aurora-green) 0%, var(--aurora-purple) 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        .fc-body { font-family: 'Work Sans', system-ui, sans-serif; }

        .fc-meta {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: 'Work Sans', sans-serif;
          font-size: 12px; color: ${t.subtle};
          padding: 5px 10px; border-radius: 999px;
          background: ${t.card}; border: 1px solid ${t.border};
        }

        .fc-btn {
          display: inline-flex; align-items: center; justify-content: center;
          gap: 8px; padding: 11px 16px; min-height: 42px;
          border-radius: 12px; cursor: pointer;
          font-family: 'Work Sans', sans-serif;
          font-size: 13px; font-weight: 500; letter-spacing: 0.01em;
          background: ${t.card}; border: 1px solid ${t.border}; color: ${t.text};
          transition: all 0.25s ease;
        }
        .fc-btn:hover { background: ${t.cardHover}; border-color: ${t.borderStrong}; }
        .fc-btn-primary {
          background: linear-gradient(135deg, var(--aurora-green) 0%, var(--aurora-purple) 100%);
          color: oklch(0.12 0.04 265); border: 0;
          box-shadow: 0 8px 24px oklch(0.55 0.18 175 / 0.30);
        }
        .fc-btn-primary:hover { box-shadow: 0 12px 32px oklch(0.55 0.18 175 / 0.45); transform: translateY(-1px); }

        .fc-icon-box {
          display: inline-flex; align-items: center; justify-content: center;
          width: 44px; height: 44px; border-radius: 12px;
          flex-shrink: 0;
        }

        .fc-modal-overlay {
          position: fixed; inset: 0; z-index: 100;
          background: oklch(0.06 0.03 265 / 0.75);
          backdrop-filter: blur(10px);
          display: flex; align-items: center; justify-content: center;
          padding: 20px; animation: fc-in 0.25s ease-out;
        }
        .fc-modal {
          background: ${t.bg}; border: 1px solid ${t.borderStrong};
          border-radius: 24px; padding: 36px; max-width: 360px; width: 100%;
          position: relative; text-align: center;
          box-shadow: 0 30px 80px oklch(0 0 0 / 0.5), 0 0 80px oklch(0.55 0.18 175 / 0.15);
        }
        .fc-fade-in { animation: fc-in 0.7s cubic-bezier(0.22,1,0.36,1) both; }
        @keyframes fc-in { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }

        @media (hover: none) {
          .fc-tile:hover { transform: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>

      <div className={`fc-mesh ${light ? "light" : ""}`} />
      <div ref={cursorRef} className="fc-cursor" />

      <main
        style={{
          position: "relative",
          minHeight: "100dvh",
          background: t.bg,
          color: t.text,
          fontFamily: "'Work Sans', system-ui, sans-serif",
          transition: "background 0.6s ease, color 0.4s ease",
          overflow: "hidden",
        }}
      >
        {/* Particles */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none", overflow: "hidden" }}>
          {particles.map((p) => (
            <span
              key={p.id}
              className="fc-particle"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                width: p.size,
                height: p.size,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
              }}
            />
          ))}
        </div>

        <div className="fc-shell">
          {/* Top bar */}
          <div className="fc-topbar fc-fade-in">
            <div className="fc-brand">
              chagas<em>.</em>
            </div>
            <div
              style={{
                display: "inline-flex", padding: 3,
                background: t.card, border: `1px solid ${t.border}`,
                borderRadius: 999, backdropFilter: "blur(12px)",
              }}
            >
              {[
                { key: false as const, Icon: Moon, label: "Escuro" },
                { key: true as const, Icon: Sun, label: "Claro" },
              ].map(({ key, Icon, label }) => {
                const active = light === key;
                return (
                  <button
                    key={String(key)}
                    onClick={() => setLight(key)}
                    aria-label={label}
                    style={{
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      width: 34, height: 34, border: 0, borderRadius: 999,
                      background: active ? t.text : "transparent",
                      color: active ? t.bg : t.subtle, cursor: "pointer",
                      transition: "all 0.25s ease",
                    }}
                  >
                    <Icon size={14} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bento grid */}
          <div className="fc-bento fc-fade-in">
            {/* HERO tile */}
            <section className="fc-tile col-hero" style={{ padding: "clamp(24px, 4vw, 40px)", justifyContent: "space-between", gap: 24 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 20, flexWrap: "wrap" }}>
                <div style={{ position: "relative", flexShrink: 0 }}>
                  <div className="fc-avatar-ring" />
                  <img src={avatar} alt="Francisco Chagas" className="fc-avatar" style={{ position: "relative" }} />
                </div>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <div className="fc-kicker" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                    <Sparkles size={11} /> Minhas Conexões
                  </div>
                  <h1 className="fc-title" style={{ marginTop: 10 }}>
                    Francisco<br /><em>Chagas</em>
                  </h1>
                </div>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                <span className="fc-meta"><MapPin size={11} /> Brasil</span>
                <span className="fc-meta" style={{ color: "var(--aurora-green)" }}>● Online</span>
                <span className="fc-meta">{links.length} redes</span>
              </div>
            </section>

            {/* Actions tile */}
            <section className="fc-tile col-actions" style={{ justifyContent: "space-between", gap: 14 }}>
              <div>
                <div className="fc-kicker" style={{ marginBottom: 6 }}>Compartilhar</div>
                <p style={{ margin: 0, fontFamily: "'Instrument Serif', serif", fontSize: 22, lineHeight: 1.15, color: t.text }}>
                  Leve meu perfil <em className="fc-serif" style={{ color: "var(--aurora-green)" }}>com você</em>.
                </p>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <button onClick={copyLink} className="fc-btn fc-btn-primary" style={{ flex: 1, minWidth: 130 }}>
                  <Copy size={14} /> Copiar link
                </button>
                <button onClick={() => setShowQR(true)} className="fc-btn" style={{ flex: 1, minWidth: 110 }}>
                  <QrCode size={14} /> QR Code
                </button>
              </div>
            </section>

            {/* QR preview tile */}
            <section className="fc-tile col-qr" style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  padding: 10, borderRadius: 14,
                  background: "oklch(0.98 0 0)",
                  boxShadow: "0 8px 24px oklch(0.55 0.18 175 / 0.25)",
                  flexShrink: 0,
                }}
              >
                <QRCodeSVG value={profileUrl} size={78} level="M" bgColor="#ffffff" fgColor="#16213e" />
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <div className="fc-kicker" style={{ marginBottom: 6 }}>Escaneie</div>
                <p style={{ margin: 0, fontFamily: "'Instrument Serif', serif", fontSize: 20, lineHeight: 1.2, color: t.text }}>
                  Abra meu perfil <em style={{ color: "var(--aurora-purple)" }}>em segundos</em>.
                </p>
                <p style={{ margin: "6px 0 0", fontSize: 11.5, color: t.subtle, wordBreak: "break-all" }}>
                  redeschagas.lovable.app
                </p>
              </div>
            </section>

            {/* Social link tiles */}
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="fc-tile col-social fc-link-tile"
                style={{ justifyContent: "space-between", gap: 14 }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                  <span
                    className="fc-icon-box"
                    style={{
                      background: link.img
                        ? "oklch(1 0 0 / 0.95)"
                        : `linear-gradient(135deg, ${link.accent} 0%, var(--aurora-purple) 130%)`,
                      color: "oklch(0.15 0.03 265)",
                      boxShadow: `0 6px 18px ${link.accent} / 0.25`,
                    }}
                  >
                    {link.Icon ? <link.Icon size={18} /> : link.img ? (
                      <img src={link.img} alt={link.label} style={{ width: 26, height: 26, objectFit: "contain" }} />
                    ) : null}
                  </span>
                  <ArrowUpRight className="fc-arrow" size={18} color={t.subtle} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: 22, lineHeight: 1.1, color: t.text }}>
                    {link.label}
                  </div>
                  <div style={{ fontSize: 12, color: t.subtle, marginTop: 4, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {link.handle}
                  </div>
                </div>
              </a>
            ))}

            {/* Footer tile */}
            <section
              className="fc-tile col-footer"
              style={{
                flexDirection: "row", alignItems: "center", justifyContent: "space-between",
                gap: 16, flexWrap: "wrap",
                padding: "18px 24px", minHeight: 0,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: t.subtle }}>
                <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--aurora-green)", boxShadow: "0 0 12px var(--aurora-green)" }} />
                <span>Desenvolvido por <span className="fc-serif" style={{ color: "var(--aurora-green)", fontSize: 15 }}>Francisco Chagas</span></span>
              </div>
              <div style={{ fontSize: 11.5, color: t.subtle, letterSpacing: "0.14em", textTransform: "uppercase" }}>
                © {new Date().getFullYear()}
              </div>
            </section>
          </div>
        </div>

        {/* QR Modal */}
        {showQR && (
          <div className="fc-modal-overlay" onClick={() => setShowQR(false)}>
            <div className="fc-modal" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setShowQR(false)}
                aria-label="Fechar"
                style={{
                  position: "absolute", top: 14, right: 14,
                  width: 34, height: 34, borderRadius: 999,
                  background: t.card, border: `1px solid ${t.border}`,
                  color: t.text, cursor: "pointer",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <X size={16} />
              </button>
              <div className="fc-kicker" style={{ marginBottom: 8 }}>Compartilhar</div>
              <h3 style={{
                margin: "0 0 22px", fontFamily: "'Instrument Serif', serif",
                fontSize: 30, fontWeight: 400, letterSpacing: "-0.02em", color: t.text,
              }}>
                Aponte a <em style={{ color: "var(--aurora-green)" }}>câmera</em>
              </h3>
              <div
                style={{
                  display: "inline-block", padding: 18, borderRadius: 18,
                  background: "oklch(0.98 0 0)",
                  boxShadow: "0 0 50px oklch(0.55 0.18 175 / 0.35)",
                }}
              >
                <QRCodeSVG value={profileUrl} size={208} level="M" bgColor="#ffffff" fgColor="#16213e" />
              </div>
              <p style={{ margin: "20px 0 0", fontSize: 12.5, color: t.subtle }}>
                Escaneie para abrir este perfil
              </p>
            </div>
          </div>
        )}
      </main>
      <Toaster />
    </>
  );
}
