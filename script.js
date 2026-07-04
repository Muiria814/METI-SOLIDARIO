// METI SOLIDÁRIO

console.log("METI SOLIDÁRIO carregado com sucesso!");

function guardarHistorico(){

    const mensagens =
    document.getElementById("chat-mensagens");

    localStorage.setItem(
        "chatHistorico",
        mensagens.innerHTML
    );
     guardarHistorico();

}

// Função para copiar texto
function copiarTexto(texto) {

    const area = document.createElement("textarea");

    area.value = texto;

    document.body.appendChild(area);

    area.select();

    document.execCommand("copy");

    document.body.removeChild(area);

}

// Contador simples de visitantes
let visitas = localStorage.getItem("visitas");

if (!visitas) {
    visitas = 0;
}

visitas++;

localStorage.setItem("visitas", visitas);

console.log("Número de visitas:", visitas);

function mostrarPagamento(id){

    const todos = document.querySelectorAll('.detalhes-pagamento');

    todos.forEach(item => {
        item.style.display = 'none';
    });

    document.getElementById(id).style.display = 'block';
}

window.onload = function(){

    const abrirChat = document.getElementById("abrir-chat");
    const chatbot = document.getElementById("chatbot");

    abrirChat.onclick = function(){

        if(chatbot.style.display === "block"){
            chatbot.style.display = "none";
        }else{
            chatbot.style.display = "block";
        }

    };

};

window.addEventListener("load", function(){

    const historico =
    localStorage.getItem("chatHistorico");

    if(historico){

        document.getElementById(
            "chat-mensagens"
        ).innerHTML = historico;

    }

});

function enviarPergunta(){

    const input = document.getElementById("chat-input");
    const mensagens = document.getElementById("chat-mensagens");

    let pergunta = input.value.trim();

    if(pergunta === ""){
        return;
    }

    mensagens.innerHTML +=
    `<div class="user-msg">
    <small>[${obterHora()}]</small><br>
    ${pergunta}
</div>`;
    let texto = pergunta.toLowerCase();
    let resposta = "";

    if(texto.includes("doar") || texto.includes("doação") || texto.includes("doacao")){

  resposta =
'Pode doar através de vários métodos, como Mpesa, eMola, Millenium BIM, Cartão Visa, Google Pay, Bitcoin, Ethereum, USDT, BNB e Litecoin. <br><br><a href="doacoes.html">👉 Abrir página de Doações</a>';

}

else if(texto.includes("centro de saúde") ||
        texto.includes("centros de saúde") ||
        texto.includes("saúde") ||
        texto.includes("saude")){

    resposta =
    "Meti possui atualmente 1 centro de saúde que necessita de apoio e melhoria.";

}

else if(texto.includes("escola") ||
        texto.includes("escolas")){

    resposta =
    "Meti possui cerca de 22 escolas que atendem aproximadamente 9.754 alunos.";

}

else if(texto.includes("aluno") ||
        texto.includes("alunos")){

    resposta =
    "As escolas de Meti atendem aproximadamente 9.754 alunos.";

}

else if(texto.includes("poço") ||
        texto.includes("poços") ||
        texto.includes("pocos") ||
        texto.includes("água") ||
        texto.includes("agua")){

    resposta =
    "Meti possui aproximadamente 28 poços de água, mas muitas comunidades ainda enfrentam dificuldades de acesso à água potável.";

}

else if(texto.includes("população") ||
        texto.includes("populacao") ||
        texto.includes("habitantes")){

    resposta =
    "A população estimada de Meti é de aproximadamente 128.465 habitantes.";

}

else if(texto.includes("localidade") ||
        texto.includes("localidades")){

    resposta =
    "Meti possui duas localidades principais: Nioce e Naquessa.";

}

else if(texto.includes("sala") ||
        texto.includes("salas de aula")){

    resposta =
    "Meti possui aproximadamente 250 salas de aula, sendo que algumas escolas ainda funcionam debaixo de árvores.";

}

else if(texto.includes("cahique")){

    resposta =
    "A Escola Primária de Cahique é uma das escolas apoiadas pelo projeto METI SOLIDÁRIO.";

}

else if(texto.includes("mutumar")){

    resposta =
    "A Escola Primária de Mutumar é uma das escolas existentes no Posto Administrativo de Meti.";

}

else if(texto.includes("nauauane")){

    resposta =
    "A Escola Primária de Nauauane faz parte da rede escolar do Posto Administrativo de Meti.";

}

else if(texto.includes("meti sede") ||
        texto.includes("escola primária de meti")){

    resposta =
    "A Escola Primária de Meti-Sede é uma das principais escolas do Posto Administrativo de Meti.";

}

else if(texto.includes("distrito")){

    resposta =
    "Meti localiza-se no distrito de Lalaua, província de Nampula, Moçambique. A distância entre Meti e a sede distrital de Lalaua é de aproximadamente 75 km.";

}

else if(texto.includes("província")){

    resposta =
    "Meti pertence à província de Nampula, no norte de Moçambique.";

}

else if(texto.includes("onde fica meti") ||
        texto.includes("localização") ||
        texto.includes("localizacao")){

    resposta =
    "Meti é um Posto Administrativo localizado no distrito de Lalaua, província de Nampula, Moçambique.";

}

else if(texto.includes("transparência") ||
        texto.includes("transparencia") ||
        texto.includes("prestação de contas") ||
        texto.includes("prestacao de contas")){

    resposta =
    "O METI SOLIDÁRIO publica informações de transparência e prestação de contas para mostrar como os donativos são utilizados.";

}

else if(texto.includes("educação") ||
        texto.includes("educacao")){

    resposta =
    "O projeto apoia a educação através da melhoria das condições escolares, construção de salas de aula e aquisição de materiais.";

}

else if(texto.includes("alimentação") ||
        texto.includes("alimentacao") ||
        texto.includes("desnutrição") ||
        texto.includes("desnutricao")){

    resposta =
    "O METI SOLIDÁRIO procura apoiar famílias vulneráveis e combater a desnutrição infantil.";

}

else if(texto.includes("projeto") ||
        texto.includes("meti solidário") ||
        texto.includes("meti solidario")){

    resposta =
    "O METI SOLIDÁRIO é uma iniciativa comunitária criada para apoiar água potável, educação, saúde e alimentação em Meti.";

}

else if(texto.includes("contacto") ||
        texto.includes("contato") ||
        texto.includes("whatsapp")){

    resposta =
    "Pode contactar o Agente do METI SOLIDÁRIO pelo WhatsApp: +258 833975899.";

}



else{

    resposta =
    "Não encontrei uma resposta para essa pergunta. Clique em 'Falar com Agente METI SOLIDÁRIO' para receber assistência humana.";

}

    setTimeout(function(){

        mensagens.innerHTML +=
        `<div class="bot-msg">${resposta}</div>`;

        mensagens.scrollTop =
        mensagens.scrollHeight;

    },500);

    input.value = "";
}

