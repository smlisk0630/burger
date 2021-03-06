const orm = require('../config/orm');

const burger = {
    all(callback) {
      orm.all('burger', (res) => callback(res));
    },
    // The variables columns and values are arrays.
    create(columns, values, callback) {
      orm.create('burger', columns, values, (res) => callback(res));
    },
    update(objColVals, condition, callback) {
      orm.update('burger', objColVals, condition, (res) => callback(res));
    },
  };

module.exports = burger;