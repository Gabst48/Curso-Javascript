function calcular(){
    var txtc1 = window.document.querySelector('input#txtn1')
    var txtc2 = window.document.querySelector('input#txtn2')
    var txtc3 = window.document.querySelector('input#txtn3')
    var res = window.document.querySelector('div#res')
    var num1 = Number(txtc1.value)
    var num2 = Number(txtc2.value)
    var num3 = Number(txtc3.value)
    if (txtc1.value.length <= 0 && txtc2.value.length <= 0 && txtc3.value.length <= 0){
        window.alert('Erro! insira os dados.')
    } else {
        var s = (num1 + num2 + num3) / 3
        res.innerHTML = `A soma entre ${num1}, ${num2} e ${num3} é igual a <strong>${s}</
        strong>`
    }
}