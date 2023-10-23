function Calcular(){
   
   
    let idadeCanina = prompt("Qual a idade do cachorrinho?");
    if (isNaN(idadeCanina)) {
        alert("Por favor, insira uma idade válida.");
        return;
    }
    let calc= idadeCanina * 7;
    alert("a idade do dog é igual á " + calc + " anos humanos");
    let show = document.querySelector(".mostra-resultado")
    show.textContent = "Resultado: a idade humana do cachorrinho é " + calc;
}