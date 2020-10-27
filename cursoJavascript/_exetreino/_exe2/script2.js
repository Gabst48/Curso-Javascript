function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.querySelector('input#txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[erro] Verifique seus dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //cria o img no javascript
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','../../_img/_exe2/crianca-m.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','../../_img/_exe2/jovem-m.jpg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src','../../_img/_exe2/adulto-m.jpg')
            } else {
                //idoso
                img.setAttribute('src','../../_img/_exe2/idoso-m.jpg')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','../../_img/_exe2/crianca-f.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','../../_img/_exe2/jovem-f.jpg')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src','../../_img/_exe2/adulto-f.jpg')
            } else {
                //idoso
                img.setAttribute('src','../../_img/_exe2/idoso-f.jpg')
            }
            
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)//mostra o img na tela
        
    }

}
