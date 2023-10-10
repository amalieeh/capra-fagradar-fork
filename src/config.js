const config = () => {
  const env = {
    production: {
      featureToggles: {
        UIRefresh2022: true,
      },
      sheetUrl: 'https://raw.githubusercontent.com/capraconsulting/capra-fagradar/tekled/data/radar_tekled.csv',
    },
    development: {
      featureToggles: {
        UIRefresh2022: true,
      },
      sheetUrl: 'https://raw.githubusercontent.com/capraconsulting/capra-fagradar/tekled/data/radar_tekled.csv',
    },
  }
  return process.env.ENVIRONMENT ? env[process.env.ENVIRONMENT] : env
}
module.exports = config
