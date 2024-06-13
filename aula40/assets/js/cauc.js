function Calculadora() {
  this.display = document.querySelector('.display');

this.inicia = () => {
    this.capituraCliques();
    this.capituraEnter();
  };


  this.capituraEnter = () =>{
    this.display.addEventListener('keyup', e => {
      if (e.keyCode === 13) {
        this.realizaConta();
      }
    });
  };


  this.capituraCliques = () => {
    document.addEventListener('click', event => {
      const el = event.target;

      if (el.classList.contains('btn-num')) this.addNumDisplay(el);

      if (el.classList.contains('btn-clear')) this.clear();

      if (el.classList.contains('btn-del')) this.delet();

      if (el.classList.contains('btn-eq')) this.realizaConta();
    })
  };

  this.addNumDisplay = el => { 
    this.display.value += el.innerText;
    this.display.focus();
   }

  this.clear = () => { this.display.value = ''; }

  this.delet = () => {this.display.value = this.display.value.slice(0, -1); }

 this.realizaConta = () => { 
  try {
   let conta = eval(this.display.value);

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

  }

  
}





const calculadora = new Calculadora();
calculadora.inicia();