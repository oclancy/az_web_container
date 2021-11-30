const express = require('express')
const app = express()
const port = 8080


const azureIdentity = require("@azure/identity");
const appConfig = require("@azure/app-configuration");

const credential = new azureIdentity.DefaultAzureCredential();
// const client = new appConfig.AppConfigurationClient(
//   endpoint, // ex: <https://<your appconfig resource>.azconfig.io>
//   credential
// );

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})