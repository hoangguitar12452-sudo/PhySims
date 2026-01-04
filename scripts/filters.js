export function initFilters(currentFilters, onFilterChange) {
  const searchInput = document.getElementById("searchInput");
  const gradeButtons = document.querySelectorAll("[data-grade]");

  searchInput.addEventListener("input", (e) => {
    currentFilters.search = e.target.value;
    onFilterChange();
  });

  gradeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      gradeButtons.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      currentFilters.grade = btn.dataset.grade;
      onFilterChange();
    });
  });
}
