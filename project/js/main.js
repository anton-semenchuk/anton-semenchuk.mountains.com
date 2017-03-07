(function(){
  
  var menu = document.getElementsByClassName('main-menu')[0];
  var hamburger = document.getElementById('hamburger');
  console.log(hamburger);
  console.log(menu);
function clickHandler(e) {
    menu.classList.toggle('main-menu_opened');     
  }
function resizeHandler(e) {
   var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
  if (width > 996)
     menu.classList.remove('main-menu_opened');
}

  hamburger.addEventListener('click', clickHandler);
  menu.addEventListener('resize', resizeHandler);
})();