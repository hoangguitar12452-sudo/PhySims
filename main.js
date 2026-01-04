import { renderSimulations } from "./scripts/rendering.js";
import { initFilters } from "./scripts/filters.js";
import { initMobileMenu } from "./scripts/menu.js";
import { initScrollTracking } from "./scripts/navigation.js";

const currentFilters = {
  grade: "all",
  search: "",
};

function handleFilterChange() {
  renderSimulations(currentFilters);
}

document.addEventListener("DOMContentLoaded", () => {
  renderSimulations(currentFilters);
  initFilters(currentFilters, handleFilterChange);
  initMobileMenu();
  initScrollTracking();
});
