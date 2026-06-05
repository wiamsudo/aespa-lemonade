import { useRef, useState, useEffect } from "react";

export function useReveal(threshold = 0.15) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

export function Reveal({ children, animation = "fadeUp", delay = 0, duration = 0.8, style = {}, className = "" }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        animation: visible ? `${animation} ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s both` : "none",
      }}
    >
      {children}
    </div>
  );
}
