let noBtn = document.getElementById("noBtn");
let yesBtn = document.getElementById("yesBtn");
let finalMessage = document.getElementById("finalMessage");

let frasesNo = [
    "¿Por qué no compadre? 🥺",
    "¿En serio mi fresa? 😢",
    "¡Piénsalo bien brujita! 😞",
    "No seas mala corazón de mango 😭",
    "¡Acepta enojona! 🙏",
    "Ya solo queda una opción 😉"
];

let index = 0;
let yesSize = 18;

noBtn.addEventListener("click", function() {
    if (index < frasesNo.length - 1) {
        noBtn.textContent = frasesNo[index];
        yesSize += 10;
        yesBtn.style.fontSize = yesSize + "px";
        index++;
    } else {
        noBtn.style.display = "none";
        yesBtn.style.fontSize = "30px";
    }
});

yesBtn.addEventListener("click", function() {
    document.querySelector(".buttons").style.display = "none";
    document.querySelector("h1").style.display = "none";
    finalMessage.classList.remove("hidden");

    let smallVideoContainer = document.getElementById("small-video-container");

    smallVideoContainer.style.display = "flex";

    let params = {
        to_email:
        "alemanayala2024@gmail.com",
        message: "¡Tu hermosa y maravillosa futura esposa ha aceptado ser tu san valentin!"
    };

    emailjs.send("service_bgw2jf9","template_m5janef", params).then(function(response){ console.log("correo enviado", response);},
    function(error) { console.log("error", error);});
});

