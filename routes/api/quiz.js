const express = require('express');
const router = express.Router();

//Quiz Model
const Quiz = require('../../models/Quiz');
const { response } = require('express');
var count = 0;

// @route GET api/quiz
// @description Get all the Questions, Options and Answers for the quiz
router.get('/', (req, res) => {
	Quiz.find().sort({ qid: 1 }).then((quiz) => res.json(quiz));
});

// @route POST api/quiz
// @description post all the Questions, Options and Answers for the quiz
router.post('/', (req, res) => {
	count = count + 1;
	const newQuiz = new Quiz({
		qid: count,
		question: req.body.question,
		options: req.body.options,
		correctAnswer: req.body.correctAnswer
	});

	newQuiz.save().then((quiz) => res.json(quiz));
});

// @route DELETE api/quiz
// @description delete questions based on qid
router.delete('/:id', (req, res) => {
	Quiz.findById(req.params.id)
		.then((quiz) => quiz.remove().then(() => res.json({ success: true })))
		.catch((err) => response.status(404).json({ success: false }));
});

module.exports = router;
