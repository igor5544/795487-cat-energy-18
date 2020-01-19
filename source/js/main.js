objectFitImages();

var headerToggle = document.querySelector(".header__toggle-btn"),
    toggleIco = document.querySelector(".header__toggle"),
    mainNav = document.querySelector(".main-nav");

toggleIco.classList.remove("header__toggle--nojs");
mainNav.classList.remove("main-nav--nojs");

headerToggle.addEventListener("click", function () {
    toggleIco.classList.toggle("header__toggle--closed");
    mainNav.classList.toggle("main-nav--closed");
});

function initMap() {
    var opt = {
        center: { lat: 59.9389, lng: 30.3231 },
        zoom: 16.6,
        disableDefaultUI: true,
    }

    if (window.innerWidth >= 768) {
        opt.center = { lat: 59.93896, lng: 30.3231 };
        opt.zoom = 18;
    }

    if (window.innerWidth >= 1300) {
        opt.center = { lat: 59.93912, lng: 30.31945 };
        opt.zoom = 17;
    }

    var map = new google.maps.Map(document.querySelector(".contacts__google-map"), opt);

    var marker = new google.maps.Marker({
        position: { lat: 59.938824, lng: 30.3231 },
        map: map,
        icon: {
            url: "img/map-pin.png",
            scaledSize: new google.maps.Size(62, 53)
        },
        title: "ул. Большая Конюшенная, д. 19/8 Санкт-Петербург",
    })

    if (window.innerWidth >= 768) {
        marker.icon.scaledSize = new google.maps.Size(122, 106);
    }
};
