const Table = require('cli-table')
const chalk = require('chalk')



function listTable(tplList, lyric) {
  const table = new Table({
    head: ['Template Name', 'Owner/Name', 'Branch'],
    style: {
      head: ['green']
    }
  })
  const list = Object.keys(tplList)
  if (list.length) {
    list.forEach((key) => {
      table.push([key, tplList[key]['owner/name'], tplList[key]['branch']])
      if (table.length === list.length) {
        console.log(table.toString())
        if (lyric) {
          console.log(chalk.green(`\u2714 ${lyric}`))
        }
        process.exit()
      }
    })
  } else {
    if (lyric) {
      console.log(chalk.green(`\u2714 ${lyric}`))
    }
    process.exit()
  }
}

function templates(list) {
  const arr = []
  for (const key in list) {
    const str = `${key} (${list[key]['owner/name']}  ${list[key].branch}) `
    arr.push({
      name: str,
      value: key
    })
  }
  return arr
}
exports.templates = templates
exports.listTable = listTable
