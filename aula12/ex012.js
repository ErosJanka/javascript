var idade = 67
console.log(`Você tem ${idade} anos, então o seu voto é:`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18) {
    console.log('Opcional')
} else if (idade < 67) {
    console.log('Obrigatório')
} else {
    console.log('Opcional por idade avançada')
}