const lenis = new Lenis({
  autoRaf: true,
});


  if (window.innerWidth <= 1024) {
    const items = document.querySelectorAll('.pastille-item');

    items.forEach(item => {
      item.addEventListener('click', () => {
        // Retirer la classe hover des autres items
        items.forEach(i => {
          if (i !== item) i.classList.remove('hover');
        });
        // Toggle la classe hover
        item.classList.toggle('hover');
      });
    });
  }


