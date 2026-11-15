import { useEffect, useRef } from "react";

const interactiveSelector = [
  "a",
  "button",
  "input",
  "select",
  "textarea",
  "[role='button']",
  "[role='link']",
  "[data-cursor-interactive]",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frameId;
    let isEnabled = false;
    let hasPointer = false;
    let pointerX = 0;
    let pointerY = 0;
    let ringX = 0;
    let ringY = 0;

    function updateCursorMode() {
      isEnabled = finePointer.matches && !reducedMotion.matches;
      document.documentElement.classList.toggle("custom-cursor-enabled", isEnabled);

      if (!isEnabled) {
        cancelAnimationFrame(frameId);
        cursorRef.current?.classList.remove("is-visible", "is-hovering");
      }
    }

    function renderRing() {
      ringX += (pointerX - ringX) * 0.2;
      ringY += (pointerY - ringY) * 0.2;
      ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

      if (Math.abs(pointerX - ringX) > 0.1 || Math.abs(pointerY - ringY) > 0.1) {
        frameId = requestAnimationFrame(renderRing);
      }
    }

    function handlePointerMove(event) {
      if (!isEnabled) return;

      pointerX = event.clientX;
      pointerY = event.clientY;
      dotRef.current.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0) translate(-50%, -50%)`;

      if (!hasPointer) {
        ringX = pointerX;
        ringY = pointerY;
        hasPointer = true;
      }

      cursorRef.current.classList.add("is-visible");
      cursorRef.current.classList.toggle(
        "is-hovering",
        Boolean(event.target.closest(interactiveSelector)),
      );

      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(renderRing);
    }

    function hideCursor() {
      cursorRef.current?.classList.remove("is-visible");
    }

    updateCursorMode();
    document.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("mouseleave", hideCursor);
    finePointer.addEventListener?.("change", updateCursorMode);
    reducedMotion.addEventListener?.("change", updateCursorMode);

    return () => {
      cancelAnimationFrame(frameId);
      document.documentElement.classList.remove("custom-cursor-enabled");
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseleave", hideCursor);
      finePointer.removeEventListener?.("change", updateCursorMode);
      reducedMotion.removeEventListener?.("change", updateCursorMode);
    };
  }, []);

  return (
    <div className="custom-cursor" ref={cursorRef} aria-hidden="true">
      <span className="custom-cursor-dot" ref={dotRef} />
      <span className="custom-cursor-ring" ref={ringRef} />
    </div>
  );
}

export default CustomCursor;
