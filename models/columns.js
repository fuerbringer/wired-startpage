const jsonfile = require('jsonfile')

function Columns(path = 'data/columns.json') {
  this.data = jsonfile.readFileSync(path)
}

Columns.prototype.getAllColumns = function() {
  return this.data.columns
}

module.exports = Columns;
