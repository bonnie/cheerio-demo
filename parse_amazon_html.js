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
const getData = (itemNum) => {
  return fetch(`${BASE_URL}/${itemNum}`)
    .then(res => res.text())
    .then((body) => {
      const $ = cheerio.load(body)
      const links = $('.p13n-sc-truncated', '.sims-carousel-holder[data-similarity-type="purchase"] .a-carousel-card .a-link-normal')
      const text = links.text()
      console.log(text)
    })
    .catch(console.error)
}

getData('B00I8BIC9E')
