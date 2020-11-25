# MedVista: Web Application Portal

![NodeJS](https://img.shields.io/badge/nodejs-v10.6+-blue.svg)[![Build Status](https://travis-ci.org/anfederico/Clairvoyant.svg?branch=master)](https://travis-ci.org/anfederico/Clairvoyant)![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)[![Live Demo](https://img.shields.io/badge/Live-Heroku-purple.svg)](https://medvista.herokuapp.com) [![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

MedVista is an Integrated Medical Platform tailored for the specific needs of the Doctors. Through this platform, they can efficiently access their patient information in real-time. Easy to track Appointments, Payments and Review Reports. Thus, Doctors can focus more on their job.

------



![Admin Preview](https://raw.githubusercontent.com/Lucifergene/MedVista/main/assets/medvista.png)





## Requirements

For development, you will only need Node.js installed in your environment.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3
    
    $ npm --version
    6.1.0

---



## Install

    $ git clone https://github.com/Lucifergene/MedVista
    $ cd MedVista
    $ npm install


## Running the project

    $ node app

Your app should now be running on [localhost:5000](http://localhost:5000/).



## Deploying to Heroku

```
heroku create
git push heroku main
heroku open
```

Alternatively, you can deploy your own copy of the app using the web-based flow:

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)



---

## License
>You can check out the full license [here](https://github.com/IgorAntun/node-chat/blob/master/LICENSE)

This project is licensed under the terms of the **MIT** license.

