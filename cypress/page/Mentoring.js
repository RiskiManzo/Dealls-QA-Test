export default class searchMentor {

    searchColumn = () => {cy.get('#searchMentor').should('be.enabled').click()};
};