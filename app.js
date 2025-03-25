function validerFormulaire(event) {
    // Empêche l'envoi par défaut
    event.preventDefault();

    // Récupération des champs
    const prenom = document.getElementById("firstname").value.trim();
    const nom = document.getElementById("name").value.trim();
    const sujet = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Vérification des champs vides
    if (!nom || !prenom || !sujet || !message) {
        alert("Tous les champs sont obligatoires. Veuillez les remplir.");
        return;
    }

    alert("Formulaire validé avec succès !");
    // Ici, vous pouvez soumettre le formulaire avec un backend si nécessaire
}

// Récupérer les divs par leur classe
const divs = document.querySelectorAll(".animated-box");

// Ajouter des événements de souris à chaque div
divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "#e74c3c"; // Changement de couleur au survol
        div.style.transform = "scale(1.2)"; // Appliquer une rotation et un zoom
    });

    div.addEventListener("mouseout", () => {
        div.style.backgroundColor = "#faebd7"; // Rétablir la couleur d'origine
        div.style.transform = "scale(1)"; // Rétablir la position originale
    });
});