
import { PageObjests } from "../page";
import base_url from "../fixtures/mentoring.json";

describe('Search Mentor', () => {
  it('Search Mentor Name', () => {
    cy.visit(base_url.url);
    cy.url().should('include','/mentoring');
    //cy.get('#searchMentor').should('be.enabled').click();
    PageObjests.Search.searchColumn();
    cy.get('#searchMentor').type('Irvan');
    cy.get('.border-b > .line-clamp-1').should('have.text','Irvan');

  });
  it('Search Mentor Company', () => {
    cy.visit(base_url.url);
    cy.url().should('include','/mentoring');
    PageObjests.Search.searchColumn();
    cy.get('#searchMentor').type('Danone');
    cy.get('.mt-2 > :nth-child(2)').should('contain','Danone');
  })
  it('Choosing mentoring type', () => {
    cy.visit(base_url.url);
    cy.url().should('include','/mentoring');
    cy.get('.swiper-wrapper > :nth-child(4) > .flex').should('contain','Business').click();
  });
  it('Search for no Result', () => {
    cy.visit(base_url.url);
    cy.url().should('include','/mentoring');
    PageObjests.Search.searchColumn();
    cy.get('#searchMentor').type('NoExistMentor');
    cy.contains('Tidak ada hasil pencarian ditemukan').should('be.visible');
  })
})