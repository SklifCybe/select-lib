const options = ['html', 'css', 'js', 'ts', 'deno'];
const select = '[data-testid="select-wrapper"]';

describe('Select', () => {
  it('should open and close select component', () => {
    cy.visit('/');

    for (let i = 0; i < options.length; i++) {
      cy.get(select).click();
      cy.contains(options[i]).click();
    }

    cy.get(select).click();
    cy.contains(options[options.length - 1]).click();
  });
});
