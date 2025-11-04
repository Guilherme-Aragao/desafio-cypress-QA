import CartPage from '../support/pages/cartpage'
import ProductPage from '../support/pages/productpage'

describe('Shopping Cart - EBAC Store', () => {
    beforeEach(() => {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.session('userSession', () => {
            cy.login('guilhermearagao2109@gmail.com', 'Ebac1234')
        })
    })

    it('Should add a product to the cart successfully', () => {
        const productName = 'ariel-roll-sleeve-sweatshirt'
        cy.clearCart()
        CartPage.visitProduct(productName)
        cy.wait(500)
        ProductPage.selectSize('L')
        ProductPage.selectColor('Green')
        CartPage.addToCart()
        CartPage.goToCart()
        CartPage.validateCartPage()
        CartPage.validateQuantity('1')
        CartPage.validateSubtotalEqualsTotal()
    })

    it('Should add a multiples product to the cart successfully', () => {
        const productName1 = 'product/ingrid-running-jacket'
        const productName2 = 'aero-daily-fitness-tee'
        CartPage.visitProduct(productName1)
        cy.wait(500)
        ProductPage.selectSize('L')
        ProductPage.selectColor('Red')
        CartPage.addToCart()
        CartPage.visitProduct(productName2)
        cy.wait(500)
        ProductPage.selectSize('L')
        ProductPage.selectColor('Black')
        CartPage.addToCart()
        CartPage.goToCart()
        CartPage.validateCartPage()
        CartPage.validateQuantity('2')
        CartPage.validateSubtotalEqualsTotal()
    })

    it('Should display success message when removing a product', () => {
        CartPage.visitProduct('ariel-roll-sleeve-sweatshirt')
        cy.wait(500)
        ProductPage.selectSize('L')
        ProductPage.selectColor('Green')
        CartPage.addToCart()
        CartPage.goToCart()
        CartPage.removeProduct()
        CartPage.validateRemoveMessage('Ariel Roll Sleeve Sweatshirt')
    })

    it('Should empty the entire cart and validate the empty cart message', () => {
        //Adicionar um produto via API
        const productName1 = 'aero-daily-fitness-tee'
        const productName2 = 'ariel-roll-sleeve-sweatshirt'
        CartPage.visitProduct(productName1)
        cy.wait(500)
        ProductPage.selectSize('L')
        ProductPage.selectColor('Black')
        CartPage.addToCart()
        CartPage.visitProduct(productName2)
        cy.wait(500)
        ProductPage.selectSize('L')
        ProductPage.selectColor('Green')
        CartPage.addToCart()
        CartPage.goToCart()
        CartPage.removeAllProducts()
        CartPage.validateEmptyCart()
    })


})
