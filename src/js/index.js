import "./import/modules";
import "./import/components";
import GLightbox from 'glightbox';

GLightbox();
let acc = document.querySelectorAll(".accordion > p");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.borderBottom = "none";
    } else {
      panel.style.maxHeight = panel.scrollHeight + 10 + "px";
      panel.style.borderBottom = "1px solid #000";
    }
  });
}


