var connection = require("../config/connection.js");

var orm = {

	selectAll: function(tableInput, cb) {

		connection.query("Select * from " + tableInput , function(err, result) {

	      if (err) {
	        throw err;
	      }
	      cb(result);
	    });


	},

	insertOne: function(table, cols, vals, cb) {
		connection.query("Insert into " + table + " (" + cols + ") " + "VALUES (?,?)", vals, function(err, result){
			if (err) {
        		throw err;
      		}
      		cb(result);
		}); 
	},


	updateOne: function(table, condition, cb) {
		connection.query("UPDATE " + table + " SET devoured=true WHERE " + condition, function(err, result){ //something is wrong here
			if (err) {
        		throw err;
      		}
      		cb(result);
		});

	}


}





module.exports = orm;