/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-montevideo-demo-mirage',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {}
    },

    APP: {}
  };

  if (environment === 'development') {
    ENV.contentSecurityPolicy = {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline'",
      'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com",
      'font-src': "'self' fonts.gstatic.com",
      'connect-src': "'self'",
      'img-src': "'self' data: https://s3.amazonaws.com/ http://photos3.meetupstatic.com/",
      'media-src': "'self'"
    }
  }

  if (environment === 'test') {
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
