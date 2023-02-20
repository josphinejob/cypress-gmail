// https://www.boredapi.com/api/ is a free api to find things to do when you're bored

const baseUrl = 'https://www.boredapi.com/api/'

describe('Test Bored API', () => {

  it('Test GET random event by activity query', () => {
    cy.request(baseUrl + `activity/`)
    .then((response)=> {
      expect(response.status).to.equal(200)
      expect(response.body).has.property('participants').and.be.a('number')
      expect(response.body).has.property('type').and.be.a('string')
      expect(response.body).has.property('activity')
    })
  })

  it('Test finding an activity by its key', () => {
    cy.request(baseUrl + `activity?key=5881028`)
    .then((response)=> {
      expect(response.body).has.property('key').to.equal("5881028")
      expect(response.body).has.property('activity').to.equal("Learn a new programming language")
    })
  })

  it('Test finding an activity with a given type', () => {
    cy.request(baseUrl + `activity?type=recreational`)
    .then((response)=> {
      expect(response.body).has.property('type').to.equal("recreational")
      expect(response.body).has.property('activity').and.be.a('string')
    })
  })

  it('Test finding an activity within a price range', () => {
    cy.request(baseUrl + `activity?minprice=0&maxprice=1`)
    .then((response)=> {
      expect(response.body).has.property('price').to.be.lessThan(1)
      expect(response.body).has.property('activity').and.be.a('string')
    })
  })

})
