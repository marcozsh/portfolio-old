window.onbeforeunload = ()=>{
    window.scrollTo(0,0);
}

//selector
const $ = s => document.querySelector(s);

const main = $(".body");
const mouse_over = $(".mouse-over");
const header_nav = $("#header-nav");
const btn_menu = $("#menu-btn");
const header = $(".header");
const header_mobile = $(".header-mobile");
const switch_button = $(".switch");
// mouse effect
main.addEventListener('mousemove', (event) => {
  let final_position = 250;
  let position_y = event.pageY;
  let position_x = event.pageX;
  mouse_over.style.top = (position_y - final_position) + "px";
  mouse_over.style.left = (position_x -final_position) + "px";
});
btn_menu.addEventListener('click', () =>{
  let actual_class = header.classList[0]
  let class_header = "header-mobile";
  if (actual_class == "header-mobile") {
    class_header = "header-mobile-hidden";
  }else if (actual_class == "header-mobile-hidden") {
    class_header = "header-mobile";
  }
  header.classList.replace(actual_class,class_header);
  btn_menu.style.animation = "fadeIn 2s ease-out";
  setTimeout(
    () => {
      btn_menu.style.display="none";
      btn_menu.style.animation = "";
    }
  ,1000);
});
header_nav.addEventListener('click', () =>{
  header.classList.replace("header-mobile", "header-mobile-hidden");
  btn_menu.style.display="block";
});
window.addEventListener("resize" ,()=>{
  if (window.innerWidth > 1366) {
    header.classList.replace(header.classList[0], "header");
  }
});

switch_button.addEventListener("click", () => {
  let display = mouse_over.style.display === '' ? 'none' : '';
  mouse_over.style.display = display;

})

