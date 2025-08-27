const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  const results = await Promise.all(
    urls.map(async (url) => {
      try {
        const response = await httpGet(url)
        const { message } = JSON.parse(response.body)

        if (response.status === 200) {
          return { 'Arnie Quote': message }
        } else {
          return { 'FAILURE': message }
        }
      } catch (err) {
        return { 'FAILURE': message }
      }
    })
  )

  return results
}

module.exports = {
    getArnieQuotes,
};
