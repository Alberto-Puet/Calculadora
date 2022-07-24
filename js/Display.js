class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
        this.tipoDeOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            dividir:'%',
            multiplicar:'*',
            restar:'-'
        };
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0, -1);
        this.mostrarNumeros();
    }

    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoDeOperacion = undefined;
        this.mostrarNumeros();
    }

    calculo(tipo){
        this.tipoDeOperacion !== 'igual' && this.calcular();
        this.tipoDeOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual='';
        this.mostrarNumeros();
    }

    agregarNumero(numero) {
        if (numero == '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.mostrarNumeros();
    }

    mostrarNumeros() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoDeOperacion] || ''}`;
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if (isNaN(valorActual) || isNaN(valorAnterior)) return

        this.valorActual = this.calculadora[this.tipoDeOperacion](valorAnterior,valorActual);                 
    };
};