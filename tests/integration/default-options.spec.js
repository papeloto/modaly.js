describe('modal default options', () => {
    before(() => {
        cy.visit('/');
        cy.wait(100);
    });

    const modal = '#modal';
    const openTrigger = `[data-modaly-open='${modal}']`;

    it('closes by pressing the ESC key', () => {
        cy.get(openTrigger).click();
        cy.get('body').trigger('keyup', { key: 'Escape' });
        cy.get(modal).should('be.not.visible');
    });

    it('closes by clicking the overlay', () => {
        cy.get(openTrigger).click();
        cy.get(modal).click();
        cy.get(modal).should('be.not.visible');
    });

    it('background color is black', () => {
        cy.get(modal)
            .before('background-color')
            .should('eq', 'rgb(0, 0, 0)');
    });

    it('opacity is 0.75', () => {
        cy.get(modal)
            .before('opacity')
            .should('eq', '0.75');
    });

    it('animation duration is 250ms', () => {
        cy.get(modal).should(($el) => {
            expect($el).to.have.css('transition-duration', '0.25s');
        });
    });

    it('animation mode is ease-in', () => {
        cy.get(modal).should(($el) => {
            expect($el).to.have.css('transition-timing-function', 'ease-in');
        });
    });
});
