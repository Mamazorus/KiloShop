const lenis = new Lenis({
  autoRaf: true,
});





document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('mobile-menu');
  const mobileMenuLinks = document.getElementById('mobile-menu-links');

  menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    mobileMenuLinks.classList.toggle('active');

    if (mobileMenuLinks.style.display === 'flex') {
      mobileMenuLinks.style.display = 'none';
    } else {
      mobileMenuLinks.style.display = 'flex';
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('mobile-menu');
  const mobileMenuLinks = document.getElementById('mobile-menu-links');
  const star = document.getElementById('star');

  menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    mobileMenuLinks.classList.toggle('active');
  });

  star.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('mobile-menu');
  const mobileMenuLinks = document.getElementById('mobile-menu-links');
  const body = document.body;

  menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    mobileMenuLinks.classList.toggle('active');
    body.classList.toggle('no-scroll'); // Ajoute ou retire la classe pour désactiver le défilement

    // Empêche le défilement lorsque le menu est actif
    if (body.classList.contains('no-scroll')) {
      window.addEventListener('scroll', preventScroll);
    } else {
      window.removeEventListener('scroll', preventScroll);
    }
  });

  function preventScroll(event) {
    event.preventDefault();
    window.scrollTo(0, 0); // Réinitialise le défilement à la position initiale
  }
});





document.addEventListener('DOMContentLoaded', function() {
  const texts = ["GRAPHISTE", "WEBDESIGNER"];
  let index = 0;
  let charIndex = 0;
  const typingEffect = document.querySelector('.typing-effect');

  function type() {
    if (charIndex < texts[index].length) {
      typingEffect.textContent += texts[index].charAt(charIndex);
      charIndex++;
      setTimeout(type, 150); // Vitesse de frappe
    } else {
      // Attendre avant d'effacer
      setTimeout(erase, 3000);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typingEffect.textContent = texts[index].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 100); // Vitesse d'effacement
    } else {
      // Passer au texte suivant
      index = (index + 1) % texts.length;
      setTimeout(type, 500); // Délai avant de commencer à taper le texte suivant
    }
  }

  // Démarrer l'effet de frappe
  setTimeout(type, 300); // Délai initial avant de commencer
});







// Fonction pour activer le scroll smooth
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Empêche le comportement par défaut du lien

        // Récupère l'élément cible (section)
        const targetId = this.getAttribute('href').substring(1); // Retire le "#"
        const targetElement = document.getElementById(targetId);

        // Fait défiler la page de manière fluide vers l'élément cible
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Rend le scroll fluide
                block: 'start' // Aligne la section en haut de l'écran
            });
        }
    });
});





navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    if (menuToggle.classList.contains('active')) {
      menuToggle.classList.remove('active');
      mobileMenuLinks.classList.remove('active');
      body.classList.remove('no-scroll');
      startCarousel();
    }

    event.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


      





document.addEventListener('DOMContentLoaded', function() {
  // Force le défilement vers le haut de la page
  window.scrollTo(0, 0);
});






