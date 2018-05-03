var express = require('express');
var router = express.Router();
var matrixApi = require('../lib/matrix');

/* Look up basic information. */
router.get('/look-up', function(req, res, next) {
  let query = Object.assign({}, req.query);
  matrixApi.getInitialValues(query.accountDid)
    .then(result =>{
      res.send(result);
    })
    .catch(err => {
      next(err);
    });
});


/* Upload image. */
router.post('/upload-img', function(req, res, next) {
  let data = req.body;
  matrixApi.uploadImage(data)
    .then(result =>{
      res.send(result);
    })
    .catch(err => {
      next(err);
    });
});


/* Quick build one TN */
module.exports = router;