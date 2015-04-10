# Todo0

A simple Todo app built using Ember.js & Firebase using the EmberFire adapter. EmberFire is the officially supported adapter for using Firebase with Ember Data, a library developed and maintained by the Ember Core Team for managing model data in your Ember apps. Checkout https://www.firebase.com/docs/web/libraries/ember/guide.html

## Demo 
https://todo0.firebaseapp.com/

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Change Firebase URL
  Change Firebase URL in config/environment.js 
* firebase: 'https://YOUR-FIREBASE-NAME.firebaseio.com/'

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

This app is deployed to Firebase. To deploy this application to Firebase
* npm install -g firebase-tools
* firebase init
* Give dist/ folder when prompted for public directory
* Refer this section for changes in firebase.json https://www.firebase.com/docs/web/libraries/ember/guide.html#section-ember-deploy
* firebase deploy

## License

MIT License

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* [firebase](https://www.firebase.com/)
* [emberfire](https://www.firebase.com/docs/web/libraries/ember/quickstart.html)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
