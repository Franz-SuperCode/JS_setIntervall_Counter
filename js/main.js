let outputEl = document.querySelector(".zeit");
let buttonEl = document.querySelector("#btn");
let buttonReset = document.querySelector("#reset");

buttonEl.addEventListener("click", () => {
    let number = 100;
    function reduce() {
        //schreibt die Zahl ins HTML und reduziert sie danach
        outputEl.textContent = number + "%";
        outputEl.style.width = number + "%";
        number--
        //Der Timer soll dann gestoppt werden
        if (number < 0) {
            clearInterval(timer);
        }
    }

    //Dieser Part wiederholt die Funktion von oben
    let timer = setInterval(reduce, 100);




    // Beim klick wird die Seite neu geladen
    buttonReset.addEventListener("click", () => {
        window.location.reload();
    })

})