const yup = require('yup');
const { noAdditionalKeys } = require('./utils');

exports.newCategory = yup
  .object()
  .shape({
    category_name: yup.string().max(255).required(),
  })
  .test('no-unknown', 'Unknown keys', noAdditionalKeys);
