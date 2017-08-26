const express = require('express')
const router = express.Router()
const Config = require('../models/config')
const Columns = require('../models/columns')

router.get('/', function(req, res, next) {
  var cfg = new Config()
  var cols = new Columns()

  cfgData = cfg.getAll()
  colsData = cols.getAll()

  res.render('index', {
    cfgData,
    colsData
  })
})

module.exports = router
