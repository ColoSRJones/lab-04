'use strict';

const DataModel =
  require('../memory.js');
//TODO
// const DataModel = require('../validator.js');



// Using TDD …
// Create a data model called products
// Add the following fields - use your own judgement on field type and validation rules
// category_id - string, required
// price - number, required
// weight - number
// quantity_in_stock - number, required
// TDD?
// Shouldn’t your generic model test “just work” once you add the Products model to it’s list?
// Yep … //
class Products
extend DataModel {
  constructor() {
    super();
    this.schema = {
      id: {
        required: true
      },
      name: {
        required: true
      },
    }
  };
}