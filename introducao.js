console.log(
    document.getElementById("fruta")// captura somente o id
)
console.log(
    document.getElementsByClassName("carro")// captura todas as classes
)

console.log(
    document.getElementsByClassName("carro")[0].innerHTML//coma inserção do [0] e innerHTML, consigo acessar a primeira classe do documento
)

console.log(
    document.getElementsByClassName("carro")[1].innerHTML
)

console.log(
    document.getElementsByTagName("div")//captura todas tags, independente das classes en ids
)

console.log(
    document.querySelector("div")//ele seleciona a primeira tag
    )

console.log(
    document.querySelector(".carro")//ele seleciona a primeira tag
)
    
