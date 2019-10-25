const express = require('express');
const graphqlHTTP = require('express-graphql');
// const schema = require('./schema/schema');
const mongoose = require('mongoose');
var bodyParser = require("body-parser");

//const key = require('./key.js')

const app = express();

app.use(bodyParser.json())

app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

mongoose.connect('mongodb+srv://Arjuna:luminoso00@cluster0-nwtgn.gcp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to the database');
})

// app.use('/graphql', graphqlHTTP({
//     schema,
//     graphiql: true
// }));

app.get('/', (req, res) => res.send('hello'));

app.listen(process.env.PORT || 8888)