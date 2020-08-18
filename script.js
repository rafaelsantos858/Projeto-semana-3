

function addponto(){
    var serie = document.getElementById("serie")
    if(serie.value.length == 3){
        serie.value += "."
    }
}

let produtos = JSON.parse(localStorage.getItem("produtos"))

if(produtos== null){
    produtos=[]
}

function salvar(){
    const nome = document.getElementById("nome").value
    const tipo = document.getElementById("tipo").value
    const setor = document.getElementById("setor").value
    const caracteristicas = document.getElementById("caracteristicas").value

    produtos.push({
        nome: nome,
        tipo: tipo,
        setor: setor,
        caracteristicas: caracteristicas
    })
    console.log(produtos);
    debugger

    const json_produtos = JSON.stringify(produtos)

    localStorage.setItem("produtos",json_produtos)


}






// function salvar(){

//         var nome = document.getElementById("nome")
//         var nomeJSON = JSON.stringify("nome")

//         var tipo = document.getElementById("tipo")
//         var tipoJSON = JSON.stringify("tipo")

//         var caracteristicas = document.getElementById("caracteristicas")
//         var caracteristicasJSON = JSON.stringify("caracteristicas")
// }