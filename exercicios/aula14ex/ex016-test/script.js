function contar(){
    var ini = document.querySelector('#txti')
    var fim = document.querySelector('#txtf')
    var pas = document.querySelector('#txtp')
    var res = document.querySelector("#res")
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert(`[ERRO] Verifique os dados e tente novamente`)
    } else {
        res.innerHTML = `Contando: <br>`
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if (p <= 0){
            p = 1
            window.alert(`[ERRO] Passo inválido, considerando passo 1`)
        } 
        if (i < f) {
            //contagem crescente
            for(var c = i; c <= f; c += p)
            res.innerHTML += `${c} \u{27A1} `
        } else {
            //contagem regressiva
            for(var c = i; c >= f; c -= p)
            res.innerHTML += `${c} \u{27A1} `
        }
        res.innerHTML += `\u{1F3C1}`
        
        
    }
}