const { program } = require('commander')
const option = require('../package.json')
const configCommand = require('./command/config')
const parseCommand = require('./command/parse')
program
  .command('init')
  .alias('i')
  .description('初始化')
  .action(options => {
    configCommand(options)
  })

program
  .command('parse')
  .alias('p')
  .description('解析')
  .action(options => {
    parseCommand(options)
  })

program.command('*').action(function (cmd) {
  console.log('unknown command "%s"', cmd)
})

program.version(option.version)
program.parse(process.argv)
module.exports = program
