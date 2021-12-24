
function getURL(url){
  let request = new XMLHttpRequest();
  request.open("GET", url , false);
  request.send();
  return request.responseText;
}

function main(){
  let data = getURL("http://projetos.flmarketing.com.br/devJr/js/produtos.json");
  let produtos = JSON.parse(data);

  document.getElementById("photo0").src = produtos.products[0].photo;
  document.getElementById("tituloProduto0").innerHTML = (produtos.products[0].productName);
  document.getElementById("descProduto0").innerHTML = (produtos.products[0].descriptionShort);
  document.getElementById("valorProd0").innerHTML = "R$ " + produtos.products[0].price;


  document.getElementById("photo1").src = produtos.products[1].photo;
  document.getElementById("tituloProduto1").innerHTML = (produtos.products[1].productName);
  document.getElementById("descProduto1").innerHTML = (produtos.products[1].descriptionShort);
  document.getElementById("valorProd1").innerHTML = "R$ " + produtos.products[1].price;

  document.getElementById("photo2").src = produtos.products[2].photo;
  document.getElementById("tituloProduto2").innerHTML = (produtos.products[2].productName);
  document.getElementById("descProduto2").innerHTML = (produtos.products[2].descriptionShort);
  document.getElementById("valorProd2").innerHTML = "R$ " + produtos.products[2].price;

  document.getElementById("photo3").src = produtos.products[3].photo;
  document.getElementById("tituloProduto3").innerHTML = (produtos.products[3].productName);
  document.getElementById("descProduto3").innerHTML = (produtos.products[3].descriptionShort);
  document.getElementById("valorProd3").innerHTML = "R$ " + produtos.products[3].price;

  document.getElementById("photo4").src = produtos.products[4].photo;
  document.getElementById("tituloProduto4").innerHTML = (produtos.products[4].productName);
  document.getElementById("descProduto4").innerHTML = (produtos.products[4].descriptionShort);
  document.getElementById("valorProd4").innerHTML = "R$ " + produtos.products[4].price;

  document.getElementById("photo5").src = produtos.products[5].photo;
  document.getElementById("tituloProduto5").innerHTML = (produtos.products[5].productName);
  document.getElementById("descProduto5").innerHTML = (produtos.products[5].descriptionShort);
  document.getElementById("valorProd5").innerHTML = "R$ " + produtos.products[5].price;

  document.getElementById("photo6").src = produtos.products[6].photo;
  document.getElementById("tituloProduto6").innerHTML = (produtos.products[6].productName);
  document.getElementById("descProduto6").innerHTML = (produtos.products[6].descriptionShort);
  document.getElementById("valorProd6").innerHTML = "R$ " + produtos.products[6].price;

  document.getElementById("photo7").src = produtos.products[7].photo;
  document.getElementById("tituloProduto7").innerHTML = (produtos.products[7].productName);
  document.getElementById("descProduto7").innerHTML = (produtos.products[7].descriptionShort);
  document.getElementById("valorProd7").innerHTML = "R$ " + produtos.products[7].price;

}

function modal(numero){
  let data = getURL("http://projetos.flmarketing.com.br/devJr/js/produtos.json");
  let produtos = JSON.parse(data);
  document.getElementById("modal_bg").style.display="flex";
  document.getElementById("modal_bg").style.justifyContent = "center";
  if(numero == 0){
    window.scrollTo(0, 1400);
    document.getElementById("fotomodal").src = produtos.products[0].photo;
    document.getElementById("tituloProd_modal").innerHTML = (produtos.products[0].productName);
    document.getElementById("descProd_modal").innerHTML = (produtos.products[0].descriptionShort);
    document.getElementById("valorProd_modal").innerHTML = "R$ " + produtos.products[0].price;
  }
  if(numero == 1){
    window.scrollTo(0, 1300);
    document.getElementById("fotomodal").src = produtos.products[1].photo;
    document.getElementById("tituloProd_modal").innerHTML = (produtos.products[1].productName);
    document.getElementById("descProd_modal").innerHTML = (produtos.products[1].descriptionShort);
    document.getElementById("valorProd_modal").innerHTML = "R$ " + produtos.products[1].price;
  }
  if(numero == 2){
    window.scrollTo(0, 1300);
    document.getElementById("fotomodal").src = produtos.products[2].photo;
    document.getElementById("tituloProd_modal").innerHTML = (produtos.products[2].productName);
    document.getElementById("descProd_modal").innerHTML = (produtos.products[2].descriptionShort);
    document.getElementById("valorProd_modal").innerHTML = "R$ " + produtos.products[2].price;
  }
  if(numero == 3){
    window.scrollTo(0, 1300);
    document.getElementById("fotomodal").src = produtos.products[3].photo;
    document.getElementById("tituloProd_modal").innerHTML = (produtos.products[3].productName);
    document.getElementById("descProd_modal").innerHTML = (produtos.products[3].descriptionShort);
    document.getElementById("valorProd_modal").innerHTML = "R$ " + produtos.products[3].price;
  }
  if(numero == 4){
    window.scrollTo(0, 1300);
    document.getElementById("fotomodal").src = produtos.products[4].photo;
    document.getElementById("tituloProd_modal").innerHTML = (produtos.products[4].productName);
    document.getElementById("descProd_modal").innerHTML = (produtos.products[4].descriptionShort);
    document.getElementById("valorProd_modal").innerHTML = "R$ " + produtos.products[4].price;
  }
  if(numero == 5){
    window.scrollTo(0, 1300);
    document.getElementById("fotomodal").src = produtos.products[5].photo;
    document.getElementById("tituloProd_modal").innerHTML = (produtos.products[5].productName);
    document.getElementById("descProd_modal").innerHTML = (produtos.products[5].descriptionShort);
    document.getElementById("valorProd_modal").innerHTML = "R$ " + produtos.products[5].price;
  }
  if(numero == 6){
    window.scrollTo(0, 1300);
    document.getElementById("fotomodal").src = produtos.products[6].photo;
    document.getElementById("tituloProd_modal").innerHTML = (produtos.products[6].productName);
    document.getElementById("descProd_modal").innerHTML = (produtos.products[6].descriptionShort);
    document.getElementById("valorProd_modal").innerHTML = "R$ " + produtos.products[6].price;
  }
  if(numero == 7){
    window.scrollTo(0, 1300);
    document.getElementById("fotomodal").src = produtos.products[7].photo;
    document.getElementById("tituloProd_modal").innerHTML = (produtos.products[7].productName);
    document.getElementById("descProd_modal").innerHTML = (produtos.products[7].descriptionShort);
    document.getElementById("valorProd_modal").innerHTML = "R$ " + produtos.products[7].price;
  }







}
function fechaModal(){
  document.getElementById("modal_bg").style.display = "none";
}
