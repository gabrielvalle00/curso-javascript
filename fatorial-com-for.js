function fatorial() {
    let valor = parseInt(document.querySelector(".valor").value);
    let contador = 1;
    for (let i = valor; i > 1; i--) {
      contador *= i;
    }
    document.getElementById("container").innerHTML =
      "<br>" + contador + "<br />";
    console.log(contador);
  }