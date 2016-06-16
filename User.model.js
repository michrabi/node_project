/**
 * Created by michalrabinowitch on 25/04/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var passwordSchema = new Schema({
    password: String
});
var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
});
var PoleSchema = new Schema({
    poleOwner: UserSchema,
    poleName: String,
    createdOn: {type: Date, default: Date.now},
    explanation: String,
    options:[String],
    usersList: [UserSchema],
    closeDate: Date
});
var OptionSchema = new Schema({
    optionDescription : String,
    optionSelectionCount: Number
});

var Pole = mongoose.model('PoleSchema', PoleSchema);
var p1= new Pole;
p1.poleOwner = null;
p1.poleName = 'What to eat for lunch';
p1.explanation = 'Choose restaurant to eat at';
p1.options = ['eat meat', 'panko','אתניקה'];
p1.closeDate = Date.now();

module.exports = mongoose.model('User', UserSchema);
