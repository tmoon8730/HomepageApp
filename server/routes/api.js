const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/homepageapp', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};


// Create link
router.post('/link', (req, res) => {
  console.log('post : ' + req.body);
  connection((db) => {
    db.collection('link')
        .save(req.body, (err, result) =>{
          if(err) return console.log(err)

          console.log('saved to database')
        })
  });
});

// Read links
router.get('/links', (req, res) => {
    connection((db) => {
        db.collection('link')
            .find()
            .toArray()
            .then((links) => {
                response.data = links;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });

});

// Delete links
router.delete('/link:link_id', (req, res) => {
    var query = { id: parseInt(req.params.link_id.substr(1)) }
    console.log("query: " + JSON.stringify(query));
    connection((db) => {
      db.collection('link')
      .deleteOne(query, function (err, obj){
        if (err) throw err;
        console.log(obj.result.n + " document(s) deleted");
      });
    });
});
module.exports = router;
