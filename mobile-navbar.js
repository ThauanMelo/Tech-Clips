class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();

//Search bar

const input = document.querySelector(".search-input");
const videos = document.querySelectorAll(".card-item");

function searchVideos(filter) {
  [].forEach.call(videos, function (video) {
    const title = video.getElementsByTagName("p")[0].textContent.toLowerCase();
    const iframe = video.getElementsByTagName("iframe")[0];
    const videoId = iframe.src.split("/").pop();

    // obtém o ID do vídeo do link do iframe

    if (title.indexOf(filter) > -1) {
      video.style.display = "";
      iframe.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";

      // adiciona o parâmetro autoplay
    } else {
      video.style.display = "none";
      iframe.src = "https://www.youtube.com/embed/" + videoId;
      // remove o parâmetro autoplay
    }
  });
}

input.addEventListener("keyup", (event) => {
  const searchValue = event.target.value.toLowerCase();

  searchVideos(searchValue);
});
