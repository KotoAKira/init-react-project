import App from '../../src/app.component';
describe('react-hook-form testing', () => {
  const nameInput = '[name=name]'
  const lastNameInput = '[name=lastName]'
  const submitInput = 'input[type=submit]'

  const nameOutput = '[aria-label=nameOutput]';
  const lastNameOutput = '[aria-label=lastNameOutput]';
  
  const errorOutput = '[aria-label=errorOutput]';

  it('can submitted', () => {
    const testNameValue = 'Koto';
    const testLastNameValue = 'Akira';

    cy.mount(<App />)

    cy.get(nameInput).type(testNameValue);
    cy.get(lastNameInput).type(testLastNameValue);

    cy.get(submitInput).click();

    cy.get(nameOutput).should('contain.text', testNameValue);
    cy.get(lastNameOutput).should('contain.text', testLastNameValue);
  });

  it('cant submitted', () => {
    const testNameValue = 'Koto';

    cy.mount(<App />)

    cy.get(nameInput).type(testNameValue);

    cy.get(submitInput).click();

    cy.get(errorOutput);    
  });


})