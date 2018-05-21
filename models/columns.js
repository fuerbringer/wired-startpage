const fs = require('fs')
const yaml = require('js-yaml')

Columns.DEFAULT_TILES = 'data/tiles/'
Columns.EXAMPLE_TILE = 'data/tile.example.yaml'

function Columns (path = Columns.DEFAULT_FILE) {
  this.data = {
    columns: []
  }
  const tilesDirectory = fs.readdirSync(Columns.DEFAULT_TILES)
  const yamlTiles = tilesDirectory.filter(file => { return file !== '.gitignore' })
  if (yamlTiles.length) {
    // Custom tiles present
    for (var i = 0; i < yamlTiles.length; i++) {
      const tempTile = yaml.safeLoad(fs.readFileSync(Columns.DEFAULT_TILES + yamlTiles[i], 'utf-8'))
      this.data.columns.push(tempTile)
    }
  } else {
    // Use default tile
    console.log('No user-defined tiles found. Falling back to `' + Columns.EXAMPLE_TILE + '`.')
    const tempTile = yaml.safeLoad(fs.readFileSync(Columns.EXAMPLE_TILE, 'utf-8'))
    this.data.columns.push(tempTile)
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
