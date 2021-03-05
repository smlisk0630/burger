const connection = require('./connection');

const orm = {
    selectAll(tableName, callback) {
        connection.query('SELECT * FROM ??', [tableName], (err, result) => {
            if (err) throw err;

            if (typeof callback === 'function') {
                callback(result);
            }    
        });
    },
    insertOne(tableName, columnName, columnValues, callback) {
        connection.query('INSERT INTO * SET ?', [tableName, columnName, columnValues], (err, result) => {
            if (err) throw err;

            if (typeof callback === 'function') {
                callback(result);
            }  
        });
    },
    updateOne(tableName, columnName, columnValues, callback) {
        connection.query('UPDATE * SET ??', [tableName, columnName, columnValues], (err, result) => {
            if (err) throw err;

            if (typeof callback === 'function') {
                callback(result);
            }  
        });
    }
};

module.exports = orm;