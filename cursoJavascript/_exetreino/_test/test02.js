function verificar() {
    let tex = document.querySelector('input#texto')
    let res = document.querySelector('div#res')

    let txt = String(tex.value)

    let arr = [
        'gabriel',
        'emanuela',
        'ana',
        'marcos',
        'victor',
        'leandro',

    ]


    if (tex.value.length == 0) {
        
        window.alert('[Erro] Digite um nome para continuar')
    } 
}