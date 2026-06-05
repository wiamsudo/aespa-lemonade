import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Members from "./components/Members";
import Tracklist from "./components/Tracklist";
import Listen from "./components/Listen";
import Footer from "./components/Footer";

const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { margin: 0; background: #050505; color: #fff; overflow-x: hidden; }
  ::selection { background: #39FF14; color: #000; }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(60px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideLeft {
    from { opacity: 0; transform: translateX(80px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.85); }
    to { opacity: 1; transform: scale(1); }
  }
  @keyframes glowPulse {
    0%, 100% { text-shadow: 0 0 20px rgba(57,255,20,0.4); }
    50% { text-shadow: 0 0 60px rgba(57,255,20,0.7), 0 0 120px rgba(57,255,20,0.2); }
  }
  @keyframes scrollBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(8px); }
  }
  @keyframes flicker {
    0%, 100% { opacity: 1; }
    92% { opacity: 1; }
    93% { opacity: 0.4; }
    94% { opacity: 1; }
    96% { opacity: 0.7; }
    97% { opacity: 1; }
  }
  @keyframes floatSlow {
    0%, 100% { transform: translateY(0) rotate(var(--rot, 0deg)); }
    50% { transform: translateY(-12px) rotate(calc(var(--rot, 0deg) + 5deg)); }
  }
`;

function MouseGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  useEffect(() => {
    const h = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, []);
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9999 }}>
      <div style={{
        position: "absolute", left: pos.x - 150, top: pos.y - 150,
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(57,255,20,0.06) 0%, transparent 70%)",
        transition: "left 0.15s ease-out, top 0.15s ease-out", filter: "blur(30px)",
      }} />
    </div>
  );
}

export default function App() {
  return (
    <div style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      <style>{globalCSS}</style>
      <MouseGlow />
      <Hero />
      <Members />
      <Tracklist />
      <Listen />
      <Footer />
    </div>
  );
}
