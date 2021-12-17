const inquirer = require('inquirer')
const chalk = require('chalk')
const { writeFile } = require('fs')

const { listTable, templates } = require(`${__dirname}/../utils`)

let tplList = require(`${__dirname}/../templates`)

function removeTmplate(value) {
  delete tplList[value]
  return JSON.stringify(tplList)
}
async function deleteTmplate() {
  if (Object.keys(tplList).length === 0) {
    return console.log(chalk.cyan('没有仓库可供删除'))
  }
  const list = templates(tplList)
  const { action } = await inquirer.prompt([
    {
      name: 'action',
      type: 'list',
      message: 'Select the repo to delete',
      choices: list
    }
  ])
  const removeJson = removeTmplate(action)
  writeFile(`${__dirname}/../templates.json`, removeJson, 'utf-8', (err) => {
    if (err) {
      console.log(err)
    }
    listTable(tplList, 'Repo has been deleted successfully!')
  })
}
module.exports = deleteTmplate()
