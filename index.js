const express = require('express')
const app = express()
const appConfigUrl = process.env.APPCONFIG

console.log('${appConfigUrl}')
const azureIdentity = require("@azure/identity");
const appConfig = require("@azure/app-configuration");

const credential = new azureIdentity.DefaultAzureCredential();
const client = new appConfig.AppConfigurationClient(
  appConfigUrl, // ex: <https://<your appconfig resource>.azconfig.io>
  credential
);

(async () => {
var port = await client.getConfigurationSetting({key:"BrightWebAppPort"})

console.log('${appConfigUrl}')
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port.value, () => {
  console.log(`Example app listening at http://localhost:${port.value}`)
})
})()