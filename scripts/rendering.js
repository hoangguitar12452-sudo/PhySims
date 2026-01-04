import { simulations } from "./data.js";

export function filterSimulations(filters) {
  return simulations.filter((sim) => {
    const gradeMatch = filters.grade === "all" || sim.grade === filters.grade;
    const searchMatch =
      filters.search === "" ||
      sim.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      sim.description.toLowerCase().includes(filters.search.toLowerCase());

    return gradeMatch && searchMatch;
  });
}

export function renderSimulations(filters) {
  const grid = document.getElementById("simulationsGrid");
  grid.innerHTML = "";

  const filteredSims = filterSimulations(filters);

  if (filteredSims.length === 0) {
    grid.innerHTML =
      '<p style="grid-column: 1/-1; text-align: center; padding: 48px; color: var(--color-medium-gray);">No simulations found matching your filters.</p>';
    return;
  }

  filteredSims.forEach((simulation) => {
    const card = document.createElement("div");
    card.className = "simulation-card";
    card.dataset.grade = simulation.grade;

    card.innerHTML = `
      <div class="simulation-thumbnail" style="background-image: url('${simulation.image}'); background-size: cover; background-position: center;">
      </div>
      <div class="simulation-content" style="background-color: #fcfcfcff; padding: 15px;">
        <div style="display: flex; gap: 8px; margin-bottom: 12px;">
          <span class="badge-grade">${simulation.grade}</span>
        </div>
        <h3 class="simulation-title">${simulation.title}</h3>
        <p class="simulation-description">${simulation.description}</p>
        <a href="${simulation.href}" class="simulation-link">
          Start Simulation
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    `;

    grid.appendChild(card);
  });
}
