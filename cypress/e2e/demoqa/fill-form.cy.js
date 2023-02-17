
// visit https://demoqa.com/, select practice_form from Forms and fill few fields

import home from '../../pages/demoqahome';
import form from '../../pages/demoqaform';

describe('verify form filling', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('form can be filled', () => {
    home.clickForms()
    form.clickPracticeForm()
    form.typeName()
    form.typeEmail()
    form.typeMobileNumber()
  })
})
