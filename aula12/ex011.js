var agora = new Date()
var hora = agora.getHours() //pega a hora atual do script
console.log('Agora são ' + hora + ' horas.')
if(hora < 12) {
    console.log('Bom dia!');
} else if ( hora > 11 && hora <= 17) {
    console.log('Boa tarde!')
} else if ( hora > 17 && hora <= 23) {
    console.log('Boa noite!') 
} else {
}