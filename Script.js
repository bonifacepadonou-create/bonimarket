// Numéro WhatsApp de BM | BONI MARKET
const numero = "2290196672064";

// Tous les boutons "Commander"
const boutons = document.querySelectorAll(".whatsapp");

boutons.forEach((bouton) => {
  bouton.addEventListener("click", function (e) {
    e.preventDefault();

    // Récupère le nom du produit
    const produit = this.parentElement.querySelector("h3").textContent;

    // Récupère le prix
    const prix = this.parentElement.querySelector("p").textContent;

    // Message WhatsApp
    const message =
      `Bonjour BM | BONI MARKET.%0A` +
      `Je souhaite commander : ${produit}.%0A` +
      `Prix : ${prix}.%0A` +
      `Merci de me communiquer la disponibilité.`;

    // Ouvre WhatsApp
    window.open(
      `https://wa.me/${numero}?text=${message}`,
      "_blank"
    );
  });
});
