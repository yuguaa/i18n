const program = require('./src')
const configCommand = require('./src/command/config')
program
  .command('init')
  .alias('i')
  .description('init locales conf')
  .option('--vue', 'init for vue project')
  .action(options => {
    configCommand(options)
  })
  .on('--help', function () {})

program.command('*').action(function (cmd) {
  console.log('unknown command "%s"', cmd)
})

program.parse(process.argv)
