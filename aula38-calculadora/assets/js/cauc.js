function criaCalculadora() {
  return {

    display: document.querySelector('.display'),
    btnClear: document.querySelector('.btn-clear'),
    btnDel: document.querySelector('.btn-del'),
    btnEq: document.querySelector('.btn-eq'),

    inicia() {
      this.cliqueBotoes();
      this.presionaEnter();
    },

    presionaEnter() {
      this.display.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
          this.realisaConta();
        }
      })
    },

    clearDisplay() {
      this.display.value = '';
    },
    deletOne() {
      this.display.value = this.display.value.slice(0, -1);
    },

    realisaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if (!conta) {
          alert('conta invalida')
          return;
        }
        this.display.value = conta;
      }
      catch (e) {
        alert('conta invalida')
        return;
      }

    },


    cliqueBotoes() {
      document.addEventListener('click', (e) => {
        const el = e.target;

        if (el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }
        if (el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }
        if (el.classList.contains('btn-del')) {
          this.deletOne();
        }
        if (el.classList.contains('btn-eq')) {
          this.realisaConta();
        }

      })
    },
    btnParaDisplay(valor) {
      this.display.value += valor;

    }
  };
}
const calculadora = criaCalculadora();
calculadora.inicia();