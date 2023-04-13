let icon = document.querySelector('.fa-bars');
let mobile_menu = document.querySelector('.mobile-menu-container');

  icon.addEventListener('click', menuFunction);

    function menuFunction() {
      if (mobile_menu.style.display == none) {
      mobile_menu.classList.remove('none');
    } else {
      mobile_menu.classList.add('none');
    }
}