function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours()
    //var horas = 15
    msg.innerText = 'Agora são ' + horas + ' horas.'

    if(horas >= 0 && horas < 12){
        img.src = 'img/dia.jpg'
        document.body.style.background = 'rgba(51, 177, 255, 0.753)' 
    } else if(horas >=12 && horas <=17){
        img.src = 'img/tarde.jpg'
        document.body.style.background = 'rgba(206, 94, 50, 0.753)' 
    }else{
        img.src = 'img/noite.jpg'
        document.body.style.background = 'rgba(31, 20, 101, 0.868)' 
    }

}
