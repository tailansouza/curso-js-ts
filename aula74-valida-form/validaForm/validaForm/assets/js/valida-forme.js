class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.evento()
    }
    evento() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        const caposValidos = this.camposSaoValidos()
        const senhasValidas = this.senhasSaoValidas()

       if (caposValidos && senhasValidas){
        alert('formulario emviado')
        this.formulario.submit();
       }

    }

    senhasSaoValidas(){
        let valid = true

        const senha = this.formulario.querySelector('.senha')
        const repetirSenha = this.formulario.querySelector('.repetir-senha')
        
        if ( senha.value !== repetirSenha.value){
            valid = false
            this.criaErro(senha, 'as senhas devem ser iguais')
            this.criaErro(repetirSenha, 'as senhas devem ser iguais')
        }
        if(senha.value.length < 6 || senha.value.length  > 12 ){
            valid = false
            this.criaErro( senha , 'as senhas deven estar entre 6 e 12 caracteres')
        }

        return valid
    }


    camposSaoValidos() {
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }


        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;
            if (!campo.value) {
                this.criaErro(campo, `Campo ${label} nao pode estar vazio`)
                valid = false
            }

            if (campo.classList.contains('cpf')) {
                if (!this.validaCPF(campo)) valid = false
            }
            if (campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) valid = false
            }
        }
       return valid;
    }
    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true
        if (usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'usuario de ve conter entre 3 e 12 caracteres')
            valid = false
        }
        if (!usuario.match(/^[a-z A-Z 0-9]+$/g)) {
            this.criaErro(campo, 'Usuario deve conter apenas letras e numerros')
        }

        return true
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value)
        if (!cpf.valida()) {
            this.criaErro(campo, 'CPF invalido')
            return false
        } return true
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);

    }
}

const valida = new ValidaFormulario();