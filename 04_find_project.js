const mongo = require('mongodb').MongoClient
mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, client) {
const db = client.db('learnyoumongo');
if(err) console.log(err);

    var parrots = db.collection('parrots');
    var arg = parseInt(process.argv[2]);

    var result = parrots.find({age:{$gt:arg}},{
    name: 1
  , age: 1
  , _id: 0
});

    result.toArray(function(err,docs){
        if(err) console.log(err);
        console.log(docs);
        db.close();
    });


    

});