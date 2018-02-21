const mongo = require('mongodb').MongoClient
mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, client) {
const db = client.db(process.argv[2]);
if(err) console.log(err);

    var docs = db.collection('users');
    
    var result = docs.update({ "name": "Tina"},{
      $set: {
        "age": 40
      }}, {"username": "tinatime"}
    
,function(err,data){
        if(err) console.log(err);
        
        db.close();
    });


    

});