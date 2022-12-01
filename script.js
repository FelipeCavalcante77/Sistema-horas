function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date() //data de hoje
var hora = data.getHours() //horario do sistema ATUAL

msg.innerHTML = 'Agora são ' +hora+ ' Horas'

if(hora >= 0 && hora < 12){
    //bom dia
    img.src = 'img-dia/manha.png'
    document.body.style.background = '#ADD8E6'
    
}
else if(hora >= 12 && hora < 18){
    //boa tarde
    img.src = 'img-dia/tarde1.png'
    document.body.style.background = '#BDB76B'
}
else{
    //boa noite
    img.src = 'img-dia/noite.png'
    document.body.style.background = '#C0C0C0'
}

}