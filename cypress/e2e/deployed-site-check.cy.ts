import { cy, expect, it, describe, beforeEach } from 'local-cypress'

describe('Deployed App e2e tests', () => {
  it('Location search should work', () => {
    cy.visit('https://weather-test-task.vercel.app/');

    const DELAY = 1000;

    cy.get('[data-test=search-location-input]').focus().clear().type('Berlin')

    cy.wait(DELAY);
    cy.get('[data-test=search-location-input]').focus().type('{enter}');

    cy.wait(DELAY);
    cy.get('[data-test=location-country-text]').should('contain', 'Germany');

    cy.wait(DELAY);
    cy.get('[data-test=search-location-input]').focus().clear().type('Paris')

    cy.wait(DELAY);
    cy.get('[data-test=search-location-button]').click();

    cy.wait(DELAY);
    cy.get('[data-test=location-country-text]').should('contain', 'France');
  })
});
