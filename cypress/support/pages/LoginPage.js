class LoginPage {

    visitarPagina() {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    }

    preencherUsuario(email) {
        if (email) {
            cy.get('#username').type(email)
        }
    }

    preencherSenha(senha) {
        if (senha) {
            cy.get('#password').type(senha)
        }
    }

    submeterLogin() {
        cy.get('input[name="login"]').click()
    }

    validarLoginComSucesso() {
        cy.get('.woocommerce-MyAccount-content')
            .should('contain', 'Olá')
    }

    validarMensagemErro(mensagem) {
        cy.get('.woocommerce-error').should('contain', mensagem)
    }
}

export default new LoginPage()
