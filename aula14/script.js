function calcular() {
    let num = document.getElementById('num') //variável pra pegar o número digitado
    let tab = document.getElementById('resTab')//variável para a tabela
    if (num.value.length == 0) { //se não for inserido algum valor, apresentará erro
        window.alert('[ERRO] Por favor, digite um número.')
    }else{
        let n = Number(num.value) //tranformar o valor de num para o tipo number
        let c = 1
        tab.innerHTML = ' '
        while(c <= 10){
            let item = document.createElement('option') //adicionar elementos na tabela
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}