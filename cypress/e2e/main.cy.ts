import { cy, expect, it, describe, beforeEach } from 'local-cypress'

import { componentStyles } from '../../src/styles/component-styles';

const { dailyHourlySwitcher } = componentStyles;

describe('Weather App e2e tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Initial search input should contain city', () => {
    cy.get('[data-test=search-location-input]').should('contain.value', 'Dubai');
  })
  
  // it('Location search should work', () => {
  //   const DELAY = 1000;

  //   cy.get('[data-test=search-location-input]').focus().clear().type('Berlin')

  //   cy.wait(DELAY);
  //   cy.get('[data-test=search-location-input]').focus().type('{enter}');

  //   cy.wait(DELAY);
  //   cy.get('[data-test=location-country-text]').should('contain', 'Germany');

  //   cy.wait(DELAY);
  //   cy.get('[data-test=search-location-input]').focus().clear().type('Paris')

  //   cy.wait(DELAY);
  //   cy.get('[data-test=search-location-button]').click();

  //   cy.wait(DELAY);
  //   cy.get('[data-test=location-country-text]').should('contain', 'France');
  // })

  it('Weather api select should work', () => {
    cy.get('[data-test=weather-api-select]')
      .select('meteosource')
      .contains('meteosource');

    cy.get('[data-test=weather-api-select]')
      .select('openweather')
      .contains('openweather');
  });

  it('Daily/hourly switcher should work', () => {
    cy.get('[data-test=daily-span]').click()
        .then(($el) => $el.css('color'))
        .should((colorValue) => {
            expect(colorValue).to.eq(dailyHourlySwitcher.title.color.inActive);
        });
      
    cy.get('[data-test=hourly-span]').click()
        .then(($el) => $el.css('color'))
        .should((colorValue) => {
            expect(colorValue).to.eq(dailyHourlySwitcher.title.color.inActive);
        });
  });
});
