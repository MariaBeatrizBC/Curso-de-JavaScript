function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtAno')
    var res = document.getElementById('res')

    if(fAno.value.length == 0 || fAno.value >= ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fSex = document.getElementsByName('radSex')
        var idade = ano - Number(fAno.value)
        res.innerHTML = 'Idade calculada: ' + idade
    }
}
