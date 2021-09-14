
var altura = 0
var largura = 0
var vidas = 1
var tempo = 10
var intervalo = 0
var nivel =  window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    intervalo = 1500

}
if(nivel === 'dificil'){
    intervalo = 1200
}
if(nivel === 'cloviano'){
    intervalo = 1000
}


function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

cronometro = setInterval( function(){
    
    tempo--

    if(tempo<0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'

    }
    else document.getElementById('cronometro').innerHTML = tempo
}, 1000)


function posicaoRandomica() {

	// remover o mosquito anterior, caso exista 
    if( document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if(vidas > 3){

            window.location.href = 'fim_de_jogo.html'
        }
        else{

            document.getElementById('v' + vidas ).src = 'imagens/coracao_vazio.png'

            vidas++;

        }

    }
    
    
    var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//criar o elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosca.png'
	mosquito.className = tamanhoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
    mosquito.style.transform = posiAleatoria()
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
       this.remove() 
    }

	document.body.appendChild(mosquito)
}

function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3) + 1

	return 'mosquito' + classe.toString()
}

function posiAleatoria(){
	var posi = Math.floor(Math.random() * 2)

    switch(posi){
        case 0: 
            return 'none'
        case 1:
            return 'scaleX(-1)'
    }

	return 'mosquito' + classe.toString()
}
