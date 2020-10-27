let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)){
        // adiciona o número no select
        valores.push(Number(num.value)) // adiciona o elemento no array
        let item = document.createElement('option') // cria uma tag option e armazena na variavel 
        item.text = `valor ${num.value} adicionado.` // o texto que vai ser exibido
        lista.appendChild(item) // adiciona na lista o texto (item)
        res.innerHTML = ""
    } else {
        window.alert('número inválido ou já encontrado na lista.')

    }
    num.value = '' // limpa o input 
    num.focus() // focus() é o foco do mouse 
}

function finalizar() {
    if (valores == '') {
        window.alert('Digite valores antes de finalizar!!!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) { // percorre o array 
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot

        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo temos ${tot} itens cadastrados</p>`
        res.innerHTML += `<p>O maior número é ${maior}</p>`
        res.innerHTML += `<p>O menor número é ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os números é ${soma}</p>`
        res.innerHTML += `<p>A média de todos os números é ${media}</p>`
    }
}
