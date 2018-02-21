const mongo = require('mongodb').MongoClient
mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, client) {
const db = client.db('learnyoumongo');
if(err) console.log(err);

    var docs = db.collection('docs');
    var first_Name = process.argv[2];
    var last_Name=process.argv[3];
    var convert={
        firstName:first_Name,
        lastName:last_Name
    };
    var result = docs.insert({firstName:first_Name,lastName:last_Name}
    
,function(err,data){
        if(err) console.log(err);
        console.log(JSON.stringify(convert));
        db.close();
    });


    

});