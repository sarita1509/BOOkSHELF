const express = require('express'); //import modules and packages into your application.
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const cors = require('cors'); //Cross-Origin Resource Sharing, 
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());



const uri = 'mongodb+srv://krsarita:kissu111@cluster0.esokis0.mongodb.net/?retryWrites=true&w=majority';
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run ()
{
  try
  {

    await client.connect();
    console.log("hello bookshelf");
    //create db

    const bookCollection = client.db("bookstore").collection("bookself");

    app.post("/upload-book", async (req, res) =>
    {
      const data = req.body;
      const result = await bookCollection.insertOne(data);
      res.send(result);
    })
    //all - books
    app.get("/all-books", async (req, res) =>
    {
      const books = bookCollection.find();
      const result = await books.toArray();
      res.send(result);
    })
    //update book db

    app.patch("/book/:id", async (req, res) =>
    {
      const id = req.params.id;
      //console.log(id);
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) }
      const options = { upsert: true };

      const updateDoc = {

        $set: {
          ...updateBookData
        }
      }
      //update
      const result = await bookCollection.updateOne(filter, updateDoc, options);
      res.send(result); 
    })

    //delete
    app.delete("/book/:id", async (req, res) =>
    {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) }

      const result = await bookCollection.deleteOne(filter);
      res.send(result);
    })

    //find

    app.get("/all-book", async (req, res) =>
    {
      let query = {};
      if (res.query?.category)
      {
        query = { category: req.query.category }
      }
      const result = await bookCollection.find(query).toArray();
      res.send(result);
    })

    //single book data
    app.get("/book/:id", async (req, res) =>
    {
      const id = req.params.id;
      const filter = { _id: newObjectId(id) };
      const result = await bookCollection.findOne(filter);
      res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally
  {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) =>
{
  res.send('Hello Bookshelf!')
})

app.listen(port, () =>
{
  console.log(`Example app listening on port ${port}`)
})
