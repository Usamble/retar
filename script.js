const copyButton = document.getElementById("copyCa");
const caValue = document.getElementById("caValue");

if (copyButton && caValue) {
  copyButton.addEventListener("click", async () => {
    const text = caValue.textContent?.trim() || "";
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      copyButton.textContent = "CA : COPIED!!!!";
      setTimeout(() => {
        copyButton.textContent = "Copy to Clipboard";
      }, 1400);
    } catch {
      copyButton.textContent = "COPY FAILED";
      setTimeout(() => {
        copyButton.textContent = "Copy to Clipboard";
      }, 1400);
    }
  });
}

const revealElements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    }
  },
  { threshold: 0.14 }
);

for (const el of revealElements) {
  observer.observe(el);
}

const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", open);
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;
    const target = document.querySelector(targetId);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    if (nav && nav.classList.contains("is-open")) nav.classList.remove("is-open");
    if (navToggle) navToggle.setAttribute("aria-expanded", "false");
  });
});
