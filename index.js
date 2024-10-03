

const fonteDePoder = 1.000;
const evolucaoDoXP = 1.000 + fonteDePoder;
const Kratus = fonteDePoder + Math.pow (evolucaoDoXP, 2);
console.log(Kratus);

if(Kratus <= 1.000) {
    console.log('Cavaleiro de Ferro');
}else if (Kratus  <= 1.001  && Kratus >= 2.000){
    console.log('Cavaleiro de Bronze');
}else if (Kratus  <= 2.001  && Kratus >= 5.000){
    console.log('Cavaleiro de Prata');
}else if (Kratus  <= 5.001  && Kratus >= 7.000){
    console.log('Cavaleiro de Ouro');
}else if (Kratus  <= 7.001  && Kratus >= 8.000){
    console.log('Cavaleiro de Platina');
}else if (Kratus  <= 8.001  && Kratus >= 9.000){
    console.log('Cavaleiro de Ascendente');
}else if (Kratus  <= 9.001  && Kratus >= 10.000){
    console.log('Cavaleiro de Imortal');
}else{(Kratus >= 10.001)
    console.log('Cavaleiro de Radiante');
}