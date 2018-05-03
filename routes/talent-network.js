var express = require('express');
var router = express.Router();
var matrixApi = require('../lib/matrix');

/* create tn. */
router.post('/', function(req, res, next) {
  let data = req.body;

  matrixApi.create(data)
    .then(tn =>{
      var message = data.talent_network.account_did;

      if (typeof tn === "string") { 
        tn = JSON.parse(tn);
      }

      if (tn.data) {
        message = tn.data.talent_network.did;
      }

      res.send(tn);
    })
    .catch(err => {
      next(err);
    });
});

/* get tn. */
router.get('/configuration/:name', function(req, res, next) {
  let system = req.params.id;
  matrixTankApi.getBySystemId(system)
    .then(function(config) {
      res.header('ETag', `"${config.hash}"`);
      res.json(config);
    })
    .catch( function(err) {
      next(err);
    })
});

/* update tn. */
router.put('/configuration/:name', function(req, res, next) {
  let system = req.params.id;
  matrixTankApi.getBySystemId(system)
    .then(function(config) {
      return matrixTankApi.update(system, req.body.content)
        .then(() => res.json(configuration))
        .catch((err) => {
          sendMatrixApiCallFailureToNewRelic();
          next(err);
        });
    })
    .catch( function(err) {
      next(err);
    })
});


module.exports = router;