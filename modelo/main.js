const form = document.querySelector('#form')
form.addEventListener('submit', function (e){
    e.preventDefault()
    console.log('Evento previnido')
    setresultado()
})

let peso = document.querySelector('#peso')
let alt = document.querySelector('#altura')
const resultado = document.querySelector('#resultado')

function calculadora(p,a){
    let imc = p/(a*a)
    return imc
}

console.log(Number(peso.value), Number(alt.value))

function condition(){
    //setresultado(mensagem)
    const res = calculadora(Number(peso.value), Number(alt.value))

    if (res > 0 && res < 18.5 ){
        return `Seu IMC é de ${res.toFixed(2)}, você está abaixo do peso`
    } else if (res > 18.5 && res < 24.9){
        return `Seu IMC é de ${res.toFixed(2)}, você está com o peso normal`
    } else if (res > 24.9 && res < 29.9){
        return `Seu IMC é de ${res.toFixed(2)}, você está em (SOBREPESO)`
    } else if (res > 29.9 && res < 34.9){
        return `Seu IMC é de ${res.toFixed(2)}, você está em (OBESIDADE GRAU 1)`
    } else if (res > 34.9 && res < 39.9){
        return `Seu IMC é de ${res.toFixed(2)}, você está em (OBESIDADE GRAU 2)`
    } else if (res >= 40){
        return `Seu IMC é de ${res.toFixed(2)}, você está em (OBESIDADE GRAU 3)`
    }
    else {
        alert('Preencha os campos corretamente')
        return `Dado inválido`
    }
}

function setresultado (msg){
    resultado.innerHTML = ''
    const p = document.createElement('p')
    msg = condition()
    p.classList.add('paragrafo-resultado')
    p.innerHTML = msg
    resultado.appendChild(p)
    if (msg == "Dado inválido"){
        p.classList.add('bad')
    }
}