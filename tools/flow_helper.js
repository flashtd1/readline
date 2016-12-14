'use strict'

const readline = require('readline')
const cusError = Error()

let finalResult = {}
let rl = null
let cmds = []
let cursor = 0

const step = (preResult) => {
  if(cmds[cursor]) {
    let cmd = cmds[cursor]
    if(cmd.type == 'output') {
      console.log(cmd.tip)
      if(cmd.exec) {
        cmd.exec(preResult).then((nextResult) => {
          cursor ++ 
          finalResult = nextResult
          step(nextResult)
        }, (reject) => {
          console.log(reject)
          rl.close()
        })
      } else {
        cursor ++
        step(preResult)  
      }
      
    } else if(cmd.type == 'handle') {
      rl.question(cmd.tip, (input) => {
        cmd.exec(preResult, input).then((nextResult) => {
          cursor ++ 
          finalResult = nextResult
          step(nextResult)
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
    step(finalResult)
  })
}


module.exports = {
  start:start
}