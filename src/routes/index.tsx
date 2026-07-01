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
  ExternalLink,
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

import avatar from "@/assets/projeto/avatar.jpg";
import stravaIcon from "@/assets/projeto/strava.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Francisco Chagas — Desenvolvedor" },
      { name: "description", content: "Links, projetos e contatos de Francisco Chagas." },
      { property: "og:title", content: "Francisco Chagas — Desenvolvedor" },
      { property: "og:description", content: "Links, projetos e contatos de Francisco Chagas." },
    ],
  }),
  component: Index,
});

const links = [
  { href: "https://www.facebook.com/", label: "Facebook", handle: "facebook.com", Icon: Facebook },
  { href: "https://github.com/chagassilva06-tech", label: "GitHub", handle: "chagassilva06-tech", Icon: Github },
  { href: "https://www.instagram.com/silva.franciscochagas/", label: "Instagram", handle: "@silva.franciscochagas", Icon: Instagram },
  { href: "https://www.linkedin.com/in/francisco-das-chagas-ferreira-silva-b880601b3/", label: "LinkedIn", handle: "Francisco C. F. Silva", Icon: Linkedin },
];

const projects = [
  {
    title: "Portfolio Interativo",
    description: "Site pessoal com animações fluidas e design premium.",
    tag: "React · Motion",
    href: "https://github.com/Franksilva959",
    gradient: "linear-gradient(135deg, oklch(0.72 0.22 155) 0%, oklch(0.75 0.18 200) 100%)",
  },
  {
    title: "Dashboard Analytics",
    description: "Painel de dados em tempo real com visualizações elegantes.",
    tag: "TypeScript · D3",
    href: "https://github.com/Franksilva959",
    gradient: "linear-gradient(135deg, oklch(0.78 0.20 130) 0%, oklch(0.72 0.22 155) 100%)",
  },
  {
    title: "E-commerce Modular",
    description: "Loja completa com checkout, pagamentos e admin.",
    tag: "Next.js · Stripe",
    href: "https://github.com/Franksilva959",
    gradient: "linear-gradient(135deg, oklch(0.70 0.18 200) 0%, oklch(0.78 0.20 130) 100%)",
  },
];

