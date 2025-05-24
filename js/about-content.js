document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".about-details");
  if (!container) return;

  const aboutItems = [
    {
      title: "AI Development",
      desc: "Building AI cognitive systems focused on advancing human potential through longevity, innovation, and future evolution.",
      img: "assets/images/AI Development.png"
    },
    {
      title: "3D Specialist",
      desc: "Expert in 3D design, motion graphics, post production and VFX in entertainment and education through industry and academic innovation.",
      img: "assets/images/3D Animation Specialist.jpg"
    },
    {
      title: "Science-Based Fitness Specialist",
      desc: "Expert in evidence-based training, physique development, and health optimization across diverse biometric profiles.",
      img: "assets/images/Science-Based Fitness Specialist.jpg"
    }
  ];

  aboutItems.forEach(({ title, desc, img }) => {
    const item = document.createElement("div");
    item.className = "about-section";

    item.innerHTML = `
      <img src="${img}" alt="${title}" class="about-section-image" />
      <div>
        <h4>${title}</h4>
        <p>${desc}</p>
      </div>
    `;

    container.appendChild(item);
  });
});
