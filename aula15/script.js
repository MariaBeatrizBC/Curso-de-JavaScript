let num = document.getElementById('txtNum')
let lista = document.getElementById('lista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){ 
    if(Number(n) >= 1 && Number(n) <= 100){ // verifica se o valor é um número
        return true
    } else {
        return false
    }
}

function inLista(n , l){
    if(l.indexOf(Number(n)) != -1){ // verifica se o valor já está na lista
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)) { //verificar se o valor é um número e se já está na lista
        valores.push(Number(num.value)) //adiciona os números ao array valores
        let item = document.createElement('option') //adiciona os itens na lista, mas não aparece visualmente
        item.text = 'Valor ' + num.value + ' adicionado.' //msg que vai aparecer na lista
        lista.appendChild(item) //adiciona os itens na lista e aparece visualmente
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = '' //limpa o input
    num.focus() //mantém o cursor no input
}

function verificar(){
    if(valores.length == 0){
        window.alert('Adicione valores para verificar.')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){ //para cada posição do array de valores
            soma += valores[pos] // soma os valores de cada posição
            if(valores[pos] > maior){ // se o valor da posição for maior do que o valor maior
                maior = valores[pos] // maior recebe o valor identificado como maior
            } else if(valores[pos] < menor) { // se o valor da posição for menor do que o valor menor
                menor = valores[pos] // menor recebe o valor identificado como menor
            } 
            media = soma / total // calcula a media dividindo a soma dos valores pelo total de elementos

        }
        
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números adicionados.</p>`
        res.innerHTML += `<p>O maior valor é ${maior}. </p>`
        res.innerHTML += `<p>O menor valor é ${menor}.</p>`
        res.innerHTML += `<p>A soma dos elementos é ${soma}.</p>`
        res.innerHTML += `<p>A média dos elementos é ${media}.</p>`
    }
}