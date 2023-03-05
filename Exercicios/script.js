/*
alert("Olá")
*/
function carregar() {
    var msg = document.getElementById(`msg`)
    var img = document.getElementById(`imagem`)
    var data = new Date()
    var hora = data.getHours()
    var hora = 10
 
    msg.innerHTML = `Agora são <strong>${hora} horas </strong>`
    if (hora >= 0 && hora < 12) {
        /// BOMMM DIA 
        img.src = "imagem/fotomanha.png"
        document.body.style.backgroundColor = "#e2cd9f"
    } else if (hora >= 12 && hora <= 18) {
        ///BOA TARDE
        img.src = "imagem/fototarde.png"
        document.body.style.backgroundColor = "orange"
    } else {
        //BOA NOITE
        img.src = "imagem/fotonoite.png"
        document.body.style.backgroundColor = "gray"
    }
}