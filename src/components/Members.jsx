import { useRef, useState, useEffect } from "react";
import { asset } from "../config";

const MEMBERS = [
  { name: "KARINA", role: "Leader · Vocalist · Dancer", img: "/members/Karina.jpg", side: "left" },
  { name: "GISELLE", role: "Rapper · Vocalist", img: "/members/giselle.jpg", side: "right" },
  { name: "NINGNING", role: "Main Vocalist", img: "/members/NingNing.jpg", side: "left" },
  { name: "WINTER", role: "Main Vocalist · Dancer", img: "/members/Winter.jpg", side: "right" },
];

// Lemon sticker images to scatter
const LEMONS = ["/Lemon.png", "/Lemon_2.png"];

function useScrollProgress(ref) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handler = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.max(0, Math.min(1, 1 - rect.top / vh));
      setProgress(p);
    };
    window.addEventListener("scroll", handler);
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [ref]);
  return progress;
}

function MemberSection({ member, index }) {
  const ref = useRef();
  const progress = useScrollProgress(ref);
  const [hovered, setHovered] = useState(false);

  const isLeft = member.side === "left";
  const reveal = Math.min(1, progress * 1.8);
  const imgSlide = (1 - reveal) * (isLeft ? -80 : 80);
  const nameSlide = (1 - reveal) * (isLeft ? 80 : -80);

  // Pick a lemon sticker
  const lemonSrc = LEMONS[index % 2];
  const lemonPositions = isLeft
    ? { top: "10%", right: "12%", rot: "15deg" }
    : { bottom: "12%", left: "10%", rot: "-20deg" };

  return (
    <section ref={ref} style={s.section}>
      <div style={{
        ...s.inner,
        flexDirection: isLeft ? "row" : "row-reverse",
      }}>
        {/* Photo */}
        <div
          style={{
            ...s.imgWrap,
            transform: `translateX(${imgSlide}px)`,
            opacity: reveal,
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img src={member.img} alt={member.name} style={{
            ...s.img,
            transform: hovered ? "scale(1.05)" : "scale(1)",
            filter: hovered ? "brightness(1.1)" : "brightness(0.85) contrast(1.1)",
          }} />
          <div style={{ ...s.imgBorder, opacity: hovered ? 1 : 0.4 }} />
        </div>

        {/* Name + role */}
        <div style={{
          ...s.nameWrap,
          transform: `translateX(${nameSlide}px)`,
          opacity: reveal,
          textAlign: isLeft ? "left" : "right",
        }}>
          <div style={s.name}>{member.name}</div>
          <div style={s.role}>{member.role}</div>
        </div>
      </div>

      {/* Lemon sticker decoration */}
      <img
        src={lemonSrc}
        alt=""
        style={{
          position: "absolute",
          ...lemonPositions,
          width: "clamp(40px, 7vw, 70px)",
          opacity: Math.max(0, reveal - 0.3) * 0.6,
          transform: `rotate(${lemonPositions.rot})`,
          filter: "drop-shadow(0 0 15px rgba(57,255,20,0.3))",
          animation: "floatSlow 5s ease-in-out infinite",
          "--rot": lemonPositions.rot,
          pointerEvents: "none",
          zIndex: 3,
        }}
      />

      {/* LEMONADE watermark on alternating */}
      {index % 2 === 1 && (
        <img
          src="/Lemonade.png"
          alt=""
          style={{
            position: "absolute",
            top: "12%",
            [isLeft ? "left" : "right"]: "5%",
            width: "clamp(150px, 25vw, 250px)",
            opacity: Math.max(0, reveal - 0.4) * 0.12,
            transform: "rotate(-5deg)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
      )}
    </section>
  );
}

export default function Members() {
  return (
    <div>
      {MEMBERS.map((m, i) => (
        <MemberSection key={m.name} member={m} index={i} />
      ))}
    </div>
  );
}

const s = {
  section: {
    minHeight: "70vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    background: "#050505",
    padding: "30px 12px",
  },
  inner: {
    display: "flex",
    alignItems: "center",
    gap: "clamp(24px, 5vw, 60px)",
    maxWidth: 900,
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  imgWrap: {
    width: "clamp(260px, 35vw, 380px)",
    aspectRatio: "1",
    borderRadius: 6,
    overflow: "hidden",
    position: "relative",
    flexShrink: 0,
    transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
  },
  imgBorder: {
    position: "absolute",
    inset: 0,
    borderRadius: 6,
    border: "1.5px solid rgba(57,255,20,0.3)",
    boxShadow: "0 0 40px rgba(57,255,20,0.1), 0 0 80px rgba(57,255,20,0.05)",
    transition: "opacity 0.4s ease",
    pointerEvents: "none",
  },
  nameWrap: {
    flex: 1,
    minWidth: 180,
    transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease",
  },
  name: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(32px, 5vw, 56px)",
    fontWeight: 900,
    color: "#C1D005",
    textShadow: "0 0 40px rgba(57,255,20,0.4), 0 0 80px rgba(57,255,20,0.15)",
    letterSpacing: 3,
    lineHeight: 1,
    marginBottom: 10,
  },
  role: {
    fontSize: 14,
    color: "rgba(255,255,255,0.3)",
    letterSpacing: 2,
  },
};
