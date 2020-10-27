function gerar() {
    let num = document.querySelector('input#txtnum')
    let tab = document.querySelector('select#seltab')

    if (num.value == 0) {
        window.alert('[erro] Digite um valor para continuar')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let c = 1;c < 11;c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `${c}`
            tab.appendChild(item)

        }
        
    }


}