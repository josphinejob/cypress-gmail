import { name, random, internet } from 'faker'

//define locators
const locators = {
  practiceFormMenuItem: ':nth-child(2) > .element-list > .menu-list > #item-0',
  firstNameField: '#firstName',
  lastNameField: '#lastName',
  userEmailField: '#userEmail',
  mobileField: '#userNumber'
}

const firstName = name.firstName()
const lastName = name.lastName()
const randomPhone = random.number({ min: 6111111111, max: 6199999999 })
const randomEmail = internet.email()

export default {
  clickPracticeForm() {
    cy.get(locators.practiceFormMenuItem).click()
  },

  typeName() {
    cy.get(locators.firstNameField).type(firstName)
    cy.get(locators.lastNameField).type(lastName)
  },

  typeEmail() {
    cy.get(locators.userEmailField).type(randomEmail)
  },

  typeMobileNumber() {
    cy.get(locators.mobileField).type(randomPhone)
  }
}
