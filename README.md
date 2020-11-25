# Lam Personal Portfolio

[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

This is my work in progress portfolio for web development, programming and soon to be other accomplishments and acts. I only wish I had built this earlier in my life to document all the adventures I had from my early twenties till now.



### Prerequisites and Deployment

* Installation of Web Browser to view webpage
* Visual Studio Code to analze the code for the website
* Bootstrap: Either call it remotely or download it locally and then call it.

### Instructions on using Environmental Variables in Heroku and setting up Gmail

So these instructions are for beginners like me who want to add a working contact form to their portfolio page that sends messages to your gmail account. On our local hard drive, we have environmental variables that store our gmail username and password in a .env file that is called on by the npm package named dotenv. There are many purposes for using environmental variables stored in a separate .env file, but for our purposes, we keep the gmail username and password in a .env file so that it won't be exposed to the public. But how do we get these environmental variables that store our gmail username and password to show up in a Heroku Deployment? The steps will be explained below.


* Using Environmental Variables with dotenv and Heroku
    * For our particular app, the two environmental variables that we have to worry about are named: GMAIL_PASS and GMAIL_USER
    * In the heroku dashboard, got to settings then got to the section called Config Vars. Then add the environmental Variables. 
    * The first Key value is named GMAIL_USER and its corresponding value will be your gmail address.
    * The second Key value is named GMAIL_PASS and its corresponding value will be your gmail password. 

Next we have to get your particular gmail account to accept messages from the portfolio website. The reason we have to go through these extra steps is because google has a bunch of security measures to slow down spammers and hackers.

* Two steps to setting up your gmail account to recieve emails from the contact form deployed on heroku
    * Since Heroku is a Virtual Machine that provides your web app a server, you need to let gmail know that it is safe to allow heroku to access your gmail remotely using this link: https://accounts.google.com/b/0/DisplayUnlockCaptcha
    * Also, I had to to do this step with Gmail: go to gmail, in the top right corner, click your profile image and go to "Manage your Google Account". In the search bar where you can search for Google Account settings, search for "Less secure app access". Then enable "Less Secure App Access."
* Doing all the steps above should allow you to deploy this app on heroku and have a working contact form that sends messages from this portfolio website to your email address.

## Built With

* Visual Studio Code

## Author

* **Lam Nguyen**

## License

Unlicense

## Screenshots

![Portfolio image desktop sized](/public/assets/images/Portfolio_01.PNG) <br>
![portfolio image mobile sized](/public/assets/images/Portfolio_02.PNG)

## Deployed Application

View deployed application [here](https://lamnguyenportfolio.herokuapp.com/)
