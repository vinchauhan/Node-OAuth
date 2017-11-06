import { google } from './../keys/google-secrets';
import * as passport from 'passport';

import * as GoogleStrategy from 'passport-google-oauth20';


export function passPortSetup() {

    passport.use(new GoogleStrategy({
    //options
    callbackURL: '/auth/google/redirect', 
    clientID: google.CLIENT_ID,
    clientSecret: google.CLIENT_SECRET

}, (accessToken, refreshToken, profile, done) => {
    console.log(profile);
    console.log(accessToken);
    done(null, profile.id);
}));
}