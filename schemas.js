/**
 * Created by michalrabinowitch on 16/06/2016.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    user_name: {type: String, index: true},
    mail: String,
    date_created: {type: Date, default: Date.now},
    year_of_birth: String,
    password: String,
    hobbies: [String],
    neighborhood: Schema.Types.ObjectId
});


var neighborhoodSchema = new Schema({
    name: String,
    residents: [String]
});

// make name + Residents index for neighborhood
meighborhoodSchema.index({name: 1, residents: 1}, {unique: true});