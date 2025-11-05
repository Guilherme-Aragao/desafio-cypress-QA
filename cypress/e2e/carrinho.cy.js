import CartPage from '../support/pages/cartpage'

describe('Shopping Cart - EBAC Store', () => {
    beforeEach(() => {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.session('userSession', () => {
            cy.login('guilhermearagao2109@gmail.com', 'Ebac1234')
        })

    })

    const productName1 = 'ariel-roll-sleeve-sweatshirt'
    const productName2 = 'aero-daily-fitness-tee'
    const productName3 = 'product/ingrid-running-jacket'

    it('Should add a product to the cart successfully', () => {
        cy.clearCart()
        CartPage.visitProduct(productName1)
        cy.wait(500)
        CartPage.selectSize('L')
        CartPage.selectColor('Green')
        CartPage.addToCart()
        CartPage.goToCart()
        CartPage.validateCartPage()
        CartPage.validateQuantity('1')
        CartPage.validateSubtotalEqualsTotal()
    })

    it('Should add a multiples product to the cart successfully', () => {
        CartPage.visitProduct(productName3)
        cy.wait(500)
        CartPage.selectSize('L')
        CartPage.selectColor('Red')
        CartPage.addToCart()
        CartPage.visitProduct(productName2)
        cy.wait(500)
        CartPage.selectSize('L')
        CartPage.selectColor('Black')
        CartPage.addToCart()
        CartPage.goToCart()
        CartPage.validateCartPage()
        CartPage.validateQuantity('2')
        CartPage.validateSubtotalEqualsTotal()
    })

    it('Should display success message when removing a product', () => {
        CartPage.visitProduct(productName1)
        cy.wait(500)
        CartPage.selectSize('L')
        CartPage.selectColor('Green')
        CartPage.addToCart()
        CartPage.goToCart()
        CartPage.removeProduct()
        CartPage.validateRemoveMessage('Ariel Roll Sleeve Sweatshirt')
    })

    it('Should empty the entire cart and validate the empty cart message', () => {
        CartPage.visitProduct(productName2)
        cy.wait(500)
        CartPage.selectSize('L')
        CartPage.selectColor('Black')
        CartPage.addToCart()
        CartPage.visitProduct(productName1)
        cy.wait(500)
        CartPage.selectSize('L')
        CartPage.selectColor('Green')
        CartPage.addToCart()
        CartPage.goToCart()
        CartPage.removeAllProducts()
        CartPage.validateEmptyCart()
    })


})
