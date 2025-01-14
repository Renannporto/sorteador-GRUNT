document.addEventListener("DOMcontentLoaded", function(){
    document.getElementById("form-sorteador").addEventListener("submit", function(evento){
        evento.preventDefault();
        let numeroMaximo = document.getElementById("numero-maximo").value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Match.random() * (numeroMaximo);
        numeroAleatorio = Match.floor(numeroAleatorio + 1);

        document.getElementById("resultado-valor").innerText = numeroAleatorio;
        document.querySelector(".resultado").style.display = "block";
    });
});