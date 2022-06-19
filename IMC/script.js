

function Calcular(){
    var alturatxt = document.getElementById('altura')
    var pesotxt = document.getElementById('peso')
    var altura = Number(alturatxt.value)
    var peso = Number(pesotxt.value)
    var rel = window.document.getElementById('rel')
    var IMC = peso/(altura*altura)
    var estado = ''

    if(IMC >= 19 && IMC <= 25){
        estado = 'com o peso ideal, muito bem!'
    }else if(IMC > 25){
        estado = 'acima do peso, faça uma dieta!'
    }else{
        estado = 'abaixo do peso, começe a comer mais!'
    }
    rel.innerHTML = 'Você está: '+estado
}