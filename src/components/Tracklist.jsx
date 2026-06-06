import { useState } from "react";
import { Reveal } from "./Reveal";
import { asset } from "../config";

const TRACKS = [
  { num: "01", title: "WDA", sub: "Whole Different Animal", feat: "ft. G-Dragon", badge: "title", dur: "3:30" },
  { num: "02", title: "LEMONADE", sub: null, feat: null, badge: "title", dur: "3:07" },
  { num: "03", title: "Shakin'", sub: null, feat: null, badge: null, dur: "2:50" },
  { num: "04", title: "Can't Help Myself", sub: null, feat: null, badge: null, dur: "3:02" },
  { num: "05", title: "Camouflage", sub: null, feat: null, badge: null, dur: "2:55" },
  { num: "06", title: "Bite", sub: null, feat: null, badge: null, dur: "2:48" },
  { num: "07", title: "Switchblade", sub: null, feat: "ft. Ty Dolla $ign", badge: null, dur: "2:59" },
  { num: "08", title: "Roll", sub: null, feat: null, badge: "eng", dur: "2:48" },
  { num: "09", title: "My Plan", sub: null, feat: null, badge: null, dur: "3:10" },
  { num: "10", title: "'Til We Die", sub: null, feat: null, badge: null, dur: "3:12" },
  { num: "11", title: "LEMONADE", sub: null, feat: "ft. Becky G", badge: "digital", dur: "3:07" },
  { num: "12", title: "MY LEMONADE", sub: null, feat: null, badge: "apple music", dur: "0:46" },
];

function Track({ track, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal animation="fadeUp" delay={index * 0.04}>
      <div
        style={{
          ...s.track,
          background: hovered ? "rgba(57,255,20,0.03)" : "transparent",
          borderColor: hovered ? "rgba(57,255,20,0.15)" : "rgba(255,255,255,0.04)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span style={{
          ...s.trackNum,
          color: hovered ? "#39FF14" : "rgba(57,255,20,0.3)",
        }}>{track.num}</span>
        <div style={s.trackInfo}>
          <div style={s.trackTitleRow}>
            <span style={{
              ...s.trackTitle,
              color: hovered ? "#39FF14" : "rgba(255,255,255,0.9)",
              textShadow: hovered ? "0 0 15px rgba(57,255,20,0.3)" : "none",
            }}>{track.title}</span>
            {track.sub && <span style={s.trackSub}>{track.sub}</span>}
          </div>
          {track.feat && <span style={s.trackFeat}>{track.feat}</span>}
        </div>
        <div style={s.trackRight}>
          {track.badge && <span style={s.trackBadge}>{track.badge}</span>}
          <span style={s.trackDur}>{track.dur}</span>
        </div>
      </div>
    </Reveal>
  );
}

export default function Tracklist() {
  return (
    <section style={s.section}>
      {/* Decorative stickers */}
      <img src="/Lemon_2.png" alt="" style={{
        position: "absolute", top: "5%", right: "5%",
        width: "clamp(50px, 8vw, 90px)", opacity: 0.2,
        transform: "rotate(20deg)", pointerEvents: "none",
        filter: "drop-shadow(0 0 15px rgba(57,255,20,0.3))",
      }} />
      <img src="/Lemonade.png" alt="" style={{
        position: "absolute", bottom: "8%", left: "3%",
        width: "clamp(100px, 18vw, 180px)", opacity: 0.08,
        transform: "rotate(-8deg)", pointerEvents: "none",
      }} />

      <div style={s.inner}>
        <Reveal>
          <img src="/Lemon.png" alt="" style={{
            width: 45, marginBottom: 16, opacity: 0.7,
            filter: "drop-shadow(0 0 10px rgba(57,255,20,0.4))",
          }} />
          <div style={s.eyebrow}>tracklist</div>
          <h2 style={s.heading}>12 tracks · 34 min</h2>
        </Reveal>
        <div style={s.list}>
          {TRACKS.map((t, i) => (
            <Track key={t.num} track={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

const s = {
  section: {
    padding: "120px 24px", background: "#050505", position: "relative", overflow: "hidden",
  },
  inner: { maxWidth: 750, margin: "0 auto", position: "relative", zIndex: 2 },
  eyebrow: {
    fontSize: 12, letterSpacing: 5, textTransform: "uppercase",
    color: "#39FF14", marginBottom: 8, fontWeight: 500,
  },
  heading: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 42, fontWeight: 900, color: "#fff", marginBottom: 48,
  },
  list: { display: "flex", flexDirection: "column" },
  track: {
    display: "flex", alignItems: "center", gap: 20,
    padding: "16px 16px", borderBottom: "1px solid rgba(255,255,255,0.04)",
    cursor: "default", transition: "all 0.3s ease", borderRadius: 4,
  },
  trackNum: {
    fontSize: 13, fontWeight: 700, width: 28, flexShrink: 0, transition: "color 0.3s ease",
  },
  trackInfo: { flex: 1 },
  trackTitleRow: { display: "flex", alignItems: "baseline", gap: 8 },
  trackTitle: { fontSize: 17, fontWeight: 600, transition: "all 0.3s ease" },
  trackSub: { fontSize: 12, color: "rgba(255,255,255,0.2)" },
  trackFeat: { fontSize: 13, color: "rgba(255,255,255,0.25)", marginTop: 2 },
  trackRight: { display: "flex", alignItems: "center", gap: 12, flexShrink: 0 },
  trackBadge: {
    fontSize: 9, letterSpacing: 2, textTransform: "uppercase",
    color: "#39FF14", border: "1px solid rgba(57,255,20,0.25)",
    padding: "2px 8px", borderRadius: 2, fontWeight: 700,
  },
  trackDur: { fontSize: 13, color: "rgba(255,255,255,0.2)", fontVariantNumeric: "tabular-nums" },
};
