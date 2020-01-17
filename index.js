const Pdf2Pic = require('pdf2pic')
const program = require('commander')
const { version } = require('./package.json')

program
  .version(version)
  .option('-p', '--pages', 'Convert specific pages', item => item.split(','))
  .parse(process.argv)

console.log(program.pages)
