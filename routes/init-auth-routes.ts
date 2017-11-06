//import * as express from 'express';
import { Application } from 'express';
import { processLogin } from './process-login';
import * as passport from 'passport';
import * as express from 'express';

export const router = express.Router();

//login route

router.get('/login', processLogin)

//auth/logout

router.get('/logout', (req, res) => {
    //handle with Passport
    
    res.send('logging out');
})

//auth/login/google

router.get('/google',
passport.authenticate('google', {
    scope: ['profile']
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.send("Redirected to Call back URL");
})
