# Translation widget
Translation widget for Paddy power as addon to Live Person

## Language translation widget configuration
All configuration files are stored in `config` folder.


## Running of application
Clone the repository
```bash
$ git clone <REPOSITORY_URL> <FOLDER NAME>
```

Change the configuration and connect your Language translation service (details you can find below).
```bash
$ cd <FOLDER NAME>
$ cd config/
```

To install production dependencies:
```bash
$ npm install --production
```

To install all dependencies:
```bash
$ npm install
```

To run the application:
```bash
$ npm start
```

To start tests of the application:
```bash
$ npm test
```

## Application configuration
To change base of the application, change the configuration in `./config/config.js`.

Before deployment, please change the Language translation service `url` and `iam_apikey` (*do not change API version*):
```javascript
config.lt = {
	url: "https://gateway-lon.watsonplatform.net/language-translator/api",
	iam_apikey: "<IAM_API_KEY>",
	version: "2018-05-01",
};
```
More information and how to get apikey - https://console.bluemix.net/docs/iam/apikeys.html#manapikey

The application runs on port 8080 by default, but you can change the port number:
```javascript
config.port = 8080;
```

## Skills configuration
To use Live Person engagement skills, you can configure skills in `./config/skils.js`.

The lanugage model (translation) has to be supported in both ways!
Supported models you can find here - https://console.bluemix.net/docs/services/language-translator/translation-models.html#translation-models

All values are case sensitive!

Skill definition:
```javascript
const skills = {
  "<NAME_OF_LP_ENGAGEMENT SKILL>": {
    "from": "<SOURCE_LANUAGE_CODE (Client language)>",
    "to": "<TARGET_LANUAGE_CODE (Agent language)>"
  },
  ...
}
```

E.g. for translation of client messages from Russian to English and for agent messages from English to Russian:
```javascript
const skills = {
  "Russian": {
    "from": "ru",
    "to": "en"
  },
  ...
}
```

## Deployment
### Deployment to IBM Cloud
More information about Cloud foundry CLI - https://console.bluemix.net/docs/cli/reference/ibmcloud/cf_index.html
To deploy the application to your IBM Cloud, run these commands in the project folder and follow the instructions on screen"
```bash
$ cf login --sso
$ cf push <APPLICATION NAME>
```