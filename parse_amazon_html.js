/** @module parseAmazonHtml */
const fetch = require('node-fetch')
const cheerio = require('cheerio')

const BASE_URL = 'https://www.amazon.com/gp/product'

/**
 * Get 'also bought' items from product page in Amazon
 *
 * Gets HTML data from page using node-fetch; uses cheerio to parse HTML
 *
 * @param  {string} itemNum - Amazon item number (example: B00I8BIC9E)
 * @return {Promise} - Promise resolves to JS Array containing object for each item
 */
const getAlsoPurchased = itemNum =>
  fetch(`${BASE_URL}/${itemNum}`)
    .then(res => res.text())
    .then((body) => {
      const $ = cheerio.load(body)
      const text = [];
      $('.p13n-sc-truncate', '#p13n-m-purchase-sims-feature-2').each((index, elem) => {
        text.push($(elem).text().trim())
      });
      return text
    })
    .catch(console.error)

module.exports = {
  getAlsoPurchased,
}
