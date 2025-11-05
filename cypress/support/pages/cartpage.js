class CartPage {

    visitProduct(slug) {
        cy.visit(`/product/${slug}/`)
    }

    selectSize(size) {
        cy.wait(500)
        cy.get(`.button-variable-item-${size}`)
            .click({ force: true })
    }

    selectColor(color) {
        cy.wait(500)
        cy.get(`.button-variable-item-${color}`)
            .click({ force: true })
    }

    addToCart() {
        cy.get('button.single_add_to_cart_button').click()
    }

    goToCart() {
        cy.get('.woocommerce-message a').contains('Ver carrinho').click()
    }

    validateProductInCart(productName) {
        cy.get('.cart_item').should('contain', productName)
    }

    validateCartPage() {
        cy.url().should('include', '/carrinho')
        cy.get('.cart_item').should('be.visible')
    }

    validateQuantity(expectedCount) {
        cy.get('.cart_item')
            .should('be.visible')
            .and('have.length', Number(expectedCount))
    }

    validateSubtotalEqualsTotal() {
        cy.get('.cart-subtotal .woocommerce-Price-amount')
            .invoke('text')
            .then((subtotal) => {
                cy.get('.order-total .woocommerce-Price-amount')
                    .invoke('text')
                    .should('eq', subtotal)
            })
    }

    updateQuantity(newQuantity) {
        cy.get('.quantity input')
            .clear()
            .type(newQuantity)
        cy.get('button[name="update_cart"]').click()
    }

    validateDuplicateProductMessage() {
        cy.get('ul.woocommerce-error')
            .should('be.visible')
            .and('contain', 'você já tem em seu carrinho')
    }

    removeProduct() {
        cy.get('.product-remove a').first().click({ force: true })
    }

    validateRemoveMessage(productName) {
        cy.get('.woocommerce-message')
            .should('be.visible')
            .and('contain', productName)
            .and('contain', 'removido')
            .and('contain', 'Desfazer')
    }


    // ✅ NOVO: valida carrinho vazio
    validateEmptyCart() {
        cy.get('.cart-empty')
            .should('be.visible')
            .and('contain', 'Seu carrinho está vazio')
    }

    // 🧹 NOVO: Remove todos os produtos do carrinho
    removeAllProducts() {
        const removeNext = () => {
            cy.get('body').then(($body) => {
                if ($body.find('.product-remove a').length > 0) {
                    cy.get('.product-remove a').first().click({ force: true })
                    cy.wait(1500) // espera WooCommerce atualizar
                    removeNext() // chama de novo até o carrinho estar vazio
                }
            })
        }

        removeNext()

        // Valida se o carrinho está vazio no final
        cy.get('.cart-empty', { timeout: 10000 })
            .should('be.visible')
            .and('contain', 'Seu carrinho está vazio')
    }

}

export default new CartPage()
