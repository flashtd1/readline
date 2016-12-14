'use strict'

const cmds = [
	{
		type:'output',
		tip:'init start',
		exec: (preResult) => { // optional
			return new Promise(resolve => {
				// do something you want
				resolve(preResult)
			})
		}
	},
	{
		type:'handle',
		tip:'project:',
		exec: (preResult, input) => {
			return new Promise(resolve => {
				console.log(`工程名称是:${input}`)
				preResult.name = input
				resolve(preResult)
			}) 
		}
	},
	{
		type:'handle',
		tip:'author:',
		exec: (preResult, input) => {
			return new Promise(resolve => {
				console.log('作者是:' + input)
				preResult.author = input
				resolve(preResult)
			})
		}
	}
]

module.exports = cmds