'use strict';
var expect = require('chai').expect;
var faker = require('faker');

describe('Note', function() {

    it('should throw custom errors messages if not valid', function(done) {

        Note
            .create({}, function(error, note) {

                //uncomment the console.log to see full custom messages
                //on your console
                // console.log(error.Errors);

                //title custom errors
                expect(error.Errors.title).to.exist;

                expect(error.Errors.title[0].message)
                    .to.equal(Note.validationMessages.title.string);

                expect(error.Errors.title[1].message)
                    .to.equal(Note.validationMessages.title.required);


                //author custom errors
                expect(error.Errors.author).to.exist;

                expect(error.Errors.author[0].message)
                    .to.equal(Note.validationMessages.author.string);

                expect(error.Errors.author[1].message)
                    .to.equal(Note.validationMessages.author.required);

                //note custom errors
                expect(error.Errors.note).to.exist;

                expect(error.Errors.note[0].message)
                    .to.equal(Note.validationMessages.note.string);

                expect(error.Errors.note[1].message)
                    .to.equal(Note.validationMessages.note.required);

                done();
            });
    });

});
