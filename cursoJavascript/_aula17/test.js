// objetos no exemplo abaixo 

let amigo = {
    nome: 'Gabriel',
    sexo: 'M',
    peso: 82,
    engordar(p=0){
        console.log('engordou!')
        this.peso += p
    },
}
amigo.engordar(10)
console.log(`${amigo.nome} seu peso é ${amigo.peso}kg`)
