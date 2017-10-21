const jsonfile = require('jsonfile')

Columns.DEFAULT_FILE = 'data/columns.json'
Columns.EXAMPLE_FILE = Columns.DEFAULT_FILE + '.example'

function Columns (path = Columns.DEFAULT_FILE) {
  try {
    this.data = jsonfile.readFileSync(path)
  } catch (error) {
    this.data = jsonfile.readFileSync(Columns.EXAMPLE_FILE)
    if (error.code === 'ENOENT') {
      console.log('`' + Columns.DEFAULT_FILE + '` not found. Falling back to `' + Columns.EXAMPLE_FILE + '`.')
    }
  }
}

Columns.prototype.getAll = function () {
  return this.data
}

Columns.prototype.getRows = function (pairWidth = 4) {
  var pairs = []

  for (var i = 0; i < this.data.columns.length; i += pairWidth) {
    pairs.push(this.data.columns.slice(i, i + pairWidth))
  }
  return pairs
}

Columns.prototype.getAllColumns = function () {
  return this.data.columns
}

module.exports = Columns
