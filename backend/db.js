const mongodb = require("mongodb")
const MongoClient =  mongodb.MongoClient;
const mongoDbUrl = "mongodb+srv://nisha_pareek:nishacrest123@cluster0.mqgcnuj.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0"
let _db;
//mrthod to establish connection
const initDb = callback => {
     if(_db){
        console.log("database is already initialised")
        return callback(null, _db)
     }
     MongoClient.connect(mongoDbUrl).then(client => {
        _db = client.db()
        callback(null, _db)
     }).catch(err => {
        callback(err)
     })
}
//to get access to existing connection

const getDb = () =>  {
    if(!_db){
        throw Error("database not initialised")
    }
    return _db
}

module.exports = {
    initDb,
    getDb
}