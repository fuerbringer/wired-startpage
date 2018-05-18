const fs = require('fs')
const yaml = require('js-yaml')

Config.DEFAULT_FILE = 'data/config.yaml'
Config.EXAMPLE_FILE = Config.DEFAULT_FILE + '.example'

function Config (path = Config.DEFAULT_FILE) {
  try {
    this.data = yaml.safeLoad(fs.readFileSync(path, 'utf-8'))
  } catch (error) {
    this.data = yaml.safeLoad(fs.readFileSync(Config.EXAMPLE_FILE, 'utf-8'))
    if (error.code === 'ENOENT') {
      console.log('`' + Config.DEFAULT_FILE + '` not found. Falling back to `' + Config.EXAMPLE_FILE + '`.')
    }
  }
}

Config.prototype.getAll = function () {
  return this.data
}

Config.prototype.getColumnWidth = function () {
  return this.data['bootstrapCols']['lg']
}

Config.prototype.getPageTitle = function () {
  return this.data['pageTitle']
}

module.exports = Config
