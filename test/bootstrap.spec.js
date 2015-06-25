'use strict';
/**
 * This file is useful when you want to execute some
 * code before and after running your tests
 * (e.g. lifting and lowering your sails application):
 */
var sails = require('sails');
/**
 * Lifting sails before all tests
 */
before(function(done) {
    sails
        .lift({ // configuration for testing purposes
            port: 7070,
            environment: 'test',
            log: {
                noShip: true
            },
            models: {
                migrate: 'drop'
            },
            hooks: {
                sockets: false,
                views: false,
                http: false,
                pubsub: false,
                grunt: false //we dont need grunt in test
            }
        }, function(error, sails) {
            if (error) {
                return done(error);
            }
            done(null, sails);
        });
});


/**
 * Lowering sails after done testing
 */
after(function(done) {
    Note
        .destroy()
        .then(function( /*result*/ ) {
            sails.lower(done);
        })
        .catch(function(error) {
            done(error);
        });
});