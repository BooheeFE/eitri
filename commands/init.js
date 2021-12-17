const { prompt } = require('inquirer')
const chalk = require('chalk')
const { templates } = require(`${__dirname}/../utils`)
const download = require('download-git-repo')
const ora = require('ora')

let tplList = require(`${__dirname}/../templates`)

const question = [
  {
    name: 'name',
    type: 'list',
    message: 'Select the template name',
    choices: templates(tplList)
  },
  {
    type: 'input',
    name: 'project',
    message: 'Project name:',
    validate(val) {
      if (val !== '') {
        return true
      }
      return 'Template name is required!'
    }
  },
  {
    type: 'input',
    name: 'place',
    message: 'Where to init the project:',
    default: './'
  }
]

module.exports = prompt(question).then(({ name, project, place }) => {
  const gitPlace = tplList[name]['owner/name']
  const gitBranch = tplList[name]['branch']
  const spinner = ora('Downloading template...')

  spinner.start()
  console.log(`${place}/${project}`)
  download(`${gitPlace}#${gitBranch}`, `${place}/${project}`, (err) => {
    if (err) {
      console.log(chalk.red(err))
      process.exit()
    }
    spinner.stop()
    console.log(chalk.green('New project has been initialized successfully!'))
  })
})
