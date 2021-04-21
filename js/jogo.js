var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;


function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth
	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

/* cronometro controlando o tempo de partido, decrementa a cada 1s
    se todos os pontos de vida forem perdidos = Game Over
    senão = ganha a partida
*/
var cronometro = setInterval(
    function(){
        tempo -= 1
        if (tempo < 0) {
            clearInterval(cronometro)   //limpando a memoria do navegador
            clearInterval(criaMosca)    //limpando a memoria do navegador
            alert('vit')
        } else {
            document.getElementById('cronometro').innerHTML = tempo
        }
    }, 1000
)

function posicaoRandomica() {
/*  remover mosquito anterior caso exista
    se clicado, o elemento deve ser removido e nada acontece
*/

/*  controlando os pontos de vidas:
    se elemento nao for clicado antes da remoção automática, um ponto de vida deve ser removido
    se as vidas removidas forem maior do que 3 = Game Over 
*/
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();
        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('vida' + vidas).src="./image/coracao_vazio.png";
            vidas++
        }
    }

// posição randomica da mosca na tela
	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY
	console.log(posicaoX, posicaoY)

//criar o elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'image/mosca.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

	document.body.appendChild(mosquito)
}

// tamanho aleatório da mosca na tela
function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)

	switch(classe) {
		case 0:
			return 'mosquito1'

		case 1:
			return 'mosquito2'

		case 2:
			return 'mosquito3'
	}
}

// lado aleatório da mosca na tela
function ladoAleatorio(){
	var classe = Math.floor(Math.random() * 2)

	switch(classe) {
		case 0:
			return 'ladoA'

		case 1:
			return 'ladoB'
	}
}

