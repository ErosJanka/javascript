var num = document.querySelector('#txtn')
var tab = document.querySelector('#seltab')
function taboada(){
    
    if (num.value.length == 0) {
        window.alert (`Por favor, digite um número`)
    } else {
        let n = Number(num.value)
        let c = 1;
        tab.innerHTML = ''
        while (c <= 10 ) {
            let item = document.createElement('option')
            item.text = `${n} * ${c} = ${n*c}`
            item.value = `tab${c}` //Importante para o PHP
            tab.appendChild(item)
            c++
        }
    }
}

function limpar(){
    let n = Number(num.value)

        document.querySelector('#txtn').value=''
        tab.innerHTML = '<option>Digite um número acima</option>'
    
}