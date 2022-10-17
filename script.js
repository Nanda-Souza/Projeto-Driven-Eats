let selecaoPrato = false;
let selecaoBebida = false;
let selecaoSobremesa = false;
let pedidoPronto = false;

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
    pedidosEscolhidos(); 
}
function escolherCha() {
    // adicionar borda verde na seleção do guarana
    document.getElementById("cha").style.borderColor = "#32B72F"
    document.getElementById("iconeCha").style.opacity = "1"
    document.getElementById("coquinha").style.borderColor = "white" 
    document.getElementById("iconeCoquinha").style.opacity = "0"
    document.getElementById("guarana").style.borderColor = "white" 
    document.getElementById("iconeGuarana").style.opacity = "0"
    selecaoBebida = true;
    bebida = "Chá gelado"   
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
    pedidosEscolhidos();
}


  