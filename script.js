console.log(
    document.querySelectorAll(".times")//seleciona todas as referencias com a classe informada
)

console.log(
    document.getElementById("futebol-europeu").querySelectorAll(".times")//seleciona somente pelo id informado no getElementByld
)

console.log(
    document.getElementById("futebol-europeu").querySelectorAll(".times")[0].innerHTML//ele ta pegando apenas o elemento que eu selecionei
)