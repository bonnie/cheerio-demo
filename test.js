const expect = require('chai').expect
const { getAlsoPurchased } = require('./parse_amazon_html.js')

describe('getAlsoPurchased', () => {
  it('gets the correct first product for item number B00I8BIC9E', () =>
    getAlsoPurchased('B00I8BIC9E')
      .then(result =>
        expect(result[0]).to.equal('HDE Neoprene Case for Sony Cyber-Shot Digital Cameras')
      )
  )
})
