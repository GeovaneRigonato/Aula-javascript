function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>"

    // console.log(document.getElementById("agradecimento"));
    // alert("Obrigado por clicar!");

}

function redirecionar() {
    window.open("https://www.instagram.com/"); //abrir em outra aba
    // window.location.href = "https://www.instagram.com/";//abrir na mesma aba
}

function trocar(elemento) {
    // alert("trocar texto");
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!"
    elemento.innerHTML = "Obrigado por passar o mouse"
}

function voltar(elemento) {
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load() {
    alert("Página carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}
// function soma(n1, n2) {
//     return n1 + n2;
// }

// var validar = 0;

// function validaIdade(idade) {

//     if (idade >= 18) {
//         validar = true;
//     } else {
//         validar = false
//     }
//     return validar;
// }

// var idade = prompt("Qual a sua idade?");
// validaIdade(idade)
// console.log(validar);

// alert(soma(5, 10));

// var d = new Date();
// alert(d.getDate());


// var count;
// for (count = 0; count <= 5; count++) {
//     alert(count);
// }


// var count = 0;
// while (count <= 5) {
//     console.log(count);
//     alert(count);
//     count++;
// }


// var idade = prompt("Qual a sua idade?")
// var idade = 18;
// if (idade > 18) {
//     alert("maior de idade");
// } else {
//     alert("menor de idade");
// }


// var frutas = [{ nome: "maça", cor: "vermelha" }, { nome: "uva", cor: "roxa" }]
// console.log(frutas);
// alert(frutas[1].nome);

// var lista = ["maça", "pera", "laranja"];
// lista.push("uva");
// lista.pop("pera");
// console.log(lista.toString());
// console.log(lista);
// console.log(lista.join(" - "));

// var nome = "Geovane Rigonato";
// var idade = 18;
// var frase = "Japão é o melhor time do mundo";
// alert(nome + " tem " + idade + " anos ");
// alert(idade + idade2);
// console.log(nome);
// console.log(idade);
// console.log(frase.toUpperCase());
// alert(frase.replace("Japão", "Brasil"));