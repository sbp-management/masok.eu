/**
 * Scroll effects, adapted from the SBP Management redesign (components/v2/reveal.tsx, count-up.tsx).
 * Styles live in src/styles/motion.css; the selectors below must match the ones there.
 *
 * - `data-in` is set once enough of an element is visible, so its transition plays.
 * - Once it has left the screen completely, `data-in` is removed again, so it replays next time.
 *   It only resets when fully out of view, so nothing flickers while it is still partly visible.
 * - Numbers on the partner stats count up each time they scroll into view.
 */

const REVEAL = [
  ".section-title",
  ".section:not(.highlight) h2:not(.section-title)",
  ".faq",
  ".form-wrap",
  "aside.card",
  ".contact-head",
  ".grid",
  ".team-grid",
  ".steps-list",
  ".check-list",
  ".includes",
  ".gallery",
  ".contact-lines",
  ".info-list",
  ".service",
  ".highlight",
].join(",");

const CASCADE = ".grid, .team-grid, .steps-list, .check-list, .includes, .gallery, .contact-lines, .info-list";

const root = document.documentElement;

if (root.classList.contains("motion")) {
  // Stagger order for list and grid children (capped, so long lists don't take ages).
  document.querySelectorAll<HTMLElement>(CASCADE).forEach((list) => {
    Array.from(list.children).forEach((child, i) => (child as HTMLElement).style.setProperty("--i", String(Math.min(i, 7))));
  });

  const ENTER_AT = 0.12;
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const el = entry.target;
        // Tall elements (long lists, forms) can never be 12% visible on a small screen, so they
        // also play once they fill most of the window.
        const enough = entry.intersectionRatio >= ENTER_AT || entry.intersectionRect.height >= window.innerHeight * 0.5;
        if (entry.isIntersecting && enough) el.setAttribute("data-in", "");
        else if (!entry.isIntersecting) el.removeAttribute("data-in");
      }
    },
    { threshold: [0, ENTER_AT, 0.5] },
  );
  document.querySelectorAll(REVEAL).forEach((el) => io.observe(el));

  // Count up numbers such as "Niš Airport – 55 km" or "Up to 40 participants".
  // The final text is in the HTML, so it is right without JS and for screen readers.
  document.querySelectorAll<HTMLElement>(".stat p").forEach((el) => {
    const match = /^(\D*)(\d+)(\D*)$/.exec(el.textContent ?? "");
    if (!match) return;
    const [, prefix, digits, suffix] = match;
    const target = Number(digits);
    const duration = 1600;
    let frame = 0;
    let armed = true;
    new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          armed = true;
          return;
        }
        if (!armed || entry.intersectionRatio < 0.6) return;
        armed = false;
        cancelAnimationFrame(frame);
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 4);
          el.textContent = `${prefix}${Math.round(target * eased)}${suffix}`;
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: [0, 0.6] },
    ).observe(el);
  });

  (window as unknown as { __motion: boolean }).__motion = true;
}
