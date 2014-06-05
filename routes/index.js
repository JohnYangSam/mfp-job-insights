
/*
 * GET /
 * home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'MFP Job Insights' });
};

/*
 * GET /info
 * Information page
 */

exports.info = function(req, res) {
  res.render('info', { title: 'Information'});
}

exports.profiles = function(req, res) {
  res.render('profiles', { title: 'The Job Seekers'} );
}