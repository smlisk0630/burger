const connection = require('./connection');

const orm = {
    selectAll(tableName, callback) {
        connection.query('SELECT * FROM ??', [tableName], (err, result) => {
            if (err) throw err;

            if (typeof callback === 'function') {
                callback(result);
            }    
        });
    }
};

module.exports = orm;