/* =========================================
   ДАТА СВАДЬБЫ
========================================= */

const weddingDate =
    new Date("2026-10-02T16:30:00").getTime();


/* =========================================
   ОБРАТНЫЙ ОТСЧЁТ
========================================= */

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }

    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (distance %
                (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (distance %
                (1000 * 60 * 60)) /
            (1000 * 60)
        );

    const seconds =
        Math.floor(
            (distance %
                (1000 * 60)) /
            1000
        );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================================
   ЛЕПЕСТКИ
========================================= */

const petalSymbols = [
    "🌸",
    "🌺",
    "🌷",
    "🌹",
    "❀"
];

function createPetal() {

    const petal =
        document.createElement("div");

    petal.className = "petal";

    petal.textContent =
        petalSymbols[
            Math.floor(
                Math.random() *
                petalSymbols.length
            )
        ];

    petal.style.left =
        Math.random() * 100 + "vw";

    petal.style.fontSize =
        (9 + Math.random() * 14) + "px";

    petal.style.animationDuration =
        (7 + Math.random() * 8) + "s";

    document.body.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 16000);
}


/* Постоянный поток лепестков */

setInterval(createPetal, 900);


/* =========================================
   БЛЁСТКИ
========================================= */

function createSparkle() {

    const sparkle =
        document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.textContent =
        Math.random() > .5
            ? "✦"
            : "✧";

    sparkle.style.left =
        Math.random() * 100 + "vw";

    sparkle.style.top =
        Math.random() * 100 + "vh";

    sparkle.style.fontSize =
        (8 + Math.random() * 12) + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 2200);
}

setInterval(createSparkle, 500);


/* =========================================
   МУЗЫКА
========================================= */

const music =
    document.getElementById("music");

const musicBtn =
    document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener(
    "click",
    () => {

        if (!playing) {

            music.play()
                .then(() => {

                    playing = true;

                    musicBtn.textContent =
                        "❚❚";

                })
                .catch(() => {

                    alert(
                        "Положите файл music.mp3 рядом с index.html"
                    );

                });

        } else {

            music.pause();

            playing = false;

            musicBtn.textContent =
                "♪";
        }

    }
);


/* =========================================
   ПОЯВЛЕНИЕ ТЕКСТА
========================================= */

const elements =
    document.querySelectorAll(".reveal");

elements.forEach(
    (element, index) => {

        element.style.animationDelay =
            `${index * 0.12}s`;

    }
);


/* =========================================
   ЭФФЕКТ КАРТОЧКИ НА ПК
========================================= */

const card =
    document.querySelector(".card");

document.addEventListener(
    "mousemove",
    (event) => {

        if (window.innerWidth < 800) {
            return;
        }

        const rotateY =
            (event.clientX -
                window.innerWidth / 2) /
            90;

        const rotateX =
            (window.innerHeight / 2 -
                event.clientY) /
            100;

        card.style.transform =
            `perspective(1200px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;
    }
);


document.addEventListener(
    "mouseleave",
    () => {

        card.style.transform =
            "perspective(1200px) rotateX(0deg) rotateY(0deg)";
    }
);