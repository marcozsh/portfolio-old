const main = $(".body");
const switch_button = $(".switch");
const mouse_over = $(".mouse-over");
main.addEventListener('mousemove', (event) => {
    if (!switch_button.checked) {
        return
    }
    let final_position = 250;
    let position_y = event.pageY;
    let position_x = event.pageX;
    mouse_over.style.top = (position_y - final_position) + "px";
    mouse_over.style.left = (position_x - final_position) + "px";
});
switch_button.addEventListener("click", () => {
    let display = mouse_over.style.display === '' ? 'none' : '';
    mouse_over.style.display = display;

})

