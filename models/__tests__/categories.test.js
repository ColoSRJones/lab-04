const Categories = require('../categories/categories.js');

describe('Categories Model', () => {

  let categories;

  beforeEach(() => {
    categories = new Categories();
  })

  // How might we repeat this to check on types?
  it('sanitize() returns undefined with missing requirements', () => {
    const schema = categories.schema;
    var testRecord = {};
    for (var field in schema) {
      if (schema[field].required) {
        testRecord[field] = null;
      }
    }
    expect(categories.sanitize(testRecord)).toBeUndefined();
  });

  it('can post() a new category', () => {
    let obj = {
      name: 'Test Category'
    };
    return categories.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e));
  });

  it('can get() a category', () => {
    let obj = {
      name: 'Test Category'
    };
    return categories.create(obj)
      .then(record => {
        return categories.get(record._id)
          .then(category => {
            Object.keys(obj).forEach(key => {
              expect(category[0][key]).toEqual(obj[key]);
            });
          });
      });
  });
  //Update category
  it('can update a category', () => {
    //Arrange
    let old = {
      name: 'Test Category'
    };
    let obj = {
      name: 'JavaScript'
    };
    return categories.create(old)
      .then(record => {
        return categories.update(record.id, obj)
          .then(category => {
            Object.keys(obj).forEach(key => {
              expect(category[key]).toEqual(obj[key]);
            });
          });
      });
  });
  //Delete category
  it('can delete a category', () => {
    //Arrange
    let obj = {
      name: 'Test Category'
    };
    return
    categories.create(obj)
      .then(record => {
        return categories.delete(record.id, obj)
          .then(category => {})
        Object.keys(obj).forEach(key => {
          expect(record[key]);
        })
      })
  });
});