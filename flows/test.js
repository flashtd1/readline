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
		tip:'project name:',
		exec: (preResult, input) => {
			return new Promise(resolve => {
				console.log(`name:${input}`)
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
				console.log('author:' + input)
				preResult.author = input
				resolve(preResult)
			})
		}
	}
]

module.exports = cmds