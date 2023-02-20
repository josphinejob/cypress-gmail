/*  http://ergast.com/api/f1/ is a free api which provides
a historical record of Formula one motor racing data for non-commercial purposes. */

const baseUrl = 'http://ergast.com/api/f1/'

describe('Test Formula One API', () => {

  it('Test circuits GET query returns all expected values', () => {
    cy.request(baseUrl + `circuits.json?limit=150`)
    .then((response)=> {

      let circuits = response.body.MRData.CircuitTable.Circuits

      // Verify the status code is 200
      expect(response.status).to.equal(200)

      // Verify circuitId and circuitName for each circuit are strings
      for (let i = 0; i < circuits.length; i++) {
        expect(circuits[i].circuitId).to.be.a("string")
        expect(circuits[i].url).to.be.a("string")
        expect(circuits[i].circuitName).to.be.a("string")
        expect(circuits[i].Location.locality).to.be.a("string")
        expect(circuits[i].Location.country).to.be.a("string")
        }

      // Print length of array to logs
      cy.log(circuits.length)
    })
  })
})
