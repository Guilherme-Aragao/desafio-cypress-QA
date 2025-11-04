class CadastroPage {

    visitarPagina() {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    }

    preencherEmail(email) {
        cy.get('#reg_email').type(email)
    }

    preencherSenha(senha) {
        cy.get('#reg_password').type(senha)
    }

    submeterCadastro() {
        cy.get('form.register .button').click()

    }

    validarMensagemSucesso() {
        cy.get('.woocommerce-MyAccount-content')
            .should('contain', 'Olá')
    }

    validarMensagemErro(mensagem) {
        cy.get('.woocommerce-error').should('contain', mensagem)
    }
}

export default new CadastroPage()
