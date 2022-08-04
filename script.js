

/* if(bool1){
    alert("entrei no if, sou true")
} else {
    alert("Entrei no else")
}
 */
/* if(bool1 === bool2){
    alert("1 e 2 são igauis")
} else if(bool2 === bool3) {
    alert("2 e 3 são igauis")
} else if(bool1 === bool3){
    alert("1 e 3 são igauis")
} else {
    alert("Nenhuma das consiçoes são igauis")
} */

/* const idade = prompt("Qual a sua idade?")

if(idade >= 16 && idade < 18 || idade > 60){
    alert("O voto é facultativo!")

}else if(idade >= 18 && idade < 60); {
    alert("O Voto é obrigatório!")
} */

const media = Number(prompt("Qual a sua media?"))

if(media >= 5 && media <= 10){
    alert("vc foi aprovado");
}else if(media >= 3 && media <= 4){
    alert("vc está de recuperação");
}else if(media < 3 && media >= 0) {
    alert("vc está reprovado");
}else{
    alert("dado inválido");
}



