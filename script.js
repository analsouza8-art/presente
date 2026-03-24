let etapaAtual = 1;
let musicaIniciada = false;

const btn = document.getElementById('btn-verificar');
const input = document.getElementById('input-resposta');
const pista = document.getElementById('pista');
const erro = document.getElementById('mensagem-erro');
const player = document.getElementById('musica-background');
const etapaDesafio = document.getElementById('etapa-desafio');
const recompensa = document.getElementById('recompensa');
const container = document.getElementById('container-cofre');

const limpar = (t) => t.toLowerCase().trim();

btn.addEventListener('click', () => {
    // Inicia Red Swan no primeiro clique para burlar o bloqueio do navegador
    if (!musicaIniciada) {
        player.src = "https://www.youtube.com/embed/r1X_Vz8UclM?autoplay=1";
        musicaIniciada = true;
    }

    const res = limpar(input.value);

    // 1. JUJUTSU KAISEN
    if (etapaAtual === 1) {
        if (res.includes("gate open") || res.includes("portao aberto")) {
            avancar("Nível 2 [Attack on Titan]: Qual o nome do Titã de Eren Jaeger que possui a habilidade de ver memórias de futuros portadores?");
        } else { falha(); }
    } 
    // 2. ATTACK ON TITAN
    else if (etapaAtual === 2) {
        if (res.includes("ataque") || res.includes("shingeki")) {
            avancar("Nível 3 [Free Fire]: Qual o nome da inteligência artificial (Ciborgue) mestre de armas criada pela Horizon? (Dica: A _ _ 4)");
        } else { falha(); }
    }
    // 3. FREE FIRE
    else if (etapaAtual === 3) {
        if (res === "a124") {
            avancar("Nível 4 [Corrupt]: Qual o nome do hotel abandonado da família Crist onde Erika é levada e confrontada pelos Cavaleiros?");
        } else { falha(); }
    }
    // 4. CORRUPT
    else if (etapaAtual === 4) {
        if (res.includes("pope") || res.includes("papa")) {
            avancar("Nível 5 [Teen Wolf]: Qual o nome da espécie sobrenatural de Jordan Parrish, o protetor do Nemeton?");
        } else { falha(); }
    }
    // 5. TEEN WOLF (Espécie)
    else if (etapaAtual === 5) {
        if (res.includes("cao do inferno") || res.includes("hellhound")) {
            avancar("Nível 6 [Teen Wolf]: Qual o nome da avó de Lydia Martin, que também era uma Banshee e deixou a lista de códigos no Lago?");
        } else { falha(); }
    }
    // 6. TEEN WOLF (Avó)
    else if (etapaAtual === 6) {
        if (res.includes("lorraine")) {
            avancar("Nível Final [Teen Wolf]: Qual é a marca/tatuagem que Scott McCall tem no braço e que simboliza seu bando?");
        } else { falha(); }
    }
    // 7. PERGUNTA FINAL
    else if (etapaAtual === 7) {
        if (res.includes("circulo") || res.includes("tira") || res.includes("faixa")) {
            finalizar();
        } else { falha(); }
    }
});

function avancar(proxima) {
    etapaAtual++;
    pista.innerText = proxima;
    input.value = "";
    erro.style.display = "none";
}

function falha() {
    erro.style.display = "block";
    input.value = "";
}

function finalizar() {
    etapaDesafio.style.display = "none";
    recompensa.style.display = "block";
    container.style.border = "2px solid #00ff41";
    container.style.boxShadow = "0 0 40px #00ff41";

    // Explosão de Confetes
    confetti({
        particleCount: 200,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ff3e3e', '#00ff41', '#ffffff']
    });
}