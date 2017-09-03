const jsonfile = require('jsonfile')

function Columns(path = 'data/columns.json') {
  this.data = jsonfile.readFileSync(path)
}

Columns.prototype.getAll = function() {
  return this.data
}

Columns.prototype.getRows = function(pairWidth = 4) {
  var pairs = []

  for(var i = 0; i < this.data.columns.length; i += pairWidth) {
    pairs.push(this.data.columns.slice(i, i + pairWidth))
  }
  return pairs
}

Columns.prototype.getAllColumns = function() {
  return this.data.columns
}

module.exports = Columns
