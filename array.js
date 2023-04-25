var area = document.getElementById("area");
function outroNome(){
    var nome = prompt("Digite o seu nome");
    if(nome==""|| nome == null){
        alert("Preencher os campos");
        area.innerHTML = "Click no botão para acessar.."
    }else{
        area.innerHTML = "Bem vindo "+nome
    }
}



function mostrarNumeros(){
    var arrayG = new Array(5)
arrayG[0] = parseInt (document.getElementById("numero1").value);
arrayG[1] = parseInt (document.getElementById("numero2").value);
arrayG[2] = parseInt (document.getElementById("numero3").value);
arrayG[3] = parseInt (document.getElementById("numero4").value);
arrayG[4] = parseInt (document.getElementById("numero5").value);

var arrayH = new Array(6)
arrayH[0] = parseInt (document.getElementById("numero6").value);
arrayH[1] = parseInt (document.getElementById("numero7").value);
arrayH[2] = parseInt (document.getElementById("numero8").value);
arrayH[3] = parseInt (document.getElementById("numero9").value);
arrayH[4] = parseInt (document.getElementById("numero10").value);
arrayH[5] = parseInt (document.getElementById("numero11").value);

var arrayI = new Array(11)
arrayI[0] = arrayG[0];
arrayI[1] = arrayG[1];
arrayI[2] = arrayG[2];
arrayI[3] = arrayG[3];
arrayI[4] = arrayG[4];
arrayI[5] = arrayH[0];
arrayI[6] = arrayH[1];
arrayI[7] = arrayH[2];
arrayI[8] = arrayH[3];
arrayI[9] = arrayH[4];
arrayI[10] = arrayH[5];

    document.getElementById("resultado1").value = arrayI[0];
    document.getElementById("resultado2").value = arrayI[1];
    document.getElementById("resultado3").value = arrayI[2];
    document.getElementById("resultado4").value = arrayI[3];
    document.getElementById("resultado5").value = arrayI[4];
    document.getElementById("resultado6").value = arrayI[5];
    document.getElementById("resultado7").value = arrayI[6];
    document.getElementById("resultado8").value = arrayI[7];
    document.getElementById("resultado9").value = arrayI[8];
    document.getElementById("resultado10").value = arrayI[9];
    document.getElementById("resultado11").value = arrayI[10];
}





















// var notas = new Array(5);
// notas[0] = 8.5;
// notas[1] = 5.0;
// notas[2] = 10.0;
// notas[3] = 9.0;
// notas[4] = 4.5;

// document.write("Notas: "+ notas[0]+ "," +notas[1]+ " e " +notas[2]+"<br>");

// var diaSemana = new Array(7)
// diaSemana[0] = "Domingo";
// diaSemana[1] = "Segunda-feira";
// diaSemana[2] = "Terça-feira";
// diaSemana[3] = "Quarta-feira";
// diaSemana[4] = "Quinta-feira";
// diaSemana[5] = "Sexta-feira";
// diaSemana[6] = "Sábado";

// var alunoDestaque = ("Gabriel Pantalhão")
// var nomeRepresentante = ("Giovanna")

// document.write("Hoje é: "+ diaSemana[0]+ "," +diaSemana[1]+ " e " +diaSemana[2]);
// document.write("teremos nesta"+ diaSemana[4]+"comes e bebes, patrocinado pelo aluno"+nomeR+alunoDestaque+", a respresentnte de classe : "+nomeRepresentante);

//diaSemana = new Array("domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sabado");

// document.write("Na proxima" + diaSemana[3] + "e" + diaSemana[4] + ", termos aula da google");

// var arrayA = new Array(5);
// arrayA[0] = prompt("Digite o 1 item");
// arrayA[1] = prompt("Digite o 2 item");
// arrayA[2] = prompt("Digite o 3 item");
// arrayA[3] = prompt("Digite o 4 item");
// arrayA[4] = prompt("Digite o 5 item");
// //console.log(arrayA);
// document.write(arrayA[0]+"<br>");
// document.write(arrayA[1]+"<br>");
// document.write(arrayA[2]+"<br>");
// document.write(arrayA[3]+"<br>");
// document.write(arrayA[4]+"<br>");

// var arrayA = new Array(5);
// arrayA[0] = parseFloat( prompt("Digite o 1 numero"));
// arrayA[1] = parseFloat( prompt("Digite o 2 numero"));
// arrayA[2] = parseFloat( prompt("Digite o 3 numero"));
// arrayA[3] = parseFloat( prompt("Digite o 4 numero"));
// arrayA[4] = parseFloat( prompt("Digite o 5 numero"));
// //console.log(arrayA);
// var arrayB = new Array(5);
// arrayB[0] = arrayA[0]*arrayA[0];
// arrayB[1] = arrayA[1]*arrayA[1];
// arrayB[2] = arrayA[2]*arrayA[2];
// arrayB[3] = arrayA[3]*arrayA[3];
// arrayB[4] = arrayA[4]*arrayA[4];

// document.write(arrayB[0]+"<br>");
// document.write(arrayB[1]+"<br>");
// document.write(arrayB[2]+"<br>");
// document.write(arrayB[3]+"<br>");
// document.write(arrayB[4]+"<br>");


// var arrayD = new Array(5);
// arrayD[0] = parseFloat( prompt("Digite o 1 numero"));
// arrayD[1] = parseFloat( prompt("Digite o 2 numero"));
// arrayD[2] = parseFloat( prompt("Digite o 3 numero"));
// arrayD[3] = parseFloat( prompt("Digite o 4 numero"));
// arrayD[4] = parseFloat( prompt("Digite o 5 numero"));

// var arrayB = new Array(5);
// arrayE[0] = parseFloat( prompt("Digite o 1 numero"));
// arrayE[1] = parseFloat( prompt("Digite o 2 numero"));
// arrayE[2] = parseFloat( prompt("Digite o 3 numero"));
// arrayE[3] = parseFloat( prompt("Digite o 4 numero"));
// arrayE[4] = parseFloat( prompt("Digite o 5 numero"));

// var arrayF = new Array(10);

// arrayF [0] = arrayA[0]
// arrayF [1] = arrayA[1]
// arrayF [2] = arrayA[2]
// arrayF [3] = arrayA[3]
// arrayF [4] = arrayA[4]
// arrayF [5] = arrayB[0]
// arrayF [6] = arrayB[1]
// arrayF [7] = arrayB[2]
// arrayF [8] = arrayB[3]
// arrayF [9] = arrayB[4]

// document.write(arrayF[0]+"<br>");
// document.write(arrayF[1]+"<br>");
// document.write(arrayF[2]+"<br>");
// document.write(arrayF[3]+"<br>");
// document.write(arrayF[4]+"<br>");
// document.write(arrayF[5]+"<br>");
// document.write(arrayF[6]+"<br>");
// document.write(arrayF[7]+"<br>");
// document.write(arrayF[8]+"<br>");
// document.write(arrayF[9]+"<br>");

