document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("form-sorteador").addEventListener("submit", function(evento){
        evento.preventDefault();
        let numeroMaximo = document.getElementById("numero-maximo").value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);

        document.getElementById("resultado-valor").innerText = numeroAleatorio;
        document.querySelector(".resultado").style.display = "block";

        let params = {
            particleCount: 500, // Quantidade de confetes
            spread: 90, // O quanto eles se espalham
            startVelocity: 70, // Velocidade inicial
            origin: { x: 0, y: 0.5 }, // Posição inicial na tela
            angle: 45 // Ângulo em que os confetes serão lançados
        };
    
        // Joga confetes da esquerda pra direita
        confetti(params);
    
        // Joga confetes da direita para a esquerda
        params.origin.x = 1;
        params.angle = 135;
        confetti(params);
        
    });
});