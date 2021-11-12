const { MongoClient } = require('mongodb');

/*
*
*author @flamauricio <flavio.valerio@bandtec.com.br>
*/

//Inserir aqui seu password e sua uri gerada no deploy (https://cloud.mongodb.com)
const uri = "mongodb+srv://dbMongo:<password>@cluster0.jnzqw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});