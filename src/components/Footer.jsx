import { Reveal } from "./Reveal";
import { asset } from "../config";

export default function Footer() {
  return (
    <footer style={s.footer}>
      <Reveal>
        <img src={asset("/Lemonade.png")} alt="LEMONADE" style={{
          width: "clamp(150px, 30vw, 250px)", marginBottom: 12, opacity: 0.8,
          filter: "drop-shadow(0 0 20px rgba(57,255,20,0.3))",
        }} />
        <div style={s.sub}>aespa · 2nd full album · 2026</div>
        <div style={s.credit}>
          fan project by <span style={s.creditName}>wiam</span>
        </div>
        <div style={s.disclaimer}>
          this is a fan-made project for portfolio purposes.
          not affiliated with SM Entertainment or aespa.
        </div>
      </Reveal>
    </footer>
  );
}

const s = {
  footer: {
    padding: "80px 24px", textAlign: "center", background: "#050505",
    borderTop: "1px solid rgba(57,255,20,0.06)",
    display: "flex", flexDirection: "column", alignItems: "center",
  },
  sub: { fontSize: 12, color: "rgba(255,255,255,0.2)", letterSpacing: 3, marginBottom: 32 },
  credit: { fontSize: 13, color: "rgba(255,255,255,0.2)", marginBottom: 12 },
  creditName: { color: "#39FF14", fontWeight: 600 },
  disclaimer: {
    fontSize: 11, color: "rgba(255,255,255,0.1)",
    maxWidth: 400, margin: "0 auto", lineHeight: 1.6,
  },
};
