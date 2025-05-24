document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".research-grid");
  if (!container) return;

  const researchItems = [
    {
      title: "Beyond Scaling: A Dimensional Roadmap to Artificial General Intelligence (AGI)",
      desc: "As the limitations of large-scale models become increasingly clear, this paper introduces a new paradigm for advancing Artificial General Intelligence: Dimensional Cognition. Rather than pursuing intelligence through sheer computational growth, it proposes a layered cognitive architecture that reflects how real intelligence evolves—structurally, not just statistically. The framework unfolds across four dimensions: 1D Predictive Streams, 2D Modular Systems, 3D Temporal and Emotional Continuity, and 4D Reflective Cognition. Each dimension marks a qualitative leap, enabling new capabilities from memory and goal adaptation to self-reflection and architectural self-modification. Grounded in cognitive science and informed by recent developments in modular and affective AI systems, this model offers a measurable roadmap to AGI—complete with capability benchmarks and ethical guidance. More than a critique of today’s scaling paradigm, it outlines a principled path toward artificial minds that don’t just mimic intelligence, but grow, adapt, and evolve. If scale alone cannot lead us to understanding—what will?",
      date: "24 May 2025",
      link: "/research/beyond-scaling/"
    }
  ];

  researchItems.forEach(({ title, desc, date, link }) => {
    const item = document.createElement("div");
    item.className = "card";

    item.innerHTML = `
      <h4>${title}</h4>
      <p>${desc}</p>
      <div class="card-footer">
        <span class="date">${date}</span>
        <a class="view-button" href="${link}">Read More</a>
      </div>
    `;

    container.appendChild(item);
  });
});
