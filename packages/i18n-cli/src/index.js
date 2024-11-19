import { program } from 'commander'
import option from '../package.json' assert { type: 'json' }
import configCommand from './command/config.js'
import parseCommand from './command/parse.js'

program.version(option.version)

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

program.command('*').action(cmd => {
  console.log('unknown command "%s"', cmd)
})

program.parse(process.argv)
