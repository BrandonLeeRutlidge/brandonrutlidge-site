document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".contact-buttons");
  if (!container) return;

  const contacts = [
    {
      icon: "../assets/icons/mail.svg",
      alt: "Send email",
      label: "admin@brandonrutlidge.com",
      action: "mailto:admin@brandonrutlidge.com"
    },
    {
      icon: "../assets/icons/phone.svg",
      alt: "Call Brandon",
      label: "+44 7719 410 264",
      action: "tel:+447719410264"
    }
  ];

  contacts.forEach(({ icon, alt, label, action }) => {
    const button = document.createElement("a");
    button.className = "view-button contact-button"; // ✅ Apply both styles
    button.href = action;

button.innerHTML = `
  <div class="contact-inner">
    <img src="${icon}" alt="${alt}" />
    <span>${label}</span>
  </div>
`;


    container.appendChild(button);
  });
});
