'use strict'

const readline = require('readline')

let finalResult = {}
let rl = null
let cmds = []
let cursor = 0

const step = () => {
  if(cmds[cursor]) {
    let cmd = cmds[cursor]
    if(cmd.type == 'output') {
      console.log(cmd.tip)
      cursor ++
      step()
    } else if(cmd.type == 'handle') {
      rl.question(cmd.tip, (input) => {
        cmd.exec(finalResult, input).then(() => {
          cursor ++ 
          step()
        }, (reject) => {
          console.log(reject)
          rl.close()
        })
      })
    }
  } else {
    rl.close()
  }
}

const start = (flowName) => {
  return new Promise(resolve => {
    cmds = require('../flows/' + flowName)
    cursor = 0
    finalResult = {}
    rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.on('close', () => {
      resolve(finalResult)
    })
    step()
  })
}


module.exports = {
  start:start
}