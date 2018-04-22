const express=require('express');
const graphqlHTTP=require('express-graphql');
const schema=require('./schema/schema');
const mongoose=require('mongoose');
const cors=require('cors');

const app=express();
app.use(cors());


mongoose.connect('mongodb://reksar:401029276s@ds014578.mlab.com:14578/gql');
mongoose.connection.once('open',()=>{
    console.log('connected to db');
});

app.use('/graphql',graphqlHTTP({
    schema:schema,
    graphiql:true
}));

app.listen(4000,()=>{
    console.log("Listen")
});