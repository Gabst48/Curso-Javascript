function load () {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var hora = new Date ()
    var agora = hora.getHours()
    msg.innerHTML = `Agora são ${agora} Horas`
    if (agora >= 0 && agora < 12) {
        img.src = "../../_img/_exe1/manha.jpg"//bom dia
        document.body.style.background = '#c8c861'
        
    } else if (agora >= 12 && agora < 18) {
        img.src = "../../_img/_exe1/tarde.jpg"//boa tarde
        document.body.style.background = '#d88e2dca'
        
    } else {
        img.src = "../../_img/_exe1/noite.jpg"//boa noite
        document.body.style.background = '#524242'
        
    }


}
