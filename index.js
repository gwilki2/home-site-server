const app = require('./src/app')

const port = require('./src/config/appConfig').port || 5001

app.listen(port, ()=> console.log(`Listening on port: ${port}`))