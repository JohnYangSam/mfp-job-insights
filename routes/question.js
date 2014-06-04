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
  var name = req.params.name;
  var lastQuestion  = req.params.q;
  var answer        = req.params.a;

  // Set the name
  if (name) req.session.name = name;

  // Save last question
  if (lastQuestion && answer) {
    // Lazy creation of the session array
    if (!req.session.answers) req.session.answers = {};

    // Save question in the object/hash
    req.session.answers[q] = a; 
  }

  if (id) {
    res.render(); 
  } else {
    // Move onto the next match
    next();
  }
};

/*
  Question
  {
    'id': 1,
    'question': "What is this question?",
    'options': [
      {'option text': 'Answer text'},
      {'option text again': 'answer text again'}
    ]
  }

*/