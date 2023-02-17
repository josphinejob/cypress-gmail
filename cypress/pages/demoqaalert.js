
//define locators
const locators = {
  alertsMenuItem: ':nth-child(3) > .element-list > .menu-list > #item-1',
  clickMeForConfirmBoxAlert: '#confirmButton',
  confirmResult: '#confirmResult',
}

export default {
  clickAlertsFromMenu() {
    cy.get(locators.alertsMenuItem).click()
  },

  clickMeButtonToDisplayAlert() {
    cy.get(locators.clickMeForConfirmBoxAlert).click()
  },

  verifyAlertDisplayed() {
    cy.get(locators.confirmResult)
  }
}
