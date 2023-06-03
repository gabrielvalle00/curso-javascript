let pessoa = {
    nome: "Antonio César",
    idade: 30,
    altura: 1.75,
    cargo: "Professor DEV"
};
//console.log(pessoa);

//typescript
document.write(`Nome: ${pessoa.nome}<br>`);
document.write(`Idade: ${pessoa.idade}<br>`);
document.write(`Altura: ${pessoa.altura}<br>`);


//juntando arrays com objetos

let usuario = [
    {nome:"fulano",cargo:"Dev junior",status:"Ativo"},
    {nome:"Bertano",cargo:"Dev Pleno",status:"Ativo"},
    {nome:"Adrubal",cargo:"Dev Senior",status:"Ativo"},
];
//console.log(usuario);
document.write(`<br>Nome: ${usuario[1].nome}<br>`);
document.write(`Cargo: ${usuario[1].cargo}<br>`);
document.write(`Status: ${usuario[1].status}<br>`);

