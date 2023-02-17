
// visit https://demoqa.com/, select alerts and verify one alert

import home from '../../pages/demoqahome';
import alerts from '../../pages/demoqaalert';

describe('verify alerts', () => {

  it('verify alert displayed', () => {
    cy.visit('/')
    home.clickAlerts()
    alerts.clickAlertsFromMenu()
    alerts.clickMeButtonToDisplayAlert()
    alerts.verifyAlertDisplayed()
  })
})
