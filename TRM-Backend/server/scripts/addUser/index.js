require('../../setup')
require('./addUser')()
  .then(result => {
    console.log(result)
    process.exit(0)
  }).catch(err => {
    console.log(err)
    process.exit(1)
  })
