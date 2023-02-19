// var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: true,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });



var swiper = new Swiper("#mySwiper1", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    
    autoplay:{
        delay:3500,
        disableOnInteraction: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
  });



  // ikinci swiper

  var swiper = new Swiper("#mySwiper2", {
    effect: "cards",
    grabCursor: true,
  });

  

  // responsive menu 

  
  isMenuOpen = false;
  const menuButton= document.querySelector('.menu-bar');
  const menu = document.querySelector('.list');
  
  menuButton.addEventListener('click',() =>{
    isMenuOpen =!isMenuOpen;
    if(isMenuOpen){
      menuButton.classList.add('open');
      menu.classList.add('menu-open');
    }else{
      menuButton.classList.remove('open');
      menu.classList.remove('menu-open');
      
    }



  })