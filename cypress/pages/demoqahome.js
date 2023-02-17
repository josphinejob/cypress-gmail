//define locators
const locators = {
  formsIcon: ':nth-child(2) > :nth-child(1) > .card-up',
  alertsIcon: ':nth-child(3) > :nth-child(1) > .card-up'
}

export default {
  clickForms() {
    cy.get(locators.  formsIcon).click()
  },

  clickAlerts() {
    cy.get(locators.alertsIcon).click()
  }
}
