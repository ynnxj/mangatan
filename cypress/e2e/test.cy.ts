/// <reference types="cypress" />

describe('going through the mångatan website', () => {
  it('should mount the application', () => {
    cy.get('body').should('be.visible');
  });

  // Start page
  it('displays start landing page and enter site', () => {
    cy.visit('http://localhost:5173/');
    cy.get('.background-video').should('exist');
    cy.get('.logo').should('be.visible');
    cy.get('.enter-btn').click();
    cy.url().should('include', '/about');
  });

  /* -------------------------------------------------------------------------- */
  /*                                 About page                                 */
  /* -------------------------------------------------------------------------- */
  it('displays about page after enter', () => {
    cy.visit('http://localhost:5173/about');
    cy.get('.about-greeting-title').should('exist');
    cy.get('.about-text').should('exist');
    cy.get('.image').should('exist');
  });

  // About page: Members
  it('displays member modal buttons', () => {
    cy.visit('http://localhost:5173/about');
    cy.get('.about-members').should('exist');
    cy.get('.member-btn').should('exist');
  });

  // About page: Highlight
  it('displays highlight preview', () => {
    cy.visit('http://localhost:5173/about');
    cy.get('.highlight').should('exist');
    cy.get('a[href*="youtube.com/watch"]').should('exist');
    cy.get('.wmp').should('exist');
  });

  // About page: Gigs
  it('displays gigs list', () => {
    cy.visit('http://localhost:5173/about');
    cy.contains('Gigs').should('exist');
    cy.get('.gigs-list').should('exist');
  });

  /* -------------------------------------------------------------------------- */
  /*                                Contact page                                */
  /* -------------------------------------------------------------------------- */
  it('displays contact page', () => {
    cy.visit('http://localhost:5173/contact');
    cy.get('.message-container').should('exist');
    cy.get('.contact-container').should('exist');
    cy.get('form').should('exist');
  });

  /* -------------------------------------------------------------------------- */
  /*                                 Merch Page                                 */
  /* -------------------------------------------------------------------------- */
  it('displays merch page', () => {
    cy.visit('http://localhost:5173/merch');
    cy.get('.merch-page').should('exist');
    cy.get('.merch-list').should('exist');
    cy.get('ul, li, .item').should('exist');
    cy.get('.shopping-bag').should('exist');
  });
});
