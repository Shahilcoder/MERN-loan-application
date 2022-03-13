const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://${process.env.ROOTER}:${process.env.PASSWORD}@cluster0.mpvoo.mongodb.net/Loan?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

module.exports = client;