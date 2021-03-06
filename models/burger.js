const orm = require('../config/orm');

const burger = {
    selectAll(callback) {
      orm.selectAll('burger', (res) => callback(res));
    },
    // The variables columns and values are arrays.
    insertOne(columns, values, callback) {
      orm.insertOne('burger', columns, values, (res) => callback(res));
    },
    updateOne(objColVals, condition, callback) {
      orm.updateOne('burger', objColVals, condition, (res) => callback(res));
    },
  };

module.exports = burger;