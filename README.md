# readline
## Download
```
git clone {git_url}
```

## install
```
npm install
```

## use
```
node app.js
```

## config
* Read `test.js` in `flows` and create your own flow config
* Call your flow in node like follow
```
'use strict'
const FH = require('./tools/flow_helper')
FH.start('test').then((finalResult) => {
    console.log(finalResult)
})
```