var questions = require('../models/questions');
var questionsList = questions.questions;
var generateStory = questions.generateStory;

/*
 * GET /conclusion
 * Return the conclusion of the user's choices
 */
exports.conclusion = function(req, res) {
  var name    = req.session['name'];
  var answers = req.session['answers'];
  var story   = generateStory(answers);

  // id will be used ot calculate the 'last' (previous) page index
  var id = req.params.id
  if (!id) id = questionsList.length;

  res.render('conclusion',
    {
      'title': 'Conclusion',
      'id': id,
      'name': name,
      'story': story
    });
};