
var questions = require('../models/questions');
var questionsList = questions.questions;

var conclusion = require('./conclusion');

/*
 * GET /questions
 *
 * A list of questions
 */
exports.list = function(req, res) {
  res.render();
};

/*
 * GET /questions/:id?[name=<name>]
 *
 * An individual question.
 */
exports.question = function(req, res, next) {
  var id = req.params.id;

  // Optional responses
  var name = req.param('name');
  var lastQuestion  = req.param('q');
  var answer        = req.param('a');

  // Set the name
  if (name) req.session.name = name;

  // Save last question
  if (lastQuestion && answer) {
    // Lazy creation of the session array
    if (!req.session['answers']) req.session.answers = {};

    // Save question in the object/hash
    req.session['answers'][lastQuestion] = answer; 
  }

  // If an ID is sent with the question
  if (id) {
    // Returning ot home page
    if (id < 0) {
      res.redirect('/');

    // Directing to the final page
    } else if (id >= questionsList.length) {
      conclusion.conclusion(req, res);

    // Render the specific question
    } else {
      res.render('question', {'question': questionsList[id]}); 
    }
  } else {
    // Move onto the next match
    next();
  }
};

/*
  Example object in the questions array:

  {
    'id': 0,
    'question': "What is this question?",
    'options': [
      {'option: 'The first option'},
      {'option': 'The second option'}
    ]
  }

*/