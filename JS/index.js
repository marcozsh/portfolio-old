window.onbeforeunload = () => {
  window.scrollTo(0, 0);
}


//selector
const $ = s => document.querySelector(s);
const header_nav = $("#header-nav");
const btn_menu = $("#menu-btn");
const header = $(".header");


// mouse effect

btn_menu.addEventListener('click', () => {
  let actual_class = header.classList[0]
  let class_header = "header-mobile";
  if (actual_class == "header-mobile") {
    class_header = "header-mobile-hidden";
  } else if (actual_class == "header-mobile-hidden") {
    class_header = "header-mobile";
  }
  header.classList.replace(actual_class, class_header);
  btn_menu.style.animation = "fadeIn 2s ease-out";

  setTimeout(
    () => {
      btn_menu.style.display = "none";
      btn_menu.style.animation = "";
      try {
        let header_mobile = $(".header-mobile");
        header_mobile.addEventListener('click', () => {
          location.reload()
        });
      } catch (error) { }

    }
    , 1000);

});
header_nav.addEventListener('click', () => {
  header.classList.replace("header-mobile", "header-mobile-hidden");
  btn_menu.style.display = "block";
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 1366) {
    header.classList.replace(header.classList[0], "header");
  }
});

window.navigation.addEventListener('navigate', (e) => {
  if (document.startViewTransition) {
    if (window.innerWidth < 1366) {
      console.log("no entro")
      return
    }
    const toUrl = new URL(e.destination.url);
    console.log(e.destination.url)
    if (e.destination.url.includes("#") || e.destination.url.includes('/cv/cv/cv.pdf')) {
      return;
    }
    if (location.origin != toUrl.origin) return;
    e.intercept({
      async handler() {
        const response = await fetch(toUrl.pathname);
        const text = await response.text();
        const [, body] = text.match(/<body class="body">([\s\S]*)<\/body>/i);
        const [, head] = text.match(/<head>([\s\S]*)<\/head>/i);
        document.startViewTransition(() => {
          document.body.innerHTML = body;
          document.head.innerHTML = head;
          document.documentElement.scrollTop = 0;
        })
      }
    })
  }
})
