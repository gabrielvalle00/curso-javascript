function adicionaElemento(){

    for(let i=0;i<=5;i++){//inicio do for


    var caixaLabel = document.createElement("label");
    caixaLabel.innerText = "Digite um numero:"
    document.body.appendChild(caixaLabel);

    var caixaInput = document.createElement("input");

    document.body.appendChild(caixaInput);

    var br = document.createElement("br");
    document.body.appendChild(br);  
}//final do for
    
}