/* global particlesJS */
// ======== Элементы таймера ========
const daysEl = document.querySelector(".days");
const hoursEl = document.querySelector(".hours");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");

// ======== Функция поздравления ========
function merryChristmas() {
    const header = document.querySelector("h1");
    header.textContent = "MERRY CHRISTMAS!!! HO-HO-HO!";
    header.classList.add("red"); 
  }

// ======== Таймер ========
function christmasCountdown() {
    const christmasDate = new Date("December 25, 2026 00:00:00");
    const now = new Date();
    const diff = christmasDate - now;

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    daysEl.textContent = Math.floor(diff / msInDay);
    hoursEl.textContent = String(Math.floor((diff % msInDay) / msInHour)).padStart(2, "0");
    minutesEl.textContent = String(Math.floor((diff % msInHour) / msInMinute)).padStart(2, "0");
    secondsEl.textContent = String(Math.floor((diff % msInMinute) / msInSecond)).padStart(2, "0");

    if (diff <= 0) {
        daysEl.textContent = 0;
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";
        clearInterval(timer);
        merryChristmas();
    }
}

// ======== Запуск таймера ========
let timer = setInterval(christmasCountdown, 1000);

// ======== Музыка ========
const btnPlay = document.querySelector("#btn");
const btnPause = document.querySelector("#pause");
const audio = document.querySelector("#audio");

btnPlay.addEventListener("click", () => audio.play());
btnPause.addEventListener("click", () => audio.pause());

// ======== Particles.js ========
document.addEventListener("DOMContentLoaded", function() {
    particlesJS("particles-js", {
        particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: {
                type: "circle",
                image: { 
                    src: "https://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png",
                    width: 100,
                    height: 100
                }
            },
            opacity: { value: 0.7, anim: { enable: false } },
            size: { value: 5, random: true },
            line_linked: { enable: false },
            move: {
                enable: true,
                speed: 5,
                direction: "bottom",
                random: true,
                straight: false,
                out_mode: "out",
                attract: { enable: true, rotateX: 300, rotateY: 1200 }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "bubble" },
                onclick: { enable: true, mode: "repulse" },
                resize: true
            },
            modes: {
                bubble: { distance: 200, size: 40, duration: 2, opacity: 8, speed: 3 },
                repulse: { distance: 200, duration: 0.2 }
            }
        },
        retina_detect: true
    });
});