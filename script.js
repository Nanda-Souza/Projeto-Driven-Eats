let selecaoPrato = false;
let selecaoBebida = false;
let selecaoSobremesa = false;
let pedidoPronto = false;
let prato;
let bebida;
let sobremesa;
let preco_prato;
let preco_bebida;
let preco_sobremesa;


//função que confirma que 3 items foram selecionados
function pedidosEscolhidos() {
    // adicionar borda verde na seleção 
    if (
      selecaoPrato === true &&
      selecaoBebida === true &&
      selecaoSobremesa === true
    ) {
      document.getElementById("botao-finalizar").style.backgroundColor = "#32B72F";
      document.getElementById("botao").innerHTML = "<p> Fechar Pedido </p>";
      pedidoPronto = true;
    }
  }

  //função que soma e manda mensagem 
  function fecharPedido() {
    if (pedidoPronto === true) {
      let mensagem;
      let total;
      total = preco_prato + preco_bebida + preco_sobremesa;      
      mensagem =
        "Olá, gostaria de fazer o pedido:\n" +
        " - Prato: " +
        prato +
        "\n" +
        " - Bebida: " +
        bebida +
        "\n" +
        " - Sobremesa: " +
        sobremesa +
        "\n" +
        "Total: R$ " +
        String(total.toFixed(2).replace(".", ","));
      mensagem = window.encodeURIComponent(mensagem);
      window.open("https://wa.me/+5551993526094?text=" + mensagem);
    }
  }

  //inicio funções para cada prato 
function escolherHamburger() {
    // adicionar borda verde na seleção do hamburger
    document.getElementById("hamburger").style.borderColor = "#32B72F"  
    document.getElementById("iconeHamburguer").style.opacity = "1"
    document.getElementById("pizza").style.borderColor = "white"    
    document.getElementById("iconePizza").style.opacity = "0"
    document.getElementById("cachorro").style.borderColor = "white"
    document.getElementById("iconeCachorro").style.opacity = "0"     
    selecaoPrato = true;
    prato = "Hamburger"
    preco_prato = 34.90;
    pedidosEscolhidos();  
}

function escolherPizza() {
    // adicionar borda verde na seleção da pizza
    document.getElementById("pizza").style.borderColor = "#32B72F"
    document.getElementById("iconePizza").style.opacity = "1"
    document.getElementById("hamburger").style.borderColor = "white" 
    document.getElementById("iconeHamburguer").style.opacity = "0"
    document.getElementById("cachorro").style.borderColor = "white"
    document.getElementById("iconeCachorro").style.opacity = "0"
    selecaoPrato = true;
    prato = "Pizza de Calabresa"
    preco_prato = 45.90;
    pedidosEscolhidos();
}

function escolherCachorro() {
    // adicionar borda verde na seleção do cachorro quente
    document.getElementById("cachorro").style.borderColor = "#32B72F"
    document.getElementById("iconeCachorro").style.opacity = "1"
    document.getElementById("pizza").style.borderColor = "white"
    document.getElementById("iconePizza").style.opacity = "0" 
    document.getElementById("hamburger").style.borderColor = "white" 
    document.getElementById("iconeHamburguer").style.opacity = "0"
    selecaoPrato = true;
    prato = "Cachorro Quente"
    preco_prato = 20.90;
    pedidosEscolhidos();
}

function escolherCoquinha() {
    // adicionar borda verde na seleção da coquinha
    document.getElementById("coquinha").style.borderColor = "#32B72F"  
    document.getElementById("iconeCoquinha").style.opacity = "1"
    document.getElementById("cha").style.borderColor = "white"  
    document.getElementById("iconeCha").style.opacity = "0"
    document.getElementById("guarana").style.borderColor = "white"  
    document.getElementById("iconeGuarana").style.opacity = "0"
    selecaoBebida = true;
    bebida = "Coquinha gelada"
    preco_bebida = 6.90;
    pedidosEscolhidos();
}

function escolherGuarana() {
    // adicionar borda verde na seleção do guarana
    document.getElementById("guarana").style.borderColor = "#32B72F"
    document.getElementById("iconeGuarana").style.opacity = "1"
    document.getElementById("coquinha").style.borderColor = "white"
    document.getElementById("iconeCoquinha").style.opacity = "0"
    document.getElementById("cha").style.borderColor = "white"
    document.getElementById("iconeCha").style.opacity = "0"
    selecaoBebida = true;
    bebida = "Guaraná gelado" 
    preco_bebida = 5.90; 
    pedidosEscolhidos(); 
}
function escolherCha() {
    // adicionar borda verde na seleção do cha
    document.getElementById("cha").style.borderColor = "#32B72F"
    document.getElementById("iconeCha").style.opacity = "1"
    document.getElementById("coquinha").style.borderColor = "white" 
    document.getElementById("iconeCoquinha").style.opacity = "0"
    document.getElementById("guarana").style.borderColor = "white" 
    document.getElementById("iconeGuarana").style.opacity = "0"
    selecaoBebida = true;
    bebida = "Chá gelado"   
    preco_bebida = 8.90;
    pedidosEscolhidos();
}

function escolherTortaLimao() {
    // adicionar borda verde na seleção da torta de limão
    document.getElementById("torta-limao").style.borderColor = "#32B72F"  
    document.getElementById("iconeTortaLimao").style.opacity = "1"
    document.getElementById("torta-velvet").style.borderColor = "white"
    document.getElementById("iconeTortaVelvet").style.opacity = "0"
    document.getElementById("torta-chocolate").style.borderColor = "white"
    document.getElementById("iconeTortaChoco").style.opacity = "0"
    selecaoSobremesa = true;
    sobremesa = "Torta de Limão"
    preco_sobremesa = 9.90;
    pedidosEscolhidos();
}

function escolherTortaVelvet() {
    // adicionar borda verde na seleção da torta red velvet
    document.getElementById("torta-velvet").style.borderColor = "#32B72F"
    document.getElementById("iconeTortaVelvet").style.opacity = "1"
    document.getElementById("torta-limao").style.borderColor = "white"
    document.getElementById("iconeTortaLimao").style.opacity = "0"
    document.getElementById("torta-chocolate").style.borderColor = "white"
    document.getElementById("iconeTortaChoco").style.opacity = "0"
    selecaoSobremesa = true;
    sobremesa = "Torta Red Velvet"
    preco_sobremesa = 12.90;
    pedidosEscolhidos();
}

function escolherTortaChocolate() {
    // adicionar borda verde na seleção da torta de chocolate
    document.getElementById("torta-chocolate").style.borderColor = "#32B72F"
    document.getElementById("iconeTortaChoco").style.opacity = "1"
    document.getElementById("torta-limao").style.borderColor = "white"
    document.getElementById("iconeTortaLimao").style.opacity = "0"
    document.getElementById("torta-velvet").style.borderColor = "white"
    document.getElementById("iconeTortaVelvet").style.opacity = "0"
    selecaoSobremesa = true;
    sobremesa = "Torta de Chocolate"
    preco_sobremesa = 11.90;
    pedidosEscolhidos();
}


  