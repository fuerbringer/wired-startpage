const jsonfile = require('jsonfile')

Config.DEFAULT_FILE = 'data/config.json'
Config.EXAMPLE_FILE = Config.DEFAULT_FILE + '.example'

function Config (path = Config.DEFAULT_FILE) {
  try {
    this.data = jsonfile.readFileSync(path)
  } catch (error) {
    this.data = jsonfile.readFileSync(Config.EXAMPLE_FILE)
    if (error.code === 'ENOENT') {
      console.log('`' + Config.DEFAULT_FILE + '` not found. Falling back to `' + Config.EXAMPLE_FILE + '`.')
    }
  }
}

Config.prototype.getAll = function () {
  return this.data
}

Config.prototype.getColumnWidth = function () {
  return this.data['columnWidth']['lg']
}

Config.prototype.getPageTitle = function () {
  return this.data['pageTitle']
}

module.exports = Config
