document.getElementById("btn-si").addEventListener("click", function() {
    document.getElementById("respuesta").innerText = "¡Sabía que dirías que sí! 😍";
});

document.getElementById("btn-no").addEventListener("mouseover", function() {
    const btnNo = document.getElementById("btn-no");
    const maxTop = window.innerHeight - 100;
    const maxLeft = window.innerWidth - 200;

    let nuevoTop, nuevoLeft;

    do {
        nuevoTop = Math.floor(Math.random() * maxTop);
        nuevoLeft = Math.floor(Math.random() * maxLeft);
    } while (Math.abs(nuevoTop - btnNo.offsetTop) < 50 || Math.abs(nuevoLeft - btnNo.offsetLeft) < 50);

    btnNo.style.position = "absolute";
    btnNo.style.top = nuevoTop + "px";
    btnNo.style.left = nuevoLeft + "px";
});