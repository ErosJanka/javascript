function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = document.querySelector('#txtano')
    var res = document.querySelector('div#res')
    // .length serve para definir um minimo. como por exemplo .length < 6 (minimo 6 caracteres para senha) ou .length == 14 (para minimo 14 caracteres para CPf). Aqui .length == 0 (Se a pessoa não digitou o ano)
    if (Fano.value.length == 0 || Number(Fano.value) > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente`)
    } else {
        var fsex = document.getElementsByName('rsex')
        var idade = ano - Number(Fano.value)
        var genero = ''
        var img = document.querySelector('#foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 2) {
                //BB
                res.innerHTML = `Detectamos um BB ${genero} com ${idade} ano`
                img.setAttribute('src', 'bb-mas.png')
            } else if (idade >= 2 && idade < 10) {
                //Criança
                res.innerHTML = `Detectamos uma Criança ${genero} com ${idade} anos`
                img.setAttribute('src', 'crianca-mas.png')
            } else if (idade < 18) { //não precisa colocar as idades anteriores, basta colocar a idade limite
                //Adolecente
                res.innerHTML = `Detectamos um Adolecente ${genero} com ${idade} anos`
                img.setAttribute('src', 'adolecente-mas.png')
            } else if (idade < 50) {
                //Adulto
                res.innerHTML = `Detectamos um Adulto ${genero} com ${idade} anos`
                img.setAttribute('src', 'adulto-mas.png')
            } else if (idade < 120) {
                //Idoso
                res.innerHTML = `Detectamos um Idoso ${genero} com ${idade} anos`
                img.setAttribute('src', 'idoso-mas.png')
            } else {
                //morto (talvez)
                res.innerHTML = `Detectamos uma pessoa morta (provavelmente) com ${idade} anos`
                img.setAttribute('src', 'morto.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 2) {
                //BB
                res.innerHTML = `Detectamos uma BB ${genero} com ${idade} ano`
                img.setAttribute('src', 'bb-fem.png')
            } else if (idade >= 2 && idade < 10) {
                //Criança
                res.innerHTML = `Detectamos uma Criança ${genero} com ${idade} anos`
                img.setAttribute('src', 'crianca-fem.png')
            } else if (idade < 18) { //não precisa colocar as idades anteriores, basta colocar a idade limite
                //Adolecente
                res.innerHTML = `Detectamos uma Adolecente ${genero} com ${idade} anos`
                img.setAttribute('src', 'adolecente-fem.png')
            } else if (idade < 50) {
                //Adulto
                res.innerHTML = `Detectamos uma Adulta ${genero} com ${idade} anos`
                img.setAttribute('src', 'adulto-fem.png')
            } else if (idade < 120) {
                //Idoso
                res.innerHTML = `Detectamos uma Idosa ${genero} com ${idade} anos`
                img.setAttribute('src', 'idoso-fem.png')
            } else {
                //morto (talvez)
                res.innerHTML = `Detectamos uma pessoa morta (provavelmente) com ${idade} anos`
                img.setAttribute('src', 'morto.png')
            }
        }
        res.style.textAlign = 'center'
        
        res.appendChild(img)
    }


}