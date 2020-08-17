let produtostb = JSON.parse(localStorage.getItem("produtos"));

var linha = document.getElementById('linha')

for(var i=0;i<produtostb.length;i++){
linha.innerHTML += "<tr><td>"+produtostb[i].nome+"</td><td>"+produtostb[i].tipo+"</td><td>"+produtostb[i].setor+"</td></tr>";
}