function Index() {
  const [light, setLight] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const shellRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const profileUrl = typeof window !== "undefined" ? window.location.href : "";

  // Cursor aurora + avatar tilt
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      if (avatarRef.current) {
        const rect = avatarRef.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / 40;
        const dy = (e.clientY - cy) / 40;
        avatarRef.current.style.transform = `perspective(600px) rotateY(${Math.max(-12, Math.min(12, dx))}deg) rotateX(${Math.max(-12, Math.min(12, -dy))}deg)`;
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(profileUrl);
      toast.success("Link copiado!", { description: "Compartilhe onde quiser." });
    } catch {
      toast.error("Não foi possível copiar");
    }
  };

  // Particles
  const particles = useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 8,
        duration: 12 + Math.random() * 14,
      })),
    [],
  );

  const t = light
    ? {
        text: "oklch(0.20 0.02 150)",
        subtle: "oklch(0.50 0.02 150)",
        card: "oklch(1 0 0 / 0.55)",
        cardHover: "oklch(1 0 0 / 0.80)",
        border: "oklch(0.20 0.02 150 / 0.10)",
        borderStrong: "oklch(0.20 0.02 150 / 0.22)",
        bg: "oklch(0.96 0.01 150)",
      }
    : {
        text: "oklch(0.96 0.02 140)",
        subtle: "oklch(0.62 0.02 150)",
        card: "oklch(1 0 0 / 0.03)",
        cardHover: "oklch(1 0 0 / 0.07)",
        border: "oklch(1 0 0 / 0.08)",
        borderStrong: "oklch(1 0 0 / 0.20)",
        bg: "oklch(0.14 0.03 155)",
      };

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        html, body { margin: 0; padding: 0; overflow-x: hidden; -webkit-text-size-adjust: 100%; }
        :root {
          --neon: oklch(0.85 0.24 145);
          --neon-2: oklch(0.82 0.18 200);
          --neon-3: oklch(0.92 0.22 125);
        }
        .fc-mesh {
          position: fixed; inset: 0; z-index: 0; pointer-events: none;
          background:
            radial-gradient(50% 40% at 20% 20%, oklch(0.42 0.20 150 / 0.55) 0%, transparent 60%),
            radial-gradient(45% 45% at 85% 15%, oklch(0.55 0.18 200 / 0.35) 0%, transparent 65%),
            radial-gradient(55% 45% at 75% 85%, oklch(0.50 0.22 130 / 0.45) 0%, transparent 60%),
            radial-gradient(40% 40% at 10% 90%, oklch(0.42 0.16 190 / 0.30) 0%, transparent 65%);
          filter: blur(20px) saturate(130%);
          animation: fc-mesh 18s ease-in-out infinite alternate;
        }
        .fc-mesh.light {
          background:
            radial-gradient(50% 40% at 20% 20%, oklch(0.90 0.09 150 / 0.7) 0%, transparent 60%),
            radial-gradient(45% 45% at 85% 15%, oklch(0.92 0.06 200 / 0.5) 0%, transparent 65%),
            radial-gradient(55% 45% at 75% 85%, oklch(0.88 0.10 130 / 0.6) 0%, transparent 60%);
        }
        @keyframes fc-mesh {
          0% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-3%,2%) scale(1.08); }
          100% { transform: translate(2%,-2%) scale(1.04); }
        }
        .fc-cursor {
          position: fixed; top: 0; left: 0; width: 480px; height: 480px;
          margin: -240px 0 0 -240px; pointer-events: none; z-index: 1;
          background: radial-gradient(circle, oklch(0.85 0.24 145 / 0.18) 0%, oklch(0.82 0.18 200 / 0.08) 40%, transparent 70%);
          mix-blend-mode: screen; transition: transform 0.15s cubic-bezier(0.22,1,0.36,1);
          filter: blur(20px);
        }
        @media (hover: none) { .fc-cursor { display: none; } }
        .fc-particle {
          position: absolute; border-radius: 50%;
          background: radial-gradient(circle, var(--neon) 0%, transparent 70%);
          animation: fc-float linear infinite;
          opacity: 0.5;
        }
        @keyframes fc-float {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.4; }
          100% { transform: translate(30px, -120px); opacity: 0; }
        }
        .fc-shell { position: relative; z-index: 2; max-width: 520px; margin: 0 auto; padding: clamp(40px,10vw,80px) clamp(16px,5vw,24px) clamp(32px,8vw,48px); width: 100%; }
        .fc-kicker {
          font-family: 'Bricolage Grotesque', system-ui, sans-serif;
          font-size: 11px; font-weight: 500; letter-spacing: 0.28em; text-transform: uppercase;
          color: var(--neon); margin-bottom: 12px; display: inline-flex; align-items: center; gap: 8px;
        }
        .fc-title {
          font-family: 'Bricolage Grotesque', system-ui, sans-serif;
          font-weight: 600; letter-spacing: -0.03em; line-height: 1.05; margin: 0;
          font-size: clamp(34px, 8vw, 46px);
          background: linear-gradient(120deg, currentColor 0%, var(--neon) 55%, var(--neon-2) 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
        }
        .fc-serif { font-family: 'Fraunces', Georgia, serif; font-style: italic; }
        .fc-avatar-wrap { transition: transform 0.25s cubic-bezier(0.22,1,0.36,1); transform-style: preserve-3d; will-change: transform; }
        .fc-avatar { width: clamp(96px, 24vw, 116px); height: clamp(96px, 24vw, 116px); border-radius: 50%; display: block; object-fit: cover; }
        .fc-avatar-ring {
          position: absolute; inset: -8px; border-radius: 50%;
          background: conic-gradient(from 0deg, var(--neon), var(--neon-2), var(--neon-3), var(--neon));
          filter: blur(10px); animation: fc-spin 8s linear infinite;
        }
        @keyframes fc-spin { to { transform: rotate(360deg); } }
        .fc-status {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 12px; border-radius: 999px;
          background: oklch(0.55 0.20 145 / 0.12);
          border: 1px solid oklch(0.75 0.22 145 / 0.35);
          font-size: 11px; font-weight: 500; letter-spacing: 0.06em;
          color: var(--neon); margin-top: 14px;
        }
        .fc-dot { position: relative; width: 8px; height: 8px; border-radius: 50%; background: var(--neon); box-shadow: 0 0 12px var(--neon); }
        .fc-dot::after { content: ""; position: absolute; inset: -4px; border-radius: 50%; background: var(--neon); opacity: 0.5; animation: fc-ping 1.8s cubic-bezier(0,0,0.2,1) infinite; }
        @keyframes fc-ping { 0% { transform: scale(1); opacity: 0.6; } 100% { transform: scale(2.2); opacity: 0; } }
        .fc-card {
          position: relative; background: ${t.card};
          border: 1px solid ${t.border}; border-radius: 16px;
          backdrop-filter: blur(20px) saturate(140%);
          transition: all 0.35s cubic-bezier(0.22,1,0.36,1);
          overflow: hidden;
        }
        .fc-card::before {
          content: ""; position: absolute; inset: -1px; border-radius: 17px; padding: 1px;
          background: linear-gradient(120deg, transparent, var(--neon), var(--neon-2), transparent);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
          opacity: 0; transition: opacity 0.4s ease;
        }
        .fc-card:hover { background: ${t.cardHover}; transform: translateY(-2px); }
        .fc-card:hover::before { opacity: 1; }
        .fc-card:hover .fc-arrow { transform: translate(2px, -2px); opacity: 1; }
        .fc-arrow { transition: all 0.35s cubic-bezier(0.22,1,0.36,1); opacity: 0.4; flex-shrink: 0; }
        .fc-theme-btn { transition: all 0.25s ease; touch-action: manipulation; }
        .fc-fade-in { animation: fc-in 0.7s cubic-bezier(0.22,1,0.36,1) both; }
        .fc-fade-in-2 { animation: fc-in 0.7s 0.15s cubic-bezier(0.22,1,0.36,1) both; }
        .fc-fade-in-3 { animation: fc-in 0.7s 0.3s cubic-bezier(0.22,1,0.36,1) both; }
        @keyframes fc-in { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .fc-project-preview {
          position: relative; height: 88px; border-radius: 12px; overflow: hidden;
          margin-bottom: 12px;
        }
        .fc-project-preview::after {
          content: ""; position: absolute; inset: 0;
          background: radial-gradient(120% 80% at 50% 100%, transparent 40%, oklch(0 0 0 / 0.35) 100%);
        }
        .fc-modal-overlay {
          position: fixed; inset: 0; z-index: 100; background: oklch(0.05 0.02 150 / 0.75);
          backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center;
          padding: 20px; animation: fc-in 0.25s ease-out;
        }
        .fc-modal {
          background: ${t.bg}; border: 1px solid ${t.borderStrong};
          border-radius: 20px; padding: 32px; max-width: 340px; width: 100%;
          position: relative; text-align: center;
          box-shadow: 0 20px 60px oklch(0 0 0 / 0.4), 0 0 60px var(--neon) / 0.1;
        }
        @media (hover: none) {
          .fc-card:hover { transform: none; }
          .fc-avatar-wrap { transform: none !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>

      <div className={`fc-mesh ${light ? "light" : ""}`} />
      <div ref={cursorRef} className="fc-cursor" />

      <main
        ref={shellRef}
        style={{
          position: "relative",
          minHeight: "100dvh",
          background: t.bg,
          color: t.text,
          fontFamily: "'Inter', system-ui, sans-serif",
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
          {/* Header */}
          <header className="fc-fade-in" style={{ textAlign: "center", marginBottom: 32 }}>
            <div style={{ position: "relative", display: "inline-block", marginBottom: 22 }}>
              <div className="fc-avatar-ring" />
              <div ref={avatarRef} className="fc-avatar-wrap" style={{ position: "relative" }}>
                <img
                  src={avatar}
                  alt="Francisco Chagas"
                  className="fc-avatar"
                  style={{ border: `1px solid ${t.borderStrong}` }}
                />
              </div>
            </div>
            <div className="fc-kicker">Desenvolvedor · Brasil</div>
            <h1 className="fc-title">
              Francisco <span className="fc-serif">Chagas</span>
            </h1>
            <div className="fc-status">
              <span className="fc-dot" />
              Disponível para trabalho
            </div>
          </header>

          {/* Action bar */}
          <div className="fc-fade-in-2" style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 28, flexWrap: "wrap" }}>
            <button
              onClick={copyLink}
              className="fc-theme-btn"
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "9px 14px", minHeight: 38,
                background: t.card, border: `1px solid ${t.border}`,
                borderRadius: 999, color: t.text, cursor: "pointer",
                fontSize: 12, fontWeight: 500, fontFamily: "inherit",
                backdropFilter: "blur(12px)",
              }}
            >
              <Copy size={13} /> Copiar link
            </button>
            <button
              onClick={() => setShowQR(true)}
              className="fc-theme-btn"
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "9px 14px", minHeight: 38,
                background: t.card, border: `1px solid ${t.border}`,
                borderRadius: 999, color: t.text, cursor: "pointer",
                fontSize: 12, fontWeight: 500, fontFamily: "inherit",
                backdropFilter: "blur(12px)",
              }}
            >
              <QrCode size={13} /> QR Code
            </button>
            <div
              style={{
                display: "inline-flex", padding: 3,
                background: t.card, border: `1px solid ${t.border}`,
                borderRadius: 999, backdropFilter: "blur(12px)",
              }}
            >
              {[
                { key: false as const, Icon: Moon },
                { key: true as const, Icon: Sun },
              ].map(({ key, Icon }) => {
                const active = light === key;
                return (
                  <button
                    key={String(key)}
                    className="fc-theme-btn"
                    onClick={() => setLight(key)}
                    aria-label={key ? "Claro" : "Escuro"}
                    style={{
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      width: 32, height: 32, border: 0, borderRadius: 999,
                      background: active ? t.text : "transparent",
                      color: active ? t.bg : t.subtle, cursor: "pointer",
                    }}
                  >
                    <Icon size={13} />
                  </button>
                );
              })}
            </div>
          </div>


          {/* Links */}
          <section className="fc-fade-in-3">
            <h2 style={{ margin: "0 0 14px", padding: "0 4px", fontSize: 13, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: t.subtle }}>
              Redes
            </h2>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, padding: 0, margin: 0 }}>
              {links.map(({ href, label, handle, Icon }) => (
                <li key={href}>
                  <a
                    className="fc-card"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "flex", alignItems: "center", gap: 14,
                      padding: "14px 16px", textDecoration: "none",
                      color: t.text, minHeight: 62,
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex", alignItems: "center", justifyContent: "center",
                        width: 40, height: 40, borderRadius: 11,
                        background: "linear-gradient(135deg, var(--neon) 0%, var(--neon-2) 100%)",
                        color: "oklch(0.15 0.02 150)", flexShrink: 0,
                      }}
                    >
                      <Icon size={17} />
                    </span>
                    <span style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
                      <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: "-0.005em" }}>{label}</span>
                      <span style={{ fontSize: 12, color: t.subtle, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {handle}
                      </span>
                    </span>
                    <ArrowUpRight className="fc-arrow" size={16} color={t.subtle} />
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <footer
            style={{
              marginTop: 48, paddingTop: 24,
              borderTop: `1px solid ${t.border}`,
              textAlign: "center", fontSize: 12,
              color: t.subtle, letterSpacing: "0.04em",
            }}
          >
            Feito com{" "}
            <span className="fc-serif" style={{ color: "var(--neon)", fontSize: 14 }}>
              afeto
            </span>{" "}
            por Francisco
          </footer>
        </div>

        {/* QR Modal */}
        {showQR && (
          <div className="fc-modal-overlay" onClick={() => setShowQR(false)}>
            <div className="fc-modal" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setShowQR(false)}
                aria-label="Fechar"
                style={{
                  position: "absolute", top: 12, right: 12,
                  width: 32, height: 32, borderRadius: 999,
                  background: t.card, border: `1px solid ${t.border}`,
                  color: t.text, cursor: "pointer",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <X size={15} />
              </button>
              <div className="fc-kicker" style={{ marginBottom: 6 }}>Compartilhar</div>
              <h3 style={{ margin: "0 0 20px", fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em", color: t.text }}>
                Aponte a câmera
              </h3>
              <div
                style={{
                  display: "inline-block", padding: 16, borderRadius: 16,
                  background: "oklch(0.98 0 0)",
                  boxShadow: "0 0 40px oklch(0.85 0.24 145 / 0.3)",
                }}
              >
                <QRCodeSVG
                  value={profileUrl || "https://lovable.dev"}
                  size={200}
                  level="M"
                  bgColor="#ffffff"
                  fgColor="#0a1a12"
                />
              </div>
              <p style={{ margin: "18px 0 0", fontSize: 12, color: t.subtle }}>
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
