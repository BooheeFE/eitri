const inquirer = require('inquirer')
const chalk = require('chalk')
const { writeFile } = require('fs')
const { templates, listTable } = require(`${__dirname}/../utils`)

let tplList = require(`${__dirname}/../templates`)

function renameTmplate(str, key) {
  tplList[key] = tplList[str]
  delete tplList[str]
  return JSON.stringify(tplList)
}
async function rename() {
  if (Object.keys(tplList).length === 0) {
    return console.log(chalk.cyan('没有模板可供重命名'))
  }
  const list = templates(tplList)
  const { action, project } = await inquirer.prompt([
    {
      name: 'action',
      type: 'list',
      message: 'Select the Template to rename',
      choices: list
    }, {
      type: 'input',
      name: 'project',
      message: 'name:',
      validate(val) {
        if (val !== '') {
          return true
        }
        return 'Template name is required!'
      }
    }
  ])
  const removeJson = renameTmplate(action, project)
  writeFile(`${__dirname}/../templates.json`, removeJson, 'utf-8', (err) => {
    if (err) {
      console.log(err)
    }
    listTable(tplList, 'Template has been rename successfully!')
  })
}
module.exports = rename()
