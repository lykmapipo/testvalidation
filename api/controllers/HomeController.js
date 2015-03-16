module.exports = {
    createNote: function (req, res) {
      note.create()
        .then(function(note) {
          return res.view(note);
        })
        .fail(function(err) {
          console.log(err);
        })
    },
};