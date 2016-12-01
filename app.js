'use strict'

const FH = require('./tools/flow_helper')

FH.start('test')
.then((finalResult) => {
	console.log(finalResult)
})