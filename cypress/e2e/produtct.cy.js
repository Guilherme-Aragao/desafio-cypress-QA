import ProductPage from '../support/pages/productpage'

describe('Product Page - EBAC Store', () => {
    beforeEach(() => {
        cy.session('userSession', () => {
            cy.login('guilhermearagao2109@gmail.com', 'Ebac1234')
        })
    })

    it('Should display product details correctly', () => {
        ProductPage.visit('ariel-roll-sleeve-sweatshirt')
        ProductPage.validateProductTitle()
        ProductPage.validateProductPrice()
        ProductPage.validateVariationOptions(['XS', 'S', 'M', 'L', 'XL'])
        ProductPage.validateColorOptions(['Green', 'Purple', 'Red'])
        ProductPage.validateProductDescription('Soft, sleek and subtle')
    })

    it('Should display a browser alert when trying to add to cart without selecting options', () => {
        ProductPage.visit('ariel-roll-sleeve-sweatshirt')
        cy.on('window:alert', (text) => {
            expect(text).to.contain('Selecione uma das opções do produto antes de adicioná-lo ao carrinho')
        })
        ProductPage.forceClickAddToCart()
    })

    it('Should validate stock message after selecting size and color', () => {
        ProductPage.visit('ariel-roll-sleeve-sweatshirt')
        cy.wait(500)
        ProductPage.selectSize('XL')
        ProductPage.selectColor('Green')
        ProductPage.clickAddToCart()
        ProductPage.validateAddToCartSuccess()
    })

})
