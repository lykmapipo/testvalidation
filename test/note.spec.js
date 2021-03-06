'use strict';

//dependencies
var expect = require('chai').expect;
var faker = require('faker');
var noteId;

describe('Note', function() {

    //prepare note
    before(function(done) {
        Note.create({
            title: faker.lorem.sentence(),
            author: faker.name.findName(),
            note: faker.lorem.sentence()
        }, function(error, note) {
            noteId = note.id;
            done(error, note);
        });
    });

    it('should throw custom errors messages when creating an invalid note', function(done) {

        Note
            .create({}, function(error /*, note*/ ) {

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

    it('should throw custom errors messages when update note with invalid data', function(done) {

        Note
            .update({
                id: noteId
            }, {
                author: null
            }, function(error, note) {

                //uncomment the console.log to see full custom messages
                //on your console
                // console.log(error.Errors);

                //author custom errors
                expect(error.Errors.author).to.exist;

                expect(error.Errors.author[0].message)
                    .to.equal(Note.validationMessages.author.string);

                expect(error.Errors.author[1].message)
                    .to.equal(Note.validationMessages.author.required);

                done(null, note);
            });
    });


    it('should not throw custom errors messages when update note with no data', function(done) {

        Note
            .update({
                id: noteId
            }, {}, function(error, note) {

                //no custom errors
                expect(error).to.not.exist;
                expect(note).to.exist;

                done(null, note);
            });
    });

});