import { Reveal } from "./Reveal";

export default function Listen() {
  return (
    <section style={s.section}>
      {/* Decorative */}
      <img src="/Lemon.png" alt="" style={{
        position: "absolute", bottom: "10%", right: "6%",
        width: "clamp(40px, 7vw, 70px)", opacity: 0.15,
        transform: "rotate(-15deg)", pointerEvents: "none",
        animation: "floatSlow 5s ease-in-out infinite", "--rot": "-15deg",
      }} />

      <div style={s.inner}>
        <Reveal>
          <img src="/Aespa_logo.png" alt="" style={{
            width: "clamp(80px, 15vw, 130px)", marginBottom: 16, opacity: 0.6,
            filter: "drop-shadow(0 0 10px rgba(57,255,20,0.3))",
          }} />
          <div style={s.eyebrow}>listen now</div>
          <h2 style={s.heading}>stream LEMONADE</h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div style={s.embedWrap}>
            <iframe
              style={s.embed}
              src="https://embed.music.apple.com/nl/album/lemonade-the-2nd-album/1893742002?theme=dark"
              width="100%"
              height="450"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Apple Music - aespa LEMONADE"
            />
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div style={s.platforms}>
            <a href="https://music.apple.com/nl/album/lemonade-the-2nd-album/1893742002" target="_blank" rel="noopener noreferrer" style={s.platformBtn}>
              Apple Music
            </a>
            <a href="https://open.spotify.com/album/2233LC6uuoi67lGcO2OaBm" target="_blank" rel="noopener noreferrer" style={s.platformBtn}>
              Spotify
            </a>
            <a href="https://www.youtube.com/@aespa" target="_blank" rel="noopener noreferrer" style={s.platformBtn}>
              YouTube
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const s = {
  section: {
    padding: "120px 24px", position: "relative", overflow: "hidden",
    background: "linear-gradient(180deg, #050505 0%, #080a05 100%)",
  },
  inner: { maxWidth: 650, margin: "0 auto", position: "relative", zIndex: 2 },
  eyebrow: {
    fontSize: 12, letterSpacing: 5, textTransform: "uppercase",
    color: "#39FF14", marginBottom: 8, fontWeight: 500,
  },
  heading: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 42, fontWeight: 900, color: "#fff", marginBottom: 40,
  },
  embedWrap: {
    borderRadius: 8, overflow: "hidden",
    border: "1px solid rgba(57,255,20,0.1)",
    boxShadow: "0 0 40px rgba(57,255,20,0.05)",
    marginBottom: 32,
  },
  embed: { borderRadius: 8, display: "block" },
  platforms: {
    display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap",
  },
  platformBtn: {
    padding: "12px 28px", borderRadius: 4,
    border: "1px solid rgba(57,255,20,0.2)",
    background: "rgba(57,255,20,0.04)", color: "#39FF14",
    fontSize: 13, fontWeight: 600, letterSpacing: 1,
    textDecoration: "none", transition: "all 0.3s ease", cursor: "pointer",
    fontFamily: "'Space Grotesk', sans-serif",
  },
};
