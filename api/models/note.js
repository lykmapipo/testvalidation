module.exports = {
  schema: true,
  attributes: {  
    note: {
      type: 'string',
      required: true
    }
  },
  validationMessages: {
    note: {
      required: 'Note is required',
      string: 'Note is invalid'
    }
  }
};