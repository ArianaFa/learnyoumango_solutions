const mongo = require('mongodb').MongoClient
mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, client) {
const db = client.db('learnyoumongo');
if(err) console.log(err);

    var parrots = db.collection('prices');
    

    var result = parrots.aggregate([
      { $match: { 'size': process.argv[2] }}
    , { $group: {
        _id: 'average' 
      , average: {
          $avg: '$price'
        }
      }}
    ]).toArray(function(err,docs){
        if(err) console.log(err);
        console.log(Number(docs[0].average).toFixed(2));
        db.close();
    });


    

});