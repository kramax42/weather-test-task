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
