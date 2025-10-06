import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

const SplitText = ({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  textAlign = "center",
  tag = "p",
  onComplete
}) => {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);

  // Espera a que las fonts estén listas
  useEffect(() => {
    if (document.fonts.status === "loaded") {
      setReady(true);
    } else {
      document.fonts.ready.then(() => setReady(true));
    }
  }, []);

  useEffect(() => {
    if (!ready || !ref.current || !text) return;

    const el = ref.current;

    // Revertir animaciones anteriores
    if (el._splitInstance) {
      try {
        el._splitInstance.revert();
      } catch (_) {}
      el._splitInstance = null;
    }

    const splitInstance = new GSAPSplitText(el, { type: splitType });
    el._splitInstance = splitInstance;

    const targets =
      splitType === "chars"
        ? splitInstance.chars
        : splitType === "words"
        ? splitInstance.words
        : splitInstance.lines;

    gsap.fromTo(
      targets,
      { ...from },
      {
        ...to,
        duration,
        ease,
        stagger: delay / 1000,
        onComplete
      }
    );

    return () => {
      try {
        splitInstance.revert();
      } catch (_) {}
    };
  }, [ready, text, delay, duration, ease, splitType, from, to, onComplete]);

  // Renderiza tag HTML dinámico
  const Tag = tag;

  return (
    <Tag
      ref={ref}
      className={`split-parent ${className}`}
      style={{
        textAlign,
        overflow: "visible",
        display: "inline-block",
        whiteSpace: "nowrap",
        willChange: "transform, opacity"
      }}
    >
      {text}
    </Tag>
  );
};

export default SplitText;
