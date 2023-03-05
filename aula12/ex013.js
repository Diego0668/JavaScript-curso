var agora = new Date()
var DiaSemana = agora.getDay()
DiaSemana = 9

/*
    Domingo = 0 
    Segunda = 1
    Terça = 2
    Quarta = 3
    Quinta = 4
    Sexta = 5
    Sabado = 6
*/
console.log(`${DiaSemana}`)

switch (DiaSemana) {
    case 0:
        console.log(`Hoje é Domingo`)
        break
    case 1:
        console.log("Hoje é Segunda")
        break
    case 2:
        console.log("Hoje é Terça")
        break
    case 3:
        console.log(" Hoje é Quarta")
        break
    case 4:
        console.log(`Hoje é quinta`)
        break
    case 5:
        console.log(`Hoje é Sexta`)
        break
    case 6:
        console.log(`Hoje é Sabado`)
        break
    default:
        console.log("Dia invalido")
}

