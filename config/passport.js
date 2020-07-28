var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var OAuth = require('./auth.js');
var LocalStrategy = require('passport-local').Strategy;
var db = require('../models');


// GOOGLE PROVIDED USER AUTH CODE BLOCK //

function extractProfile(profile) { 
  var imageURL = '';
  if (profile.photos && profile.photos.length) {
    imageUrl = profile.photos[0].value;
  }
  return {
    id: profile.id,
    displayName: profile.displayName,
    image: imageUrl
  };
}

passport.use(new GoogleStrategy({
    clientID: OAuth.googleAuth.clientID,
    clientSecret: OAuth.googleAuth.clientSecret,
    callbackURL: OAuth.googleAuth.callbackURL
  },
  function(accessToken, refreshToken, profile, cb) {
    cb(null, extractProfile(profile));
  }
));
  
passport.use(new LocalStrategy ({
  usernameField: 'email',
  passwordField: 'pwd'
}, function(email, pwd, done) {
  db.User.findOne({
    where: {
      email: email
    }
    
    // GOOGLE PROVIDED USER AUTH CODE BLOCK //

  }).then(function(dbUser) {
    console.log(dbUser);
    if(!dbUser) {
      return done(null, false, {
        message: 'Invalid email'
      });
    } else if (!dbUser.validPassword(pwd)) {
      return done(null, false, {
        message: 'Incorrect password'
      });
    } 
    return done(null, dbUser);
  });
}));

passport.serializeUser(function(user, cb) { 
  cb(null, user);
});
passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;