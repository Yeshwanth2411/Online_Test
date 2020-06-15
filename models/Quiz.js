const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const QuizSchema = new Schema({
	qid: {
		type: Number,
		unique: true
	},
	question: {
		type: String,
		required: true
	},
	options: [
		{
			type: String,
			required: true
		}
	],
	correctAnswer: {
		type: String,
		required: true
	}
});

module.exports = Quiz = mongoose.model('quiz', QuizSchema);
