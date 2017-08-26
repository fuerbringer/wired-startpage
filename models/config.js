const jsonfile = require('jsonfile')

function Config(path = 'data/config.json') {
  this.data = jsonfile.readFileSync(path)
}

Config.prototype.getColumnWidth = function() {
  return this.data['columnWidth']
}

module.exports = Config
