const displayValorAnterior = document.querySelector('.valor__anterior');
const displayValorActual = document.querySelector('.valor__actual');
const numeros = document.querySelectorAll('.numero');
const operadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);


numeros.forEach(boton =>{
    boton.addEventListener('click',()=>{
        display.agregarNumero(boton.innerHTML);
    });
});

operadores.forEach(boton =>{
    boton.addEventListener('click', () => display.calculo(boton.value))
})
