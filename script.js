const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.addEventListener("click", (event) => {
  if (event.target.tagName !== "A") {
    return;
  }

  navLinks.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
});

const learningNoteCount = document.querySelector("#learning-note-count");

if (learningNoteCount) {
  const learningNotes = document.querySelectorAll('section[aria-labelledby$="note-title"]');
  learningNoteCount.textContent = `現在の学習メモ：${learningNotes.length}件`;
}
