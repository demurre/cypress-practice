// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import "cypress-iframe";
import "@4tw/cypress-drag-drop";
import "cypress-file-upload";
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

// clicking link using label
Cypress.Commands.add("clickLink", (label) => {
  cy.get("a").contains(label).click();
});

// overwrite contains

// Cypress.Commands.overwriteQuery(
//   "contains",
//   (originalFn, subject, filter, text, options = {}) => {
//     if (typeof text === "object") {
//       options = text;
//       text = filter;
//       filter = undefined;
//     }
//     options.matсhCase = false;
//     return originalFn(subject, filter, text, options);
//   }
// );

// login
Cypress.Commands.add("loginapp", (email, password) => {
  cy.visit("#email").type(email);
  cy.visit("#password").type(password);
  cy.get("button[type='submit']").click();
});
