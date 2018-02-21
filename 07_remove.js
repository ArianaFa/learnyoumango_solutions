const mongo = require('mongodb').MongoClient
mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, client) {
const db = client.db(process.argv[2]);
if(err) console.log(err);

    var docs = db.collection(process.argv[3]);
    
    var result = docs.remove({ _id:process.argv[4] }
    ,function(err,data){
        if(err) console.log(err);
        
        db.close();
    });


    

});