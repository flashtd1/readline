'use strict'

const cmds = [
	{
		type:'output',
		tip:'init start'
	},
	{
		type:'handle',
		tip:'project:',
		exec: (finalResult, input) => {
			return new Promise(resolve => {
				console.log(`工程名称是:${input}`)
				finalResult['name'] = input
				resolve()
			}) 
		}
	},
	{
		type:'handle',
		tip:'author:',
		exec: (finalResult, input) => {
			return new Promise(resolve => {
				console.log('作者是:' + input)
				finalResult['author'] = input
				resolve()
			})
		}
	}
]

module.exports = cmds