import { useState, useEffect } from "react";
import { asset } from "../config";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => { setTimeout(() => setLoaded(true), 300); }, []);
  useEffect(() => {
    const h = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const fade = Math.max(0, 1 - scrollY / 500);

  return (
    <section style={s.hero}>
      <div style={s.scanlines} />
      <div style={{ ...s.orb, top: "20%", left: "-5%", width: 500, height: 500 }} />
      <div style={{ ...s.orb, bottom: "0%", right: "-10%", width: 300, height: 300 }} />

      <div style={{
        ...s.content,
        opacity: loaded ? fade : 0,
        transform: `translateY(${loaded ? scrollY * 0.2 : 50}px)`,
        transition: loaded ? "opacity 0.1s" : "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
      }}>
        {/* Lemon sticker */}
        <img
          src={asset("/Lemon.png")}
          alt=""
          style={{
            width: "clamp(80px, 12vw, 120px)",
            marginBottom: 20,
            filter: "drop-shadow(0 0 30px rgba(57,255,20,0.4))",
            animation: "floatSlow 4s ease-in-out infinite",
            "--rot": "-10deg",
          }}
        />

        {/* LEMONADE logo */}
        <img
          src={asset("/Lemonade.png")}
          alt="LEMONADE"
          style={{
            width: "clamp(300px, 60vw, 700px)",
            marginBottom: 16,
            filter: "drop-shadow(0 0 40px rgba(57,255,20,0.3))",
          }}
        />

        {/* "by" text */}
        <div style={s.byText}>by</div>

        {/* aespa logo */}
        <img
          src={asset("/Aespa_logo.png")}
          alt="aespa"
          style={{
            width: "clamp(120px, 25vw, 220px)",
            marginBottom: 20,
            filter: "drop-shadow(0 0 40px rgba(57,255,20,0.3))",
          }}
        />

        <div style={s.date}>THE 2ND ALBUM · 05.29.2026</div>
      </div>

      <div style={{ ...s.scrollHint, opacity: fade }}>
        <span style={s.scrollText}>scroll</span>
        <div style={s.scrollLine} />
      </div>
    </section>
  );
}

const s = {
  hero: {
    height: "100vh",
    display: "flex", alignItems: "center", justifyContent: "center",
    position: "relative", overflow: "hidden", background: "#050505",
  },
  scanlines: {
    position: "absolute", inset: 0,
    backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(57,255,20,0.012) 2px, rgba(57,255,20,0.012) 4px)",
    pointerEvents: "none", zIndex: 3,
  },
  orb: {
    position: "absolute", borderRadius: "50%",
    background: "radial-gradient(circle, rgba(57,255,20,0.06) 0%, transparent 70%)",
    filter: "blur(80px)", animation: "glowPulse 6s ease-in-out infinite", pointerEvents: "none",
  },
  content: {
    textAlign: "center", position: "relative", zIndex: 2,
    display: "flex", flexDirection: "column", alignItems: "center",
  },
  byText: {
    fontSize: 14, letterSpacing: 6, textTransform: "uppercase",
    color: "#C1D005", fontWeight: 300, marginBottom: 8,
  },
  date: {
    fontSize: 12, letterSpacing: 6, color: "rgba(255,255,255,0.2)", fontWeight: 400,
  },
  scrollHint: {
    position: "absolute", bottom: 40, left: "50%", right: "50%",
    display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
    animation: "scrollBounce 2s ease-in-out infinite", zIndex: 4,
  },
  scrollText: {
    fontSize: 10, letterSpacing: 4, textTransform: "uppercase", color: "rgba(57,255,20,0.25)",
  },
  scrollLine: {
    width: 1, height: 30, background: "linear-gradient(to bottom, rgba(57,255,20,0.3), transparent)",
  },
};
