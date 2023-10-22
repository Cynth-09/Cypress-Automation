describe('Test Billable Hours Web App', () => {
  it('URL Link Verification', () => {
    cy.visit('https://csvdemomockappp.bundlewallet.com/')
    cy.url().should('include', 'csvdemomockappp.bundlewallet.com');
    cy.request('https://csvdemomockappp.bundlewallet.com/').then((response) => {
      expect(response.status).to.equal(200);
    });
    cy.get('html').should('be.visible');
  })
  it('Validate UI Dislays and Functionalities', () => {
    cy.visit('https://csvdemomockappp.bundlewallet.com/')
    cy.get('h1').should('contain', 'CSV Invoice Parser');
    cy.get('.lead').should('contain', 'Simple invoice generator, allows you to upload a CSV file and generate an invoice for clients using billable hour.').should('be.visible');
    cy.get('p.ng-scope').should('contain.text', 'Please select the CSV file with report to upload, in order to generate invoices. Click Here to download sample CSV file.');
    cy.get('label').should('contain.text', 'Specify File');
    cy.get('#statement-file').should('exist');
    cy.get('.btn').should("be.visible")
    .should('have.attr.name', 'ng-disabled', 'true')
        cy.get('.btn')
    .invoke('text')
    .then((text) => {
    expect(text.trim()).to.equal('Parse Invoice File');
  });
  cy.get('#statement-file')
  .should('have.attr', 'type', 'file')
  .should('have.attr', 'accept', '.csv');
});  
it('File Upload and Parsing', () => {
  cy.visit('https://csvdemomockappp.bundlewallet.com/')
  cy.get('#statement-file').selectFile('cypress/fixtures/Test.csv - Sheet1.csv');
  cy.get('.btn').should('not.be.disabled').click();
  cy.get('.alert-success').should('be.visible')
  .should('contain', 'CSV File has been parsed successfully, see summary below');
   cy.get('[ng-view=""]').find('table').should('exist')
  .should('contain', 'S.N', 'Company', 'Invoice Value')
  .each(($cell) => {
  cy.wrap($cell).should('not.be.empty');
});
});

it('Performance and Response Time', () => {
    const startTime = new Date().getTime(); // Get the start time
    cy.visit('https://csvdemomockappp.bundlewallet.com/')
    cy.get('#statement-file').selectFile('cypress/fixtures/Test.csv - Sheet1.csv');
    cy.get('.btn').should('not.be.disabled').click();
    cy.get('.alert-success').should('be.visible').then(() => {
      const endTime = new Date().getTime(); // Get the end time
      const elapsedTime = endTime - startTime; // Calculate elapsed time in milliseconds
  
     
      expect(elapsedTime).to.be.lessThan(1500); // Adjust the threshold as needed
    });
  });
  it('Compatibility', () => {
    cy.visit('https://csvdemomockappp.bundlewallet.com/', { browser: 'chrome' });
    cy.url().should('include', 'csvdemomockappp.bundlewallet.com/');
    
    cy.visit('https://csvdemomockappp.bundlewallet.com/', { browser: 'firefox' });
    cy.url().should('include', 'csvdemomockappp.bundlewallet.com/');
  });
});