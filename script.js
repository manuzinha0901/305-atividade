let nome = prompt("digite seu nome");
let idade = Number (prompt("digite sua idade"));
let aposentado = prompt("Você é aposentado? sim ou não");
let estudante = prompt("Você é estudante? sim ou não");

aposentado = aposentado.toUpperCase();
estudante = estudante.toUpperCase();


if (idade >= 60 || aposentado == "SIM"){
    console.log("Parabéns Você adquiriu uma entrada GRATUITA");  
}

else if (idade >=18 && idade <= 59 && estudante === "SIM"){
console.log(`${nome},você irá pagar uma meia entrada no valor de R$17,50 por ter ${idade} anos e ser estudante!`)
}

else if (idade >=18 && idade <= 59){
    console.log(`${nome},você irá pagar R$35,00 na entrada por ter ${idade} anos!`)
}

else if(idade >=13 && idade <=17 ){
    console.log(`${nome},você irá pagar R$15,00 na entrada por ter ${idade} anos!`)
}

else if (idade >0 && idade <=12){
    console.log(`${nome},você irá pagar R$10,00 na entrada por ter ${idade} anos!`)
}   

else{
    console.log("erro")}

let numeros = Number(prompt("Digite um numero de 1 a 7 "));
console.log()

let n1 = 1; 
let n2 = 2;
let n3 = 3;
let n4 = 4;
let n5 = 5;
let n6 = 6;
let n7 = 7;

if(numeros === 1){
    console.log(`o dia ${n1} é domingo`);
}    
else if  (numeros === 2){
console.log(`o dia ${n2} é segunda-feira`);
}

else if  (numeros === 3){
    console.log(`o dia ${n3} é terça-feira`);
}

else if  (numeros === 4){
    console.log(`o dia ${n4} é quarta-feira`);
}

else if  (numeros === 5){
    console.log(`o dia ${n5} é quinta-feira`);
}
else if  (numeros === 6){
    console.log(`o dia ${n6} é sexta-feira`);
}
else if  (numeros === 7){
    console.log(`o dia ${n7} é sábado `);
}

else {
    console.log("ERRO")}






