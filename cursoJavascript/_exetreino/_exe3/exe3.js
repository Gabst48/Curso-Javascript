function contar() {
    var ini = window.document.querySelector('input#txtini')
    var fim = window.document.querySelector('input#txtfim')
    var passo = window.document.querySelector('input#txtpasso')
    var res = window.document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[erro] Complete os dados!!')
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            window.alert('[erro] passo não pode ser 0 considerando 1')
            p = 1
        }
        if (i < f) {
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        } else {
            for (var c = i; c >= f; c -= p ) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }



}