const lenis = new Lenis({
  autoRaf: true,
});

if (window.innerWidth <= 1024) {
  const items = document.querySelectorAll('.pastille-item');

  items.forEach(item => {
    item.addEventListener('click', () => {
      items.forEach(i => {
        if (i !== item) i.classList.remove('hover');
      });
      item.classList.toggle('hover');
    });
  });
}

const burger = document.querySelector('.burger-icon');
const sideMenu = document.querySelector('.side-menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  sideMenu.classList.toggle('active');
});

document.addEventListener('click', function (event) {
  const isClickInsideBurger = burger.contains(event.target);
  const isClickInsideMenu = sideMenu.contains(event.target);

  if (!isClickInsideBurger && !isClickInsideMenu && sideMenu.classList.contains('active')) {
    sideMenu.classList.remove('active');
    burger.classList.remove('active');
  }
});

const menuLinks = document.querySelectorAll('.side-menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    sideMenu.classList.remove('active');
    burger.classList.remove('active');
  });
});


const translations = {
  fr: {
    langToggle: 'English',
    heroTitle: 'Un kilo,<br>c\'est quoi ?',
    heroText: `Un kilo de plume, ça fait toujours un kilo, même si, entre nous, mieux vaut une doudoune en plume qu’en plomb (question de confort… et de mobilité).
    <br><br>C’est pareil pour les vêtements : certains sont légers comme l’air (coucou la robe en soie), d’autres plus lourds (coucou le jean), mais tous n’ont pas la même valeur au kilo.`,
    section2Title: 'Mais comment ça marche ?',
    section2Text: `Chez Kilo Shop, chaque pièce a un bip de couleur. Ce bip indique le prix au kilo selon la matière. Ensuite, on pèse le vêtement, et hop, le tour est joué : vous payez en fonction de son poids.
    <br><br>Avec des pièces homme & femme des années 70 à aujourd’hui, venues des quatre coins du monde jeans, robes, baskets, sweats, manteaux, sacs, kimonos, bombers, bobs et un réassort chaque semaine, il y a toujours de quoi dénicher la perle rare.
    <br><br>En gros, 1 kilo chez Kilo Shop, c’est souvent 3 à 6 pièces ultra stylées dans votre panier.`,
    accountBtn: 'Mon compte',
    langBtn: 'Langue',
    navItems: ['Notre mission', 'Actus', 'Shops', 'Looks'],
    footerText: 'KILO SHOP 2025 - TOUS DROITS RÉSERVÉS',
    footerLinks1: [
      'politique de protection de données',
      'mentions légales',
      'conditions générales de vente',
      'Réglages cookie'
    ],
    footerLinks2: [
      'je dépose',
      'contact & faq',
      'recrutement',
      'carte cadeau',
      'devenir Franchisé'
    ]
  },
  en: {
    langToggle: 'Français',
    heroTitle: 'One kilo,<br>what is it?',
    heroText: `A kilo of feathers still weighs a kilo, even if, between us, it’s better to wear a feather down than lead. Comfort and mobility matter.
    <br><br>It’s the same with clothes: some are light as air (hey silk dress), others heavier (hey jeans), but not all have the same value per kilo.`,
    section2Title: 'So how does it work?',
    section2Text: `At Kilo Shop, each item has a colored tag. That tag shows the price per kilo based on the material. Then we weigh the garment, and voilà — that’s your final price.
    <br><br>With men’s and women’s pieces from the 70s to today, from all over the world — jeans, dresses, sneakers, sweatshirts, coats, bags, kimonos, bombers, bucket hats — and weekly restocks, there’s always a hidden gem to discover.
    <br><br>Roughly, 1 kilo at Kilo Shop means 3 to 6 super stylish pieces in your bag.`,
    accountBtn: 'My account',
    langBtn: 'Language',
    navItems: ['Our Mission', 'News', 'Shops', 'Looks'],
    footerText: 'KILO SHOP 2025 - ALL RIGHTS RESERVED',
    footerLinks1: [
      'Data protection policy',
      'Legal notice',
      'Terms and conditions',
      'Cookie settings'
    ],
    footerLinks2: [
      'I sell',
      'Contact & FAQ',
      'Careers',
      'Gift card',
      'Become a franchisee'
    ]
  }
};




let currentLang = 'fr';

function updateTexts(lang) {
  const t = translations[lang];

  // Header nav
  const navLinks = document.querySelectorAll('.nav-left a');
  navLinks.forEach((link, index) => {
    link.textContent = t.navItems[index];
  });

  // Burger menu nav
  const burgerLinks = document.querySelectorAll('.side-nav a');
  burgerLinks[0].textContent = t.navItems[0];
  burgerLinks[1].textContent = t.navItems[1];
  burgerLinks[2].textContent = t.navItems[2];
  burgerLinks[3].textContent = t.navItems[3];
  burgerLinks[4].textContent = t.langToggle;
  burgerLinks[5].lastChild.textContent = t.accountBtn;

  // Hero section
  document.querySelector('.kilo-text-1 h1').innerHTML = t.heroTitle;
  document.querySelector('.kilo-text-1 p').innerHTML = t.heroText;

  // Section 2
  document.querySelector('.kilo-text-2 h2').textContent = t.section2Title;
  document.querySelector('.kilo-text-2 p').innerHTML = t.section2Text;

  // Footer
  document.querySelector('.footer-lastline p').textContent = t.footerText;

  // Account button & language button in navbar
  document.querySelector('.account-button').lastChild.textContent = t.accountBtn;
  document.querySelector('.lang-button').lastChild.textContent = t.langBtn;

  const footerLinks1 = document.querySelectorAll('.nav-footer1 a');
  const footerLinks2 = document.querySelectorAll('.nav-footer2 a');

  t.footerLinks1.forEach((text, i) => {
    if (footerLinks1[i]) footerLinks1[i].textContent = text;
  });

  t.footerLinks2.forEach((text, i) => {
    if (footerLinks2[i]) footerLinks2[i].textContent = text;
  });
}

function toggleLanguage() {
  currentLang = currentLang === 'fr' ? 'en' : 'fr';
  updateTexts(currentLang);
}

// Bouton langue burger
document.querySelector('.langue-burger').addEventListener('click', (e) => {
  e.preventDefault();
  toggleLanguage();
});

// Sélectionne tous les liens dans la dropdown menu langue
const dropdownLangLinks = document.querySelectorAll('.dropdown-menu a');

dropdownLangLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    const selectedLang = link.textContent.toLowerCase().includes('français') ? 'fr' : 'en';

    if (currentLang !== selectedLang) {
      currentLang = selectedLang;
      updateTexts(currentLang);
    }
    
    // Optionnel : tu peux fermer la dropdown après sélection si tu as un système d'ouverture/fermeture
    // Par exemple si tu utilises une classe 'open' sur .dropdown pour afficher le menu
    // document.querySelector('.dropdown').classList.remove('open');
  });
});

