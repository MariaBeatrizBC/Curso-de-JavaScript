var idade = '16';
if(idade < 16) {
    console.log('não vota');
} else if ( idade == 16 || idade >=65) {
    console.log('voto opcional')
} else if ( idade > 18 || idade < 65) {
    console.log('voto obrigatório')
} else {
}