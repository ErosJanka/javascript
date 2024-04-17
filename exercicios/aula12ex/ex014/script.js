
function carregar() {
    var msg = window.document.querySelector('#msg')
    var img = window.document.querySelector('#imagem')
    var agora = new Date()
    var hora = agora.getHours()
    var minutos = agora.getMinutes()
    msg.innerHTML = `agora são ${hora} horas e ${minutos} minutos`

    if (hora >= 0 && hora < 12) {
        img.src = 'foto-manha-circulo.png'
        document.body.style.background = 'var(--cor0)'
    } else if ( hora >=12 && hora < 18) {
        img.src = 'foto-tarde-circulo.png'
        document.body.style.background = 'var(--cor1)'
    } else {
        img.src = 'foto-noite-circulo.png'
        document.body.style.background = 'var(--cor2)'
    }
    
}
