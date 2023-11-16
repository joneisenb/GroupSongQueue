require('dotenv').config();
const express = require('express')
const passport = require('passport')
const SpotifyStrategy = require('passport-spotify').Strategy;

const app = express();

passport.use(
    new SpotifyStrategy(
    {

        clientID: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        callbackURL: process.env.SPOTIFY_CALLBACK_URL

    },
    function(accessToken, refreshToken, expires_in, profile, done){
        return done(null, profile);
    }
    
    )
)

app.use(passport.initialize());
app.get('/auth/spotify', passport.authenticate('spotify', {scope: ['user-read-email', 'user-read-private']}));
app.get(
    '/auth/spotify/callback',
    passport.authenticate('spotify', {failureRedirect:'/login'})
)