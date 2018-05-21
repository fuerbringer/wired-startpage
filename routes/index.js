const express = require('express')
const router = express.Router()
const Config = require('../models/config')
const Columns = require('../models/columns')

router.get('/', function (req, res, next) {
  var cfg = new Config()
  var cols = new Columns()

  var cfgData = cfg.getAll()
  var rows = cols.getRows(12 / cfg.getColumnWidth())
  // console.log(cfgData)

  res.render('index', {
    cfgData, rows
  })
})

module.exports = router
