import LoginPage from './pages/LoginPage'

Cypress.Commands.add('login', (email, senha) => {
    LoginPage.visitarPagina()
    LoginPage.preencherUsuario(email)
    LoginPage.preencherSenha(senha)
    LoginPage.submeterLogin()
})

Cypress.Commands.add('login', (username, password) => {
    cy.request({
        method: 'POST',
        url: 'http://lojaebac.ebaconline.art.br/minha-conta/', // formulário de login padrão WooCommerce
        form: true,
        body: {
            username: username,
            password: password,
            'woocommerce-login-nonce': 'fake_nonce', // WooCommerce ignora se a sessão for nova
            login: 'Entrar'
        },
    }).then((response) => {
        expect(response.status).to.satisfy((s) => [200, 302].includes(s))
        cy.log('✅ Login feito via formulário')
    })
})

Cypress.Commands.add('clearCart', () => {
    // Acessa a página do carrinho
    cy.visit('/carrinho')

    // Verifica se existem produtos no carrinho
    cy.get('body').then(($body) => {
        if ($body.find('.product-remove a').length > 0) {
            const removeAll = () => {
                cy.get('body').then(($b) => {
                    if ($b.find('.product-remove a').length > 0) {
                        cy.get('.product-remove a').first().click({ force: true })
                        cy.wait(1000) // espera WooCommerce atualizar
                        removeAll()
                    }
                })
            }
            removeAll()
        }
    })
})
