const jsonfile = require('jsonfile')

function Config(path = 'data/config.json') {
  this.data = jsonfile.readFileSync(path)
}

Config.prototype.getAll = function() {
  return this.data
}

Config.prototype.getColumnWidth = function() {
  return this.data['columnWidth']
}

Config.prototype.getPageTitle = function() {
  return this.data['pageTitle']
}

module.exports = Config
