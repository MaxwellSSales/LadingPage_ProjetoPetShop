$(document).ready(function () {
  $('#mobile_btn').on('click', function () {
    $('#mobile_menu').toggleClass('active');
    $('#mobile_btn').find('i').toggleClass('fa-x');
  });

  const sections = $('section');
  const navItems = $('.nav-item');

  $(window).on('scroll', function () {
    const header = $('header');
    const scrollPosition = $(window).scrollTop() - header.outerHeight();

    let activeSectionIndex = 0;

    if (scrollPosition <= 0) {
      header.css('box-shadow', 'none');
    } else {
      header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
    }

    sections.each(function (i) {
      const section = $(this);
      const sectionTop = section.offset().top - 96;
      const sectionBottom = sectionTop + section.outerHeight();

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSectionIndex = i;
        return false;
      }
    });

    navItems.removeClass('active');
    $(navItems[activeSectionIndex]).addClass('active');
  });

  ScrollReveal().reveal('#cta', {
    origin: 'left',
    duration: 2000,
    distance: '20%',
  });

  ScrollReveal().reveal('.dish', {
    origin: 'left',
    duration: 2000,
    distance: '20%',
  });

  ScrollReveal().reveal('#testimonial_dog', {
    origin: 'left',
    duration: 1000,
    distance: '20%',
  });

  ScrollReveal().reveal('.feedback', {
    origin: 'right',
    duration: 1000,
    distance: '20%',
  });
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("Script carregado"); // Para verificar se o script está rodando
  
  function createHeart() {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      document.body.appendChild(heart);

      let size = Math.random() * 20 + 10; // Mantém um tamanho proporcional
      heart.style.width = size + "px";
      heart.style.height = size + "px";
      heart.style.left = Math.random() * 100 + "vw"; // Posição aleatória
      heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Duração aleatória

      setTimeout(() => {
          heart.remove();
      }, 5000); // Remove o coração após 5s
  }

  setInterval(createHeart, 500); // Cria um coração a cada 500ms
});
