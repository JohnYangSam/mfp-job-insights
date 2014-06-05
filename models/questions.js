/*
 * The questions "database." We have an array of questions. Each question
 * has an id, question (i.e. question text), and options object. The options
 * option is either an object with string values, or an object of objects
 * with string values (one level deep). The latter represents a question
 * whose answers depend on the previous question.
 */
var questions = [
  {
    'id': 0,
    'question': "Do you code?",
    'options': {
      'Yes' : "You're an engineer and you know how to code, but you have to decide whether you want to code over the summer or whether you'd rather focus on developing business skills.",
      'No': "You have a lot more of the qualitative skills that come in handy for positions in marketing, business development, and sales. Be warned, though, you're going to have to try a little harder than your CS friends to find a position for the summer!"
    }
  },

  {
    'id': 1,
    'question': "What's your ideal Position?",
    'options': {
      'Software Engineering' : {
        'Yes': "Since you'd ideally like to be in an engineering position, you'll be in good shape for the job search - everyone you talk to will want to hire you!",
        'No': "Finding a position in engineering is unfortunately pretty difficult without a coding background, so you may want to consider product management, which will still give you exposure to the engineering side."
       },
      'Hardware Engineering': {    
        'Yes': "Since you'd ideally like to be in an engineering position, you'll be in good shape for the job search - everyone you talk to will want to hire you!",
        'No': "Finding a position in engineering is unfortunately pretty difficult without a coding background, so you may want to consider product management, which will still give you exposure to the engineering side."
       },
      'Product Management': {
        'Yes': "Since you want to branch out and try something more business oriented, be prepared to work a little harder than you otherwise would in order to find your perfect job.",
        'No': ""
      },
      'Product Marketing': {
        'Yes': "Since you want to branch out and try something more business oriented, be prepared to work a little harder than you otherwise would in order to find your perfect job.",
        'No': ""
      },
      'Business Development': {
        'Yes': "Since you want to branch out and try something more business oriented, be prepared to work a little harder than you otherwise would in order to find your perfect job.",
        'No': ""
      }
    }
  },

  {
    'id': 2,
    'question': 'Pick an Industry:',
    'options': {
      'Social Entrepreneurship': "You're interested in social entrepreneurship, so you may want to talk to Roberto, who will be working at Endless Mobile in San Francisco this summer.",
      'Enterprise Software': "",
      'Health Tech': "",
      'Education': "You're interested in education, so you may want to talk to Deanna, who will be working at Tangible Play in Palo Alto this summer.",
      'Security': "You're interested in security, so you may want to talk to Jordan, who will be working at Synack in Palo Alto this summer.",
      'Social Networks': "You're interested in social networks, so you may want to talk to Lauryn, who will be working at Mightybell in Palo Alto this summer.",
      'Big Data': ""
    }
  },

  {
    'id': 3,
    'question': 'Pick a location:',
    'options': {
     'San Francisco': {
        'Social Entrepreneurship': "Rally.org could also be a great option for you, since it's located in San Francisco as well.",
        'Enterprise Software': "",
        'Health Tech': "You're interested in working in San Francisco at a health tech company, so you should talk to Michelle, who will be working at Sano this summer.",
        'Education': "The New Schools Venture funds is a great resource to look into as you explore education startup options for the summer.",
        'Security': "",
        'Social Networks': "",
        'Big Data': "You might check out Zephyr Health a startup doing big data for healthcare information."
      },
      
      'Palo Alto': {
        'Social Entrepreneurship': "You might also want to look into Verdigris, which is based in Mountain View, since you were hoping to work in the Palo Alto area.",
        'Enterprise Software': "You're interested in working in Palo Alto at an enterprise software company, so you should talk to Andrew, Saam, John or Josephine, who are working at RelateIQ and UpThere this summer.",
        'Health Tech': "You're interested in working in Palo Alto at a health tech company, so you should talk to Thomissa, who will be working at Lumo Bodytech this summer.",
        'Education': "Shmoop could also be a great option for you, since it's located in Palo Alto as well.",
        'Security': "Synack is a pretty cool startup doing white hat security out of KPCB's incubator.",
        'Social Networks': "You should check out Mightybell which builds social networks for organizations.",
        'Big Data': ""
      }
    }
  },
 
  {
    'id': 4,
    'question': 'Who\'s your favorite?',
    'options': {
      'Tina': "Don't sweat it too much - under the guidance of Tina Seelig, you're bound to find a great summer position!",
      'Tom': "And remember, don't sweat it too much - Tom will happily let you work in his garage if nothing else works out :P",
      'Moritz': "Don't sweat it too much - Moritz can always hire you at Glmpse if nothing else works out :P"
    }
  }
];

// Helper function to map over object properties
function map(f) {
  for(var key in this) {
    if (this.hasOwnProperty(key)) f(key);
  }
}

exports.questions = questions;

exports.generateStory = function(answers) {
  var question;
  var answer;
  var snippet;
  var story = '';

  for(question = 0; question < questions.length; ++question) {
    answer = answers[question];
    snippet = questions[question].options[answer]

    // Answer depends on the last question as well
    if(typeof snippet !== 'string') {
      var lastAnswer = answers[question - 1];
      console.log(lastAnswer);
      snippet[lastAnswer];
    }
    story += snippet;
  }
  return story;
};