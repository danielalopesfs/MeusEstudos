function saudar(nome) {
    console.log("Olá, " + nome + " tudo bem?")
}

function nomeCompleto(nome, sobrenome) {
    console.log(`${nome} ${sobrenome}`)
}

function enderecoCompleto(rua, numero, bairro, estado, pais) {
    console.log(rua + ", " + "n." + numero + ", " + bairro + ", " + estado + ", " + pais)
}

const bancoDeDados = {
    nome: 'Marcos',
    sobrenome: 'Moura',
    idade: 26,
    profissao: 'dev',
    endereco: {
        rua: 'Ubá',
        numero: 59,
        bairro: 'São Jose',
        estado: 'Minas Gerais',
        pais: 'Brasil'
    }
}

enderecoCompleto(
    bancoDeDados.endereco.rua, 
    bancoDeDados.endereco.numero, 
    bancoDeDados.endereco.bairro, 
    bancoDeDados.endereco.estado, 
    bancoDeDados.endereco.pais
)


