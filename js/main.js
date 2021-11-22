function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por Clicar.";
    console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://digitalinnovation.one/");
    window.location.href = "https://digitalinnovation.one/";
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function trocar2(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar2(elemento){
   elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina carregada");
}


function funcaoChange(elemento){
    console.log(elemento.value);
}

//var nome = "Bruno Leonardo";
//var idade = 32;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome +" tem " + idade + " anos.");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase);
//console.log(frase.replace("Japão" , "Brasil"));
//console.log(frase.toUpperCase());

//var lista = ["Maça", "Pêra", "Laranja"];
//console.log(lista[0]);
//lista.push("Uva")
//console.log(lista)
//console.log(lista.length);
//console.log(lista.toString());
//console.log(lista.join(" - "))

//var fruta = {nome:"maça", cor:"vermelha"};
//console.log(fruta);
//console.log(fruta.nome);
//console.log(fruta.cor)

//var frutas = [{nome:"Maça", cor:"Vermelha"}, {nome:"Uva", cor:"Roxa"}];
//console.log(frutas);
//console.log(frutas[1].nome);
//.log(frutas[0].cor);

//var idade = prompt("Qual sua idade");
//if (idade >= 18){
//    alert("Maior de Idadde");
//}else{
//    alert("Menor de Idade");
//};

//var count = 0;
//while (count < 5){
//    console.log(count);
//    count ++; 
//};

//var count;
//for(count=0; count < 5; count++){
//    alert(count);
//};

//var d = new Date();
//alert(d.getMonth()+1);
//alert(d.getHours());


//function soma(n1, n2){
//   return n1 + n2;
//}

//function setReplace(frase, nome, novo_nome){
//    return frase.replace(nome, novo_nome)
//}
//alert(soma(5, 10));
//alert(setReplace("Vai Japão", "Japão", "Brasil"));

//function validadeIdade(idade){
//    var validar;
//    if (idade >=18){
//        validar = true
//    }else{
//    validar = false
//    }
//    return validar;
//}

//var idade = prompt("Qual sua idade:")
//console.log(validadeIdade(idade))