class ProductPage {
    // --- já existentes ---
    visit(slug) {
        cy.visit(`/product/${slug}/`)
    }

    validateProductTitle() {
        cy.get('.product_title')
            .should('be.visible')
            .and(($el) => {
                expect($el.text().trim()).not.to.be.empty
            })
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

    validateProductPrice() {
        cy.get('.summary .price')
            .should('be.visible')
            .and('contain', 'R$')
    }

    validateVariationOptions(sizes) {
        sizes.forEach((size) => {
            cy.get(`.button-variable-item-${size}`).should('exist')
        })
    }

    validateColorOptions(colors) {
        colors.forEach((color) => {
            cy.get(`.button-variable-item-${color}`).should('exist')
        })
    }

    validateProductDescription(expectedText) {
        cy.get('.woocommerce-Tabs-panel--description')
            .should('be.visible')
            .and('contain', expectedText)
    }

    selectSize(size) {
        cy.get(`.button-variable-item-${size}`).click({ force: true })
    }

    selectColor(color) {
        cy.get(`.button-variable-item-${color}`).click({ force: true })
    }

    clickAddToCart() {
        cy.get('button.single_add_to_cart_button').click()
    }

    forceClickAddToCart() {
        cy.get('button.single_add_to_cart_button').click({ force: true })
    }
    validateAddToCartSuccess() {
        cy.get('.woocommerce-message', { timeout: 8000 })
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                // valida de forma robusta (case-insensitive)
                expect(text.toLowerCase()).to.include('foi adicionado no seu carrinho.')
            })
    }




}

export default new ProductPage()
