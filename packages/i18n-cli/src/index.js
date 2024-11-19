const { program } = require('commander')
const option = require('../package.json')

program.version(option.version)
module.exports = program
