const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lampada = document.getElementById('lampada');

function lampOn () {

    lampada.src = 'imagens/ligada.jpg';
}

function lampOff () {
    lampada.src = 'imagens/desligada.jpg';
}

function lampBroken () {
    lampada.src = 'imagens/quebrada.jpg';
}

turnOn.addEventListener ('click' , lampOn);
turnOff.addEventListener('click', lampOff);
lampada.addEventListener('mouseover', lampOn);
lampada.addEventListener('mouseleave', lampOff);
lampada.addEventListener('dblclick', lampBroken);