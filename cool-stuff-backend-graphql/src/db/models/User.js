const Model = require('../Model');

class User extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'users';
  }

  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  static get jsonSchema () {
    return {
      type: 'object',
      required: ['email', 'password'],

      properties: {
        id: {type: 'integer'},
        email: {type: 'string', minLength: 1, maxLength: 255},
        password: {type: 'string', minLength: 1, maxLength: 255}
      }
    }
  }

  // This object defines the relations to other models.
  // static get relationMappings() {
  //   return {
  //   }
  // }
}

module.exports = User;
