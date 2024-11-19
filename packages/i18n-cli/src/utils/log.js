import chalk from 'chalk'
const log = {
  info: message => {
    console.log(chalk.blue(message))
  },
  success: message => {
    console.log(chalk.green(message))
  },
  warning: message => {
    console.log(chalk.yellow(message))
  },
  error: message => {
    console.log(chalk.red(message))
  }
}

export default log
