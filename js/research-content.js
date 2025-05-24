document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".research-grid");
  if (!container) return;

  const researchItems = [
    {
      title: "Beyond Scaling: A Dimensional Roadmap to Artificial General Intelligence (AGI)",
      desc: "This paper proposes Dimensional Cognition — a 4D framework for AGI development based on memory, emotion, modular reasoning, and self-modification.",
      date: "20 May 2025",
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