function respostaRapida(tipo){

    const mensagens =
    document.getElementById("chat-mensagens");

    let resposta = "";

    if(tipo === "agua"){

        resposta =
        "💧 Meti possui aproximadamente 153 poços de água, mas muitas comunidades ainda enfrentam dificuldades de acesso à água potável.";

    }

    else if(tipo === "educacao"){

        resposta =
        "📚 Meti possui cerca de 22 escolas que atendem aproximadamente 9.754 alunos.";

    }

    else if(tipo === "saude"){

        resposta =
        "🏥 Meti possui atualmente 2 centros de saúde que necessitam de apoio e melhoria.";

    }

    else if(tipo === "doacoes"){

        resposta =
        "💰 Pode doar através de M-Pesa, eMola, Millennium BIM, PayPal, Visa, Bitcoin, Ethereum, USDT, BNB ou Litecoin.";

    }

    mensagens.innerHTML +=
    `<div class="bot-msg">
    <small>[${obterHora()}]</small><br>
    ${resposta}
</div>`

    mensagens.scrollTop =
    mensagens.scrollHeight;

}

function obterHora(){

    const agora = new Date();

    let horas = agora.getHours();
    let minutos = agora.getMinutes();

    if(minutos < 10){
        minutos = "0" + minutos;
    }

    return horas + ":" + minutos;
}

// COOKIES

document.addEventListener("DOMContentLoaded", function(){

    if(localStorage.getItem("cookiesAceites")){

        document.getElementById("cookie-banner").style.display = "none";

    }

});

function aceitarCookies(){

localStorage.setItem("cookiesAceites","sim");

document.getElementById("cookie-banner").style.display="none";

}
